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
            salary=salary+log[i].amount;
        }else if(log[i].category==="investement"){
            investement=investement+log[i].amount
        }else if(log[i].category==="groccery"){
            groccery=groccery+log[i].amount
        }else if(log[i].category==="entertainment"){
            entertainment=entertainment+log[i].amount
        }else if(log[i].category==="bills"){
            bills=bills+log[i].amount
        }else if(log[i].category==="rent"){
            rent=rent+log[i].amount
        }else if(log[i].category==="miscellaneous"){
            miscellaneous=miscellaneous+log[i].amount
        }       
    }
    
       
    return(
        <>
        {log.length > 0 && 
        <PieChart
        series={[
            {
                data:[
                    {id:0,value:salary,label:"salary"},
                    {id:1,value:investement,label:"investement"},
                    {id:2,value:groccery,label:"groccery"},
                    {id:3,value:entertainment,label:"entertainment"},
                    {id:4,value:bills,label:"bills"},
                    {id:5,value:rent,label:"rent"},
                    {id:6,value:miscellaneous,label:"miscellaneous"}
                ]
            }
        ]}
        width={400}
        height={200}
        />}
        </>
    )
}