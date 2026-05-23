export  function Summary({log}){
    const sum=log.reduce(
        (sum,item)=>{
            if(item.type==="expense"){
                return sum=sum-item.amount
            }else{
                 return sum=sum+Number(item.amount)
            }
        },0
    )
    const expense=log.reduce(
        (expense,item)=>{
            if(item.type==="expense"){
                return expense=expense+Number(item.amount)
            }
            return expense
        },0
    )
    const income=log.reduce(
        (income,item)=>{
            if(item.type==="income"){
                return income=income+Number(item.amount)
            }
            return income
        },0
    )

    return(
       <>
       <div  className=" p-10 grid grid-cols-3">
        <div className="balance">
            <h1>BALANCE</h1>
            <p>Rs.{sum}</p>
        </div>
        <div className="income">
            <h1>INCOME</h1>
            <p>Rs.{income}</p>
        </div>
        <div className="expense">
            <h1>EXPENSE</h1>
            <p>Rs.{expense}</p>
        </div>
       </div>
       </>
    )
    
}