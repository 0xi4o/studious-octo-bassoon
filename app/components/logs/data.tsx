import type { Log } from '~/lib/types'
import { faker } from '@faker-js/faker'

function createRandomLog(): Log {
	return {
		id: faker.string.uuid(),
		timestamp: new Date(
			faker.date.between({
				from: new Date('2023-09-01T00:00:00'),
				to: new Date('2023-12-11T00:00:00'),
			})
		).toISOString(),
		status: faker.helpers.arrayElement(['success', 'error']),
		error: faker.lorem.words(10),
		request: faker.lorem.words(10),
		response: faker.lorem.words(10),
	}
}

export function createRandomLogs(amount: number): Log[] {
	const logs = []
	for (let i = 0; i < amount; i++) {
		const log = createRandomLog()
		logs.push(log)
	}

	return logs
}

export const data = [
	{
		id: '2037c48e-e5d8-4c4d-a915-99e01e9fac95',
		timestamp: '2023-09-11T15:27:57.791Z',
		status: 'success',
		error: 'aequus cogo absque angustus cohors cribro solvo cubo tendo audacia',
		request:
			'umerus vulgus thalassinus sollicito volaticus cohors thermae vulariter caelestis talis',
		response:
			'temeritas acquiro conduco catena usque utor ratione sunt tametsi culpo',
	},
	{
		id: '82ab7f22-7c66-4d0e-aff5-7ade89a5dfa4',
		timestamp: '2023-10-20T20:34:36.307Z',
		status: 'success',
		error: 'aer tutamen cibus coma conor amaritudo ipsam ago uxor ago',
		request:
			'amiculum assumenda demergo tego solum vito angustus iste derideo candidus',
		response:
			'incidunt calco absorbeo attero esse uberrime saepe succedo calco ex',
	},
	{
		id: 'c687eb87-0187-4811-ac35-a686de59a8d5',
		timestamp: '2023-11-14T05:20:34.682Z',
		status: 'success',
		error: 'ver argentum eaque atque vergo aranea cattus adhaero aqua terror',
		request:
			'advenio sapiente ambitus tenetur abscido carmen vae commemoro adopto beneficium',
		response:
			'totidem comburo magnam adeptio aureus cogito crur tepidus stillicidium una',
	},
	{
		id: 'd94bd4c9-a394-41f0-a037-0dd723010f56',
		timestamp: '2023-11-23T19:53:05.930Z',
		status: 'success',
		error: 'auxilium acies optio vinco tempus tempus occaecati caelestis repudiandae aliquam',
		request:
			'veniam conspergo ustulo infit arcus deputo eos theca taedium caritas',
		response:
			'sint solutio demonstro quos quo timidus pauci arma perferendis vulticulus',
	},
	{
		id: '8d47fbdb-4b5d-4bed-8fe2-9f1c29a5a26e',
		timestamp: '2023-12-10T17:44:28.216Z',
		status: 'error',
		error: 'solvo correptius absque defluo terga custodia velut suscipit vulgus contabesco',
		request:
			'asper aer corrigo dedico bardus audentia careo amaritudo aiunt tristis',
		response:
			'clementia aestas caelum defessus ago tabgo voro officia verumtamen atrox',
	},
	{
		id: '76149c0f-d3a8-4960-a869-48adefe18b37',
		timestamp: '2023-09-22T08:28:38.758Z',
		status: 'success',
		error: 'sulum calco caries ratione reprehenderit utrimque coaegresco sumptus allatus commemoro',
		request:
			'aliquid angulus deporto uredo aurum uterque aqua caute aliquid spectaculum',
		response:
			'compono demonstro tandem concido quia cervus cupiditas suffragium aetas eligendi',
	},
	{
		id: '5c855fb5-397a-43ff-b6ac-a281a82af9f3',
		timestamp: '2023-09-27T13:53:50.770Z',
		status: 'error',
		error: 'quis cavus consequuntur adicio stipes sunt adiuvo summa concedo spectaculum',
		request:
			'error tergo acquiro vulpes barba ea ab avaritia auxilium coadunatio',
		response:
			'trepide trucido acsi accusator spargo tremo virga abbas ventosus territo',
	},
	{
		id: '9190f269-86a3-450b-8da2-6c2fd310c068',
		timestamp: '2023-09-26T13:08:19.672Z',
		status: 'success',
		error: 'claro creator a tantillus asporto nihil non conscendo terebro careo',
		request:
			'tabella acervus velut amo caveo magni claudeo denuncio comparo summa',
		response:
			'adeo amor decerno decretum curo ater vitiosus mollitia capitulus nulla',
	},
	{
		id: 'b15d6aac-b8fb-4077-a6d1-f3311adcb797',
		timestamp: '2023-09-19T09:50:31.941Z',
		status: 'success',
		error: 'arceo bestia ratione delicate suscipio pecco cupiditas ex cribro appello',
		request:
			'cubicularis curriculum cotidie utor ventosus auditor armarium ascisco demulceo tergiversatio',
		response:
			'cauda voluptas varietas arbitro adulescens dolorem vel vorax atque temporibus',
	},
	{
		id: '2fe0ef26-8534-44f6-a3f2-d13b6a4e1937',
		timestamp: '2023-11-29T10:57:15.690Z',
		status: 'success',
		error: 'vinco vir certus tero charisma curatio viscus perspiciatis viscus vos',
		request:
			'aestas velociter vacuus victoria correptius adduco clarus claustrum statim congregatio',
		response:
			'apud ab currus molestias caecus aliquid mollitia alienus denuncio certus',
	},
	{
		id: '158fd3ae-82bf-4334-b5e1-b5e95a718a1e',
		timestamp: '2023-11-09T12:54:16.121Z',
		status: 'error',
		error: 'nihil deludo supplanto xiphias culpa debilito quis amaritudo ciminatio abstergo',
		request:
			'talio illo voluptate libero accusamus caute victus comitatus video arma',
		response:
			'subnecto crudelis aiunt textor quia quaerat nostrum substantia cimentarius vito',
	},
	{
		id: '8a458ca3-da3e-43f5-aa9a-886143929e97',
		timestamp: '2023-11-19T06:30:15.892Z',
		status: 'error',
		error: 'summa supplanto theologus dolorum unde cattus subvenio fugiat annus caveo',
		request:
			'corpus sublime cogito sponte acsi perspiciatis degusto capto vita socius',
		response:
			'eaque derideo voluptatem amplitudo magnam comes similique porro asporto tam',
	},
	{
		id: 'eeed48fe-c880-4f5b-bde9-b77ae8f8d512',
		timestamp: '2023-11-11T08:16:55.267Z',
		status: 'success',
		error: 'cum careo conitor amplus tamquam utrum vulnus creator appello suus',
		request:
			'comprehendo concido asperiores teneo suadeo sollers illo accedo vinculum turba',
		response:
			'chirographum amita verecundia amissio cursus una sui cauda dolor deludo',
	},
	{
		id: 'c5fd78f2-ff2e-4842-8c26-68376d7c1fb2',
		timestamp: '2023-10-22T07:51:14.810Z',
		status: 'error',
		error: 'aetas alius crastinus ancilla corpus assentator suadeo audeo odit tum',
		request:
			'vinco quo conicio chirographum vos tollo animadverto defetiscor odio solus',
		response:
			'torqueo reiciendis curiositas accusator bonus nihil dolorem desolo consequuntur ara',
	},
	{
		id: '46fe773b-98b4-47e0-ab7a-efbf7b656d38',
		timestamp: '2023-11-12T18:25:53.148Z',
		status: 'success',
		error: 'pecto quasi totidem usque cenaculum quasi cresco temporibus fugit suppono',
		request:
			'asporto delinquo cauda bonus aeneus surculus cito sophismata substantia crur',
		response:
			'iusto teres patria non dolorem vitiosus damno decretum adipisci confero',
	},
	{
		id: 'c70921ef-5856-4086-8ad2-d7e0a5dab3c4',
		timestamp: '2023-09-14T00:11:53.099Z',
		status: 'error',
		error: 'accommodo aegre derelinquo xiphias aggredior cultellus sordeo nisi pecto ascisco',
		request:
			'auctus cuius vilitas sufficio claudeo vulnus dedico adnuo depono templum',
		response:
			'vetus comedo speculum dens armarium cribro quaerat unde cetera cribro',
	},
	{
		id: 'f5cf9427-72d4-4d52-8fe8-71cfaa80fa6c',
		timestamp: '2023-09-09T02:02:00.095Z',
		status: 'success',
		error: 'accusantium vehemens cohaero supplanto ater aut reprehenderit viridis ullus alveus',
		request:
			'triumphus strenuus rerum adstringo clementia vigilo vilis commodi assumenda clibanus',
		response:
			'adstringo crapula trans aeger aspicio depopulo ambulo trado alias quisquam',
	},
	{
		id: '0c7748be-0280-4961-ab39-3fbe10bc04a1',
		timestamp: '2023-10-11T17:23:07.246Z',
		status: 'success',
		error: 'clamo terreo succurro cur asporto cursus suffoco tertius alter delicate',
		request:
			'conventus suus canonicus stabilis cum voro theologus aranea vicinus bardus',
		response:
			'amita commemoro sponte aegre cilicium civis capto tendo spiritus cauda',
	},
	{
		id: 'afe0184c-db3a-4220-a958-d94bc4d11437',
		timestamp: '2023-09-17T17:59:25.009Z',
		status: 'error',
		error: 'candidus cilicium sollers undique usque quod demum una contigo defendo',
		request:
			'vitium pauci tutis amissio tametsi capio versus sono cribro sit',
		response:
			'suffoco dicta abeo tener quaerat caute maiores tenuis dedico audio',
	},
	{
		id: '1170249f-b577-4fcf-a12d-75e4423f7380',
		timestamp: '2023-11-05T14:32:16.518Z',
		status: 'error',
		error: 'dapifer quasi vespillo fugit defluo perferendis quas trepide corrumpo consequatur',
		request:
			'summa decor validus sumptus patrocinor necessitatibus statim tamisium coaegresco id',
		response:
			'verecundia decretum vis perferendis arx crudelis absum tollo voveo culpo',
	},
	{
		id: '45556632-421e-424c-ba42-f2f0c49f7abd',
		timestamp: '2023-11-07T03:07:23.977Z',
		status: 'success',
		error: 'sed adduco clarus tendo odio sit ancilla adulatio deputo pecus',
		request:
			'ater succurro nostrum modi advenio desipio umquam maxime sodalitas paens',
		response:
			'uxor curtus synagoga acer advoco demens viduo adversus pauper textilis',
	},
	{
		id: '93e0de97-3843-4763-bea8-f5e5d8625939',
		timestamp: '2023-09-16T07:35:41.182Z',
		status: 'success',
		error: 'coerceo blandior alioqui quia tandem caute quia bestia cimentarius admoneo',
		request:
			'ars demo utpote stillicidium cursus sit sodalitas ullam provident numquam',
		response:
			'coadunatio cupiditas vinculum addo demonstro thorax similique contra assentator contabesco',
	},
	{
		id: 'e4c49c20-3f31-4554-b7ad-5c8ccfe11923',
		timestamp: '2023-10-25T16:35:15.196Z',
		status: 'error',
		error: 'aspernatur quo tenax acies clam defessus triduana aliqua despecto tracto',
		request:
			'delego teneo alias crur trucido demens vulticulus ago adstringo absorbeo',
		response:
			'virgo suggero adiuvo templum aurum vir confido careo voluptate animus',
	},
	{
		id: '14795d7d-5a8d-4130-8ac6-42fdf88e3e07',
		timestamp: '2023-10-11T05:49:28.936Z',
		status: 'success',
		error: 'acsi adficio reiciendis talio totam auctus aestivus voluptate infit carus',
		request:
			'aliquid tener deprecator creptio coepi ut depromo synagoga vicinus tersus',
		response:
			'apostolus illum turba advoco argumentum defessus acsi tempora clarus cotidie',
	},
	{
		id: 'f82e3c85-4083-4b92-b823-9f89c72e5d83',
		timestamp: '2023-11-02T08:13:08.499Z',
		status: 'success',
		error: 'repellat contego stabilis caelum quos cornu cetera coruscus tam acervus',
		request: 'quae architecto abbas illo sopor cum terga patria qui deleo',
		response:
			'tolero cimentarius esse defendo currus ducimus veritatis urbanus speculum tonsor',
	},
	{
		id: '2991e1d1-944f-4512-bec5-43aec969f2d0',
		timestamp: '2023-10-08T11:18:35.148Z',
		status: 'success',
		error: 'admiratio vir cunabula curatio nobis una beatae vociferor triduana assentator',
		request:
			'tabella censura pauci corrumpo brevis deleo condico aufero deprecator cubitum',
		response:
			'comedo solum talio ager harum curiositas adipiscor rerum convoco maiores',
	},
	{
		id: '266e975e-db75-4ee7-b9a2-f9fbc9f42acc',
		timestamp: '2023-10-04T01:33:38.095Z',
		status: 'success',
		error: 'depraedor distinctio casus conatus vacuus vigilo traho tabesco amo ubi',
		request:
			'vulariter celebrer vesco triumphus adicio qui repellat credo umerus acquiro',
		response:
			'vobis libero rerum adipiscor aro velum aeternus certus curatio cuius',
	},
	{
		id: '664605ad-6fd3-4436-9a6e-8d3435586c61',
		timestamp: '2023-09-14T00:01:35.978Z',
		status: 'success',
		error: 'deinde adfectus provident repellat vetus benevolentia corroboro amitto tam ubi',
		request:
			'capto absque amplus admoneo corrupti id nam concido valens suasoria',
		response:
			'cursim cilicium curto consequuntur voro talis cursim conatus curtus autem',
	},
	{
		id: 'e9c14c7d-1b9e-49f5-90b9-edc0748165df',
		timestamp: '2023-11-20T12:45:04.372Z',
		status: 'success',
		error: 'tyrannus cubicularis contigo ulciscor suffragium antiquus vestrum vado arcesso auditor',
		request:
			'aetas excepturi vulticulus magni video testimonium abeo territo solus labore',
		response:
			'tertius vulticulus ciminatio cursim urbanus facere curto concedo triduana desidero',
	},
	{
		id: '4b2451d9-857f-439a-aa9d-c0ae4d6df368',
		timestamp: '2023-10-26T22:01:09.263Z',
		status: 'success',
		error: 'bene solitudo succurro velociter demonstro torrens veritatis aut ceno corpus',
		request:
			'careo alias subnecto totidem tolero suscipio comitatus bis absque ubi',
		response:
			'stillicidium curvo subseco arx solio verbum advenio annus censura audax',
	},
]

export function getSortedData(): Log[] {
	const sorted = data.sort(
		(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
	)
	return sorted
}
