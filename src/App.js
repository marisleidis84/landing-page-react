import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar ButtonName='Start Boostrap' home='Home' about='About' service='Service' contact='Contact'/>
      <div className="container">
        <div className='row'>
          <div className='col-md-12'>
            <Jumbotron title='A Warm Welcome!' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.' button='Call to action!'/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Card
              img='https://th.bing.com/th/id/OIP.ZJxbzfYRBYzP0hmndbiJLgHaFj?pid=Api&rs=1'
              title="Card title"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              buttonlabel="Find Out More!" />
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
      <Footer textfooter="Copyright @ Yor Website 2021" />

    </>
  );
}

export default App;
