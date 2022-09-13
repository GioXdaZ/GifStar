export const Paginate = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex-none">
      <ul className="btn-group menu menu-horizontal p-0">
        {pageNumbers.map((number, index) => {
          let classes = "btn ";
          if (number === props.currentPage) {
            classes += "btn-accent";
          }

          return (
            <li key={index} className={classes}>
              <a onClick={() => props.pageSelected(number)} href="!#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
