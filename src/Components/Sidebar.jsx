import { PieChartOutlined } from '@ant-design/icons';
import Main from './Main';
import { Link } from "react-router-dom";
import {MdOutlineGroups} from 'react-icons/md'
import {TbReport, TbSettings, TbLogout} from 'react-icons/tb'
import AppBar from './AppBar';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Logo from '../assets/images/police-logo.png';

const { Header, Content, Footer, Sider } = Layout;

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


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const mainStyle = {
    paddingLeft: collapsed ? 40 : 0,
    transition: 'padding-left 0.2s',
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='w-full flex justify-center'>
          <img src={Logo} style={{ height: 75, margin: 16 }} />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          {items.map(item => (
            item.children ? (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map(child => (
                  <Menu.Item key={child.key}>
                    <Link to={child.link}>{child.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.link}>{item.label}</Link>
              </Menu.Item>
            )
          ))}
        </Menu>
      </Sider>
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
export default Sidebar;