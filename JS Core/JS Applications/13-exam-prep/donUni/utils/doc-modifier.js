export default function(d){
    let obj = { ...d.data(), id: d.id };
    return obj;
}