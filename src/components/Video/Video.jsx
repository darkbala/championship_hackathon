import React from 'react'
import video from './video.mp4'
import classes from './Video.module.scss'
export default function Video() {
  return (
    <video className={classes.Video} src={video} controls></video>
  )
}
