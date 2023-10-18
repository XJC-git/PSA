import * as mo from 'movy';


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
  color:'#030101',
}).typeText();
g.addArrow(
    [0,0],
    [1,0],
    {
      color:'blue',
      position:[7,0]
    }
)
g.moveTo({
  scale:0.2,
  position:[-5,2]
})