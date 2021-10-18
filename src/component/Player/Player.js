import React , {useEffect, useState} from 'react'
import styles from './Player.module.css'
import YouTube from "react-youtube";
import { firestore } from '../../firebase/firebase';

export default function Player({id}) {
    const [videoId, setVideoId] = useState('wnqiSwrtGac')

    const [player, setPlayer] = useState(null)
    const [videoStatus , setVideoStatus] = useState(true)
    const [videoTime , setVideoTime] = useState(1)
    const [videoTimestamp , setVideoTimestamp] = useState([0,0])
    
    useEffect( () => {
        const sessionRef = firestore.collection('session').doc(id) 
        sessionRef.onSnapshot((data) => {
            console.log('data updated');
            setVideoStatus(data.data().videoStatus)
            setVideoTime(data.data().time)
            setVideoTimestamp([data.data().stopTimestamp,data.data().startTimestamp])
        })

    })

    const userPlay = () => {
        player.playVideo();
    }

    const userPause = () => {
        player.pauseVideo();
    }

    const onReady = (event) => {
        setPlayer(event.target);
    }

    const onPause = () => {
        const sessionRef = firestore.collection('session').doc(id) 
        const timePlay = new Date().valueOf() - videoTimestamp[1]
        sessionRef.update({
            videoStatus : false,
            stopTimestamp : new Date().valueOf(),
            time : videoTime + parseInt(timePlay/1000) 
        })
    }

    const onPlay = () => {
        const sessionRef = firestore.collection('session').doc(id) 
        sessionRef.update({
            videoStatus : true,
            startTimestamp : new Date().valueOf(),
            stopTimestamp : 0,
        })
    }

    const onEnd = () => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.dontPause}>
                <YouTube videoId={videoId} 
                    onPause={onPause}
                    onPlay={onPlay}
                    onReady={onReady}
                    onEnd={onEnd}
                    opts={{
                        width: '100%',
                        playerVars: {
                        autoplay: videoStatus ? 1 : 0,
                        controls: 0,
                        disablekb: 1,  
                        start: videoTime                  
                    }
                }}/>
            </div>
            <div onClick={userPause}></div>
        </div>
    )
}
