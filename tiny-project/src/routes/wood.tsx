import WoodList, {WoodSpecies} from "../components/wood-list";

const data: WoodSpecies = {
    "Alder": {
        "de":"Erle",
        "rus":"Bla-bla",
    },
    "Ash": {
        "de":"Asche"
    },
    "Basswood": {
        "de":"Linde"
    },
    "Beech": {
        "de":"Buche"
    },
    "Oak": {
        "de":"Eiche"
    }
}

export default function Wood() {
    return (
        <div style={{ padding: "1rem 0" }}>
            <h2>Hooks</h2>
            <WoodList data={data}/>
        </div>
    );
}