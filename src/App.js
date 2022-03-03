import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  gql,
} from '@apollo/client';

function App() {

  const get_countries = gql`
    query GetCounties {
      countries {
        code,
        name,
        continent{
          name
        }
      }
    }
    `;

    const { loading, error, data } = useQuery(get_countries);

    if (loading) return <p>Loading...</p>;
      else if (error) return <p>Error...</p>;
      else {
        return (
          <div className="App">
            <table>
              <tr>
                <th>Code</th>
                <th>Country</th>
                <th>Continent</th>
              </tr>
              <tbody>
                {
                  data.countries.map((country, index) =>
                    <tr key={index}>
                      <td>{country.code}</td>
                      <td>{country.name}</td>
                      <td>{country.continent.name}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        );
      }
}

export default App;
