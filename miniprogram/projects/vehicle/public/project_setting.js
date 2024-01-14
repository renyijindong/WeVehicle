const TASK_DEPT = ['行政部', '生产管理部', '商务部', '总办', '人力资源部', '市场部', '综合部', '计划财务部', '其他'];

module.exports = { // 车辆申请 vehicle
	PROJECT_COLOR: '#39826B',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#39826B',

	// ## 小程序订阅消息
	//来访申请结果通知(27527) 来访人/访问时间/来访事由/审批结果 
	NOTICE_TEMP_APPT: 'ZgWZ-TMpr7UOyE4S5qsVZjhKgXS3ek83hTWoMwqyE0Y',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [

	],

	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftbig1' },
	],
	NEWS_FIELDS: [ 
	],


	TASK_NAME: '来访申请',
	TASK_DEPT: TASK_DEPT,
	TASK_FIELDS: [
		{ mark: 'person', title: '驾驶员姓名', type: 'text', must: true },
		{ mark: 'phone', title: '驾驶员手机', type: 'mobile', must: true },
		{ mark: 'date', title: '申请驶入日期', type: 'date', must: true },
		{ mark: 'hour', title: '申请驶入时间点', type: 'hourminute', def: '09:00', must: true },
		{ mark: 'time', title: '预计停留时间(小时)', type: 'text', must: true },
		{ mark: 'dept', title: '受访部门', type: 'select', selectOptions: TASK_DEPT, must: true },
		{ mark: 'carnumber', title: '车牌号码', type: 'carnumber', must: true },
		{ mark: 'type', title: '车辆类型', type: 'select', selectOptions: ['普通货车', '私家车', '农用车', '工程车辆', '中巴车', '大巴车', '其他车辆'], must: true },
		{ mark: 'cnt', title: '随行人数', type: 'int', def: 0, must: true },
		{ mark: 'desc', title: '驶入事由', type: 'textarea', must: true },

	],

	TASK_OVER_FIELDS: [
		{ mark: 'content', title: '完成情况说明', type: 'textarea', must: true },
		{ mark: 'img', type: 'image', title: '相关图片', max: 8, must: true },
	]

}