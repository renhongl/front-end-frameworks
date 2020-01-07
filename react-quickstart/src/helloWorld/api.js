


export async function getInfor(name) {
    const res = await fetch(`./mockData/${name}.json`);
    return res.json();
}