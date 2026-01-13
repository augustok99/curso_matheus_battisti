
const Numberlist = ({ numbers }) => {
  // estruturas de loop - for, while
  // metodos de array - filter, map, reduce
  return (
    <ul>Numberlist {numbers.map((number, index) => (
      <li key={index}>{number}</li>

    ))}</ul>
  )
}

export default Numberlist