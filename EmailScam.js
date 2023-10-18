import * as mo from 'movy';
import {cameraMoveTo} from "movy";

const bubble = mo.addGroup();
bubble.addCircle({
    scale: 1,
    position: [-2.5, 0],
    color: '#26252a'

})
const middle = bubble.addRect({
    width: 1.5,
    height: 1,
    position: [-2.5, 0],
    anchor: 'left',
    color: '#26252a'
})
const right = bubble.addCircle({
    scale: 1,
    position: [-1, 0],
    color: '#26252a'
})
const loading = mo.addGroup();
let t = 0;
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-2.25, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-1.75, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3;
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-1.25, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3;

middle.moveTo({sx: 1.5, t: t})
right.moveTo({position: [-0.25, 0], t: t})
const text = bubble.addText('Hey there!', {
    color: 'white',
    position: [-1.5, 0],
    fontSize: 0.3,
}).fadeIn({duration: 0.1, t: t + 0.1})

bubble.moveTo({position:[0,1.125],t:t+0.1})
t+=0.1

const bubble1 = mo.addGroup();
bubble1.addCircle({
    scale: 1,
    position: [-2.5, 0],
    color: '#26252a'

})
const middle1 = bubble1.addRect({
    width: 1.5,
    height: 1,
    position: [-2.5, 0],
    anchor: 'left',
    color: '#26252a'
})
const right1 = bubble1.addCircle({
    scale: 1,
    position: [-1, 0],
    color: '#26252a'
})
const loading1 = mo.addGroup();
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-2.25, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-1.75, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3;
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-1.25, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3;

middle1.moveTo({sx: 4.75, t: t})
right1.moveTo({position: [4.5, 0], t: t})
const text1 = bubble1.addText('Could you do me a favor fill the table', {
    color: 'white',
    position: [-2.455, 0],
    fontSize: 0.3,
    anchor:'left'
}).fadeIn({duration: 0.1, t: t + 0.1})

bubble.moveTo({position:[0,2.25],t:t+0.1})
bubble1.moveTo({position:[0,1.125],t:t+0.1})
t+=0.1

const bubble2 = mo.addGroup();
bubble2.addCircle({
    scale: 1,
    position: [-2.5, 0],
    color: '#26252a'

})
const middle2 = bubble2.addRect({
    width: 1.5,
    height: 1,
    position: [-2.5, 0],
    anchor: 'left',
    color: '#26252a'
})
const right2 = bubble2.addCircle({
    scale: 1,
    position: [-1, 0],
    color: '#26252a'
})
const loading2 = mo.addGroup();
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-2.25, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-1.75, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3;
mo.addCircle({
    color: '#d9d9d9',
    scale: 0.35,
    position: [-1.25, 0]
}).fadeIn({duration: 0.2, t: t}).fadeOut({duration: 0.2, t: t + 0.4});
t += 0.3;

middle2.moveTo({sx: 4.75, t: t})
right2.moveTo({position: [4.5, 0], t: t})
const text2 = bubble2.addText('google.xyz/sfjka?a=true&&redir=xfcz', {
    color: 'blue',
    position: [-2.455, 0],
    fontSize: 0.3,
    anchor:'left'
}).fadeIn({duration: 0.1, t: t + 0.1})

mo.cameraMoveTo({scale:0.3,t:t})
const highlight = mo.addRect({
    position:[-1.0,0],
    color:'red'
}).wipeIn({t:t+0.7})
highlight.fadeOut({t:t+1.3})
mo.cameraMoveTo({scale:1,t:t+1})

t+=1.3

const arrow = mo.addArrow([0,0],[-1,1],{
    scale:0.4,
    lineWidth:0.07
}).fadeIn({t:t})


arrow.moveTo({
    position:[1,-1]
})
t+=1
bubble2.changeColor('#cecece',{t:t})
bubble2.changeColor('#26252a',{t:t+0.5})
text2.changeColor('purple',{t:t+0.2})
text2.changeColor('purple',{t:t+0.5})
bubble.fadeOut({t:t+0.7})
bubble1.fadeOut({t:t+0.7})
bubble2.fadeOut({t:t+0.7})

t+=0.9

const sign = mo.addGroup()
sign.addRectOutline({
    width:10,
    height:2,
    opacity:0.2,
    lineWidth:0.1,
    position:[0,0]
}).grow({t:t})


const google = sign.addImage('img/google.png',{
    position:[-4,0]
}).grow({t:t})

const sign_in = sign.addText('Sign in with Google',{
    color:'white',
    fontSize:0.4
}).grow({t:t})

sign.scaleTo(0.8,{duration:0.1})
sign.scaleTo(1,{duration:0.1})

mo.addImage('img/skull.svg',{
    scale:8,
    color:'red',
    ccw:false
}).grow({t:t+0.5})

mo.addGlitch({t:t+1})
