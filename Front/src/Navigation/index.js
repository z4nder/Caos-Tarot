import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
	ServiceUserBoardScreen: { screen: ServiceUserBoardScreen },
	ServiceRequestScreen: { screen: ServiceRequestScreen },
	AvailableRequestsScreen: { screen: AvailableRequestsScreen },
	CheckingAccountScreen: { screen: CheckingAccountScreen },
	FillAddressScreen: { screen: FillAddressScreen },
	TermsScreen: { screen: TermsScreen },
	IndicationScreen: { screen: IndicationScreen },
	HistoryDetailScreen: { screen: HistoryDetailScreen },
	HistoryScreen: { screen: HistoryScreen },
	MyRequestsScreen: { screen: MyRequestsScreen },
	InvoiceScreen: { screen: InvoiceScreen },
	ServiceFinishedScreen: { screen: ServiceFinishedScreen },
	PasswordScreen: { screen: PasswordScreen },

	ClosureParts: { screen: ClosureParts },
	ClosureDefects: { screen: ClosureDefects },
	ClosureSignature: { screen: ClosureSignature },

	RegisterStep1Screen: { screen: RegisterStep1Screen },
	RegisterStep2Screen: { screen: RegisterStep2Screen },
	RegisterStep3Screen: { screen: RegisterStep3Screen },
	RegisterStep4Screen: { screen: RegisterStep4Screen },
	RegisterStep5Screen: { screen: RegisterStep5Screen },
	RegisterStep6Screen: { screen: RegisterStep6Screen },

	BrandRegisteScreen: { screen: BrandRegisteScreen },
	GroupRegisteScreen: { screen: GroupRegisteScreen },
	ModelRegisteScreen: { screen: ModelRegisteScreen },

	EditStep1Screen: { screen: EditStep1Screen },
	EditStep2Screen: { screen: EditStep2Screen },
	EditStep3Screen: { screen: EditStep3Screen },
	EditStep4Screen: { screen: EditStep4Screen },
	EditStep5Screen: { screen: EditStep5Screen },
	EditStep6Screen: { screen: EditStep6Screen },
	ServicesListScreen: { screen: ServicesListScreen },
	SerialNumberDetailsScreen: { screen: SerialNumberDetailsScreen },
	ServiceCreateDefectsScreen: { screen: ServiceCreateDefectsScreen },
	ServiceCreatePartsScreen: { screen: ServiceCreatePartsScreen },
	RegisterStepCertificatesScreen: { screen: RegisterStepCertificatesScreen },
	MainScreen: { screen: MainScreen },
	LoginScreen: { screen: LoginScreen },
	SplashScreen: { screen: SplashScreen },
	SetAddressScreen: { screen: SetAddressScreen },
	ScheduleRequestScreen: { screen: ScheduleRequestScreen },
	SearchAllBanksScreen: { screen: SearchAllBanksScreen }
}, {
		// Default config for all screens
		headerMode: 'none',
		initialRouteName: 'SplashScreen',
		defaultNavigationOptions: {
			headerStyle: styles.header
		}
	})

const App = createAppContainer(PrimaryNav);

export default App;

