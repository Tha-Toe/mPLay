import "./defaultPage.css";


export default function DefaultItem ({item,index,playClick}) {
    return (
        <div className="dListTempo" onClick={() => playClick(item)}>
            <div className="dListChild">
                <div className="dListId">{index}</div>
                <img src={item.albumUrl} className = "dListImage"/>
                <div className="dListName">{item.artist}</div>
            </div>
            <div className="dListDetail">...</div>
        </div>
        )
}