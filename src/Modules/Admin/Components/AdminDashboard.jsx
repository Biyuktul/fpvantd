import Main from './Main';
import AppBar from './AppBar';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Layout } from 'antd';
import {MdOutlineGroups} from 'react-icons/md'
import {TbReport, TbSettings, TbLogout} from 'react-icons/tb'
import { PieChartOutlined } from '@ant-design/icons';


const { Content, Footer } = Layout;
const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Overview',
    link: '/'
  },
  {
    key: '2',
    icon: <MdOutlineGroups />,
    label: 'Staffs',
    link: '/staffs'
  },
  {
    key: '3',
    icon: <TbReport />,
    label: 'Reports',
    link: '/reports'
  },
  {
    key: '4',
    icon: <TbSettings />,
    label: 'Settings',
    children: [
      {
        key: '5',
        label: 'Preference Settings',
        link: '/preference-settings'
      },
      {
        key: '6',
        label: 'Profile Settings',
        link: '/profile-settings'
      }
    ]
  },
  {
    key: '7',
    icon: <TbLogout />,
    label: 'Logout',
    link: '/logout'
  }
];
const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const mainStyle = {
    paddingLeft: collapsed ? 40 : 0,
    transition: 'padding-left 0.2s',
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} items={items}/>
      <Layout className="site-layout">
        <AppBar />
        <Content style={mainStyle}>
          <div style={{ padding: 0, minHeight: 360 }}>
            <Main />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#002140',height: 40, marginTop: 70, color: "white"}}>
          PSRMS ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminDashboard;