import AppBar from "../../Admin/Components/AppBar";
import Sidebar from "../../Admin/Components/Sidebar";
import { Layout } from 'antd';
import { useState } from "react";
import {IoDocumentAttach} from 'react-icons/io5'
import { TbLogout} from 'react-icons/tb'
import {FcProcess} from 'react-icons/fc'
import {GiPoliceCar} from 'react-icons/gi'
import { PieChartOutlined } from '@ant-design/icons';
import {CgProfile} from 'react-icons/cg'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import ReportList from './ReportPage'
import MyProfile from "./Profile";
import AppBarMU from "./AppBarMU";
import Incidents from "./Incident";

const { Content, Footer } = Layout;

const data = [
  { 
    id: 1,
    type: 'Body Related',
    date: '12/10/2008',
    priority: 'High', 
    status: 'in progress',
    team: '223344',
    description: 'some description about the case'
  },
  { 
    id: 2, 
    type: 'Body Related', 
    date: '12/10/2008', 
    priority: 'High', 
    status: 'in progress', 
    team: '223344',
    description: 'some description about the case'
  },
  { 
    id: 3, 
    type: 'Property Related', 
    date: '12/10/2008', 
    priority: 'High', 
    status: 'in progress', 
    team: '223344',
    description: 'some description about the case'
  },
];

const items = [
        {
          key: '1',
          icon: <PieChartOutlined />,
          label: 'Overview',
          link: '/'
        },
        {
          key: '2',
          icon: <IoDocumentAttach />,
          label: 'Case Managment',
          link: '/case_mgt'
        },
        {
          key: '3',
          icon: <FcProcess />,
          label: 'Criminal Records',
          link: '/criminal_records'
        },
        {
          key: '4',
          icon: <GiPoliceCar />,
          label: 'Incidents',
          link: '/incidents'
        },
        {
          key: '5',
          icon: <HiOutlineDocumentReport />,
          label: 'Reports',
          link: '/reports'
        },
        {
          key: '6',
          icon: <CgProfile />,
          label: <MyProfile />,
        },
        {
          key: '7',
          icon: <TbLogout />,
          label: 'Logout',
        },

      ];

const OfficerDashboard = () => {
        const [collapsed, setCollapsed] = useState(false);
      
        const mainStyle = {
          paddingLeft: collapsed ? 40 : 0,
          transition: 'padding-left 0.2s',
        };
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} items={items}/>
            <Layout className="site-layout">
              <AppBarMU />
              <Content style={mainStyle}>
                <div style={{ padding: 0, minHeight: 360 }}>
                  {<Incidents />}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center', backgroundColor: '#002140',height: 40, marginTop: 70, color: "white"}}>
                PSRMS ©2023
              </Footer>
            </Layout>
          </Layout>
        );
};
export default OfficerDashboard;
