import * as mo from 'movy';

mo.enableBloom();

const g = mo.addGroup();
const search_bar = g.addRect({
  opacity:0.3,
  width:20,
  height:1
})
g.addRectOutline({
  width:30,
  height:20,
  opacity:0.3,
  lineWidth:0.3,
  position:[0,-9]
})
const url = g.addText('google.com/login',{
  font:'code',
  fontSize:0.5,
  t:0.5,
}).typeText();
g.addArrow(
    [0,0],
    [1,0],
    {
      lineWidth:0.05,
      position:[7,0]
    }
)
g.moveTo({
  scale:0.22,
  position:[-2,2]
})

const skull = g.addImage('img/skull.svg',{
  color:'red',
  position:[0,-10],
  scale:4,
  ccw:false
})

mo.addGlitch({t:'>0.2'})
mo.addGlitch({t:'>0.2'})


const hacker = mo.addImage('img/hacker.png',{
  scale:4,
}).grow({ t:'>0.2'})

const ex = mo.addGroup();
ex.addText('Fake Login Page',{
  position:[0,-3.5]
}).grow({t:'>0.2'})