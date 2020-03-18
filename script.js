/* const Doc = document;
let ox = 0;
let oy = 0;
const mDis = 80;
let id = 0;

function track(event) {
  const e = event.pageX ? event : event.targetTouches[0];
  const dis = Math.round(Math.sqrt((ox - e.pageX) * (ox - e.pageX) + (oy - e.pageY) * (oy - e.pageY)));

  const xdiff = e.pageX - ox;
  const ydiff = e.pageY - oy;
  const ang = Math.atan2(ydiff, xdiff) * 180 / Math.PI;
  if (dis > mDis) {
    const ND = Doc.createElement('div');
    ox = e.pageX; oy = e.pageY,
      TweenLite.set(ND, {
        className: 'foot',
        rotation: ang,
        x: e.pageX, y: e.pageY,
        scaleY: id && 1 ? -1 : 1,
        transformOrigin: "50% -70%"
      });
    Doc.body.appendChild(ND);
    id += 1;
    TweenLite.to(ND,
      5, {
      opacity: 0,
      onComplete: function () {
        this.target.parentNode.removeChild(this.target);
      },
    });
  }
}
Doc.addEventListener('mousemove', track);
Doc.addEventListener('touchmove', track);
 */
