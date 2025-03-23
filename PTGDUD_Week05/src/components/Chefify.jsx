import chefify from '../assets/chefify.png'
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
import { useEffect, useState } from 'react';
import { Recipe } from './Recipe';

const Chefify = () => {
    const [recipeList,setRecipeList]=useState([]);
    useEffect(()=>{
        fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe')
            .then(res=>res.json())
            .then(data=>{
                setRecipeList(data)
            })
      },[])
    
    return (
        <div className="grid grid-cols-3 grid-rows-[auto,1fr,auto] w-screen">
            {/* header */}
            <div className="col-span-3 flex border-[var(--gray)] border-1 p-2">
                <div className="flex flex-[3]  items-center gap-10">
                    <img src={chefify} className='w-auto h-auto'/>
                    <input type='text' className='w-full rounded-lg bg-gray-400 border-0 ps-5 py-1' placeholder='Salad'/>
                </div>
                <div className="flex flex-[4]  px-5">
                    <div className='flex flex-[4] justify-around items-center'>
                        <a href='#' className='text-[var(--gray)] text-base'>What to cook</a>
                        <a href='#' className='text-[var(--gray)] text-base'>Recipes</a>
                        <a href='#' className='text-[var(--gray)] text-base'>Ingredients</a>
                        <a href='#' className='text-[var(--gray)] text-base'>Occasions</a>
                        <a href='#' className='text-[var(--gray)] text-base'>About Us</a>
                    </div>
                    <div className='flex flex-[2] gap-5 items-center'>
                        <button className='text-[var(--lightpink)] text-base bg-[var(--pink)] rounded-md p-2'>Your Recipe Box</button>
                        <img src={avatar}/>
                    </div>
                </div>
            </div>
            {/* menu */}
            <div className="flex justify-end pt-10 items-start border-l-1">
                <div className='border-1 rounded-md flex-col items-start justify-start p-4'>
                    <h3 className='font-bold text-lg text-start'>FILTERS</h3>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center pt-5'>
                            <h4 className='font-bold text-md'>Type</h4>
                            <span>icon</span>
                        </div>
                        <div className='flex gap-10 py-6'>
                            <div className='flex flex-col gap-3 items-start'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Stir-fried</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Roasted</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Baked</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Stewed</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 items-start'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Pan-fried</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Grilled</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Sauteed</span>
                                </div>
                                <div className='flex flex-row gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <span>Steamed</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col py-6 border-t-1 border-b-1 mx-[-1rem]'>
                            <div className='flex justify-between items-center px-[1rem]'>
                                <h4 className='font-bold text-md'>Time</h4>
                                <span>icon</span>
                            </div>
                            <img src={slider} className='px-[1rem] mt-3'/>
                        </div>
                        <div className='flex flex-col py-6'>
                            <div className='flex justify-between pb-6'>
                                <h4 className='font-bold text-md'>Rating</h4>
                                <span>icon</span>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <img src={rating5}/>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <img src={rating4}/>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <img src={rating3}/>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <img src={rating2}/>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input type='checkbox'/>
                                    <img src={rating1}/>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center py-6 border-t-1 mx-[-1rem]'>
                            <button className='text-white rounded-md w-[90%] h-full' style={{background:'#F44B87FF'}}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className='col-span-2 flex flex-col gap-4 pt-10 ps-10 border-r-1 pr-5'>
                <div className='flex justify-between'>
                    <h1 className='font-bold'>Salad (32)</h1>
                    <select className='rounded-md border-1 w-30 p-1'>
                        <option>A-Z</option>
                    </select>
                </div>
                <div className='flex flex-wrap gap-6'>
                    {recipeList.map((item,index)=>(
                        <Recipe key={index} item={item}/>
                    ))}
                </div>
                <div>

                </div>
            </div>
            {/* footer */}
            <div className="col-span-3 flex p-6 bg-gray-950 text-white justify-start text-start rounded-md gap-5">
                <div className='flex flex-col flex-[2] justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-bold'>About Us</h2>
                        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                        <div className='flex gap-3'>
                            <input type='text' placeholder='Enter your email' className='p-4 bg-white border-0 rounded-md text-gray-700 flex-[6]'/>
                            <button className='flex-[1] rounded-md p-4' style={{backgroundColor:'#F44B87FF'}}>Send</button>
                        </div>
                    </div>
                    <div className='flex flex-row gap-6 items-center'>
                        <img src={chefifywhite}/>
                        <p>2023 Chefify Company</p>
                        <p>Terms of Service | Privacy Policy</p>
                    </div>
                </div>
                <div className='flex-[1] flex flex-col items-end'>
                    <div className='flex flex-col justify-between items-start flex-[1]'>
                        <div className='flex flex-col gap-4 items-start'>
                            <h2 className='font-bold'>Learn More</h2>
                            <p>Our Cooks</p>
                            <p>Seen Our Features</p>
                            <p>FAQ</p>
                        </div>
                        <div className='flex flex-col gap-4 items-start'>
                            <h2 className='font-bold'>Shop</h2>
                            <p>Gift Subsciption</p>
                            <p>Send us Feedback</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-[1] items-end'>
                    <div className='flex flex-col items-start gap-4'>
                        <h2 className='font-bold'>Recipes</h2>
                        <p>What to Cook This Week</p>
                        <p>Pasta</p>
                        <p>Dinner</p>
                        <p>Dinner</p>
                        <p>Healthy</p>
                        <p>Vegetarian</p>
                        <p>Vegan</p>
                        <p>Christmas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefify;
