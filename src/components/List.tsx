import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
interface Person {
    type: string;
    _id: string;
    name: {
        first: string;
        last: string;
    };
    // Другие свойства
}

interface ListProps {
    personList: Person[];
}

const RandomNum = () => {
    return (Math.random() * 4000).toFixed(0);
};

const List: FC<ListProps> = ({ personList }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get('tab');
    let filteredList =
        tab === '0'
            ? personList.filter((item) => item.type === 'income')
            : tab === '1'
            ? personList.filter((item) => item.type === 'outcome')
            : tab === '2'
            ? personList.filter((item) => item.type === 'loan')
            : tab === '3'
            ? personList.filter((item) => item.type === 'investment')
            : personList;

    return (
        <>
            <Navbar />
            <ul
                role="list"
                className="divide-y divide-gray-100"
                style={{ margin: '25px 0' }}
            >
                <li className="flex justify-between gap-x-6 py-5">
                    <h3>Name</h3> 
                    <h3>Acount</h3>
                </li>

                {filteredList.map((item, i: number) => (
                    <li
                        key={item._id}
                        className="flex justify-between gap-x-6 py-5"
                    >
                        <div className="flex gap-x-4">
                            {i + 1}.
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {item.name.first + ' ' + item.name.last}
                                </p>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                                {RandomNum()}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;
