import GetData from '../components/wood-api-data';

export default function WoodApi() {
    const url = 'https://tree-nation.com/api/projects?status=active'
    return (
        <div style={{ marginTop: '1rem', padding: '1rem 0' }}>
            <h2>tree-nation.com</h2>
            <GetData url={url}/>
        </div>
    );
}