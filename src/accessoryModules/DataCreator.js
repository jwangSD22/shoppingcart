import React from 'react'

function DataCreator() {
    const array = ['concours14','klr650','ninja400','ninja650','ninja1000sx','ninjah2','ninjah2r','ninjah2sx','ninjazx6r','ninjazx10r','ninjazx14r','versys650','versys1000lt','versysx300','vulcan900','vulcan1700vaquero','vulcan1700voyager'
,'vulcans','w800','z125','z400','z650','z650rs','z900','z900rs','zh2']

const myArray = []
const myObjArray = []


    for (let item of array){

        myArray.push(<li>import {item}_1 from './images/{item}_1.jpg'</li>)
        myArray.push(<li>import {item}_2 from './images/{item}_2.jpg'</li>)
        myArray.push(<li>import {item}_3 from './images/{item}_3.jpg'</li>)
        myArray.push(<li>import {item}_thumb from './images/{item}_thumb.png'</li>)
        myArray.push(<li>import {item}_def from './images/{item}_def.jpg'</li>)
        myArray.push(<li>import {item}_banner from './images/{item}_banner.jpg'</li>)
    }   

for (let item of array){

  myObjArray.push(<li>{'{'}</li>)
  myObjArray.push(<li>id:'{item}',</li>)
  myObjArray.push(<li>name:'',</li>)
  myObjArray.push(<li>thumb:{item}_thumb,</li>)
  myObjArray.push(<li>def:{item}_def,</li>)
  myObjArray.push(<li>imgs:{'['}{item}_1,{item}_2,{item}_3{']'},</li>)
  myObjArray.push(<li>banner:{item}_banner,</li>)
  myObjArray.push(<li>overview:'tbd',</li>)
  myObjArray.push(<li>features:'tbd',</li>)
  myObjArray.push(<li>price:'tbd'</li>)





  

  myObjArray.push(<li>{'},'}</li>)




}
  



  return (
    <div>{myObjArray}</div>
  )
}

export default Data


