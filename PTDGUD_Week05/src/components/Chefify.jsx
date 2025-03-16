import chefify from "../assets/chefify.png";
import avatar from "../assets/avatar.png";
import list from '../assets/list_filter.png';
import slider from '../assets/slider.png'
import rating5 from '../assets/rating_5.png'
import rating4 from '../assets/rating_4.png'
import rating3 from '../assets/rating_3.png'
import rating2 from '../assets/rating_2.png'
import rating1 from '../assets/rating_1.png'
import nothing from '../assets/nothing.png'
import chefifywhite from '../assets/chefifywhite.png'
function Chefify() {
  const style={
    JustifyCenter:{
      display:'flex',
      justifyContent:"space-around",
      alignItems:"space-around"
    }
  }

    return (
      <div style={{
          display: 'grid',
          gridTemplateAreas: `
            "Header Header"
            "Menu Content"
            "Footer Footer"`,
          gridTemplateColumns: '2fr 4fr',
            gridTemplateRows: '1fr 15fr 4fr',
          gridGap:0,
          width: '1440px',
          height:'953px'
      }}>
          <div className="Header bg-white flex border-b-2 border-gray-500 justify-center items-center px-6 py-2 col-span-2">
              <div className="flex flex-2/5">
                <img src={chefify} alt=""/>
                <input type="text" placeholder="cakescasca" className="border-2 border-gray-500 rounded-4xl ms-7 ps-3 text-black w-full"/>
              </div>
              <div className="flex justify-around flex-2/5">
                <a href="#" className="text-1xl" style={{color:'#565E6CFF'}}>What to cook</a>
                <a href="#" className="text-1xl" style={{color:'#565E6CFF'}}>Recipes</a>
                <a href="#" className="text-1xl" style={{color:'#565E6CFF'}}>Ingredients</a>
                <a href="#" className="text-1xl" style={{color:'#565E6CFF'}}>Occassions</a>
                <a href="#" className="text-1xl" style={{color:'#565E6CFF'}}>About us</a>
              </div>
              <div className="flex justify-around items-center flex-1/5">
                <button style={{color:'#F44B87FF',backgroundColor:'#FEF0F5FF'}}>Your Recipe Box</button>
                <img src={avatar} alt="" className="h-20"/>
              </div>
          </div>
          <div className="Menu bg-white" style={{gridArea: 'Menu',padding:'20px 0',display:'flex',justifyContent:'end',borderLeft:'3px solid gray'}}>
            <div className="rounded-lg border-gray-500 border-2 flex flex-col p-3 justify-center">
              <div className="flex items-center">
                <img src={list}/>
                <p className="text-start font-bold text-lg m-0 text-black">FILTERS</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-start font-bold text-black">Types</p>
                <span className="text-black">icon</span>
              </div>

              <div className="h-md justify-center items-center">
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Pan-fried</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Stir-fried</span>
                </div>
              </div>
              <div style={{height:50,display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Grilled</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Roasted</span>
                </div>
              </div>
              <div style={{height:50,display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Sauteed</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Baked</span>
                </div>
              </div>
              <div style={{height:50,display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Steamed</span>
                </div>
                <div style={{flex:1,display:"flex",alignItems:'start',justifyContent:"start"}}>
                  <input type='checkbox' style={{width:15,height:15}}/>
                  <span>Stewed</span>
                </div>
              </div>
              <div style={{border:'1px solid',margin:'0 -30px',borderBottom:0}}>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{textAlign:'start',fontWeight:'bold'}}>Time</p>
                <span>icon</span>
              </div>
              <div style={{display:'flex',justifyContent:"space-evenly"}}>
                <p>30 mins</p>
                <p>50 mins</p>
              </div>
              <img src={slider} alt=""/>
              <div style={{border:'1px solid',margin:'40px -30px 0',borderBottom:0}}>
              </div>
              <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
                <p style={{fontWeight:'bold'}}>Rating</p>
                <span>Icon</span>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating5}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating4}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating3}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating2}/>
              </div>
              <div style={{display:'flex', justifyContent:'start',gap:20,alignItems:'center'}}>
                <input type='checkbox' style={{width:15,height:15}}/>
                <img src={rating1}/>
              </div>
              <div style={{margin:'20px -30px 0',border:'1px solid',borderBottom:0,marginTop:30}}>
              </div>
              <div style={{display:"flex",justifyContent:"center",margin:'10px -30px 0',padding:'20px 0'}}>
                <button style={{backgroundColor:'#F44B87FF',color:'white',border:0,padding:'10px 20px', width:'80%'}}>Apply</button>
              </div>
              
            </div>
          </div>
          <div className="Content bg-white" style={{ gridArea: 'Content',borderRight:'3px solid gray' }}>
              
          </div>
          <div className="Footer" style={{ backgroundColor: 'black', gridArea: 'Footer',padding:40,display:'flex',justifyContent:"center",borderTopLeftRadius:10,borderTopRightRadius:10}}>
              <div style={{display:'flex',flex:3,flexDirection:'column',alignItems:'start',justifyContent:"space-between"}}>
                <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'start'}}>
                  <p style={{fontSize:20,fontWeight:"bold",color:'white'}}>About us</p>
                  <p style={{color:"white",textAlign:'start'}}>Welcome to our website, a wonderful place to explore and learn how to cool like a pro</p>
                    <div style={{display:'flex',gap:10,width:'100%'}}>
                      <input type='text' style={{flex:1,border:0,borderRadius:10,backgroundColor:'white',padding:10}} placeholder="Enter your email"/>
                      <button style={{border:0,borderRadius:10, backgroundColor:'#F44B87FF',color:"white"}}>Send</button>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:20}}>
                  <img src={chefifywhite}/>
                  <p style={{color:'white'}}>2021 Chefify Company</p>
                  <a href="#" style={{color:'white'}}>Term of Servical Privacy Policy</a>
                </div>
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:25}}>
                  <p style={{margin:0,color:'white',fontSize:20,fontWeight:"bold"}}>Learn More</p>
                  <a href='#' style={{color:'white'}}>Our Cooks</a>
                  <a href='#' style={{color:"white"}}>See Our Features</a>
                  <a style={{color:'white'}}>FAQ</a>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:25}}>
                  <p style={{margin:0,color:'white',fontSize:20,fontWeight:"bold"}}>Shop</p>
                  <a href='#' style={{color:'white'}}>Gift Subscription</a>
                  <a href='#' style={{color:"white"}}>Send US Feedback</a>
                </div>
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column',gap:25,alignItems:"start"}}>
                <p style={{margin:0,fontSize:20,fontWeight:"bold",color:"white"}}>Recipes</p>
                <a href="#" style={{color:'white'}}>What to Cook This Week</a>
                <a href="#" style={{color:'white'}}>Pasta</a>
                <a href="#" style={{color:'white'}}>Dinner</a>
                <a href="#" style={{color:'white'}}>Healthy</a>
                <a href="#" style={{color:'white'}}>Vegetarian</a>
                <a href="#" style={{color:'white'}}>Vegan</a>
                <a href="#" style={{color:'white'}}>Chirtmas</a>
              </div>
          </div>
      </div>
    );
  }
  
  export default Chefify;
  