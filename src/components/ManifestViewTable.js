import { shipments } from '../jsonMocks/shipmentIdsMocks'
import moment from "react-moment";

export const dataSource = shipments
export const columns = [
  {
    title: 'Date',
    dataIndex: '',
    key: 'date',
    render: () => {
      let startDate = new Date(['route', 'plannedStartDateTime']);
      startDate.toLocaleDateString()
    }
  },
  {
    title: 'Slot time',
    dataIndex: 'slotTime',
    key: 'slotTime',
  },
  {
    title: 'Manifest ID',
    dataIndex: 'id',
    key: 'manifestId',
  },
  {
    title: 'Route Name',
    dataIndex: '',
    key: 'routeName',
     render: () => {
       let routeName = ['route', 'routeName']
      routeName.split("-");
      return routeName;
    } 
  },
  {
    title: 'Driver Name',
    dataIndex: ['route', 'driverFullName'],
    key: 'driverName',
  },
  {
    title: 'Vehicle ID',
    dataIndex: ['route', 'vehicleLpn'],
    key: 'vehicleId',
  },
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination',
  },
  {
    title: 'Shipment Type',
    dataIndex: 'shipmentType',
    key: 'shipmentType',
  },
  {
    title: 'Courier',
    dataIndex: 'courier',
    key: 'courier',
  },
  {
    title: 'No. Orders',
    dataIndex: '',
    key: 'orders',
    render: () => ['route', 'deliveries'].length
  },
]
