
import Faker from 'faker'; 
function Table(props){
    return(
       <div className="main-class">
            <table className="ui very basic collapsing celled table">
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src={Faker.image.image()} className="ui mini rounded image" />
          <div className="content">
            Lena
            <div className="sub header">Human Resources
          </div>
        </div>
      </h4></td>
      <td>
        {props.guess1}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src={Faker.image.image()} className="ui mini rounded image" />
          <div className="content">
            Matthew
            <div className="sub header">Fabric Design
          </div>
        </div>
      </h4></td>
      <td>
      {props.guess2}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src={Faker.image.image()} className="ui mini rounded image" />
          <div className="content">
            Lindsay
            <div className="sub header">Entertainment
          </div>
        </div>
      </h4></td>
      <td>
      {props.guess3}
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src={Faker.image.image()} className="ui mini rounded image" />
          <div className="content">
            Mark
            <div className="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
      {props.guess4}
      </td>
    </tr>
  </tbody>
</table>
       </div>
    )

}
export default Table;