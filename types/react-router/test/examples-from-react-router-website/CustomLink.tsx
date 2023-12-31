import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  LinkProps,
  Link
} from 'react-router-dom';

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
      <OldSchoolMenuLink to="/about" label="About"/>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

interface OldSchoolMenuLinkProps extends LinkProps {
  activeOnlyWhenExact?: boolean | undefined;
  label: string;
}

const OldSchoolMenuLink: React.FC<OldSchoolMenuLinkProps> = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to as string} exact={activeOnlyWhenExact} children={(params) => (
    <div className={params.match ? 'active' : ''}>
      {params.match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default CustomLinkExample;
