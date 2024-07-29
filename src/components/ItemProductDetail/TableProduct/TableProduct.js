import { Table } from 'react-bootstrap'
import { tableData } from './data'

export function TableProduct() {
  return (
    <div className='d-flex flex-column flex-md-row gap-3 gap-md-0'>
      <Table bordered className='nunito-sans m-0'>
        <thead>
          <tr>
            <th rowSpan='2'>Phase</th>
            <th colSpan='2'>Feed size</th>
            <th rowSpan='2'>Diameter Water (%)</th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Diameter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Example Phase</td>
            <td>Type 1</td>
            <td>5 mm</td>
            <td>10 mm</td>
          </tr>
        </tbody>
      </Table>
      <Table bordered className='nunito-sans m-0'>
        <thead>
          <tr>
            <th colSpan='4'>Nutritional Contents</th>
          </tr>
          <tr>
            <th>Rough Protein</th>
            <th>Rough Fat</th>
            <th>Rough Fiber</th>
            <th>Ash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20%</td>
            <td>10%</td>
            <td>5%</td>
            <td>8%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export function TableRelated() {
  return (
    <div className='d-flex flex-column flex-md-row gap-3 gap-md-0'>
      <Table bordered className='nunito-sans m-0'>
        <thead>
          <tr>
            <th rowSpan='2'>Feed</th>
            <th rowSpan='2'>Phase</th>
            <th colSpan='2'>Feed size</th>
            <th rowSpan='2'>Net Weight (Kg)</th>
            <th rowSpan='2'>Moisture Content (% max)</th>
            <th rowSpan='2'>Protein (% min)</th>
            <th rowSpan='2'>Fat (% min)</th>
            <th rowSpan='2'>Crude Fiber (% max)</th>
            <th rowSpan='2'>Ash (% max)</th>
            <th rowSpan='2'>Energy (MJ/kg min)</th>
          </tr>
          <tr>
            <th>Phase</th>
            <th>Diameter (mm)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.feed}</td>
              <td>{row.phase}</td>
              <td>{row.feedSizePhase}</td>
              <td>{row.feedSizeDiameter}</td>
              <td>{row.netWeight}</td>
              <td>{row.moistureContent}</td>
              <td>{row.protein}</td>
              <td>{row.fat}</td>
              <td>{row.crudeFiber}</td>
              <td>{row.ash}</td>
              <td>{row.energy}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
