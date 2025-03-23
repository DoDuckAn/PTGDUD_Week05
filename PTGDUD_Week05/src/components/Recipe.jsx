import { CiBookmark } from "react-icons/ci";

export function Recipe({item}){
    return (
    <div className="flex justify-between flex-col rounded-md">
        <img src={item.img} height={'176px'} width={'273px'} className="rounded-md object-contain"/>
        <div className="flex flex-col p-[10px] border-[#cfcdc8] border rounded-b-lg">
            <div className="flex items-start">
                <p className="text-black w-[200px] text-start font-bold text-xl">{item.name}</p>
                <button style={{padding:'7px 10px',borderRadius:100,backgroundColor:'white',border:'1px solid #F44B87FF',color:'#F44B87FF'}}
                className="m-0 bg-white border border-[#F44B87FF] text-[#F44B87FF]"><CiBookmark size={25}/></button>
            </div>
            <p style={{marginTop:10,lineHeight:'40px',color:'#F44B87FF',backgroundColor:'#FBC8DAFF',width:'40%',borderRadius:30}}>{item.time} minutes</p>
        </div>
    </div>
    )
} 