import { IonContent, 
		 IonHeader, 
		 IonPage, 
		 IonTitle, 
		 IonToolbar,
		 IonItem, 
		 IonCheckbox, 
		 IonLabel, 
		 IonNote,
		 IonBadge, 
		 IonFab, 
		 IonFabButton, 
		 IonIcon, 
		 IonList} from '@ionic/react';
import React from 'react';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>...</IonHeader>
      <IonContent>
        <IonList>...</IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
export default Home;
