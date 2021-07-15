import Card from './Card';
const Content = () => {
    return (
        <div className="container">
            <h1 className="title">Calorie Read Only</h1>

            <div className="content">
                <Card name="Roti" calorie="100" />
                <Card name="Baigan" calorie="69" />
                <Card name="Paneer" calorie="500" />
                <Card name="Brocoly" calorie="180" />
                <Card name="Fried Rice" calorie="90" />
                <Card name="Lassania" calorie="200" />
                <Card name="Pani Puri" calorie="10" />
            </div>

        </div>
    )
}

export default Content