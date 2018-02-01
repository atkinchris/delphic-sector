function animate() {
  const orbit = document.getElementById('orbit')
  const delphic = document.getElementById('delphic')
  const sector = document.getElementById('sector')
  const all = [orbit, delphic, sector]
  const time = 2

  TweenLite.set(all, { opacity: 0 })
  TweenLite.set(orbit, { transformOrigin:"center center" })

  TweenLite.fromTo(orbit, time,
    { scale: 0.5, rotation: -180 },
    { ease: Power1.easeOut, scale: 1, rotation: 0, opacity: 0.9 }
  )
  TweenLite.to([delphic, sector], time, { ease: Power1.easeOut, opacity: 1 })
  TweenLite.from(sector, time, { ease: Back.easeOut, x: -100 })
  TweenLite.from(delphic, time, { ease: Back.easeOut, x: 100 })
}

window.onload = animate
