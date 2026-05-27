import {PieChart} from "@mui/x-charts/PieChart";

export function Graph({log}){
    let salary=0;
    let investement=0;
    let groccery=0;
    let entertainment=0;
    let bills=0;
    let rent=0;
    let miscellaneous=0;


    for (let i = 0; i < log.length; i++) {
        if(log[i].category==="salary"){
            salary=salary+ Number(log[i].amount);
        }else if(log[i].category==="investement"){
            investement=investement+ Number(log[i].amount)
        }else if(log[i].category==="groccery"){
            groccery=groccery+ Number(log[i].amount)
        }else if(log[i].category==="entertainment"){
            entertainment=entertainment+ Number(log[i].amount)
        }else if(log[i].category==="bills"){
            bills=bills+ Number(log[i].amount)
        }else if(log[i].category==="rent"){
            rent=rent+ Number(log[i].amount)
        }else if(log[i].category==="miscellaneous"){
            miscellaneous=miscellaneous+ Number( Number(log[i].amount))
        }       
    }
    
       
    return(
        <>
        {log.length > 0 && 
        <PieChart
        series={[
            {
                data:[
                    {id:0,value:investement,label:"investement"},
                    {id:1,value:groccery,label:"groccery"},
                    {id:2,value:entertainment,label:"entertainment"},
                    {id:3,value:bills,label:"bills"},
                    {id:4,value:rent,label:"rent"},
                    {id:5,value:miscellaneous,label:"miscellaneous"}
                ]
            }
        ]}
        width={600}
        height={400}
        />}
        </>
    )
}