import PayresultCom from "@/components/payresultcomponet/Payresult";

const PayresultPage = ({params}) => {


  const url = params
    
  return (
    <div className=" flex justify-center font-lalezar ">
     <PayresultCom url={url}/>
    </div>
  );
};

export default PayresultPage;
