import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Avatar } from '@mui/material';

import { students } from '../data/students';
import { Link } from 'react-router-dom';

function Students() {
    const rows = students.map((student) => (
        <TableRow hover key={student.name}>
            <TableCell>
                <Link to={`student/${student.id}/#profile`} className='outline-0 link color-inherit inline-flex justify-between items-center'>
                    <Avatar src={student.avatar} />
                    <div className='ml2'>
                        <p className=''>{student.name}</p>
                    </div>
                </Link>
            </TableCell>
            <TableCell>
                <p>
                    {student.topic}
                </p>
            </TableCell>
            <TableCell>
                <p >{student.email}</p>
            </TableCell>
        </TableRow>
    ));

    return (
        <section id="students" className='w-100'>
            <h1 className="tc w-100">Our Candidates</h1>
            <div className='w-100 inline-flex justify-center items-center pa2'>
                <div className='ba br-pill pl2 pr2 pa1 w-40-l w-60-m w-80 inline-flex justify-start items-center'>
                    <i className="material-icons">search</i>
                    <input
                        type="search"
                        className="bn outline-0 w-90 pt2 pb2"
                        placeholder="search"
                    />
                </div>
            </div>
            <TableContainer sx={{ maxHeight: 400 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Research Area</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Contact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}

export default Students;
