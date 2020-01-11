import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../Details/ActivityDetails';
import ActivityForm from '../Form/ActivityForm';

interface IProps { 
    activities: IActivity[];
    selectActivity:(id:string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode:(editMode: boolean) => void;
    setselectedActivity:(activity: IActivity | null) => void;
}
 const ActivityDashboard: React.FC<IProps> = ({
     activities
     ,selectActivity
     ,selectedActivity
     ,editMode
     ,setEditMode
     ,setselectedActivity
    }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
                       </Grid.Column>
            <Grid.Column width={6}>
               {selectedActivity && !editMode && (<ActivityDetails 
               activity={selectedActivity} 
               setEditMode={setEditMode}
               setselectedActivity={setselectedActivity} 
               />) } 
               {editMode &&  <ActivityForm 
               setEditMode={setEditMode}
               activity={selectedActivity! } 
               />}
            </Grid.Column>
        </Grid>
    )
}
export default ActivityDashboard;
