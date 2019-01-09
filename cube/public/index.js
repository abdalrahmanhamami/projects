console.log("hello hello")
fetch('http://localhost:5000/member')
.then((res)=>{
    console.log(res)
    return res.text();
})
.then((data)=>{
    console.log(data)
})