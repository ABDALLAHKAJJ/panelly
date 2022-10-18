import React, { useEffect, useState } from 'react'
import { Table,Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { CRUDBase } from '../../Business/ConnectionManager/CRUDBase';
import { Navigate } from 'react-router-dom';
const { confirm } = Modal;
function Customers() {
    const [customers, setcustomers] = useState([]);
    const [loading, setloading] = useState(true);
    const url = 'customers';
    useEffect(() => {

        getCustomers();

    }, []);
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'companyName',
            dataIndex: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName)

        },
        {
            title: 'contact Name',
            dataIndex: 'contactName',
            sorter: (a, b) => a.contactName.localeCompare(b.contactName),
        },
        {
            title: 'contact Title',
            dataIndex: 'contactTitle'
        },
        {
            title: 'DELETE',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => {console.log(id); showDeleteConfirm(id)}} type="primary-outline" danger>Delete</Button>
        },
        {
            title: 'UPDATE',
            dataIndex: 'id',
            render: (id) => <Button type='primary-outline' onClick={() => updateCustomer(id)}>Update</Button>
        }
    ];

    const showDeleteConfirm = (id) => {

        confirm({
            title: 'Do you want to delete this Customer?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteCustomer(id);
            },
            onCancel() {

            },
        });

    }


    const getCustomers = () => {
        CRUDBase.getAll('/'+url)
            .then(data => {
                setcustomers(data);
                setloading(false)


            })
            .catch((err) => {
                console.log('Error', err);
            })
    }

    const updateCustomer = (id) => {

        // Navigate('/admin/Customer/update/' + id);


    }
    const deleteCustomer = (id) => {

        setloading(true);
        CRUDBase.delete('/'+url, id)
            .then(res => {
                getCustomers();
                setloading(false)
            })
            .catch(err => {
                setloading(false);
                console.log('CustomerList component network error', err);
                Modal.error({
                    title: 'This is an error message',
                    content: 'NETWORK ERROR!!',
                });
            })

    }





  return (
    <>
    <Table loading={loading} dataSource={customers} pagination={{ pageSize: 5 }} columns={columns} rowKey='id'  />
    </>
  )
}

export default Customers