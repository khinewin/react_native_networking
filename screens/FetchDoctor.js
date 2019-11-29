export default FetchDoctor=async()=>{
    const res=await fetch("http://192.168.0.101:8000/api/doctors");
    const resJson=await res.json();
    return resJson;
}