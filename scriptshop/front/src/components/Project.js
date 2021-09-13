const Project = (project) => {
    console.log('project', project);
    return (
        <tr className='m-3 bg-success'>
            <td>
                {project.name}
            </td>
            <td>
                {project.created}
            </td>
        </tr>
    )
}

const ProjectList = (props) => {
    // console.log('product_list', props.projects);
    console.log('props: ', props.props);
    return (
        <table className="product-list text-light">
            <thead>
            <tr className="text-dark">
                <th>Name</th>
                <th>Created</th>
            </tr>
            </thead>
            <tbody>
            {props.projects.map(Project)}
            </tbody>
        </table>
    )
}

export default ProjectList;
