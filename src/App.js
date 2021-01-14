import './App.css';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-md-3">
            <Card
              img="https://th.bing.com/th/id/OIP.ZJxbzfYRBYzP0hmndbiJLgHaFj?pid=Api&rs=1"
              title="Card title"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " 
              buttonlabel="Find Out More!"/>
          </div>
          <div className="col-md-3">
            <Card
              img="https://th.bing.com/th/id/OIP.ZJxbzfYRBYzP0hmndbiJLgHaFj?pid=Api&rs=1"
              title="Card title"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " 
              buttonlabel="Find Out More!"
              />
          </div>
          <div className="col-md-3">
            <Card
              img="https://th.bing.com/th/id/OIP.ZJxbzfYRBYzP0hmndbiJLgHaFj?pid=Api&rs=1"
              title="Card title"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              buttonlabel="Find Out More!"
              />
          </div>
          <div className="col-md-3">
            <Card
              img="https://th.bing.com/th/id/OIP.ZJxbzfYRBYzP0hmndbiJLgHaFj?pid=Api&rs=1"
              title="Card title"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              buttonlabel="Find Out More!"
              />
          </div>

        </div>
      </div>
      <Footer textfooter="Copyright @ Yor Website 2021"/>

    </>
  );
}

export default App;
