import './CSS/TodoItems.css'
import tick from './Assets/tick.png';
import cross from './Assets/cross.png';
import notTick from './Assets/not_tick.png';
export const TodoItems = ({no,text,display,setTodos}) => {
  const iconChange=(no)=>{
    let data=JSON.parse(localStorage.getItem("Todos"));
    for(let i=0;i<data.length;i++){
       if(data[i].no===no){
        if(data[i].display===""){
             data[i].display="line-through"
        }
        else{
          data[i].display=""
        }
        break
       }
    }
    setTodos(data);
  }
    const deleteTask=(no)=>{
      let data=JSON.parse(localStorage.getItem("Todos"));
      data=data.filter((item)=>item.no!==no)
      setTodos(data)
    }
    
  return (
       <div className='Todo-Items'>
        <div className='Todo-left'>
        { display===""? <img className='notTick-img' style={{width:"30px", height:"30px"}} src={notTick} alt=''/>: <img className='tick-img' style={{width:"30px", height:"30px"}}  src={tick} alt=''/>} 
          <div onClick={()=>iconChange(no)} className='Todo-main'>{text}</div>
        </div>
        <div className='Todo-right'>
          <img onClick={()=>deleteTask(no)} className='cross-img' style={{width:"25px", height:"25px"}} src={cross} alt=''/>
        </div>
       </div>
  )
}
