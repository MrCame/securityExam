// 题库数据
const QUESTIONS_DATA = {
  "total" : 1662,
  "singleCount" : 992,
  "multiCount" : 391,
  "judgeCount" : 279,
  "singleQuestions" : [ {
    "id" : 1,
    "type" : "single",
    "content" : "保安员在防火巡查时，以下项目中不需要检查的是（）",
    "options" : [ "A:防火门.防火卷帘.消防安全疏散指示标志等设施均处于正常状态", "B:消防安全标志是否完好", "C:消防安全重点部位的人员在岗情况", "D:本单位人员是否掌握灭火器材使用方法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 2,
    "type" : "single",
    "content" : "在道路交通活动中，驾驶机动车，必须遵守（）的原则",
    "options" : [ "A:左侧通行", "B:右侧通行", "C:中间通行", "D:内侧通行" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 3,
    "type" : "single",
    "content" : "在道路交通活动中，道路交通主体是指（）",
    "options" : [ "A:机动车和非机动车", "B:机动车.非机动车和行人", "C:机动车.非机动车和交通警察", "D:机动车.非机动车.行人和交通管理部门" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 4,
    "type" : "single",
    "content" : "以下是某一小区消防安全设施的使用情况，存有火灾隐患的一项是（）",
    "options" : [ "A:小区内无消防车通道", "B:室内外均有消防供水设施", "C:常闭式防火门处于关闭状态", "D:防火卷帘下无堆放物品" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 6,
    "type" : "single",
    "content" : "机动车在设有最高限速标志的道路上行驶时（）",
    "options" : [ "A:不得超过标明的最高时速", "B:允许超过标明最高时速的10%", "C:可以超过车辆的最高设计时速", "D:按规定的最高车速行驶" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 7,
    "type" : "single",
    "content" : "机动车行驶在没有限速标志的路段时，（）",
    "options" : [ "A:应当以最高设计车速行驶", "B:可以不受速度限制行驶", "C:应当保持安全车速行驶", "D:可以按自己的意愿行驶" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 8,
    "type" : "single",
    "content" : "正在道路上作业的清扫车在不影响其他车辆通行的情况下，可以（）",
    "options" : [ "A:不受行驶速度限制", "B:不受车辆分道行驶的限制", "C:不受交通信号灯的限制", "D:不受交通标志的限制" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 9,
    "type" : "single",
    "content" : "非机动车通过有交通信号灯控制的交叉路口，向左转弯时，应靠路口中心点（）转弯",
    "options" : [ "A:右侧", "B:左侧", "C:最近处", "D:最远处" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 10,
    "type" : "single",
    "content" : "某保安公司保安员张三因就餐在饭店将与其发生争执的李四打成重伤，则张三直接侵犯李四的（）",
    "options" : [ "A:名誉权", "B:自由权", "C:平等权", "D:健康权" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 11,
    "type" : "single",
    "content" : "下列选项不属于电气火灾隐患的是（）",
    "options" : [ "A:线路电量负荷过大", "B:用钢.铁丝代替保险丝", "C:电气线路严重老化", "D:消防控制室电路出现故障" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 12,
    "type" : "single",
    "content" : "机动车距离交叉路口（）米以内不准停车",
    "options" : [ "A:20", "B:30", "C:40", "D:50" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 13,
    "type" : "single",
    "content" : "机动车在停车场以外的其他地点临时停车时，应当（），但不得妨碍其他车辆和行人通行",
    "options" : [ "A:在非机动车道停车", "B:紧靠道路右边停放", "C:紧靠道路左边停放", "D:选择路边停车" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 14,
    "type" : "single",
    "content" : "（）符合用火规范",
    "options" : [ "A:在小区花园角落可以焚烧垃圾", "B:消防控制室严禁使用明火", "C:在楼道内焚烧垃圾", "D:在小区内燃放烟花炮竹" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 15,
    "type" : "single",
    "content" : "机动车载物的宽度不准超出（）",
    "options" : [ "A:车厢", "B:车厢左右各10厘米", "C:车厢左右各20厘米", "D:车厢左右各15厘米" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 16,
    "type" : "single",
    "content" : "对重大火灾隐患这一概念叙述正确的是（）",
    "options" : [ "A:违反消防法律法规，可能导致火灾发生或火灾危害增大，并由此可能造成重大火灾事故和严重社会影响的各类潜在不安全因素", "B:违反保安法律法规，必定导致火灾发生或火灾危害增大，并由此可能造成特大火灾事故和严重社会影响的各类潜在不安全因素", "C:违反消防法律法规，必定导致火灾发生或火灾危害增大，并由此可能造成重大火灾事故和严重政治影响的各类潜在不安全因素", "D:违反保安法律法规，可能导致火灾发生或火灾危害增大，并由此可能造成特大火灾事故和严重政治影响的各类潜在不安全因素" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 17,
    "type" : "single",
    "content" : "在目标部位守护中，流动岗一般是设置在（）或易出问题的部位区域",
    "options" : [ "A:重点单位的重要部位", "B:防范工作的薄弱环节", "C:客户单位认定的重要部位", "D:保安公司认定" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 18,
    "type" : "single",
    "content" : "保安公司根据服务单位的要求，在目标部位守护中一般设置（）岗位",
    "options" : [ "A:三个", "B:两个以上", "C:一个", "D:一个或多个" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 19,
    "type" : "single",
    "content" : "在急救现场，当你一人面对额头损伤者.前臂骨折者及呼吸心跳停止者三名患者时，正确的救护顺序是（）",
    "options" : [ "A:①额头擦伤者②前臂骨折者③呼吸心跳停止者", "B:①呼吸心跳停止者②前臂骨折者③额头擦伤者", "C:①呼吸心跳停止者②额头擦伤者③前臂骨折者", "D:①前臂骨折者②呼吸心跳停止者③额头擦伤者" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 20,
    "type" : "single",
    "content" : "下列说法中，对现场救护的认识正确的是（）",
    "options" : [ "A:免除患者去医院的麻烦", "B:可以替代医务人员处置患者", "C:可以减轻患者家属的负担", "D:挽救生命，减少伤残和痛苦" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 21,
    "type" : "single",
    "content" : "武装押运服务中通常所使用的车辆包括（）",
    "options" : [ "A:专用运钞车和运输危险物品专用车", "B:专用运钞车和普通厢式货车", "C:危险物品专用车和普通厢式货车", "D:普通厢式货车和物流专用车" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 22,
    "type" : "single",
    "content" : "在某集贸市场，一名中年男子将另一男子用匕首刺伤后自杀，巡逻保安员首先要做的是（）",
    "options" : [ "A:立即报警", "B:报告服务单位", "C:保护现场", "D:疏散周边人群" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 23,
    "type" : "single",
    "content" : "两名中年妇女在人员密集的集贸市场争吵，导致周围大量群众围观，巡逻的保安员的最佳处理方法是（）",
    "options" : [ "A:直接报警", "B:予以记录并继续巡逻", "C:报告服务单位并继续巡逻", "D:立即报告带队人员，进行劝解并疏散围观人员" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 24,
    "type" : "single",
    "content" : "运钞车临时停驶时，押运员正确的做法是（）",
    "options" : [ "A:下车警戒.加强防范", "B:尽快在车内轮流休息", "C:不下车，时刻观察情况", "D:尽快处理就餐.饮水等生活事宜" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 25,
    "type" : "single",
    "content" : "如果人员密集场所的人员不愿疏散，采取劝说等其他措施无效的情况下，应该采取的疏导方法是（）",
    "options" : [ "A:多路疏导法", "B:截留疏导法", "C:疏散引导法", "D:强制疏散法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 26,
    "type" : "single",
    "content" : "在某音乐会入口处巡逻的保安员张某和郭某发现一信封，打开后发现内有一纸条，上面写着“半小时后音乐会现场会发生爆炸”，两名巡逻保安员应当立即采取的措施是（）",
    "options" : [ "A:停止观众入场", "B:立即报警并向服务单位报告", "C:设置隔离区", "D:疏散已入场人员" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 27,
    "type" : "single",
    "content" : "作为一名保安押运人员必须要熟悉（），才能确保工作的完成",
    "options" : [ "A:客户单位的情况", "B:押运方案", "C:应急预案", "D:报警电话及报警内容" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 28,
    "type" : "single",
    "content" : "用止血带止血时，放松一次的间隔时间为（）",
    "options" : [ "A:5-10分钟", "B:10-15分钟", "C:20-25分钟", "D:40-50分钟" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 29,
    "type" : "single",
    "content" : "遇到有外伤的伤员，救护员首先应检查（）",
    "options" : [ "A:有无大出血", "B:皮肤有无擦伤", "C:有无骨折", "D:有无关节扭伤" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 30,
    "type" : "single",
    "content" : "影剧院里发生火灾后，应该选择的逃生路线是（）",
    "options" : [ "A:按照人流方向选择安全出口逃生，选择疏散楼梯间撤离", "B:按照应急指示指引的方向逃生，选择人流量较小的疏散通道撤离", "C:按照人流方向选择安全出口逃生，选择消防电梯撤离", "D:按照应急指示指引的方向逃生，选择人流量较大的疏散通道撤离" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 31,
    "type" : "single",
    "content" : "在现场急救中，为了达到有效的人工呼吸，正确吹气的方法是（）",
    "options" : [ "A:多吹一些气，吹气时间延长一些", "B:缓慢.持续吹入气体", "C:深吸一口气再快速吹气", "D:不捏鼻翼，快速吹气" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 32,
    "type" : "single",
    "content" : "在现场急救中，口对口吹气时，吹气频率是每分钟（）次",
    "options" : [ "A:25-30", "B:20", "C:10-12", "D:5-6" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 33,
    "type" : "single",
    "content" : "消防控制室值班人员交接班时，要认真填写（）及系统运行登记表和控制器日检登记表",
    "options" : [ "A:值班记录", "B:检查记录", "C:故障记录", "D:人员登记表" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 34,
    "type" : "single",
    "content" : "岸上救护溺水者时，下列做法中错误的是（）",
    "options" : [ "A:清除口鼻内的泥沙.杂草等异物", "B:打开气道，检查呼吸", "C:用干毛巾从四肢.躯干向心脏方向擦遍全身，注意保暖", "D:如无呼吸.心跳，立即拨打120电话，等待医务人员来现场" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 35,
    "type" : "single",
    "content" : "公众聚集场所有些部位在装修过程中使用大量的海绵.泡沫塑料板.纤维等装饰物，火灾发生后会产生大量有毒气体。因此在公众聚集场所火灾中逃生时切忌（）",
    "options" : [ "A:匍匐爬行", "B:用水浇湿毛巾或用衣服捂住口鼻", "C:采用低姿行走", "D:临危不乱，站着走" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 36,
    "type" : "single",
    "content" : "严重触电会直接导致（）情况的发生",
    "options" : [ "A:牙疼", "B:骨折", "C:尿频尿急", "D:呼吸心跳骤停" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 37,
    "type" : "single",
    "content" : "（）的颁布施行，对于规范我国保安服务业的管理，促进其发展将起到划时代的重要作用",
    "options" : [ "A:《保安服务质量控制标准》", "B:《保安员国家职业标准》", "C:《保安培训机构管理办法》", "D:《保安服务管理条例》" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 38,
    "type" : "single",
    "content" : "公安部在深圳召开的首次全国保安工作会议上提出了规范保安服务业发展的“统一领导.统一审批.（）.统一经营.统一服装”的“五统一”原则",
    "options" : [ "A:统一组织", "B:统一培训", "C:统一规划", "D:统一勤务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 39,
    "type" : "single",
    "content" : "首次全国保安工作会议于（）在深圳召开，在这次会议上提出了规范保安服务业发展的“五统一”原则",
    "options" : [ "A:1984年12月", "B:1985年1月", "C:2000年2月", "D:2000年3月" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 40,
    "type" : "single",
    "content" : "当经济社会发展到一定程度时，人们对（）的需求日益增长，有偿保安服务便应运而生，逐步发展成现代的保安服务业",
    "options" : [ "A:治安", "B:公安", "C:保卫", "D:安全" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 41,
    "type" : "single",
    "content" : "保安服务是为满足（）和其他社会组织的安全需求，由依法设立的保安从业单位提供的专业化.社会化安全防范服务及相关的服务",
    "options" : [ "A:企业单位", "B:物业小区", "C:机关团体", "D:公民.法人" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 42,
    "type" : "single",
    "content" : "下列选项中灭火器的摆放位置错误的是（）",
    "options" : [ "A:便于使用的位置", "B:醒目的位置", "C:便于管理的位置", "D:温度较低的位置" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 43,
    "type" : "single",
    "content" : "实施加压包扎止血时，敷料的大小应该（）",
    "options" : [ "A:与伤口大小相同", "B:超过伤口周边3厘米", "C:比伤口周边小", "D:超过伤口周边1厘米" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 44,
    "type" : "single",
    "content" : "对于脊柱骨折的伤员，在环境安全伤员生命体征平稳时，救护员的处理方法是（）",
    "options" : [ "A:尽量不要轻易搬动伤员", "B:背起伤员，尽快将其送往医院", "C:两名救护员搀扶伤员送往医院", "D:将骨折部位进行外固定" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 45,
    "type" : "single",
    "content" : "为开放性骨折伤员现场进行外固定时，（）的做法是错误的",
    "options" : [ "A:固定前先将伤口止血.包扎", "B:超关节固定", "C:尽快将刺出伤口的骨折端送回伤口内", "D:绑扎要松紧适度" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 46,
    "type" : "single",
    "content" : "一座共两层的集贸市场发生火灾，若楼梯已被烧断，顶楼人员不能选择（）作为逃生工具",
    "options" : [ "A:落水管", "B:避雷网（线）", "C:带电电线", "D:房屋向外突出部分" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 47,
    "type" : "single",
    "content" : "在确保环境安全的前提下，现场救护的原则是（）",
    "options" : [ "A:先救命，后治伤", "B:先救呼喊的，后救没声音的", "C:先救远处的，后救近处的", "D:先救熟悉的，后救陌生的" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 48,
    "type" : "single",
    "content" : "刑法所调整的（）极其广泛",
    "options" : [ "A:法律关系", "B:行政关系", "C:社会关系", "D:组织关系" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 49,
    "type" : "single",
    "content" : "《企事业单位内部治安保卫条例》属于（）",
    "options" : [ "A:行政法规", "B:单位内部规章制度", "C:地方性政府规章", "D:部门规章" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 50,
    "type" : "single",
    "content" : "关于社会保险的叙述，下列说法正确的是（）",
    "options" : [ "A:工伤保险由企业和个人共同缴纳", "B:生育保险由企业和个人共同缴纳", "C:个人不需缴纳工伤保险", "D:失业保险由个人缴纳" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 51,
    "type" : "single",
    "content" : "保安员张某，想获得保安员国家职业资格四级证书，那么，他必须通过（）",
    "options" : [ "A:高级保安员职业能力考试与技能鉴定", "B:中级保安员职业能力考试与技能鉴定", "C:保安师职业能力考试与技能鉴定", "D:高级保安师职业能力考试与技能鉴定" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 52,
    "type" : "single",
    "content" : "（）是保安员工作能力水平的规范性要求，是职业技能鉴定的基本依据",
    "options" : [ "A:《保安员国家职业标准（试行）》", "B:《保安服务管理条例》", "C:《保安服务操作规程与质量控制》", "D:《公安机关实施保安服务管理条例办法》" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 53,
    "type" : "single",
    "content" : "地震现场的救护原则是（）",
    "options" : [ "A:先远后近.先挖后救.先易后难", "B:先近后远.先挖后救.先易后难", "C:先远后近.先挖后救.先难后易", "D:先近后远.先挖后救.先难后易" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 54,
    "type" : "single",
    "content" : "在现场急救中，对于有呼吸.有心跳，但无意识的伤员，应将其置于（）的体位更好",
    "options" : [ "A:仰卧位", "B:俯卧位", "C:坐位", "D:侧卧位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 55,
    "type" : "single",
    "content" : "上肢大出血时，上止血带的部位在（）",
    "options" : [ "A:上臂的上1/3处", "B:上臂的下1/3处", "C:前臂的中1/3处", "D:前臂的上1/3处" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 56,
    "type" : "single",
    "content" : "《保安员国家职业标准（试行）》于（）施行",
    "options" : [ "A:2006年1月1日", "B:2007年1月1日", "C:2008年1月1日", "D:2009年1月1日" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 57,
    "type" : "single",
    "content" : "固定岗.瞭望岗和流动岗都属于（）设置的岗位",
    "options" : [ "A:目标部位守护", "B:出入口守卫", "C:区域巡逻", "D:武装押运" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 58,
    "type" : "single",
    "content" : "保安员在为客户单位提供目标部位守护服务时，应对目标部位进行（）",
    "options" : [ "A:周边环境的了解", "B:检查.看护.守卫", "C:技防设备的检查", "D:岗位数量的核" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 59,
    "type" : "single",
    "content" : "目标部位的特点之一是（）特殊",
    "options" : [ "A:工作", "B:性质", "C:地点", "D:对" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 60,
    "type" : "single",
    "content" : "保安员在固定岗位进行目标部位守护时应注意观察岗位周围的（）",
    "options" : [ "A:过往车辆", "B:地形.地物和设备", "C:标志性建筑物", "D:流动人员" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 61,
    "type" : "single",
    "content" : "目标部位是服务单位内需要重点看护和守卫的（）",
    "options" : [ "A:固定岗位", "B:出入口区域", "C:特定区域或位置", "D:巡逻区域" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 62,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，保安员可以（）",
    "options" : [ "A:没收他人非法财物", "B:搜查他人身体", "C:开展巡逻活动", "D:适当删改报警记录" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 63,
    "type" : "single",
    "content" : "公安机关对保安从业单位指使.纵容保安员阻碍依法执行公务.参与追索债务的，应责令限期改正并处（）",
    "options" : [ "A:10万元以上20万元以下罚款", "B:5万元以上10万元以下罚款", "C:6万元以上10万元以下罚款", "D:2万元以上10万元以下罚款" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 64,
    "type" : "single",
    "content" : "门卫小刚在执行保安服务工作时不准（）",
    "options" : [ "A:搜查犯罪嫌疑人", "B:开展安全检查", "C:实施正当防卫", "D:根据任务需要设立临时隔离区" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 65,
    "type" : "single",
    "content" : "根据《保安服务管理条例》，保安员不准（）",
    "options" : [ "A:实施紧急避险", "B:查验出入人员的证件", "C:拒绝违法指令", "D:公开客户资料" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 66,
    "type" : "single",
    "content" : "保安员在提供保安服务过程中，在任何时候都不能（）",
    "options" : [ "A:开展报警监控活动", "B:查验出入人员的证件", "C:以例行检查的理由搜查他人身体", "D:根据任务需要设立临时隔离区" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 67,
    "type" : "single",
    "content" : "《保安服务管理条例》中规定，从事武装押运的保安服务公司的注册资本不应低于（）人民币",
    "options" : [ "A:100万元", "B:200万元", "C:1000万元", "D:800万元" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 68,
    "type" : "single",
    "content" : "\"三人行，必有我师\"的观念反映了职业道德中（）的要求",
    "options" : [ "A:诚实守信", "B:勤俭节约", "C:团结互助", "D:文明服务" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 69,
    "type" : "single",
    "content" : "保安服务具有（）.有偿性.防范性.契约性.风险性的特点",
    "options" : [ "A:安全性", "B:互助性", "C:自律性", "D:特许性" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 70,
    "type" : "single",
    "content" : "保安服务主要依据合同的约定或根据自行招用保安员单位的要求，履行客户单位及服务区域内（）.保护人身及财产安全等职责",
    "options" : [ "A:秩序维护", "B:现场勘查", "C:案件侦破", "D:民事调解" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 71,
    "type" : "single",
    "content" : "保安员小陈在石油化工厂执行巡查任务时，发现油料库房旁边通道的中间有一个约1米见方的纸箱子，他走到跟前仔细观察箱子的外观，没有任何标识，无法确认是什么物品。小陈处理箱子的正确做法是（）",
    "options" : [ "A:打开箱子查看", "B:向客户单位报告后，继续进行巡查", "C:向客户单位报告后，留在原地看护箱子等待有关人员处理", "D:直接将箱子搬走" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 72,
    "type" : "single",
    "content" : "武装守护目标具有的特点是（）",
    "options" : [ "A:目标流动", "B:目标固定", "C:安全要求低", "D:便于控制" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 73,
    "type" : "single",
    "content" : "保安武装守护的任务不包括（）",
    "options" : [ "A:发生治安案件后迅速破案", "B:确保目标的安全" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 74,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务时的主要任务之一是（）",
    "options" : [ "A:确保守护目标的安全", "B:应对恐怖袭击", "C:发生治安案件后迅速破案", "D:抓获犯罪嫌疑人" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 75,
    "type" : "single",
    "content" : "在目标部位守护勤务工作中，应该根据（）安装配置相应的安全技术防范设置设施",
    "options" : [ "A:客户单位要求", "B:保安公司要求", "C:技防公司要求", "D:重要部位的不同特点" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 76,
    "type" : "single",
    "content" : "保安员在守护勤务工作中，熟悉目标部位守护方案是完成守护任务的（）",
    "options" : [ "A:关键", "B:保障", "C:基础", "D:条件" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 77,
    "type" : "single",
    "content" : "在实施目标部位守护工作中，技术设备缺陷是使目标部位产生安全隐患的（）",
    "options" : [ "A:技术因素", "B:物理因素", "C:人为因素", "D:客观因素" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 78,
    "type" : "single",
    "content" : "在实施目标部位守护工作中，外部人员非法进入目标部位是由于（）造成的安全隐患",
    "options" : [ "A:主观因素", "B:人的因素", "C:自然因素", "D:客观因素" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 79,
    "type" : "single",
    "content" : "以下不属于安全技术防范在目标部位守护工作的作用是（）",
    "options" : [ "A:提高目标部位的安全度", "B:提高工作效率", "C:提高守护工作的科技含量", "D:提高守护人员对科技产品的认知能力" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 80,
    "type" : "single",
    "content" : "瞭望岗位值勤的保安员发现特殊情况，在没有通信设备的情况下需要通知其他岗位的保安员时，采用（）将信息传递出去",
    "options" : [ "A:信号弹", "B:点火的方式", "C:约定的信号联系", "D:旗语" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 81,
    "type" : "single",
    "content" : "保安员在流动岗位巡查遇有恶劣天气或治安情况复杂时，下列错误的做法是（）",
    "options" : [ "A:增加安全防范意识", "B:做好自身防护", "C:增加巡查频次", "D:减少巡查频次" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 82,
    "type" : "single",
    "content" : "保安员在流动岗位工作的方式是（）",
    "options" : [ "A:在岗位区域巡逻", "B:按照规定巡回路线和频次进行巡视", "C:按照规定巡回路线巡视一遍", "D:按照规定巡回的频次进行单向巡视" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 85,
    "type" : "single",
    "content" : "以下叙述中，（）不是保安员应享有的权利",
    "options" : [ "A:开展执法检查", "B:签订劳动合同", "C:接受教育培训", "D:实施紧急避险" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 97,
    "type" : "single",
    "content" : "某大学自行招用了12名保安员在校园内全面开展安全防范工作，则该大学属于（）",
    "options" : [ "A:保安服务公司", "B:自行招用保安员单位", "C:治安保卫单位", "D:保安服务客户单位" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 101,
    "type" : "single",
    "content" : "保安服务主要依据（）或根据自行招用保安员单位的要求，履行保安服务职责",
    "options" : [ "A:合同的约定", "B:客户的要求", "C:公安机关的要求", "D:保安公司的要求" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 109,
    "type" : "single",
    "content" : "在室内狭小空间使用二氧化碳灭火器灭火后，操作者应（　　）",
    "options" : [ "A:迅速离开", "B:迅速拿开灭火器", "C:对准火焰根部", "D:倒置灭火器" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 111,
    "type" : "single",
    "content" : "消防控制室设备发生故障，保安员应该立即（）",
    "options" : [ "A:停用设备", "B:通知相关部门维修", "C:自己拆卸修理", "D:挪用其他设备" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 117,
    "type" : "single",
    "content" : "保安员小王在饮用水水厂值勤，负责巡查水管管道安全。某天，他在巡查时发现水管爆裂，小王正确的做法是（）",
    "options" : [ "A:为控制水外溢，小王用塑料袋缠住漏水的部位", "B:立即向客户单位报告，继续进行巡查", "C:向客户单位报告后，在看守漏水管道同时等待有关人员前来处理", "D:立即跑回驻地找人去维修" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 119,
    "type" : "single",
    "content" : "为防止治安灾害事故的发生，在工程施工现场巡逻的保安员不需重点检查的是（）",
    "options" : [ "A:消防器材设施是否完备", "B:是否存在非法用工现象", "C:安全照明是否有效", "D:施工现场是否违章使用明火【正确答案】：B", "A:年满16周岁", "B:年满18周岁", "C:年满20周岁", "D:年满14周岁" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 139,
    "type" : "single",
    "content" : "在区域巡逻中，下面说法正确的是（）",
    "options" : [ "A:巡逻人员可以根据情况调换班组", "B:巡逻人员可以根据情况变更巡逻频次", "C:巡逻人员可以根据情况报告调整巡逻路线D巡逻人员可以根据情况变更巡逻方式" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 144,
    "type" : "single",
    "content" : "保安员张某和李某在某街区巡逻时发现()属于异常情形",
    "options" : [ "A:人群中有人在街边打电话", "B:某银行外的紧急报警灯闪烁", "C:某商铺的营业员正在给顾客找钱", "D:人群中有一青年身材比较高大" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 149,
    "type" : "single",
    "content" : "出入口守卫方案的内容不包括（）",
    "options" : [ "A:职责和方法", "B:所需保安装备", "C:具体岗位和要求", "D:客户单位提供的装备" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 150,
    "type" : "single",
    "content" : "保安员在出入口值勤遇有外来人员携带可疑危险物品时，正确的做法是（）",
    "options" : [ "A:严格检查携带的可疑物品", "B:向客户单位报告，按要求处理", "C:代为保管可疑物品，允许人员进入", "D:扣押可疑物品，严禁人员进入" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 151,
    "type" : "single",
    "content" : "（）不属于煤气中毒的表现",
    "options" : [ "A:头疼.头晕.恶心.呕吐", "B:口唇呈樱桃红色", "C:全身抽搐", "D:大小便失禁" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 164,
    "type" : "single",
    "content" : "犯罪嫌疑人或携带赃物者强行冲闯门岗时，保安员最恰当的做法是（）",
    "options" : [ "A:报告上级和相关负责人，按指令行事", "B:立即采取跟踪措施，并报告上级", "C:堵截犯罪嫌疑人，送交公安机关或报警", "D:不予其出入，令其接受登记" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 165,
    "type" : "single",
    "content" : "某重点单位规定，必须对进出单位的人员所携带物品进行登记。某天，李先生离开单位时带了一个很大的包裹，这时，保安员应当（）",
    "options" : [ "A:让李先生自己开包并将物品交保安员登记", "B:强制对物品进行查验并且予以登记", "C:检查包裹并让李先生自己登记", "D:因为李先生是单位领导可以放行" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 177,
    "type" : "single",
    "content" : "保安员在执行守护任务时发现纠纷，正确的处理程序是（）",
    "options" : [ "A:向客户单位报告后，等待有关人员到场", "B:立即报警", "C:立即劝解，向客户单位报告，请有关人员到场解决", "D:在劝解无效后报警" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 178,
    "type" : "single",
    "content" : "保安武装守护的主要任务不包括（）",
    "options" : [ "A:发生治安案件后迅速破案", "B:确保目标的安全", "C:防止违法犯罪分子的破坏活动", "D:预防和处置可能危害守护目标的事故和灾害" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 181,
    "type" : "single",
    "content" : "公民的基本权利是公民所享有的基本的.具有重要意义的（）",
    "options" : [ "A:权利和义务", "B:权利和自由", "C:平等和自由", "D:平等和义务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 182,
    "type" : "single",
    "content" : "保安员在履行交接班程序时，需要完成的书面任务是（）",
    "options" : [ "A:工作小结", "B:个人日记", "C:记录当班工作情况", "D:工作计划" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 183,
    "type" : "single",
    "content" : "保安员在特殊岗位值勤时，一定要携带（）",
    "options" : [ "A:对讲机", "B:防护用具或器材", "C:防毒面罩", "D:防刺背心" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 184,
    "type" : "single",
    "content" : "在实施目标部位守护工作中，用火用电或存放物品自燃是引发目标部位安全隐患的（）",
    "options" : [ "A:主观因素", "B:物的因素", "C:自然因素", "D:环境因素" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 185,
    "type" : "single",
    "content" : "在实施目标部位守护工作中，目标部位自身物理化学变化或自然界不可抗力是引发安全隐患的（）",
    "options" : [ "A:主观因素", "B:客观因素", "C:人为因素", "D:自然因素" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 186,
    "type" : "single",
    "content" : "安全技术防范与人力防范相比较，不具有（）的优点",
    "options" : [ "A:不间断地连续工作", "B:隐蔽性强", "C:不受环境影响", "D:成本低" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 187,
    "type" : "single",
    "content" : "安全技术防范在保安守护工作应用中，具有降低（）成本的优势",
    "options" : [ "A:设施", "B:物资", "C:通讯", "D:人力" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 188,
    "type" : "single",
    "content" : "在瞭望岗位值勤的保安员必须掌握（）",
    "options" : [ "A:与固定岗之间联系的信号", "B:与固定岗和流动岗人员联系的方法和信号", "C:与地面保持联络的方式", "D:与流动岗之间联系的方法" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 189,
    "type" : "single",
    "content" : "在目标部位守护工作中，瞭望岗最大的特点是（）",
    "options" : [ "A:控制出入口", "B:对区域进行巡查", "C:居高临下监控目标", "D:便于技术设备的安装" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 190,
    "type" : "single",
    "content" : "在目标部位守护中，保安员在流动岗位巡视时，应加强对（）的巡查",
    "options" : [ "A:客户单位指定的部位", "B:保安公司指定的部位", "C:与守护目标相关的区域", "D:重要部位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 191,
    "type" : "single",
    "content" : "在目标部位守护中，保安员在流动岗位工作的方式是（）进行巡视",
    "options" : [ "A:在重要的区域", "B:在重要的范围", "C:按照规定的区域和范围", "D:在重要的区域和范围" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 192,
    "type" : "single",
    "content" : "保安员在固定岗位值勤时，应掌握（）",
    "options" : [ "A:对讲机的使用方法", "B:灭火器的使用方法", "C:消防设备的位置和使用方法", "D:楼宇对讲的使用方法" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 193,
    "type" : "single",
    "content" : "保安员在执行守护任务时，要把守护目标始终置于（）之内",
    "options" : [ "A:重要保护范围", "B:重要服务对象", "C:技防监控", "D:视线" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 194,
    "type" : "single",
    "content" : "目标部位的特点之一是（）",
    "options" : [ "A:地位重要", "B:地理环境复杂", "C:标准高", "D:对象特殊" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 195,
    "type" : "single",
    "content" : "（）是保安员职业技能鉴定以及用人单位录用.安排岗位的基本依据",
    "options" : [ "A:《保安员国家职业标准（试行）》", "B:《保安服务管理条例》", "C:《保安服务操作规程与质量控制》", "D:《公安机关实施保安服务管理条例办法》" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 196,
    "type" : "single",
    "content" : "保安员在值勤中遇有不法侵害时，应当（）",
    "options" : [ "A:立即制止，将违法犯罪嫌疑人轰出客户单位", "B:立即制止，抓获违法犯罪嫌疑人", "C:组织人员抓获违法犯罪嫌疑人", "D:立即制止，在确保安全的情况下将违法犯罪嫌疑人扭送公安机关" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 197,
    "type" : "single",
    "content" : "保安员在值勤中遇有火灾时首先要做的是（）",
    "options" : [ "A:检查客户单位损失", "B:向客户单位报告，等待客户单位处理", "C:抢救物品", "D:立即报警" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 198,
    "type" : "single",
    "content" : "保安员在对来访人员登记时，不应该登记的内容是（）",
    "options" : [ "A:来访人姓名", "B:工作单位", "C:来访人家庭成员", "D:出入时间" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 199,
    "type" : "single",
    "content" : "保安员小张在值勤时，发现客户单位内部有形迹可疑人员，小张的错误做法是（）",
    "options" : [ "A:跟踪可疑人", "B:按照客户单位要求协助处理", "C:向客户单位报告后由客户单位处理", "D:向客户单位报告后按客户单位要求继续坚守岗位" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 200,
    "type" : "single",
    "content" : "保安员在出入口值勤发现不法侵害时，错误的做法是（）",
    "options" : [ "A:立即采取措施予以制止", "B:将违法人员送交服务单位", "C:保护现场", "D:对违法人员进行审问" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 201,
    "type" : "single",
    "content" : "保安员在对载有物品出入的车辆进行登记时，正确的做法是（）",
    "options" : [ "A:请驾驶员打开后备厢，清点物品并进行登记", "B:保安员打开后备厢，清点物品", "C:请驾驶员自己清点物品", "D:保安员打开后备厢查看，登记主要物品" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 202,
    "type" : "single",
    "content" : "保安员小赵在物品登记时发现来访人所携带的物品是危险物品后，正确的做法是（）",
    "options" : [ "A:立即向服务单位报告，并将物品存放在岗位上", "B:立即向服务单位报告，按要求进行处理", "C:根据情况自行处理", "D:拒绝来访人进入" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 203,
    "type" : "single",
    "content" : "登记是按照服务单位的要求对出入人员.车辆及物品在（）记载的行为",
    "options" : [ "A:请销假记录本", "B:勤务记录本", "C:物品点验记录本", "D:交接班记录本" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 204,
    "type" : "single",
    "content" : "单位自行招聘的保安员（）从事保安武装守护服务",
    "options" : [ "A:不允许", "B:需行政审批后允许", "C:不用行政审批可允许", "D:经过培训后可" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 205,
    "type" : "single",
    "content" : "保安公司在提供武装守护服务时，可依法为保安员配备（）",
    "options" : [ "A:管制刀具", "B:电警棍", "C:防暴枪", "D:制式武器" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 206,
    "type" : "single",
    "content" : "下列不属于目标部位守护方案的内容是（）",
    "options" : [ "A:岗位与人员部署", "B:常见紧急情况的处置", "C:岗位职责", "D:客户单位对保安员的评价" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 207,
    "type" : "single",
    "content" : "目标部位是客户单位防护的重点，在查验出入证件时应严格把关，遇伪造证件时正确的做法是（）",
    "options" : [ "A:将证件撕毁，以免再欺骗他人", "B:将证件交还本人，禁止通行", "C:将证件留存，向客户单位报告等待有关人员处置", "D:询问证件的来源" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 208,
    "type" : "single",
    "content" : "在目标部位值勤的保安员遇有火灾.盗窃或其他需要报警的情形时，报警的内容是（）",
    "options" : [ "A:报警人姓名，警情发生的原因.经过和结果", "B:报警人姓名.联系电话.报警事由，发生单位的名称和位置", "C:报警人姓名.联系电话，发生单位的名称", "D:报警人姓名.报警事由，发生单位的名称和位置" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 209,
    "type" : "single",
    "content" : "保安员小李和小张在对目标部位进行巡查时，看到存储间窗户的玻璃被人砸碎，两人立即上前看个究竟，发现库房的物品有明显的被盗痕迹。此时，两人正确的做法是（）",
    "options" : [ "A:立即向客户单位报告，保护现场防止无关人员进入", "B:向客户单位报告后，两人进入现场清点丢失的物品", "C:立即向客户单位报告，回去组织人员对现场进行保护", "D:两人守在存储间外围观察周围动静，寻找可疑人行迹" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 210,
    "type" : "single",
    "content" : "下列不属于人员密集场所可疑情况的是（）",
    "options" : [ "A:在演唱会的入口处发现一个黑色的袋子，内装不明物品", "B:在展览会的现场发现一男青年尾随一名带包女子", "C:在候机楼外发现有人抽烟", "D:在候车室内发现有三名青年随身携带管制刀具" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 211,
    "type" : "single",
    "content" : "保安员在物业小区内维护秩序不能采用（）的手段",
    "options" : [ "A:巡视查看", "B:制止不良行为", "C:疏导人群有序流动", "D:查处违法行为" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 212,
    "type" : "single",
    "content" : "为了维护物业小区正常秩序，保安员可以采取（）的手段",
    "options" : [ "A:安全防范", "B:治安查处", "C:处罚违章", "D:交通整治" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 213,
    "type" : "single",
    "content" : "（）是保安员接受职业教育培训和职业技能鉴定等的基本依据",
    "options" : [ "A:《保安员国家职业标准（试行）》", "B:《保安服务管理条例》", "C:《保安服务操作规程与质量控制》", "D:《公安机关实施保安服务管理条例办法》" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 214,
    "type" : "single",
    "content" : "（）为保安员的职业发展提供了一个阶段式的渐进途径，为保安员建立了明确的职业发展目标体系",
    "options" : [ "A:保安服务管理条例", "B:国家保安员职业标准", "C:保安员职业资格证书制度", "D:企事业单位内部治安保卫条例" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 215,
    "type" : "single",
    "content" : "对保安员进行职业技能鉴定的基本标准是（）",
    "options" : [ "A:《保安员国家职业标准（试行）》", "B:《保安服务管理条例》", "C:《保安服务操作规程与质量控制》", "D:《公安机关实施保安服务管理条例办法》" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 216,
    "type" : "single",
    "content" : "某市保安服务公司客户经理甲因为对财务部经理乙不满，于是在日常生活中通过编造信息.谩骂.散发小传单等形式损害乙的名誉，致使乙精神受到严重损害。甲的这种行为属于（）",
    "options" : [ "A:故意伤害行为", "B:招摇撞骗行为", "C:寻衅滋事行为", "D:侮辱他人行为" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 217,
    "type" : "single",
    "content" : "人员密集场所的巡逻任务不包括（）",
    "options" : [ "A:疏导人员有序地行进和流动", "B:巡视.检查场所内的安全设施，确保运转正常", "C:搜查可疑场所", "D:协助处理紧急情况" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 218,
    "type" : "single",
    "content" : "保安员张某和李某在火车站巡逻时，发现一男青年神色慌张，行为诡秘，这两名保安员识别这一可疑情况使用的方法是（）",
    "options" : [ "A:查问法", "B:直接观察法", "C:判断法", "D:视觉判断法" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 219,
    "type" : "single",
    "content" : "保安员在随身护卫工作中若遭遇突发事件，他不能（）",
    "options" : [ "A:迅速采取保护措施", "B:制服不法分子", "C:促使事态扩大", "D:把护卫对象转移到安全地带" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 220,
    "type" : "single",
    "content" : "保安员主要依据（）进行随身护卫工作",
    "options" : [ "A:护卫对象活动的时间", "B:护卫服务合同", "C:护卫对象活动的路线", "D:护卫对象活动的要求" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 221,
    "type" : "single",
    "content" : "保安员周某在一次随身护卫工作中，护卫对象遭遇突然袭击，这时他应当采取的应急措施是（）",
    "options" : [ "A:立即严惩袭击者", "B:对护卫对象采取保护措施", "C:立即扣押袭击者", "D:立即搜查袭击者" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 222,
    "type" : "single",
    "content" : "为了做好随身护卫工作，保安员应当（）",
    "options" : [ "A:根据保安服务合同，制定随身护卫方案", "B:根据保安服务合同，制定有效应对袭击者的抓捕方案", "C:根据护卫对象的需要，采取搜查.检查措施", "D:根据护卫对象的要求，扣留可疑人员" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 223,
    "type" : "single",
    "content" : "随身护卫是保安员对保卫对象所进行的（）活动",
    "options" : [ "A:巡逻.守护", "B:护送.检查", "C:警戒.保护", "D:看守.护送" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 224,
    "type" : "single",
    "content" : "在执行巡逻勤务中，保安员接班时，不正确的做法是（）",
    "options" : [ "A:听取交班人员情况报告", "B:检查交班人员移交的装备", "C:交班人员仅有口头交代而没有填写在交班记录本上的事项可以不关注", "D:查看交班人员的巡逻记录并核对无误" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 225,
    "type" : "single",
    "content" : "根据场所容量.通道及活动特点，保安员可采取（）的措施防止人群拥挤",
    "options" : [ "A:设置临时隔离区", "B:检查场外人员随身携带的物品", "C:实施现场管制", "D:对不服从管理的人员进行治安处罚" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 226,
    "type" : "single",
    "content" : "在进行人群控制的工作中，保安员不能（）",
    "options" : [ "A:查验人员证件", "B:没收违禁危险品", "C:疏导人流，防止踩踏事故", "D:对聚集场所的人群进行分散.限制" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 227,
    "type" : "single",
    "content" : "在人群控制服务中，保安员的主要任务是对聚集场所的人群（）",
    "options" : [ "A:进行身体检查", "B:实施强制搜查", "C:进行疏导.分散.限制", "D:实施隔离.限制他人自由" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 228,
    "type" : "single",
    "content" : "人群控制是保安员在（）维持秩序的服务形式",
    "options" : [ "A:不法分子活动场所", "B:犯罪分子活动场所", "C:人群聚集场所", "D:教育科研场所" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 229,
    "type" : "single",
    "content" : "在没有道路交通标志及交通标线控制的无灯控交叉路口，车辆应当停车瞭望，()",
    "options" : [ "A:让右方道路来车先行", "B:然后保持正常车速行驶", "C:然后提高车速通过", "D:让左方道路来车先行" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 230,
    "type" : "single",
    "content" : "警车.消防车.救护车.工程救险车执行紧急任务时，其他车辆（）",
    "options" : [ "A:加速穿行", "B:谨慎超越", "C:视情让行", "D:应当让行" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 232,
    "type" : "single",
    "content" : "以下是某栋办公大楼消防安全管理情况，不属于安全隐患的是（）",
    "options" : [ "A:楼内消防器材维护记录不完整", "B:一间办公室内电源接触不良", "C:常闭式防火门处于关闭状态", "D:一间办公室内有人无证使用电焊" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 233,
    "type" : "single",
    "content" : "机动车行经交通信号灯控制的交叉路口遇到停止信号，没有停止线的，机动车应（）",
    "options" : [ "A:停在路口以外", "B:停在路口以内", "C:随意停车", "D:可以继续行驶" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 234,
    "type" : "single",
    "content" : "在没有交通信号的道路上，机动车遇行人横过道路时，应当（）",
    "options" : [ "A:鸣喇叭，让行人快走", "B:加速行驶", "C:减速或者停车避让", "D:绕行通过" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 235,
    "type" : "single",
    "content" : "在道路交通活动中，机动车遇行人正在通过人行横道时，应当（）",
    "options" : [ "A:停车让行", "B:绕行通过", "C:持续鸣喇叭通过", "D:提前加速通过" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 236,
    "type" : "single",
    "content" : "两名救护员在发现呼吸.心跳骤停的伤病员的现场，正确的做法是（）",
    "options" : [ "A:两名救护员一起给他做心肺复苏", "B:一名救护员给他做心肺复苏，另外一名拨打急救电话", "C:一名救护员拨打急救电话，另外一名接应救护人员", "D:一名救护员呼救，一名寻找药物" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 237,
    "type" : "single",
    "content" : "下列设备属于巡更系统的前端设备是（）",
    "options" : [ "A:紧急按钮", "B:消防按钮", "C:信息按钮", "D:开门按钮" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 245,
    "type" : "single",
    "content" : "在巡逻勤务中，下列不属于区域巡逻异常情况的是（）",
    "options" : [ "A:在小区巡逻时闻到一股煤气味", "B:在某商场巡逻时闻到一股焦糊味", "C:发现服务单位领导在散步", "D:在某市场巡逻时发现有名过路群众突然晕厥" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 247,
    "type" : "single",
    "content" : "保安员张某和李某在某长途汽车站巡逻时，发现一中年男子衣着褴褛却随身携带大量贵重物品，于是对其进行查问，该中年男子神色慌张，答非所问，这时保安员首先应采取的措施是（）",
    "options" : [ "A:扣押物品", "B:报告车站保卫部门", "C:将该男子抓捕", "D:对该男子进行盘查" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 248,
    "type" : "single",
    "content" : "保安员王某和张某在城市中心广场巡逻时，接到一名群众举报附近有人行窃，保安员首先应该（）",
    "options" : [ "A:认真听取并做好记录", "B:告知举报群众直接报警", "C:立即前往查明情况", "D:下班后报告服务单位" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 249,
    "type" : "single",
    "content" : "人员密集场所巡逻区域警戒的首要目的是（）",
    "options" : [ "A:保障重点区域和重点目标的安全", "B:保障场所周边的治安秩序", "C:保障区域周边人员的安全", "D:保障区域内人员不得随意进出" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 250,
    "type" : "single",
    "content" : "在足球比赛现场，部分球迷认为裁判判罚不公平，情绪激动，冲入赛场追打裁判和另一方球员，造成比赛中断，这时应当采取的疏导方法是（）",
    "options" : [ "A:强制疏散法", "B:截留疏散法", "C:疏散引导法", "D:多路引导法" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 251,
    "type" : "single",
    "content" : "保安员为保障人员密集场所的安全，通过拉警戒线.设隔离带.保安员站位等方式将服务对象与周边隔离而形成的一个相对安全的区域。这个区域被称为（）",
    "options" : [ "A:隔离带", "B:隔离区", "C:安全场所", "D:安全带" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 252,
    "type" : "single",
    "content" : "人员密集场所常用的探测仪根据使用方式可分为（）",
    "options" : [ "A:金属探测仪和非金属探测仪", "B:固定探测仪和便携式探测仪", "C:爆炸物品探测仪和非爆炸物品探测仪D放射性物品探测仪和非放射性物品探测仪" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 253,
    "type" : "single",
    "content" : "保安员在人员密集场所经常使用的安全探测仪器不包括（）",
    "options" : [ "A:金属探测仪", "B:爆炸物品探测仪", "C:红外体温测试仪", "D:放射性物品探测仪" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 254,
    "type" : "single",
    "content" : "下列选项不属于人员密集场所巡逻特点的是（）",
    "options" : [ "A:危险因素不确定", "B:勤务难度大", "C:精力.体能消耗大", "D:保安员不容易受到不法侵害" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 255,
    "type" : "single",
    "content" : "通过设置路碍等阻隔设施，防止无关人员.车辆进入及穿行的人员密集场所的警戒方法称为（）",
    "options" : [ "A:警戒线警戒", "B:哨位警戒", "C:路障警戒", "D:监控警戒" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 256,
    "type" : "single",
    "content" : "下列设备属于消防报警系统的消防控制设备是（）",
    "options" : [ "A:门禁控制器", "B:云台镜头控制器", "C:视频矩阵控制器", "D:自动灭火系统控制装备" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 262,
    "type" : "single",
    "content" : "下列设备属于消防报警系统的前端设备是（）",
    "options" : [ "A:主动红外探测器", "B:微波探测器", "C:烟感式火灾探测器", "D:泄露电缆探测器" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 263,
    "type" : "single",
    "content" : "根据是否有规划，在人员密集场所内设置隔离区的两种情形分为（）",
    "options" : [ "A:场所内部隔离和场所外部隔离", "B:事先划定和活动中设置", "C:活动前设置和活动后设置", "D:专用设施设置和非专用设施设置" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 265,
    "type" : "single",
    "content" : "不属于人员密集场所巡逻区域警戒方法的是（）",
    "options" : [ "A:设置警戒线警戒", "B:设置哨位警戒", "C:设置路障警戒", "D:设置监控设施警戒" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 268,
    "type" : "single",
    "content" : "在潮湿地方发生触电情况时，不应该（）",
    "options" : [ "A:穿上绝缘的鞋", "B:用不锈钢棍迅速将触电者身上的电线挑开", "C:拨打120急救电话", "D:对呼吸.心跳停止者，确定其不带电情况下，立即实施心肺复苏" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 269,
    "type" : "single",
    "content" : "在触电现场，救护员不能（）",
    "options" : [ "A:直接用手将患者身上的电线拿开", "B:拨打120急救电话", "C:在安全情况下，对呼吸.心跳停止者，实施心肺复苏", "D:现场救护直至专业医务人员到达现场" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 270,
    "type" : "single",
    "content" : "为防止治安灾害事故的发生，在重要仓库周边巡逻的保安员不需要重点检查的内容是（）",
    "options" : [ "A:核实仓库所存物品数量", "B:消防器材设施", "C:电线与电器设备", "D:明火与易燃品同步作业情况" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 271,
    "type" : "single",
    "content" : "对于在巡逻中抓获的违法犯罪嫌疑人，保安员应该做的是（）",
    "options" : [ "A:对违法犯罪嫌疑人进行讯问", "B:进行调查取证工作", "C:扭送公安机关", "D:搜查违法犯罪嫌疑人" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 272,
    "type" : "single",
    "content" : "在巡逻中，保安员对于抓获的违法犯罪嫌疑人，不能做的是（）",
    "options" : [ "A:对违法犯罪嫌疑人进行审问", "B:及时向公安机关报告", "C:扭送违法犯罪嫌疑人至公安机关", "D:扭送违法犯罪嫌疑人至服务单位" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 273,
    "type" : "single",
    "content" : "保安员在巡逻中发现有人实施盗窃时，不能做的是（）",
    "options" : [ "A:斥责违法犯罪嫌疑人，使其停止实施盗窃行为", "B:捆绑违法犯罪嫌疑人", "C:扭送违法犯罪嫌疑人至公安机关", "D:扭送违法犯罪嫌疑人至服务单位" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 274,
    "type" : "single",
    "content" : "在巡逻勤务中，下面不属于区域巡逻任务的是（）",
    "options" : [ "A:保护区域内发现的案事件现场", "B:发现各种可疑情况", "C:协助处置区域内的自然灾害事故", "D:搜查犯罪嫌疑人" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 275,
    "type" : "single",
    "content" : "根据大型群众性活动法律法规的规定，不属于大型群众性活动承办者安全责任的是（）",
    "options" : [ "A:落实安全责任制度", "B:处置危害公共安全的突发事件", "C:进行安全检查", "D:开展安全教育" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 276,
    "type" : "single",
    "content" : "根据我国法律法规的规定，下列选项不属于大型群众性活动的是（）",
    "options" : [ "A:某市农历正月十五日晚在中心广场举办烟火晚会", "B:某高校在某市体育中心举办学校春季运动会", "C:某市在该市人才市场举办人才招聘会", "D:某市在展览馆举办车展" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 277,
    "type" : "single",
    "content" : "单位治安保卫人员在履行职责时因故意或重大过失造成侵权，情节严重且构成犯罪的，应当依法（）",
    "options" : [ "A:给予经济处罚", "B:追究刑事责任", "C:给予行政处分", "D:给予治安处罚" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 278,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵纪守法", "B:履行劳动合同", "C:保守客户单位秘密", "D:开展巡逻" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 279,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵守纪律", "B:履行劳动合同", "C:保守商业秘密", "D:查验出入人员证件" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 280,
    "type" : "single",
    "content" : "保安员在工作中应履行遵纪义务,遵纪义务不包括遵守（）",
    "options" : [ "A:本单位的规章制度", "B:本单位的工作纪律", "C:本单位领导扣押他人证件的命令", "D:客户单位的规章制度" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 282,
    "type" : "single",
    "content" : "保安员应当保持仪容整洁。下面关于保安员仪容要求错误的是（）",
    "options" : [ "A:不得文身", "B:不得染指甲", "C:可以化浓妆", "D:发辫不能过肩" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 284,
    "type" : "single",
    "content" : "提倡爱岗敬业,就要求保安员()",
    "options" : [ "A:要干一行,爱一行", "B:不要计较福利待遇", "C:不要计较加班加点", "D:要互相宽容" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 285,
    "type" : "single",
    "content" : "提倡爱岗敬业,就要求保安员()",
    "options" : [ "A:不要转行", "B:不要计较福利待遇", "C:不要计较加班加", "D:要提高保安服务技能" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 286,
    "type" : "single",
    "content" : "诚实守信是职业道德中重要规范之一，在诚实守信的品德和行为中不包括()",
    "options" : [ "A:真实无欺", "B:遵守承诺", "C:遵守契约", "D:团结互助" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 287,
    "type" : "single",
    "content" : "保安员张某和孙某在单位巡逻时发现两名职工打架，首先选择的处理方式是（）",
    "options" : [ "A:详细记录", "B:制止无效则立即报告", "C:立即报警", "D:将围观人员劝离现场" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 288,
    "type" : "single",
    "content" : "保安员张某和王某在某小区巡逻时发现有水从地表渗出，保安员首先应该采取的措施是（）",
    "options" : [ "A:向小区物业管理部门报告", "B:挖开地表检查", "C:报告消防部门", "D:记录情况待巡逻完毕报告小区物业管理部门" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 289,
    "type" : "single",
    "content" : "保安员在某公园巡逻时发现()应当及时报告",
    "options" : [ "A:两人在湖边树下耳语", "B:隐约听见湖边有人呼救", "C:一名中年妇女带着宠物在公园行走", "D:一青年男子在小山上放风筝" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 290,
    "type" : "single",
    "content" : "押运工作中，突然发生盗抢案件应立即启动（）",
    "options" : [ "A:执勤方案", "B:应急预案", "C:生产安全事故方案", "D:交通事故方案" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 291,
    "type" : "single",
    "content" : "犯罪是违反国家法律规定的.具有社会危害性并且应当受到（）的行为",
    "options" : [ "A:法律处罚", "B:刑罚处罚", "C:行政处罚", "D:民事处罚" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 293,
    "type" : "single",
    "content" : "王某在山上游玩时，天气突然变化，雷电交加，王某应该立即（）",
    "options" : [ "A:躲到大树下", "B:躲到悬崖下", "C:躲到山洞口", "D:躲到山洞深处" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 294,
    "type" : "single",
    "content" : "我国常用的最高安全电压为（），超过此电压就容易对人体造成电击或电伤",
    "options" : [ "A:220伏", "B:110伏", "C:36伏", "D:18伏" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 295,
    "type" : "single",
    "content" : "保安员的权利与职责任务是相互联系又相互区别的关系，下列不属于保安员权利的是（）",
    "options" : [ "A:提取犯罪痕迹", "B:享受社会保险", "C:签订劳动合同", "D:享受劳动保护" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 296,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所是以（）为目的.并向社会公众开放.消费者自娱自乐的场所",
    "options" : [ "A:营利", "B:社会公益", "C:传播文化", "D:活跃市场" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 297,
    "type" : "single",
    "content" : "下列选项中，（）不属于娱乐场所的特点",
    "options" : [ "A:营利为目的", "B:社会公益性", "C:向公众开放", "D:自娱自乐" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 298,
    "type" : "single",
    "content" : "下列不属于室内消火栓组成结构的消防设施是（）",
    "options" : [ "A:火灾报警系统", "B:消防水池", "C:消防给水设施", "D:消火栓箱" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 300,
    "type" : "single",
    "content" : "下肢出血时，止血带应扎在（）",
    "options" : [ "A:小腿的上部", "B:大腿的下部", "C:大腿的中上部", "D:小腿的中部" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 301,
    "type" : "single",
    "content" : "下列选项中对干粉灭火器使用方法叙述错误的是（）",
    "options" : [ "A:干粉灭火器最常用的开启方法为压把法", "B:开启干粉灭火棒时，左手握住其中部，将喷嘴对准火焰根部，右手拔掉保险卡，旋转开启旋钮，打开贮气瓶", "C:将灭火器提到距火源适当位置，应先上下颠倒几次，使筒内的干粉松动", "D:手提筒体上部的提环，将筒体颠倒过来，一只手握紧提环，另一只手握住筒体的底圈" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 302,
    "type" : "single",
    "content" : "小动脉.小静脉.毛细血管出血时，首选的止血方法是（）",
    "options" : [ "A:止血带", "B:填塞", "C:间接压迫", "D:加压包扎" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 303,
    "type" : "single",
    "content" : "手指出血，为达到止血作用，应该压住（）",
    "options" : [ "A:出血手指的尖端", "B:出血手指根部前后两侧", "C:出血手指根部左右两侧", "D:腕部的桡动脉.尺动脉" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 304,
    "type" : "single",
    "content" : "保安员在执行勤务时，（）能让身体处于有效戒备状态",
    "options" : [ "A:将两腿开立与肩同宽，身体成45度侧向对方，两膝保持略弯曲", "B:将两腿并拢，身体成45度侧向对方，两膝保持略弯曲", "C:将两腿开立与肩同宽，身体直立", "D:将两腿并拢，身体直立" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 305,
    "type" : "single",
    "content" : "构成道路交通活动的四大因素是人.车.（）和交通环境",
    "options" : [ "A:道路", "B:桥梁", "C:涵洞", "D:铁道" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 306,
    "type" : "single",
    "content" : "（）不属于道路交通活动中的车",
    "options" : [ "A:机动车", "B:非机动车", "C:火车", "D:无轨电车" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 307,
    "type" : "single",
    "content" : "当保安员在露天场所发现有人中暑，首先应该（）",
    "options" : [ "A:把病人移到阴凉通风处", "B:维持病人呼吸道畅通", "C:让病人平卧，头部略垫高", "D:现场实施心肺复苏" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 308,
    "type" : "single",
    "content" : "中暑病人的症状不包括（）",
    "options" : [ "A:出大汗.头晕.体温升高", "B:口渴.恶心.呕吐", "C:突然剧烈胸疼", "D:昏迷" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 310,
    "type" : "single",
    "content" : "在道路交通活动中，不属于道路交通参与者的是（）",
    "options" : [ "A:出租车司机", "B:骑自行车的人", "C:路上的行人", "D:火车司机" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 312,
    "type" : "single",
    "content" : "保安员在客户单位及服务区域工作时，其职责任务之一是（）",
    "options" : [ "A:及时发现并抓捕犯罪嫌疑人", "B:及时发现.处罚犯罪嫌疑人", "C:及时发现.制止违法犯罪", "D:及时发现.讯问犯罪嫌疑人" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 315,
    "type" : "single",
    "content" : "刑事诉讼活动是由国家法律所确定的专门机关为惩罚犯罪.（）而开展的侦查.起诉.审判等一系列活动",
    "options" : [ "A:保障人权", "B:保护群众", "C:预防犯罪", "D:制止犯罪" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 316,
    "type" : "single",
    "content" : "某饭店老板白某因为对本市卫生防疫部门对其饭店卫生不合格的处罚不服，遂向人民法院提起诉讼，要求人民法院判决撤销该市卫生防疫部门对其饭店的处罚决定。白某的起诉属于（）",
    "options" : [ "A:刑事诉讼", "B:民事诉讼", "C:行政诉讼", "D:法律仲裁" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 317,
    "type" : "single",
    "content" : "根据刑事诉讼法的规定，人民检察院对公安机关侦查终结需要提起公诉的案件及进行审查，决定是否向人民法院提起公诉的活动称为（）",
    "options" : [ "A:侦查监督", "B:审判前置", "C:审查起诉", "D:提起公诉" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 318,
    "type" : "single",
    "content" : "地下建筑发生火灾，保安员应立即（）",
    "options" : [ "A:组织人员躲藏起来，避免发生中毒或被烧死的事故", "B:启用事故照明设施或使用手电筒.电池灯等照明器具引导人员疏散", "C:积极抢救贵重物资", "D:关闭起火房间的门，防止烟雾蔓延到其它房间" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 319,
    "type" : "single",
    "content" : "建筑物消防安全疏散设施不包括（）",
    "options" : [ "A:疏散楼梯", "B:疏散通道", "C:阳台", "D:普通电梯" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 320,
    "type" : "single",
    "content" : "建筑物消防安全疏散设施不包括（）",
    "options" : [ "A:安全出口", "B:疏散指示标志", "C:应急广播", "D:普通电梯" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 321,
    "type" : "single",
    "content" : "下列属于我国公民基本义务的是（）",
    "options" : [ "A:遵守公共秩序", "B:申诉控告", "C:检举揭发", "D:接受高等教育" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 322,
    "type" : "single",
    "content" : "公民履行（）是国家存在.政府运行.社会发展及保证公民安居乐业的基本条件",
    "options" : [ "A:基本义务", "B:基本权利", "C:纳税义务", "D:保密义务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 323,
    "type" : "single",
    "content" : "某保安服务公司保安员牛某因其户口所在地的村委会要选举村长，于是向公司请假返家参加选举。牛某参加选举的权利属于宪法赋予公民的（）",
    "options" : [ "A:人身权利", "B:经济权利", "C:平等权利", "D:政治权利" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 325,
    "type" : "single",
    "content" : "目前我国保安服务已经从单一的人力保安，发展为保安守护.巡逻.（）.安全技术防范等四大主要业务",
    "options" : [ "A:保安押运", "B:咨询", "C:犬防", "D:开锁" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 326,
    "type" : "single",
    "content" : "1984年12月，广东省深圳市成立的全国第一家保安服务公司是()",
    "options" : [ "A:深圳市保安服务公司", "B:蛇口区保安服务公司", "C:广东省保安服务公司", "D:福田区保安服务公司" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 327,
    "type" : "single",
    "content" : "保安服务是由依法设立的保安从业单位提供的（）.社会化安全防范服务及相关的服务",
    "options" : [ "A:现代化", "B:专业化", "C:技术化", "D:特殊化" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 328,
    "type" : "single",
    "content" : "保安服务是由依法设立的保安从业单位提供的（）安全防范服务及相关的服务",
    "options" : [ "A:现代化.全面化", "B:社会化.技术化", "C:专业化.社会化", "D:专业化.特殊化" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 329,
    "type" : "single",
    "content" : "下列不属于我国公民基本义务的是（）",
    "options" : [ "A:依法纳税", "B:维护民族团结", "C:享受义务教育", "D:保守国家秘密" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 330,
    "type" : "single",
    "content" : "在我国宪法条文中，公民的（）是国家对公民最重要.最根本的要求",
    "options" : [ "A:纳税义务", "B:基本义务", "C:保密义务", "D:爱国义务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 331,
    "type" : "single",
    "content" : "保安服务主要依据（）或根据自行招用保安员单位的要求，履行保安服务职责",
    "options" : [ "A:合同的约定", "B:客户的要求", "C:公安机关的要求", "D:保安公司的要求" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 332,
    "type" : "single",
    "content" : "目前我国保安服务已经从单一的人力保安，发展为守护.巡逻.押运.（）等四大主要业务",
    "options" : [ "A:安全技术防范", "B:咨询", "C:开锁", "D:犬防" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 333,
    "type" : "single",
    "content" : "在我国开办保安服务公司要向公安机关提出申请，经审核批准，获得（）后才有资格提供保安服务",
    "options" : [ "A:工商营业执照", "B:保安服务许可证", "C:特种行业许可证", "D:保安服务培训证" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 334,
    "type" : "single",
    "content" : "（）不属于我国保安服务的主要任务",
    "options" : [ "A:维护服务区域内的正常秩序", "B:预防服务区域内的治安事件", "C:调解服务区域内的家庭纠纷", "D:协助保护服务区域内的违法犯罪现场" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 335,
    "type" : "single",
    "content" : "我国保安服务具有特许性.有偿性.（）.契约性.风险性的特点",
    "options" : [ "A:安全性", "B:辅助性", "C:自律性", "D:防范性" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 336,
    "type" : "single",
    "content" : "保安服务公司是依法成立的专门从事安全防范服务.维护（）安全的企业",
    "options" : [ "A:客户单位", "B:内部单位", "C:企业单位", "D:物业小区" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 337,
    "type" : "single",
    "content" : "在我国依法成立的保安服务公司属于（）",
    "options" : [ "A:事业单位", "B:企业单位", "C:行政机关", "D:社会团体" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 338,
    "type" : "single",
    "content" : "保安从业单位包括（）和自招保安员单位",
    "options" : [ "A:保卫机构", "B:公安机关", "C:保安服务公司", "D:内部单位" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 339,
    "type" : "single",
    "content" : "为满足社会对安全服务的需求，19世纪后半期，美国成立了第一个专业化的私人保安组织（）",
    "options" : [ "A:克林顿私人侦探所", "B:平克顿私人侦探所", "C:伯恩斯侦探事务所", "D:威克胡特侦探所" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 340,
    "type" : "single",
    "content" : "公安部在深圳召开的首次全国保安工作会议上提出了规范保安服务业发展的“（）.统一审批.统一培训.统一经营.统一服装”的“五统一”原则",
    "options" : [ "A:统一组织", "B:统一领导", "C:统一规划", "D:统一勤务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 341,
    "type" : "single",
    "content" : "公安部在深圳召开的首次全国保安工作会议上提出了规范保安服务业发展的“统一领导.统一审批.统一培训.统一经营.（）”的“五统一”原则",
    "options" : [ "A:统一组织", "B:统一服装", "C:统一规划", "D:统一勤务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 343,
    "type" : "single",
    "content" : "早在1400多年前的南北朝末期，由于社会（）的发展及对安全的需求，一些富豪商贾长途运送财物，大多雇请一些会使刀弄棒.武艺高强的武士护送，这就是保安服务的萌芽",
    "options" : [ "A:政治", "B:经济", "C:文化", "D:人口" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 344,
    "type" : "single",
    "content" : "当经济社会发展到一定程度，人们对安全的需求日益增长，（）服务便应运而生，逐步发展成现代的保安服务业",
    "options" : [ "A:公共安全", "B:治安防范", "C:有偿保安", "D:义务防范" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 345,
    "type" : "single",
    "content" : "保安服务业是（）为个体或群体提供有偿安全服务的一个行业",
    "options" : [ "A:公安机关", "B:物业公司", "C:治安组织", "D:保安从业单位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 346,
    "type" : "single",
    "content" : "保安服务是由依法设立的（）提供的专业化.社会化安全防范服务及相关的服务",
    "options" : [ "A:物业公司", "B:治安联防队", "C:机关团体", "D:保安从业单位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 347,
    "type" : "single",
    "content" : "保安服务是由（）提供的安全防范服务及相关服务",
    "options" : [ "A:公安机关", "B:客户单位", "C:保安服务从业单位", "D:保安协会" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 348,
    "type" : "single",
    "content" : "从事保安职业，必须具备的基本条件有（）",
    "options" : [ "A:大专以上文化教育", "B:高中以上文化教育", "C:小学以上文化教育", "D:初中以上文化教育" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 349,
    "type" : "single",
    "content" : "张某在某机关单位做保安员，根据规定张某不准（）",
    "options" : [ "A:根据任务需要设立临时隔离区", "B:查验出入人员的证件", "C:开展巡逻.守护", "D:暂扣他人不明财物" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 350,
    "type" : "single",
    "content" : "某知名物业管理企业聘用了近百名保安员为客户提供门卫.巡逻.秩序维护等服务，这些保安员只能被派往（）",
    "options" : [ "A:重点单位区域内", "B:大型活动场所内", "C:物业管理区域内", "D:公共娱乐场所内" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 351,
    "type" : "single",
    "content" : "（）是保安员的禁止性行为",
    "options" : [ "A:维护公共秩序", "B:查验出入人员的证件", "C:没收他人非法证件", "D:根据任务需要设立临时隔离区" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 352,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，物业管理企业聘用的保安员在维护物业管理区域内的（）时，应当履行职责，不得侵害公民的合法权益",
    "options" : [ "A:公共秩序", "B:社会秩序", "C:治安秩序", "D:物业秩序" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 353,
    "type" : "single",
    "content" : "小李是某小区的一名保安员，在工作中他不能（）",
    "options" : [ "A:登记出入的车辆", "B:查验出入人员的证件", "C:扣押外来人员证件", "D:查验运输货物车辆" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 354,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，业主有参加业主大会会议的权利，不享有（）",
    "options" : [ "A:知情权", "B:投票权", "C:管理权", "D:监督权" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 355,
    "type" : "single",
    "content" : "作为保安员，在工作中（）的行为是被禁止的",
    "options" : [ "A:制止违法犯罪行为", "B:侮辱他人", "C:登记出入车辆", "D:设立临时隔离区" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 356,
    "type" : "single",
    "content" : "（）是保安员的禁止性行为",
    "options" : [ "A:查验出入人员的证件", "B:限制他人人身自由", "C:在服务区内巡逻", "D:根据任务需要设立临时隔离区" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 357,
    "type" : "single",
    "content" : "某天，某市环保机关工作人员甲等一行3人到该市一大型造纸厂进行排污检查。当时保安员乙.丙在该纸厂出入口值班，乙.丙以客户单位正在生产.不同意进入为由，拒不让甲等人进厂。最终致使甲等人无法履行排污检查职责。乙.丙的这种行为属于（）",
    "options" : [ "A:正当业务行为", "B:妨害公务行为", "C:规范勤务行为", "D:正当职务行为" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 358,
    "type" : "single",
    "content" : "在我国法律体系中，刑法所具有的（）是最严厉的，是任何其他法律所不具有的",
    "options" : [ "A:国家措施", "B:国家手段", "C:国家执行力", "D:国家强制力" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 359,
    "type" : "single",
    "content" : "不属于人员密集场所巡逻特点的是（）",
    "options" : [ "A:危险因素不确定", "B:勤务难度大", "C:岗位固定", "D:处置要求高" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 360,
    "type" : "single",
    "content" : "在某大型群众性活动现场，两名青年在现场起哄，引起周围观众不满，这时现场保安员首先要采取的措施是（）",
    "options" : [ "A:强行将滋事人员带离现场", "B:报告现场指挥部", "C:疏散周边观众", "D:疏散现场群众" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 361,
    "type" : "single",
    "content" : "在某大型博览会现场，一参展商铺起火，保安员为维持现场秩序，保障人员安全，不宜采用的疏导方法是（）",
    "options" : [ "A:隔离起火商铺", "B:多路疏散现场人群", "C:停止人员入场，并疏散在场人员", "D:人墙法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 362,
    "type" : "single",
    "content" : "不属于人员密集场所巡逻特点的是（）",
    "options" : [ "A:危险因素不确定", "B:勤务难度大", "C:精力.体能消耗大", "D:需要大批交通工具" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 363,
    "type" : "single",
    "content" : "保安员的权利与职责任务是相互联系又相互区别的关系，下列不属于保安员权利的是（）",
    "options" : [ "A:开展安全检查和报警监控活动", "B:开展守护.巡逻活动", "C:登记出入境车辆和物品", "D:正当防卫与紧急避险" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 364,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，在大型群众性活动举办过程中,由（）负责处置危害公共安全的突发事件",
    "options" : [ "A:活动举办者", "B:活动承办者", "C:场所管理者", "D:公安机关" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 365,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，在大型群众性活动举办前，由（）对活动场所组织安全检查",
    "options" : [ "A:活动承办者", "B:活动举办者", "C:场所管理者", "D:公安机关" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 366,
    "type" : "single",
    "content" : "某高校在校生12000人，该校每年在4月份均举办学校春季运动会，全校师生均参加该运动会。从安全管理角度讲，该运动会属于（）活动",
    "options" : [ "A:小型群众性", "B:中型群众性", "C:大型群众性", "D:学校公益性" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 367,
    "type" : "single",
    "content" : "1985年1月，全国政法工作会议明确提出，借鉴国外经验，在()创建保安服务公司",
    "options" : [ "A:所有城市", "B:省会城市", "C:大中城市", "D:大城市" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 368,
    "type" : "single",
    "content" : "中国清朝时期，为满足客户对安全的需要，一种以专门提供（）安全护卫的;镖局;应运而生，这是我国保安服务业的雏形",
    "options" : [ "A:单位", "B:公共", "C:有偿", "D:无偿" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 369,
    "type" : "single",
    "content" : "保安从业人员在协助维护社会治安工作中已成为一支重要的社会（）力量",
    "options" : [ "A:技术防范", "B:安全防范", "C:人力防范", "D:公共防范" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 370,
    "type" : "single",
    "content" : "（）服务业是为个体或群体提供有偿安全服务的一个行业",
    "options" : [ "A:物业", "B:保安", "C:公共", "D:物流" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 371,
    "type" : "single",
    "content" : "保安服务业是保安从业单位为个体或群体提供（）安全服务的一个行业",
    "options" : [ "A:有偿", "B:无偿", "C:人身", "D:财产" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 372,
    "type" : "single",
    "content" : "在足球比赛现场，发现个别球迷情绪激动，为保证比赛正常进行，保安员对该球迷应当首先采取的方法是（）",
    "options" : [ "A:包围隔离", "B:规劝", "C:强制疏散", "D:人墙法" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 373,
    "type" : "single",
    "content" : "在人员密集场所巡逻时，下列选项中保安员不须报告场所管理部门或报警的情况是（）",
    "options" : [ "A:在人潮涌动的地铁站突然发生火灾", "B:在演唱会现场局部出现人群骚动", "C:在展销会的现场两人因故扭打起来，周围有大量围观人员", "D:在火车站入口处，两乘客因故发生争吵并自行停止" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 374,
    "type" : "single",
    "content" : "某重点要害单位由于经费原因，在警戒区内有部分地方没有被技术防范系统覆盖，此部分地区就是该单位的（）",
    "options" : [ "A:防护区", "B:禁区", "C:盲区", "D:监控区" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 375,
    "type" : "single",
    "content" : "以下不属于区域巡逻方案的内容是（）",
    "options" : [ "A:服务单位的性质和重要程度", "B:服务单位人员基本情况和主要往来人员情况", "C:服务单位领导个人资产情况", "D:服务单位的地形地貌等特征" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 376,
    "type" : "single",
    "content" : "下列各组均属于人员密集场所可疑情况的是（）",
    "options" : [ "A:演唱会入口放置的无人认领的旅行包；集贸市场携带管制刀具的人员", "B:人才市场手持镊子尾随他人的男青年；演唱会现场热烈鼓掌的人员", "C:闹市区衣衫破旧.携带贵重物品的男子；码头候车厅外打电话声音较大的男子", "D:政府广场放置的类似爆炸装置的不明物品；候机楼外拥抱的人" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 377,
    "type" : "single",
    "content" : "在一大型演唱会的现场，由于突降暴雨，现场大规模的观众向出口云集，保安员不能采用的人群疏导方法是（）",
    "options" : [ "A:人墙法", "B:多路引导法", "C:疏散引导法", "D:强制驱散法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 381,
    "type" : "single",
    "content" : "2005年，《国际心肺复苏指南》建议，实施胸外心脏按压时，每（）个循环更换一个按压者",
    "options" : [ "A:2", "B:5", "C:10", "D:15" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 382,
    "type" : "single",
    "content" : "某保安服务公司的保安员马某系回族，信仰伊斯兰教。马某信教的权利和自由属于（）赋予的",
    "options" : [ "A:宪法", "B:民族区域自治法", "C:宗教法", "D:民族法" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 383,
    "type" : "single",
    "content" : "如果公民不履行或不忠实地履行基本义务，国家有权予以谴责.（）和制裁",
    "options" : [ "A:惩罚", "B:批评", "C:处分", "D:制止" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 384,
    "type" : "single",
    "content" : "宪法规定公民的社会经济权利包括财产权.劳动的权利和义务.休息权.（）.文化教育权.特定人的权利等",
    "options" : [ "A:国家赔偿权", "B:取得报酬权", "C:物质帮助权", "D:身体健康权" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 385,
    "type" : "single",
    "content" : "王某在大草原上游玩时,天气突然变化，雷电交加，他应该立即（）",
    "options" : [ "A:躲到附近的大树下", "B:躲到附近小草棚里", "C:侧躺在地，双手抱膝", "D:蹲在地上，双手抱膝" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 386,
    "type" : "single",
    "content" : "（）不是引起中暑的诱因",
    "options" : [ "A:高温车间工作", "B:暑天在户外长时间活动", "C:温度高.通风设备不好的公共场所", "D:嘈杂的环境" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 387,
    "type" : "single",
    "content" : "保安员张某在小区内巡逻，突然发现有人晕倒，这时，他首先应该（）",
    "options" : [ "A:赶快为病人做心肺复苏", "B:立即高声呼救，寻求帮助", "C:可以悄悄走开", "D:返回办公室，请示领导，再做决定" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 388,
    "type" : "single",
    "content" : "保安押运的对象主要是（）",
    "options" : [ "A:来源合法.不能随便移动的财物", "B:来源合法.可以移动的财物", "C:来源明确.可以移动的财物", "D:来源明确.不能随便移动的财物" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 389,
    "type" : "single",
    "content" : "足球比赛中，发生球迷骚乱，保安员应采取的疏散方法是（）",
    "options" : [ "A:多路引导法", "B:截留疏导法", "C:疏散引导法", "D:强制疏散法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 390,
    "type" : "single",
    "content" : "下列不属于人员密集场所巡逻任务的是（）",
    "options" : [ "A:巡视.检查场所内的安全设施，确保运转正常", "B:预防制止违法犯罪活动", "C:协助处理紧急情况", "D:管理巡逻区域重点人口" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 391,
    "type" : "single",
    "content" : "下面属于事先划定隔离区方法的是（）",
    "options" : [ "A:包围隔离", "B:划线隔离", "C:穿插隔离", "D:单向隔离" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 392,
    "type" : "single",
    "content" : "不属于人员密集场所巡逻特点的是（）",
    "options" : [ "A:危险因素不确定", "B:勤务难度适中", "C:精力.体能消耗大", "D:处置要求高" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 393,
    "type" : "single",
    "content" : "不属于人员密集场所巡逻特点的是（）",
    "options" : [ "A:危险因素确定", "B:勤务难度大", "C:精力.体能消耗大", "D:处置要求高" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 394,
    "type" : "single",
    "content" : "某公园的灯会，人员密度非常大，突然发现公园一处着火，现场人员情绪激动，人流出现异常，这时保安员不能采用的疏导方法是（）",
    "options" : [ "A:驱散疏导", "B:截留疏导", "C:疏散引导", "D:隔离疏导" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 395,
    "type" : "single",
    "content" : "保安员李某和王某在某大型人才交流会现场巡逻，不属于可疑人员的是（）",
    "options" : [ "A:某甲：神态怪异，精神慌张", "B:某乙：行为局促，惴惴不安", "C:某丙：一直尾随一名携包女子", "D:某丁：在某公司咨询点不断询问" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 396,
    "type" : "single",
    "content" : "保安员在人员密集场所发现（）应当提高警惕",
    "options" : [ "A:街头无人认领的箱包", "B:带领宠物在街边行走的女青年", "C:码头打电话的乘客", "D:火车站携带大量行李的人员" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 397,
    "type" : "single",
    "content" : "在人员密集场所巡逻中，以下不属于哨位警戒的是（）",
    "options" : [ "A:固定哨位警戒", "B:流动哨位警戒", "C:监控哨位警戒", "D:瞭望哨位警戒" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 398,
    "type" : "single",
    "content" : "在人员密集场所设置隔离区的首要目的是（）",
    "options" : [ "A:使人员有序流动，确保场所人员安全", "B:确保场所重要设施安全", "C:确保场所的环境良好", "D:确保场所内的活动正常开展" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 399,
    "type" : "single",
    "content" : "春运期间，保安员李某和张某在候车大厅巡逻时发现两名乘客因相互碰撞而大声争吵，引来不少围观人员。保安员李某和张某下列做法不正确的是（）",
    "options" : [ "A:将两人带回保安队进行经济处罚", "B:如果双方争吵激烈，两名保安员可将两人分开进行劝解", "C:如果争吵的过程中，围观人员较多，两名保安员可劝导疏散围观群众", "D:劝阻无效，立即报告" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 400,
    "type" : "single",
    "content" : "我们经常可以看到，在电线的接头处包有黑色的胶布，这样做的主要目的是（）",
    "options" : [ "A:绝缘，避免漏电", "B:美观", "C:使线路导电顺畅", "D:使接头处更结实" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 401,
    "type" : "single",
    "content" : "保安员李某在建筑工地执行保安勤务时，必须配备（）",
    "options" : [ "A:安全鞋", "B:安全帽", "C:防护手套", "D:防护服" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 402,
    "type" : "single",
    "content" : "警告标志的作用是警告（）",
    "options" : [ "A:车辆.行人注意危险地点", "B:车辆.行人不准通行", "C:驾驶人前面有弯路", "D:驾驶人前面容易拥堵" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 403,
    "type" : "single",
    "content" : "道路与铁路平面交叉道口有两个红灯交替闪烁或者一个红灯亮时，（）",
    "options" : [ "A:车辆在确保安全的情况下可以通行", "B:禁止车辆.行人通行", "C:禁止车辆通行，但行人可以通行", "D:禁止行人通行，但车辆可以通行" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 404,
    "type" : "single",
    "content" : "绿色方向指示信号灯的箭头向右时，准许车辆（）",
    "options" : [ "A:直行", "B:左转", "C:右转", "D:掉头" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 411,
    "type" : "single",
    "content" : "作为交通活动主体的人是（）",
    "options" : [ "A:交通管理者", "B:交通组织者", "C:交通参与者", "D:交通引导者" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 415,
    "type" : "single",
    "content" : "道路交通活动构成的四大要素是（）",
    "options" : [ "A:驾驶员.火车.公路和交通环境", "B:人.车.道路和交通环境", "C:司机.车辆.城市道路和交通环境", "D:警察.汽车.公路和交通环境" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 429,
    "type" : "single",
    "content" : "心脏病发作时，如果没有反应.无呼吸.无心跳，那么首先应该（）",
    "options" : [ "A:实施心肺复苏", "B:打电话通知他的家人", "C:给病人饮水", "D:送病人到医院" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 431,
    "type" : "single",
    "content" : "清除溺水者口鼻异物的正确方法是（）",
    "options" : [ "A:把溺水者的头偏向一侧", "B:救护员半蹲，让溺水者头朝下倚靠着", "C:溺水者仰卧在地上，用仰头举颏法", "D:将溺水者倒挂，使异物自然排出" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 433,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，（）不属于保安员的权利",
    "options" : [ "A:享受劳动保护", "B:接受表彰奖励", "C:履行服务合同", "D:享受社会保险" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 434,
    "type" : "single",
    "content" : "保安员的权利与职责任务是相互联系又相互区别的关系，下列不属于保安员权利的是（）",
    "options" : [ "A:享受劳动保护", "B:享受社会保险", "C:采取扣押措施", "D:签订劳动合同" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 435,
    "type" : "single",
    "content" : "保安员的权利与职责任务是相互联系又相互区别的关系，下列不属于保安员权利的是（）",
    "options" : [ "A:开展报警活动", "B:享受社会保险", "C:签订劳动合同", "D:享受劳动保护" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 436,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，在大型群众性活动举办前,由（）负责提供必要的停车场地，并维护秩序",
    "options" : [ "A:活动举办者", "B:活动承办者", "C:场所管理者", "D:保安公司" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 437,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，在大型群众性活动举办前，由（）落实灭火.应急疏散等措施并组织演练",
    "options" : [ "A:活动承办者", "B:活动举办者", "C:场所管理者", "D:公安机关" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 438,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，对大型群众性活动的举办由（）进行安全许可",
    "options" : [ "A:活动承办者", "B:活动举办者", "C:保安公司", "D:公安机关" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 439,
    "type" : "single",
    "content" : "某市文化传播公司拟举办一场演唱会，总共向社会派发.销售800张门票，从安全管理角度讲，该演唱会不属于（）活动",
    "options" : [ "A:大型群众性", "B:商业性", "C:娱乐性", "D:社会性" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 440,
    "type" : "single",
    "content" : "治安保卫人员张某受单位负责人指使侵害了他人的合法权益，（）应依法承担相应的责任",
    "options" : [ "A:张某和单位负责人", "B:张某", "C:单位负责人", "D:单位保卫部门的负责人" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 441,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所可以不悬挂警示标志有（）",
    "options" : [ "A:禁止喧哗", "B:禁未成年人进入", "C:禁娼", "D:禁赌" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 442,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所在安全管理方面可以允许（）进入娱乐场所",
    "options" : [ "A:携带腐蚀性物品的人员", "B:携带刺鼻气味物品的人员", "C:携带匕首的人员", "D:携带食品饮料的人员" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 443,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所在安全管理方面不得（）",
    "options" : [ "A:更新安全设施", "B:覆盖指示标志", "C:进行安全检查", "D:悬挂警示标志" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 444,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所可以为进入娱乐场所的人员（）",
    "options" : [ "A:提供赌具", "B:供应香烟", "C:介绍卖淫", "D:提供毒品" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 445,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所可以为进入娱乐场所的人员（）",
    "options" : [ "A:提供赌具", "B:容留卖淫", "C:供应烈酒", "D:注射毒品" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 446,
    "type" : "single",
    "content" : "保安员的权利与职责任务是相互联系又相互区别的关系，下列不属于保安员权利的是（）",
    "options" : [ "A:享受劳动保护", "B:享受社会保险", "C:签订劳动合同", "D:开展执法检查" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 447,
    "type" : "single",
    "content" : "道路指示标线是（）",
    "options" : [ "A:促使道路使用者了解道路上的特殊情况，提高警觉，准备应变措施的标线", "B:告知道路交通的通行.禁止.限制等特殊规定，车辆驾驶人及行人必须遵守的标线", "C:指示车行道.行驶方向.路面边缘.停车位等的标线", "D:车行道边缘线" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 449,
    "type" : "single",
    "content" : "道路交通标志具有（）",
    "options" : [ "A:法令性质，车辆驾驶人.行人可以视情况遵守", "B:政策性质，车辆驾驶人.行人可以视情况遵守", "C:指示性质，车辆驾驶人.行人都必须遵守", "D:法令性质，车辆驾驶人.行人都必须遵守" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 450,
    "type" : "single",
    "content" : "一般来说，最简便的巡逻方式是（）",
    "options" : [ "A:步巡", "B:骑巡", "C:车巡", "D:舟巡" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 52,
    "type" : "single",
    "content" : "一般来说，最传统的巡逻方式是（）",
    "options" : [ "A:步巡", "B:骑巡", "C:车巡", "D:舟巡" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 457,
    "type" : "single",
    "content" : "巡逻人员应当认真填写交班记录，以下说法不正确的是（）",
    "options" : [ "A:填写交班记录应当及时", "B:填写交班人员班组.姓名和交班时间", "C:填写已经发现但未能及时处理或未处理完结事项", "D:填写巡逻人员执勤体会" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 458,
    "type" : "single",
    "content" : "下列内容中不属于出入口守卫职责范围的是（）",
    "options" : [ "A:查验出入证件", "B:阻止无关人员进入", "C:处理客户单位内部人员纠纷", "D:客户单位秩序维护" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 459,
    "type" : "single",
    "content" : "保安员在出入口实施验证.登记.疏导等保安服务活动所针对的对象是出入的（）",
    "options" : [ "A:人员和车辆", "B:人员和物资", "C:人员.车辆和物资", "D:车辆和物资" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 460,
    "type" : "single",
    "content" : "在保安守护工作中，出入口根据位置不同分为工作区出入口.生活区出入口和（）",
    "options" : [ "A:工作时间出入口", "B:内部车辆出入口", "C:仓储区出入口", "D:工作人员出入口" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 461,
    "type" : "single",
    "content" : "在武装押运保安服务工作中，根据工作任务的需要，保安员不能（）",
    "options" : [ "A:通过设置警示标志把押运车与周边隔离而临时形成一个相对安全的区域", "B:通过拉设隔离带把押运对象与周边隔离而形成一个相对安全的区域", "C:在押运车辆经停的公共场所设置长期固定的隔离区域", "D:通过保安员站位的方式把押运车与周边隔离而临时形成一个相对安全的区域" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 462,
    "type" : "single",
    "content" : "与人友好交往的过程中应避免（）",
    "options" : [ "A:语言文明", "B:态度生硬", "C:待人谦和", "D:举止端庄" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 463,
    "type" : "single",
    "content" : "保安员吴某在某住宅小区监控中心从事保安服务工作，根据保安员的职责要求，他可以（）",
    "options" : [ "A:剪辑监控影像资料", "B:将录像资料复制给社会人员", "C:向媒体提供监控影像资料", "D:按规定保存监控录像资料" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 464,
    "type" : "single",
    "content" : "下面关于礼的说法正确的是()",
    "options" : [ "A:表示敬意的通称", "B:是一种纪律", "C:是一种思维方式", "D:是一种意识" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 465,
    "type" : "single",
    "content" : "在保安服务工作中，（）不是保安员的禁止性行为",
    "options" : [ "A:没收他人非法财物", "B:搜查他人身体", "C:阻碍执行公务", "D:开展报警监控活动" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 466,
    "type" : "single",
    "content" : "申请设立保安服务公司时，受理的公安机关应当自收到申请材料之日起（）日内进行审核",
    "options" : [ "A:20", "B:30", "C:15", "D:10" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 467,
    "type" : "single",
    "content" : "保安员在提供保安服务时，不准（）",
    "options" : [ "A:以暴力威胁处置纠纷", "B:查验出入人员的证件", "C:登记出入的车辆", "D:根据任务需要设立临时隔离区" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 468,
    "type" : "single",
    "content" : "保安员在保安服务工作中不能（）",
    "options" : [ "A:开展安全检查", "B:查验出入人员的证件", "C:对犯罪嫌疑人实施身体搜查", "D:根据任务需要设立临时隔离区" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 469,
    "type" : "single",
    "content" : "在某客户单位服务的保安员工作时不能（）",
    "options" : [ "A:开展巡逻守护", "B:查验出入人员的证件", "C:登记出入的车辆", "D:受客户单位指使追索合法债务" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 470,
    "type" : "single",
    "content" : "保安服务许可证的式样是由（）规定的",
    "options" : [ "A:保安服务公司", "B:自行招用保安员的单位", "C:全国保安服务行业协会", "D:国务院公安部门" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 471,
    "type" : "single",
    "content" : "保安员即使是为了履行职责，也不能（）",
    "options" : [ "A:实施紧急避险", "B:查验出入人员的证件", "C:登记出入的车辆", "D:进入客户私人领域" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 472,
    "type" : "single",
    "content" : "申请设立从事武装押运的保安服务公司时，受理的公安机关应当自收到申请材料之日起（）日内进行审核",
    "options" : [ "A:60", "B:30", "C:45", "D:15" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 473,
    "type" : "single",
    "content" : "下列不属于室内人员密集场所的是（）",
    "options" : [ "A:举行学术报告演讲的某高校学术报告厅", "B:上班时间的某企业行政办公楼", "C:室内体能训练中心", "D:火车站前广场" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 474,
    "type" : "single",
    "content" : "下列不属于室外人员密集场所的是（）",
    "options" : [ "A:正在举办校级运动会的中学运动场", "B:正在举办庆典活动的公园", "C:营业时间内的商业区步行街", "D:机场停机坪" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 475,
    "type" : "single",
    "content" : "下列不属于人员密集场所的是（）",
    "options" : [ "A:大型演唱会的现场", "B:展销会的现场", "C:焰火晚会的街头", "D:停止营业的超市" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 476,
    "type" : "single",
    "content" : "人员密集场所的特点是（）",
    "options" : [ "A:人员相对集中.聚集面积大.安全隐患多", "B:聚集场所数量多.聚集面积大.财物相对集中", "C:财物相对集中.聚集面积大.安全隐患多", "D:人员流动大.人员密度大.安全隐患多" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 477,
    "type" : "single",
    "content" : "两名保安员在街边巡逻时发现一名男子表情恐慌，行色匆匆，身上衣服沾染大量血迹，首先选择的处理方式是（）",
    "options" : [ "A:立即控制该男子", "B:立即报警", "C:跟踪该男子并查出其住处后报警", "D:立即报告，并询问该男子" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 478,
    "type" : "single",
    "content" : "开办保安服务公司要向（）提出申请，经审核批准，获得保安服务许可证后才能提供保安服务",
    "options" : [ "A:公安派出所", "B:县级公安机关", "C:设区的市级公安机关", "D:省级公安机关" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 479,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:根据任务需要设置隔离区域", "B:履行劳动合同", "C:遵守纪律", "D:保守秘密" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 480,
    "type" : "single",
    "content" : "在火灾发生时，错误的自救方法是（）",
    "options" : [ "A:可先进入避难层或由疏散楼梯撤到安全地点", "B:如果楼层已着火燃烧，但楼梯尚未烧断，火势并不十分猛烈时，可披上用水浸湿的衣被，从楼上快速冲下", "C:建筑物六层发生火灾时，如楼梯已经烧断，被困人员可利用房屋的阳台.落水管或竹竿等逃生", "D:多层建筑火灾，如生命受到严重威胁，又无其它自救办法时，可用绳子或床单作为逃生工具" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 481,
    "type" : "single",
    "content" : "对于一个建筑物来讲，（）处在消防中枢位置，具有重要的防火.灭火作用",
    "options" : [ "A:消防控制室", "B:门卫室", "C:保安值班室", "D:办公室" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 482,
    "type" : "single",
    "content" : "使用手轮式二氧化碳灭火器时，先去掉铅封，然后（）手轮，即喷出二氧化碳气体",
    "options" : [ "A:逆时针方向旋转", "B:顺时针方向旋转", "C:拔出", "D:按下" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 483,
    "type" : "single",
    "content" : "手提式灭火器，不应该放置在（）",
    "options" : [ "A:挂钩上", "B:潮湿地面上", "C:托架上", "D:灭火器箱内" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 484,
    "type" : "single",
    "content" : "下列交通方式中，属于道路交通活动的是（）",
    "options" : [ "A:乘飞机", "B:坐火车", "C:乘地铁", "D:搭公交车" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 485,
    "type" : "single",
    "content" : "救护晕厥病人时，不能（）",
    "options" : [ "A:让病人平卧，头部略放低", "B:让病人平卧，头部垫高", "C:维持病人呼吸道畅通，保持室内空气清新", "D:情况不见好转，立即拨打急救电话" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 486,
    "type" : "single",
    "content" : "以下叙述中，不属于晕厥病人症状的是（）",
    "options" : [ "A:头晕.恶心", "B:四肢发凉", "C:牙关紧闭", "D:脉搏快而弱" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 488,
    "type" : "single",
    "content" : "构成道路交通活动的四大因素是人.（）.道路和交通环境",
    "options" : [ "A:飞机", "B:轮船", "C:车辆", "D:火车" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 489,
    "type" : "single",
    "content" : "现场发现脑出血的病人，应该做（）",
    "options" : [ "A:让病人侧卧，拨打急救电话", "B:让病人自己去医院", "C:立即背着病人去医院", "D:让病人平卧，抬高双腿" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 491,
    "type" : "single",
    "content" : "对保安服务工作中接触到的客户单位商业机密，保安员应（）",
    "options" : [ "A:向公安机关报告", "B:向服务单位领导报告", "C:不向任何人或单位报告", "D:向保安管理部门报告" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 492,
    "type" : "single",
    "content" : "《保安服务管理条例》中规定保安服务公司的注册资本不应低于（）人民币",
    "options" : [ "A:50万元", "B:60万元", "C:80万元", "D:100万元" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 493,
    "type" : "single",
    "content" : "根据有关法律法规的规定，物业管理企业雇请的保安员，应当按照（）的规定纳入公安机关监管",
    "options" : [ "A:《企业事业单位内部治安保卫条例》", "B:《保安服务管理条例》", "C:《物业管理条例》", "D:《治安管理处罚法》" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 494,
    "type" : "single",
    "content" : "某知名物业管理企业聘用了近百名保安员为客户提供保安服务，这些保安员不能提供（）等保安服务",
    "options" : [ "A:门卫", "B:押运", "C:巡逻", "D:秩序维护" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 495,
    "type" : "single",
    "content" : "保安员张某和王某在商场内巡逻时发现一个走失的小女孩在独自哭泣，这时保安员首先应采取的措施是（）",
    "options" : [ "A:帮助小女孩寻找家长", "B:等待观望", "C:立即报警", "D:把小女孩带离现场" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 496,
    "type" : "single",
    "content" : "在巡逻勤务中，以下不属于异常情况的是（）",
    "options" : [ "A:在午夜巡逻时发现一人影闪过", "B:在某街区巡逻时发现一男子在街边抽烟", "C:在某广场巡逻时发现大量不明人群聚集", "D:在市场巡逻时发现一小女孩独自哭" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 498,
    "type" : "single",
    "content" : "安全风险评估是指保安员按照科学的程序和方法，从系统的角度出发，对客户制定的或者本单位的区域和目标（）等安全风险进行全面系统的评估，发现隐患并提供相应的安全防范方案的服务形式",
    "options" : [ "A:可能受到的侵袭.发生的意外事故", "B:可能遇到的自然灾害", "C:可能遇到的恐怖袭击", "D:可能遇到的公共卫生事件" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 499,
    "type" : "single",
    "content" : "在执行区域巡逻勤务时，出巡人员应当认真填写巡逻记录，下面说法不正确的是（）",
    "options" : [ "A:记录沿线异常情况", "B:记录异常情况的处置情况", "C:记录出巡人员对异常情况处置的设想和建议", "D:记录请示报告情况" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 500,
    "type" : "single",
    "content" : "风险是（）危险性的指标，是某一有害事故发生的可能性与事故后果的组合",
    "options" : [ "A:检测", "B:衡量", "C:监测", "D:测量" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 501,
    "type" : "single",
    "content" : "风险分析中的后果分析是指对（）在环境因素下可能导致的各种事故后果及可能造成的损失进行分析",
    "options" : [ "A:所有危险", "B:部分危险", "C:随机危险", "D:特定危险" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 502,
    "type" : "single",
    "content" : "安全风险评估是指保安员按照科学的程序和方法，从系统的角度出发，对客户指定的或者本单位的区域和目标可能受到的侵袭.发生的意外事故等安全风险进行全面系统的评估，发现隐患并提供相应的（）方案的服务形式",
    "options" : [ "A:人力服务", "B:技术系统", "C:安全防范", "D:物理防范" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 503,
    "type" : "single",
    "content" : "后果分析是指对特定危险在（）下可能导致的各种事故后果及可能造成的损失进行分析",
    "options" : [ "A:环境因素", "B:政治因素", "C:经济因素", "D:不定因素" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 504,
    "type" : "single",
    "content" : "危险辨识是指在特定系统中确定危险并定义其（）的过程",
    "options" : [ "A:结果", "B:程度", "C:特征", "D:发展" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 505,
    "type" : "single",
    "content" : "风险分析是指在特定系统中进行危险辨识.频率分析.（）的全过程",
    "options" : [ "A:资料调查", "B:环境调查", "C:后果分析", "D:资产辩识" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 506,
    "type" : "single",
    "content" : "风险管理的三要素是（），风险评价和风险控制",
    "options" : [ "A:风险分析", "B:风险转移", "C:频率分析", "D:后果估计" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 507,
    "type" : "single",
    "content" : "风险是衡量（）的指标，是某一有害事故发生的可能性与事故后果的组合",
    "options" : [ "A:可靠性", "B:先进性", "C:危险性", "D:实用性" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 508,
    "type" : "single",
    "content" : "在现场急救中，实施心肺复苏时，胸外心脏按压与人工呼吸的比例为（）",
    "options" : [ "A:5：1", "B:30：2", "C:10：1", "D:15：2" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 509,
    "type" : "single",
    "content" : "在现场急救中，出现（）症状时需做心肺复苏",
    "options" : [ "A:意识丧失", "B:深度昏迷", "C:呼吸心跳骤停", "D:惊厥" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 510,
    "type" : "single",
    "content" : "保安员对仓库进行消防安全管理时，正确的做法是（）",
    "options" : [ "A:必须将危险物品与一般物品分开存放", "B:危险物品与一般物品可以不分开存放但要加强检查", "C:离开仓库时，可以切断电源，包括消防电源", "D:为预防仓库被盗，离开仓库时要锁上安全出口" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 511,
    "type" : "single",
    "content" : "机动车在距离宽度不足4米的窄路50米以内（）",
    "options" : [ "A:加速通过", "B:不准停车", "C:应当停车", "D:提高车速" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 512,
    "type" : "single",
    "content" : "保安员在巡查用电安全时，下列做法符合规范的是（）",
    "options" : [ "A:电线敷设可根据需要自行接拉", "B:用塑料衣架在电线上晾晒衣物", "C:必要时可以用钢.铁丝代替保险丝", "D:照明灯具安装在不燃或难燃基座上" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 513,
    "type" : "single",
    "content" : "下列存在火灾隐患的情况是（）",
    "options" : [ "A:每年检测一次本单位的消防设施.器材", "B:安全出口.疏散通道畅通", "C:有明显的疏散指示标志", "D:防火卷帘下无堆放物品" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 514,
    "type" : "single",
    "content" : "在防火巡查时，要检查用火.用电有无违章情况，下列案例属于安全用火.用电的是（）",
    "options" : [ "A:美容美发厅用电暖器烘烤毛巾", "B:某人离开办公室，所有用电设备处于关闭状态", "C:某人用塑料衣架在电线上晾晒衣服", "D:某人装修房间，私拉电气线路" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 515,
    "type" : "single",
    "content" : "保安员在服务单位巡逻时发现本单位的张某在（），该情况属于区域巡逻时的异常情况",
    "options" : [ "A:办公楼外抽烟", "B:办公楼外打电话", "C:办公楼外草坪散步", "D:办公楼外昏倒" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 516,
    "type" : "single",
    "content" : "以下不属于区域巡逻方案的内容是（）",
    "options" : [ "A:服务单位的基本情况", "B:保安服务公司对服务单位安全评估的结果", "C:区域巡逻的任务", "D:区域巡逻的原则" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 517,
    "type" : "single",
    "content" : "保安从业单位包括保安服务公司和（）",
    "options" : [ "A:保卫机构", "B:公安机关", "C:内部单位", "D:自招保安员单位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 518,
    "type" : "single",
    "content" : "保安服务主要依据合同的约定或根据（）的要求，履行保安服务职责",
    "options" : [ "A:客户", "B:公安机关", "C:保安公司", "D:自行招用保安员单位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 519,
    "type" : "single",
    "content" : "我国现代保安服务的对象主要是客户单位和（）",
    "options" : [ "A:内部单位", "B:自行招用保安员的单位", "C:私营企业", "D:国有企业" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 520,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，（）不是申领《保安员证》的必备条件",
    "options" : [ "A:身体健康", "B:品行良好", "C:具有从事保安服务的经历", "D:属于中国公民" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 521,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾被吊销《保安员证》一次", "B:曾经受过学校处分", "C:曾经三次被行政拘留", "D:被吊销《机动车驾驶证》" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 522,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾经违反社会公德", "B:曾经违反学校纪律", "C:曾经被吊销《保安员证》满4年", "D:曾经两次被吊销《保安员证》" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 523,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾因故意犯罪被刑事处罚", "B:曾经违反学校纪律", "C:曾经违反社会公德", "D:曾因过失被学校领导批评" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 524,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，（）不得从事保安服务",
    "options" : [ "A:曾经违反社会公德的李刚", "B:曾经旷课逃学被记大过的王强", "C:曾被吊销《保安员证》满5年的李勇", "D:曾因偷窃被劳动教养的王军" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 525,
    "type" : "single",
    "content" : "以下人员中，（）不得从事保安服务",
    "options" : [ "A:曾经被收容教育的小李", "B:曾经违反社会公德的小王", "C:曾经违反学校纪律的小张", "D:曾经被吊销《保安员证》满4年的小赵" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 526,
    "type" : "single",
    "content" : "关于保安员的职责，下列说法正确的是（）",
    "options" : [ "A:保安员是治安服务的主要力量", "B:保安员是治安服务的重要力量", "C:保安员是安全管理的重要力量", "D:保安员是保安服务的主要力量" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 527,
    "type" : "single",
    "content" : "关于保安员服务内容，下列说法正确的是（）",
    "options" : [ "A:提供人身.财产.信息等安全防范服务", "B:提供人身.财产.信息等治安防范服务", "C:提供人身.财产.社会治安秩序等安全防范服务", "D:提供人身保护.财产保障.信息安全等方面的服务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 528,
    "type" : "single",
    "content" : "保安员的服务内容主要包括（）",
    "options" : [ "A:在从业单位为公民.法人和其他社会组织提供安全防范服务", "B:在从业单位为公民.法人和其他社会组织提供治安管理服务", "C:保安员以私人名义为公民.法人和其他社会组织提供安全管理服务", "D:保安员以私人名义为公民.法人和其他社会组织提供各种安全服务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 529,
    "type" : "single",
    "content" : "礼仪最基本的三大要素不包括()",
    "options" : [ "A:语言", "B:热情坦诚", "C:行为表情", "D:服饰器物" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 530,
    "type" : "single",
    "content" : "某服装厂拖欠其他公司债务被立案起诉，当地人民法院工作人员到该服装厂执行已经生效的判决书，该厂保安员刘某按照厂长的要求，锁住大门，拒绝工作人员进入该厂。保安员刘某行为的性质属于（）",
    "options" : [ "A:正确履行保安员的职责", "B:正确执行保卫工作任务", "C:阻碍国家公务人员执行公务", "D:限制他人人身自由权利" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 531,
    "type" : "single",
    "content" : "某度假村的保安员小王在工作中，（）的行为是被允许且合法的",
    "options" : [ "A:扣押他人财物", "B:登记出入物品", "C:搜查他人身体", "D:按照客户单位的规定参与追索债务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 532,
    "type" : "single",
    "content" : "保安服务公司法定代表人变更未经公安机关审核，且情节严重的，根据《保安服务管理条例》应处（）的罚款",
    "options" : [ "A:8千元以上1万元以下", "B:5万元以上7万元以下", "C:6万元以上7万元以下", "D:1万元以上5万元以下" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 533,
    "type" : "single",
    "content" : "保安员在提供保安服务过程中，（）行为是被禁止的",
    "options" : [ "A:开展报警监控活动", "B:通过网络传播监控影像资料", "C:登记出入的车辆", "D:紧急避险" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 534,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，（）不是保安员在工作中可以采取的行为",
    "options" : [ "A:维护服务区域治安秩序", "B:扩散监控影像资料", "C:登记出入的车辆", "D:根据任务需要设立临时隔离区" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 535,
    "type" : "single",
    "content" : "在保安员职业道德中，()是对保安员工作的基本要求",
    "options" : [ "A:诚实守信", "B:爱岗敬业", "C:团结互助", "D:文明服务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 536,
    "type" : "single",
    "content" : "在保安员职业道德中，（）是保安员做人.做事的基本品质",
    "options" : [ "A:诚实守信", "B:爱岗敬业", "C:团结互助", "D:文明服务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 537,
    "type" : "single",
    "content" : "红星小区正在对部分房屋实施整修，工地现场堆放了一批建筑材料。某日，工地上来了十多人哄抢财物。值班保安员发现后，首先要做的是（）",
    "options" : [ "A:报警", "B:宣传法制", "C:记住对象特征", "D:置之不理" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 538,
    "type" : "single",
    "content" : "违反治安管理法律法规.应受（）的具有社会危害性的行为就是违反治安管理行为",
    "options" : [ "A:法律法规处罚", "B:刑事法律处罚", "C:治安行政处分", "D:治安管理处罚" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 539,
    "type" : "single",
    "content" : "治安管理处罚法解决的是违反治安管理法律法规.危害社会秩序.情节（）的违法问题",
    "options" : [ "A:严重", "B:不严重", "C:很严重", "D:极严重" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 540,
    "type" : "single",
    "content" : "在保安服务工作中，（）是指对现象进行分析，从中发现不合常理.违背规律.相互矛盾的地方",
    "options" : [ "A:眼勤", "B:脚勤", "C:手勤", "D:腿勤" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 541,
    "type" : "single",
    "content" : "保安员在查验时要做到细致。其中（）是查验的基础，也是发现问题的起点",
    "options" : [ "A:守护", "B:登记", "C:观察", "D:询问" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 542,
    "type" : "single",
    "content" : "小张在某小区内任保安员，在一次巡逻时发现有人在出售涉及色情内容的书刊及物品。针对这种情况，小张应当立即（）",
    "options" : [ "A:搜缴书刊", "B:报告公安部门", "C:扣押物品", "D:搜身检查" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 543,
    "type" : "single",
    "content" : "某小区发生一起伤害案件，保安员赶到现场后，发现作案人尚未逃脱，应（）",
    "options" : [ "A:跟踪监视并实施抓捕", "B:立即堵截并报告当地公安机关", "C:快速回保卫部门求援", "D:实施劝告，并采取隔离措施" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 544,
    "type" : "single",
    "content" : "在协助警察对违法嫌疑人或重大可疑人实施堵截时，谁的（）谁就占有优势",
    "options" : [ "A:动作快速准确", "B:动作稳重细腻", "C:动作规范有序", "D:动作猛烈过当" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 545,
    "type" : "single",
    "content" : "公安机关为了维护正常社会秩序.保障社会生活正常运行而依法从事的行政管理活动就是通常所说的（）管理",
    "options" : [ "A:行政", "B:公安", "C:警察", "D:治安" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 546,
    "type" : "single",
    "content" : "从我国法的体系看，《治安管理处罚法》属于（）",
    "options" : [ "A:特别法", "B:法律", "C:行政法规", "D:部门规章" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 547,
    "type" : "single",
    "content" : "在无通行标识的车辆进入门卫责任区之前，保安员首先应做到（）",
    "options" : [ "A:车前拦截", "B:站在车前查验证件", "C:示意其靠边停车", "D:立即报告有关领导" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 548,
    "type" : "single",
    "content" : "对于一人有数种违反治安管理的行为，均需给予治安拘留的，分别裁决，合并执行，但拘留期限最长不得超过（）",
    "options" : [ "A:10日", "B:15日", "C:20日", "D:30日" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 549,
    "type" : "single",
    "content" : "对违反治安管理行为人予以治安拘留的决定，只能由（）作出",
    "options" : [ "A:人民政府", "B:公安机关", "C:政法机关", "D:司法机关" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 550,
    "type" : "single",
    "content" : "公共场所不包括（）",
    "options" : [ "A:公共交通场所", "B:观光游览场所", "C:娱乐休闲场所", "D:生产活动场所" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 551,
    "type" : "single",
    "content" : "下列不属于保安员职责任务的是（）",
    "options" : [ "A:查验出入人员的证件", "B:开展守护.巡逻活动", "C:在公共场所独立开展安全检查", "D:制止违法犯罪行为" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 552,
    "type" : "single",
    "content" : "保安员设置的隔离区属于（）",
    "options" : [ "A:临时性的", "B:长期性的", "C:短期性的", "D:永久性的" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 553,
    "type" : "single",
    "content" : "下列不属于公共场所的是（）",
    "options" : [ "A:电影院", "B:歌舞厅", "C:火车站", "D:机关单位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 554,
    "type" : "single",
    "content" : "关于保安员履行查验与登记的职责，下列说法错误的是（）",
    "options" : [ "A:保安员可以查验出入人员证件", "B:保安员可以对出入服务区域的车辆进行登记", "C:保安员不能查验本单位人员的证件", "D:必要时，保安员可以登记单位内部车辆的出入情况" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 555,
    "type" : "single",
    "content" : "物业管理企业可以聘用保安员在（）开展门卫.巡逻.秩序维护等服务",
    "options" : [ "A:内部单位区域内", "B:物业管理区域内", "C:大型活动场所内", "D:公共娱乐场所内" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 556,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，物业管理企业聘用的保安员在维护物业管理区域内的公共秩序时，应当（），不得侵害公民的合法权益",
    "options" : [ "A:监视居住", "B:查破案件", "C:盘问检查", "D:履行职责" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 557,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，物业使用人（承租人）在物业管理活动中的权利义务由（）约定，但不得违反法律法规和管理规约的约定",
    "options" : [ "A:业主", "B:物业使用人", "C:业主和物业使用人", "D:业主或物业使用人" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 558,
    "type" : "single",
    "content" : "押运任务确定后，首先要（）",
    "options" : [ "A:制定方案", "B:准备装备", "C:勘察", "D:确定车辆" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 559,
    "type" : "single",
    "content" : "以下各组情形都属于区域巡逻中异常情况的是（）",
    "options" : [ "A:一人在公园湖边落水；人群中有人在街边打电话", "B:发现小区的地表有水渗出；一小孩子在公园摔倒后被扶起后继续玩耍", "C:一青年男子在公园的小山上放风筝；一双目失明的老人在家人搀扶下行走", "D:商场周围的电线掉落；商场的火灾报警信号灯闪烁" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 560,
    "type" : "single",
    "content" : "以下不属于区域巡逻方案内容的是（）",
    "options" : [ "A:区域巡逻规划", "B:紧急情况处置办法", "C:巡逻勤务的考核办法", "D:区域巡逻的注意事项" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 561,
    "type" : "single",
    "content" : "以下不属于区域巡逻方案的内容是（）",
    "options" : [ "A:区域巡逻规划", "B:区域巡逻的组织指挥", "C:巡逻人员的训练计划", "D:区域巡逻中的通讯联络方式" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 562,
    "type" : "single",
    "content" : "以下不属于区域巡逻方案的内容是（）",
    "options" : [ "A:巡逻班次与频次", "B:巡逻人员个人信息", "C:巡逻路线", "D:巡逻方式" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 563,
    "type" : "single",
    "content" : "当博物馆内夜间有小动物出没时，报警系统报警是属于（）现象",
    "options" : [ "A:误报警", "B:漏报警", "C:正常报警", "D:故障报警" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 564,
    "type" : "single",
    "content" : "当某单位的风险等级高而防护级别低时，说明该单位的安全防护水平（）",
    "options" : [ "A:高", "B:中", "C:低", "D:不明" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 565,
    "type" : "single",
    "content" : "押运工作中，突然发生交通事故应立即启动（）",
    "options" : [ "A:巡逻方案", "B:应急预案", "C:消防方案", "D:治安灾害事故处置方案" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 566,
    "type" : "single",
    "content" : "押运工作中，突然出现火险应立即启动（）",
    "options" : [ "A:执勤方案", "B:消防方案", "C:巡逻方案", "D:守护方案" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 567,
    "type" : "single",
    "content" : "运钞车行驶中突现险情而减速时，押运员应（）",
    "options" : [ "A:停车，押运员下车去处理", "B:绕道行驶，再向指挥中心报告", "C:注意观察，险情排除后再通过", "D:立即返回原单位，保证运钞车安全" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 568,
    "type" : "single",
    "content" : "押运任务勘察完成后，首先要进行的工作是（）",
    "options" : [ "A:联系客户", "B:制定方案", "C:签订合同", "D:确定人员" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 569,
    "type" : "single",
    "content" : "下列各组属于室内人员密集场所的是（）",
    "options" : [ "A:商场.超市.体育场馆", "B:公共展览馆.客运车站.码头", "C:集贸市场.庙会.露天音乐会", "D:露天广场.餐饮场所.候机厅" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 570,
    "type" : "single",
    "content" : "保安押运要特别明确（）各环节的要求，严格划分责任",
    "options" : [ "A:勘察", "B:验车", "C:装货", "D:交接" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 571,
    "type" : "single",
    "content" : "保安人员在人员密集场所区域内通过巡回观察.安全检查.疏导人员等方式维护场所秩序的方式被称为（）",
    "options" : [ "A:人员密集场所的巡逻", "B:人员密集场所的保护", "C:人员密集场所的守护", "D:人员密集场所的警卫" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 572,
    "type" : "single",
    "content" : "武装押运所使用的武器装备是（）",
    "options" : [ "A:防暴枪", "B:电击警棍", "C:强光电击器", "D:保安棍" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 573,
    "type" : "single",
    "content" : "运钞车到达目的地后，卸货时，押运员应该（）",
    "options" : [ "A:确保所押物品在安全区域内", "B:确保客户人员安全", "C:确保自身安全", "D:确保驾驶员安全" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 574,
    "type" : "single",
    "content" : "运钞车进入隧道时，正确的方法是（）",
    "options" : [ "A:停车，派人观察情况", "B:超速通过", "C:加强观察", "D:出隧道时检查物品是否完好" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 575,
    "type" : "single",
    "content" : "保安员在人员密集场所巡逻时，接到群众举报后应该（）",
    "options" : [ "A:认真记录并继续巡逻", "B:立即报警并继续巡逻", "C:认真记录并自行处理", "D:认真记录并及时报告" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 576,
    "type" : "single",
    "content" : "运钞车到达目的地后，在办理交接手续之前，押运员应该（）",
    "options" : [ "A:与客户业务员联系", "B:加强警戒，观察周围情况", "C:可以上厕所", "D:打开车门，准备卸货" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 577,
    "type" : "single",
    "content" : "运钞车临时停放应选择（）",
    "options" : [ "A:交通拥堵之处", "B:人员密集之处", "C:事故多发地段", "D:环境安全之处" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 578,
    "type" : "single",
    "content" : "下列不属于识别人员密集场所可疑情况方法的是（）",
    "options" : [ "A:直接观察法", "B:仪器探测法", "C:查问法", "D:访谈法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 579,
    "type" : "single",
    "content" : "运钞车在行进过程中，押运人员做法正确的是（）",
    "options" : [ "A:轮流休息", "B:交流谈心", "C:注意观察途中情况", "D:读书看报" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 580,
    "type" : "single",
    "content" : "保安员石某和夏某在某市政广场集会巡逻时发现一无人看护的旅行箱，下列正确的做法是（）",
    "options" : [ "A:搬走旅行箱", "B:打开旅行箱查看", "C:认为可疑，立即报警", "D:看护旅行箱，等候认领" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 581,
    "type" : "single",
    "content" : "两名保安员在公园巡逻时发现一电线杆突然倾倒，首先选择的处理方式是（）",
    "options" : [ "A:立即报警，等候警察处理", "B:呼唤众人将电线杆扶起", "C:报告服务单位，同时疏散周边人群", "D:立刻设置隔离区" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 582,
    "type" : "single",
    "content" : "保安员王某在某小区担任保安员，王某（）的做法是正确的",
    "options" : [ "A:入户检查身份证件", "B:搜查可疑人员住所", "C:对违章行为进行罚款", "D:纠正和制止不良行为" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 583,
    "type" : "single",
    "content" : "进行区域巡逻时，巡逻方案确定的（）是保安员执行勤务的重要依据",
    "options" : [ "A:内容和程序", "B:程序和注意事项", "C:内容和要求", "D:程序和要求" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 584,
    "type" : "single",
    "content" : "既可以确保重要部位.薄弱环节安全，又可以机动灵活对整个区域进行巡视.检查的是（）",
    "options" : [ "A:单线巡逻", "B:往返巡逻", "C:交叉巡逻", "D:点线巡逻" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 585,
    "type" : "single",
    "content" : "道路交通中设置的安全岛的作用是()",
    "options" : [ "A:供过街行人避让车辆", "B:供非机动车临时停放", "C:供机动车临时停放", "D:供交通警察指挥交通" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 587,
    "type" : "single",
    "content" : "一般来说，最常用的巡逻方式是（）",
    "options" : [ "A:步巡", "B:骑巡", "C:车巡", "D:舟巡" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 589,
    "type" : "single",
    "content" : "两组以上的保安员分别从不同的方位沿相互交叉的路线进行巡逻的形式是（）",
    "options" : [ "A:单线巡逻", "B:往返巡逻", "C:交叉巡逻", "D:点线巡逻" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 591,
    "type" : "single",
    "content" : "一般来说，最经济的巡逻方式是（）",
    "options" : [ "A:步巡", "B:骑巡", "C:车巡", "D:舟巡" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 592,
    "type" : "single",
    "content" : "道路辅助标志是对（）起辅助说明作用的标志",
    "options" : [ "A:主标志", "B:指示标志", "C:警告标志", "D:禁令标志" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 593,
    "type" : "single",
    "content" : "手提灭火器应当设置在其顶部离地面高度（）m处",
    "options" : [ "A:2.5", "B:0.5", "C:1.0", "D:1.5" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 594,
    "type" : "single",
    "content" : "对大腿骨折进行固定时，固定材料应超过（）",
    "options" : [ "A:膝关节.踝关节", "B:膝关节.脚趾间关节", "C:髋关节.膝关节", "D:髋关节.踝关节" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 595,
    "type" : "single",
    "content" : "干粉灭火器是以粉雾的形式灭火，其特点是（）",
    "options" : [ "A:灭火效力大.速度快", "B:有毒", "C:能导电", "D:有腐蚀性" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 596,
    "type" : "single",
    "content" : "使用加压包扎法止血时，（）部位较深的伤口不能用敷料填塞",
    "options" : [ "A:上肢", "B:小腿", "C:胸", "D:大腿" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 597,
    "type" : "single",
    "content" : "使用二氧化碳灭火器灭火时，不能将手触及到喇叭筒，因为可能造成（）的危险",
    "options" : [ "A:手被腐蚀", "B:手变黑", "C:手被烧伤", "D:手被冻伤" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 598,
    "type" : "single",
    "content" : "就地取材选择止血带时，（）材料不能用",
    "options" : [ "A:布料", "B:铁丝", "C:三角巾", "D:领带" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 599,
    "type" : "single",
    "content" : "若一容器内着火，在使用泡沫灭火器灭火时，应将泡沫射向容器（），逐步覆盖着火液面",
    "options" : [ "A:底部", "B:内壁", "C:顶部", "D:外壁" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 600,
    "type" : "single",
    "content" : "头皮部位出血，除按压伤口外，还应压住（）",
    "options" : [ "A:肱动脉", "B:股动脉", "C:颞浅动脉", "D:桡动脉" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 601,
    "type" : "single",
    "content" : "最常用的三类灭火器是（）",
    "options" : [ "A:泡沫灭火器.干粉灭火器.二氧化碳灭火器", "B:干粉灭火器.卤代烷灭火器.二氧化碳灭火器", "C:水型灭火器.空气泡沫灭火器.干粉灭火器", "D:水型灭火器.空气泡沫灭火器.卤代烷灭火器" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 602,
    "type" : "single",
    "content" : "泡沫灭火器不能扑救（）引起的初起火灾",
    "options" : [ "A:电源电线", "B:棉花织物", "C:汽油", "D:纸张" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 603,
    "type" : "single",
    "content" : "下列叙述的情况中，（）的情况可被认为是动脉出血",
    "options" : [ "A:血液为暗红色，不断涌出", "B:血液为鲜红色，喷出", "C:血液为鲜红色，渗出", "D:血液为暗红色，渗出" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 604,
    "type" : "single",
    "content" : "下列关于灭火器的叙述错误的是（）",
    "options" : [ "A:借助驱动压力将所充装的灭火剂喷出，达到灭火目的的器具", "B:由筒体.器头.喷嘴等部件构成", "C:用于扑灭初起火灾最常用的灭火器材", "D:目前只有泡沫灭火器.二氧化碳灭火器.干粉灭火器三种灭火器" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 605,
    "type" : "single",
    "content" : "当有人触电时，不应该（）",
    "options" : [ "A:立即切断电源", "B:用干燥的木棍或竹竿快速挑开电源", "C:拨打120急救电话", "D:直接用手拉伤者" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 606,
    "type" : "single",
    "content" : "（）不能作为在高层建筑物发生火灾时的逃生工具",
    "options" : [ "A:避雷网（线）", "B:逃生绳", "C:带电电线", "D:消防电梯" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 607,
    "type" : "single",
    "content" : "保安员在组织火灾现场疏散时，引导人员要尽量靠近承重墙行走的原因是（）",
    "options" : [ "A:墙边烟雾较少", "B:防止被坠物砸伤", "C:疏散标志一般都设置在墙面上", "D:方便寻找灭火设备" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 608,
    "type" : "single",
    "content" : "高层建筑发生火灾时，不能乘坐普通电梯疏散逃生，主要是因为普通电梯()",
    "options" : [ "A:供电系统在火灾时随时会断电", "B:不能直接到达建筑物首层", "C:没有通讯设备", "D:没有灭火设备" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 609,
    "type" : "single",
    "content" : "在煤气泄漏现场不能采取（）的方法",
    "options" : [ "A:马上拨打120急救电话", "B:把患者移到通风处", "C:打开门窗通风", "D:中.重度中毒者送往医院" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 610,
    "type" : "single",
    "content" : "在发生火灾抢救物资时，首先应该抢救的物品是（）",
    "options" : [ "A:桌椅", "B:衣物", "C:珍贵文物", "D:电视机" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 611,
    "type" : "single",
    "content" : "高层建筑物发生火灾，如果楼梯已经烧断，不能作为逃生工具的是（）",
    "options" : [ "A:建筑物的避雷网（线）", "B:带电电线", "C:落水管", "D:房屋向外突出部分" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 612,
    "type" : "single",
    "content" : "煤气中毒重症者的典型表现是（）",
    "options" : [ "A:大声呼喊", "B:发烧", "C:口唇呈樱桃红色", "D:全身疼痛" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 613,
    "type" : "single",
    "content" : "在火灾现场，被困人员被烟气窒息而失去自救能力时，切忌()",
    "options" : [ "A:滚向墙边或者门口", "B:向外扔东西，引起救援人注意", "C:藏到顶楼或者壁橱", "D:呆在阳台或窗口" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 614,
    "type" : "single",
    "content" : "保安押运公司为某银行护送款项，途中突然发生爆胎，恰逢其他单位运钞车途经此处，表示可以帮忙送款，下列做法错误的是（）",
    "options" : [ "A:同意对方帮忙", "B:不同意对方帮忙", "C:向本单位报告", "D:通报银行有关情况" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 615,
    "type" : "single",
    "content" : "保安公司可为（）单位提供保安武装守护服务",
    "options" : [ "A:供电所营业部", "B:超高压变电站", "C:电力设施维修部", "D:电力公司办公楼" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 616,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务的对象和目标是（）",
    "options" : [ "A:群众密集活动场所", "B:名人生活区域", "C:学生活动区域和学校周边", "D:治安保卫重点单位和重要部位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 617,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务的对象和目标是（）",
    "options" : [ "A:大型水电站", "B:大型汽车制造厂", "C:大型露天煤矿", "D:大型钢铁厂" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 618,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务的对象和目标是（）的单位",
    "options" : [ "A:涉及食品安全", "B:涉及生产安全", "C:涉及国家秘密", "D:涉及卫生安全" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 619,
    "type" : "single",
    "content" : "武装守护目标具有的特点是（）",
    "options" : [ "A:任务繁重", "B:任务简单", "C:便于控制", "D:便于部署" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 620,
    "type" : "single",
    "content" : "我国通用的医疗急救电话是（）",
    "options" : [ "A:110", "B:119", "C:120", "D:122" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 621,
    "type" : "single",
    "content" : "对创伤者实施现场救护的错误做法是（）",
    "options" : [ "A:观察环境是否安全，做好自我防护", "B:对创伤者立即实施搬运", "C:观察创伤者有无呼吸.心跳", "D:对无呼吸.心跳的创伤者实施心肺复苏" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 622,
    "type" : "single",
    "content" : "在急救现场，对神志清醒的伤病员应该（）",
    "options" : [ "A:不用救护", "B:征得其同意，及时有效救护", "C:寻找其家人", "D:勘查现场，查明原因" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 623,
    "type" : "single",
    "content" : "液化石油气泄漏事故的特点是扩散迅速.危害范围大.易发生爆炸燃烧事故和处置难度大。对于该种紧急事故，下列处理方法错误的是（）",
    "options" : [ "A:立刻禁绝火源", "B:关阀断源", "C:注水排险", "D:紧急疏散周边人员" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 624,
    "type" : "single",
    "content" : "对初起火灾扑救方法，下列叙述错误的是（）",
    "options" : [ "A:应争分夺秒，奋力将小火控制.扑灭", "B:看到房间有浓烟和火焰时，应立即开窗", "C:坚持生命至上，救人第一的救援原则", "D:使用身边的灭火器材" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 625,
    "type" : "single",
    "content" : "在火灾现场，当生命受到严重威胁，随时有被大火吞噬的危险，如果被迫必须跳楼逃生时，下列做法错误的是（）",
    "options" : [ "A:用棉被.床单保护好头部.胸部等重点部位", "B:先抛下一些物品，以增加缓冲", "C:保证背部先落地，增加缓冲，尽量减少对重点部位的伤害", "D:利用身边的绳子或将床单.被罩等撕成条状连接起来，一端拴在窗格或其它突出物上，顺沿滑下逃生" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 626,
    "type" : "single",
    "content" : "火灾扑灭后，起火单位应()",
    "options" : [ "A:迅速到现场抢救物资", "B:尽快抢修设施争取复产", "C:保护现场", "D:拨打119" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 627,
    "type" : "single",
    "content" : "高层建筑发生火灾时，人员只能通过（）渠道逃生",
    "options" : [ "A:疏散楼梯", "B:普通电梯", "C:跳楼", "D:货运电梯" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 628,
    "type" : "single",
    "content" : "高层建筑发生火灾，若火灾烟雾较大，保安员在引导人员逃生时，应当提示人们（）",
    "options" : [ "A:以弯腰或匍匐的行进姿势，撤到最近的安全出口", "B:在原地耐心等待救援", "C:以弯腰或匍匐的行进姿势，乘坐客用电梯逃生", "D:尽量站立沿防火分区逃生" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 629,
    "type" : "single",
    "content" : "火灾发生时，下列选项中不能作为逃生路线的是（）",
    "options" : [ "A:未被火焰阻挡.封堵的区域", "B:有烟雾笼罩的其它房间", "C:疏散走道--疏散楼梯--安全出口", "D:离室外距离最短的安全出口" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 630,
    "type" : "single",
    "content" : "机动车进入停车场时，驾驶人可以随身携带（）",
    "options" : [ "A:酒精", "B:炸药", "C:鞭炮", "D:打火机" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 631,
    "type" : "single",
    "content" : "某饭店配电柜发生火灾，保安员应该使用（）",
    "options" : [ "A:干砂", "B:泡沫灭火器", "C:水型灭火器", "D:二氧化碳灭火器" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 632,
    "type" : "single",
    "content" : "保安员在执行武装守护任务时必须配备（）",
    "options" : [ "A:保安棍", "B:武器装备", "C:对讲机", "D:移动电话" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 633,
    "type" : "single",
    "content" : "团结互助要求保安员加强协作。关于加强协作，说法不正确的是（）",
    "options" : [ "A:各岗位之间互相支持", "B:处理好主角与配角的关系", "C:正确看待竞争与合作的关系", "D:禁止竞争" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 634,
    "type" : "single",
    "content" : "王某被评为优秀保安员,他认为:对同事要宽容,尊重彼此的个性。这反映了职业道德中（）的内容",
    "options" : [ "A:团结互助", "B:诚实守信", "C:文明服务", "D:爱岗敬业" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 635,
    "type" : "single",
    "content" : "保安员小张在客户单位出入口值勤，对出入人员进行查验证件，小张的勤务工作属于（）",
    "options" : [ "A:守护", "B:巡逻", "C:押运", "D:特定目标守护" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 636,
    "type" : "single",
    "content" : "在保安守护中，对服务单位特定目标进行看护和守卫的正确方式是守护和（）",
    "options" : [ "A:监控", "B:门卫", "C:巡逻", "D:技术防范" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 638,
    "type" : "single",
    "content" : "按照诚实守信的要求，保安员不应该（）",
    "options" : [ "A:把个人利益放在首位", "B:保守客户单位的秘密", "C:遵守与单位签订的劳动合同", "D:遵守与客户的约定" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 639,
    "type" : "single",
    "content" : "保安守护主要通过目标部位守护和（）为服务单位提供安全保障",
    "options" : [ "A:出入口守卫", "B:目标部位守卫", "C:目标部位巡逻", "D:特定目标守卫" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 640,
    "type" : "single",
    "content" : "登记是按照服务单位的要求对（）在指定记录本或登记表上进行记载的行为",
    "options" : [ "A:出入的人员与车辆", "B:出入的物品与车辆", "C:出入的人员.车辆及物品", "D:出入的人员和物品" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 641,
    "type" : "single",
    "content" : "保安员在查验车辆证件时，安全的检查方法是（）",
    "options" : [ "A:为了保护自身安全可以不查验车辆证件", "B:要求驾驶员停车接受检查，在检查时应站在驾驶员车门后侧", "C:要求驾驶员离开车辆接受查验", "D:在检查时要求驾驶员熄火把钥匙交给保安员" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 642,
    "type" : "single",
    "content" : "保安员小王在货物出入口值勤时，发现本单位的司机小李出示的货物出入单中数量与实际货物的数量不符，小王错误的做法是（）",
    "options" : [ "A:小李说明原因后可放其通过", "B:向小李说明货车上的数量与单据不符，劝其返回补办手续", "C:小李坚持不回去办理手续，小王坚持不让小李通过", "D:为避免小李强行通过，将出入口大门关闭" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 643,
    "type" : "single",
    "content" : "保安员小王在出入口值勤时，发现来访人员出示证件上的照片与本人不符，正确处理的方法是（）",
    "options" : [ "A:将证件没收的同时，礼貌的向来访人员说明没收原因", "B:要求来访人员出示其他有效证件，再次查验其他有效证件上的照片是否与本人相符", "C:告诉来访者证件照片与本人不符，按照规定不能进入，同时向客户单位报告", "D:将证件交给来访人员" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 644,
    "type" : "single",
    "content" : "验证的方法一般分为逐个验证.重点查验和（）",
    "options" : [ "A:检查单据", "B:检查货物", "C:免检放行", "D:随机抽查" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 645,
    "type" : "single",
    "content" : "保安员上岗值勤时，应按规定的（）到达指定的岗位",
    "options" : [ "A:方式", "B:时间", "C:任务", "D:路线" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 646,
    "type" : "single",
    "content" : "根据《企业事业单位内部治安保卫条例》规定，单位内部治安保卫部门不能（）",
    "options" : [ "A:检查进入本单位人员的证件", "B:登记出入本单位人员的物品", "C:查处盗窃本单位物品的人员", "D:登记出入本单位人员的车辆" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 647,
    "type" : "single",
    "content" : "保安员在履行工作职责过程中，依法行使（）权利时，不负刑事责任，但不能超过法律允许的范围",
    "options" : [ "A:管制交通", "B:执法检查", "C:正当防卫", "D:武装押运" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 648,
    "type" : "single",
    "content" : "以下选项中，不属于单位内部治安保卫制度的是（）",
    "options" : [ "A:危险物品安全管理制度", "B:单位内部治安案件报告制度", "C:产品生产与销售制度", "D:单位内部刑事案件报告制度" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 649,
    "type" : "single",
    "content" : "以下叙述中，（）不是保安员应享有的权利",
    "options" : [ "A:签订劳动合同", "B:征用车辆救灾抢险", "C:接受安全教育培训", "D:享受劳动保护" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 650,
    "type" : "single",
    "content" : "治安保卫重要部位是指由（）确定的.关系本单位生产业务全局的部位和生产环节",
    "options" : [ "A:公安机关", "B:地方政府", "C:企事业重点单位", "D:企事业单位保卫协会" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 651,
    "type" : "single",
    "content" : "现场救护的意义是（）",
    "options" : [ "A:发挥了群策群力的作用", "B:代替医务人员救治患者", "C:为医院救治创造条件，赢得时间", "D:为患者节省费用" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 652,
    "type" : "single",
    "content" : "下列物质中，（）燃烧所引发的火灾属B类火灾",
    "options" : [ "A:木材", "B:沥青", "C:钠", "D:煤气" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 653,
    "type" : "single",
    "content" : "下面关于现场救护说法错误的是（）",
    "options" : [ "A:能有效减少伤残", "B:能避免后遗症", "C:能得到专业的治疗", "D:能提高患者的生存质量" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 654,
    "type" : "single",
    "content" : "保护好火灾现场，能为查清火灾发生的真正原因提供许多重要的证据，下列做法错误的是（）",
    "options" : [ "A:划出警戒区，指派专人看护，除事主外不准无关人员进入现场", "B:火灾现场的一切遗留物，燃烧过的物质及其陈设的位置，必须保持原样", "C:火灾现场的一切遗留物，未燃烧过的物质及其陈设的位置，必须保持原样", "D:撤销现场保护，清扫火灾现场，必须得到当地公安消防监督机关的同意" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 655,
    "type" : "single",
    "content" : "《保安服务管理条例》规定，从事武装押运服务的保安员枪支使用培训，应当由（）进行",
    "options" : [ "A:保安公司内设培训机构", "B:人民警察院校或人民警察培训机构", "C:武装警察院校或武装警察培训机构", "D:从事武装守护押运的保安服务公司" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 656,
    "type" : "single",
    "content" : "为确保刑法的正确实施而制定的有关诉讼程序方面的法律是（）",
    "options" : [ "A:刑事诉讼法", "B:民事诉讼法", "C:行政诉讼法", "D:法律仲裁法" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 657,
    "type" : "single",
    "content" : "甲和乙发生殴斗，甲身强体壮，乙瘦弱矮小，乙被打得鼻青脸肿，此时，刚好甲的小妹丙从旁边走过，乙挣脱了甲，冲过去向丙脸上一顿猛捶，造成丙一耳失聪。乙的这种行为属于（）",
    "options" : [ "A:正当防卫", "B:紧急避险", "C:自救行为", "D:犯罪行为" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 658,
    "type" : "single",
    "content" : "张三在就餐时与李四发生纠纷，张三顺手拿起身边的座椅朝李四头部砸去，李四边躲边随手拿起身边的价值数千元的花瓶进行抵挡，结果致花瓶破损，李四的这种行为属于（）",
    "options" : [ "A:紧急避险", "B:自救行为", "C:正当防卫", "D:毁坏财产" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 659,
    "type" : "single",
    "content" : "保安押运的勘察内容包括（）",
    "options" : [ "A:任务的性质.类型.起运地.目的地", "B:甲方单位的经营状况", "C:甲方单位的付款方式", "D:甲方单位的法人及相关部门负责人的基本情况" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 660,
    "type" : "single",
    "content" : "押运方案主要包括（）",
    "options" : [ "A:执勤方案.消防方案.应急方案", "B:巡逻方案.守护方案.应急方案", "C:巡逻方案.消防方案.执勤方案", "D:巡逻方案.消防方案.应急方案" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 661,
    "type" : "single",
    "content" : "保安员李某，想获得保安员国家职业资格三级证书，那么，他必须通过（）",
    "options" : [ "A:高级保安员职业能力考试与技能鉴定", "B:中级保安员职业能力考试与技能鉴定", "C:保安师职业能力考试与技能鉴定", "D:高级保安师职业能力考试与技能鉴定" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 662,
    "type" : "single",
    "content" : "根据《保安员国家职业标准（试行）》，高级保安师属于（）",
    "options" : [ "A:国家职业资格一级", "B:国家职业资格二级", "C:国家职业资格三级", "D:国家职业资格四级" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 663,
    "type" : "single",
    "content" : "保安员严某在配合公安机关巡逻中，发现一醉酒人携带有一把匕首，警察就要求严某将该醉酒人带到公安派出所盘问，事后警察将醉酒人的这把匕首留在派出所。警察将醉酒人的这把匕首留在派出所的行为是（）",
    "options" : [ "A:收缴", "B:扣押", "C:没收", "D:保管" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 664,
    "type" : "single",
    "content" : "（）是指关系全国或者所在地区国计民生.国家安全和公共安全的单位",
    "options" : [ "A:治安保卫重要部位", "B:治安保卫重点单位", "C:治安保卫部位", "D:治安保卫单位" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 665,
    "type" : "single",
    "content" : "与保安从业单位签订劳动合同是保安员的（）",
    "options" : [ "A:纪律", "B:权利", "C:任务", "D:职责" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 666,
    "type" : "single",
    "content" : "关于保安员享有社会保险权利的叙述，下列说法正确的是（）",
    "options" : [ "A:保安从业单位根据本单位的经济状况为保安员投保意外伤害险", "B:保安从业单位应当根据保安员的愿望为保安员投保意外伤害险", "C:保安从业单位应当根据岗位的风险程度为保安员投保意外伤害险", "D:保安从业单位必须为保安员投保意外伤害险" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 667,
    "type" : "single",
    "content" : "关于社会保险的叙述，下列说法错误的是（）",
    "options" : [ "A:社会保险属于强制性保险", "B:养老保险由企业和个人共同缴纳", "C:医疗保险由企业和个人共同缴纳", "D:工伤保险由个人缴纳" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 668,
    "type" : "single",
    "content" : "保安员张某在如何识别犯罪嫌疑人方面很有经验，但是他不愿意把经验传授给别人。张某这一做法不符合职业道德中（）的要求",
    "options" : [ "A:团结互助", "B:诚实守信", "C:文明服务", "D:爱岗敬业" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 669,
    "type" : "single",
    "content" : "保安员在值勤中遇有爆炸等灾害事故，在报警后首先应当（）",
    "options" : [ "A:检查客户单位损失", "B:了解事故发生的经过", "C:抢救受伤人员，做好现场保护", "D:协助客户单位做好善后工作" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 671,
    "type" : "single",
    "content" : "保安员在出入口守卫中发现可疑人员或可疑情况要及时向服务单位报告。报告的内容应当包括（）",
    "options" : [ "A:时间.地点.任务.工作建议", "B:时间.地点.人物.事由.结果", "C:时间.地点.原因.结果.存在的问题", "D:时间.地点.人物.结果.存在的问题" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 672,
    "type" : "single",
    "content" : "保安员小李在值勤时，客户单位发生了火情，需要立即报警。在拨通119后，小李向接警人员报告了客户单位着火的情况.采取的措施及火情发展的状况，在报告联络方式后挂断电话。小李在报警中忘记的重要内容是（）",
    "options" : [ "A:灭火人员的数量", "B:灭火组织的情况", "C:灭火受伤人员的情况", "D:客户单位的地址" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 673,
    "type" : "single",
    "content" : "保安员在出入口守卫时，遇不法分子有意冲闯出入口时，正确的做法是（）",
    "options" : [ "A:立即关闭大门并向客户单位报告", "B:立即组织人员将不法分子轰出客户单位", "C:立即向客户单位报告等待客户单位人员处理", "D:立即关闭大门阻止不法分子闯入" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 674,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务须经（）批准",
    "options" : [ "A:公安部", "B:国防部", "C:国务院", "D:省.自治区.直辖市人民政府公安机关" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 675,
    "type" : "single",
    "content" : "保安员在流动岗值勤时遇有纠纷或滋事等情况，正确的做法是（）",
    "options" : [ "A:现场能处置的立即处置，否则及时报告客户单位", "B:立即报告客户单位，等待处理", "C:立即向上级领导报告，等待处理", "D:继续完成巡查任务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 676,
    "type" : "single",
    "content" : "保安员小张和小李在目标部位流动岗巡查时，发现无证车辆强行进入目标部位时正确的做法是（）",
    "options" : [ "A:向客户单位报告后，两人一起阻拦无证车辆进入", "B:小李立即向客户单位报告，小张记下车牌.车型和颜色", "C:小张和小李一起阻拦无证车辆进入", "D:两人记下车牌.车型和颜色" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 677,
    "type" : "single",
    "content" : "保安员在目标部位值勤，遇有强行闯入重点区域的人员，正确的处理方法是（）",
    "options" : [ "A:组织保安员对闯入人员进行拦截", "B:按照应急方案的要求予以阻止，并向客户单位报告", "C:立即关闭出入大门", "D:避开正面冲突，向客户单位报告" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 678,
    "type" : "single",
    "content" : "保安员在发电厂的固定岗位值勤时，遇有火灾发生，首先要做的是（）",
    "options" : [ "A:抢救受伤人员", "B:拉电闸断电并报警", "C:立即报警", "D:组织人员救火" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 679,
    "type" : "single",
    "content" : "某塑料工厂发生火灾，死亡37人，受伤19人，过火面积398.8平方米，直接财产损失30.1万元。这起火灾属于（）",
    "options" : [ "A:特别重大火灾", "B:重大火灾", "C:较大火灾", "D:一般火灾" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 680,
    "type" : "single",
    "content" : "某家娱乐城发生火灾，造成至少25人死亡.78人受伤。这种火灾属于（）",
    "options" : [ "A:特别重大火灾", "B:重大火灾", "C:较大火灾", "D:一般火灾" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 681,
    "type" : "single",
    "content" : "据公安部确定的火灾等级标准，较大火灾是指造成（），或者1000万元以上5000万元以下直接财产损失的火灾",
    "options" : [ "A:3人以下死亡，或者10人以下重伤", "B:3人以上10人以下死亡，或者10人以上50人以下重伤", "C:3人以下死亡，或者20人以下重伤", "D:10人以下死亡，或者10人以上50人以下重伤" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 682,
    "type" : "single",
    "content" : "以下是现场伤员的伤情情况，（）的患者伤势最重",
    "options" : [ "A:脚踝扭伤，大声呼喊", "B:小腿骨折骨外露", "C:前额流血不止", "D:面色苍白，躺在地上无应答" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 683,
    "type" : "single",
    "content" : "当你来到环境复杂.情况不明的事发现场后，首先应该（）",
    "options" : [ "A:排除险情", "B:远离现场，保护自己", "C:立即开始施救", "D:招呼别人过来帮忙" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 684,
    "type" : "single",
    "content" : "现场救护一般应由（）来实施",
    "options" : [ "A:保安员", "B:取得现场救护证的人", "C:热心人士", "D:任何人" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 685,
    "type" : "single",
    "content" : "现场救护的作用是（）",
    "options" : [ "A:挽救生命，减少伤残", "B:可以替代医务人员处置患者", "C:免除患者去医院的麻烦", "D:可以减轻患者家属的负担" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 686,
    "type" : "single",
    "content" : "保安员小王巡逻时，发现有人受伤倒地，他不应该（）",
    "options" : [ "A:大声呼救", "B:判断伤情，予以救助", "C:拨打援救电话", "D:不允许任何人靠近伤员" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 687,
    "type" : "single",
    "content" : "以下是救援电话号码，其中正确的一项是（）",
    "options" : [ "A:110－火警119－匪警120－医疗急救122－交通事故", "B:110－医疗急救119－匪警120－火警122－交通事故", "C:110－匪警119－火警120－医疗急救122－交通事故", "D:110－交通事故119－火警120－匪警122－医疗急救" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 688,
    "type" : "single",
    "content" : "当你遇到危险受伤无法立即报警或拨打急救电话时，应该（）",
    "options" : [ "A:寻找家人或朋友", "B:等待医务人员到来", "C:想办法自救", "D:自认倒霉" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 689,
    "type" : "single",
    "content" : "遇突发事件拨打求救电话时，下列做法中错误的是（）",
    "options" : [ "A:告知发生了险情，受伤人数，目前危重程度，现场采取的措施", "B:说明事发地点.附近的明显标志", "C:告知报告人的姓名.电话", "D:讲完求救内容后自己先挂机" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 690,
    "type" : "single",
    "content" : "拨打急救电话时，报告的内容可不包括（）",
    "options" : [ "A:伤病员的目前情况.受伤人数.危重程度，现场采取的救护措施", "B:伤病员所在地点.附近的明显标志", "C:报告人的姓名.电话，伤病员的性别.年龄等情况", "D:伤员家人的情况" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 691,
    "type" : "single",
    "content" : "现场救护是指（）",
    "options" : [ "A:拨打报警和求救电话", "B:勘查现场，查明原因", "C:在事发现场，对伤病员实施及时.有效的初步救护", "D:在事发现场，对伤病员实施先进.专业的医疗救护" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 692,
    "type" : "single",
    "content" : "礼包含礼节.礼貌和（）等内容",
    "options" : [ "A:礼仪", "B:语言", "C:行为表情", "D:服装器物" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 693,
    "type" : "single",
    "content" : "公安机关对使用监控设备侵犯他人合法权益或者个人隐私的保安从业单位，应责令限期改正，并处（）的罚款",
    "options" : [ "A:5千元以上2万元以下", "B:15万元以上20万元以下", "C:10万元以上15万元以下", "D:2万元以上10万元以下" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 694,
    "type" : "single",
    "content" : "招用不符合条件的人员担任保安员，且情节严重的保安服务公司，根据《保安服务管理条例》应处（）的罚款",
    "options" : [ "A:10万元以上20万元以下", "B:5万元以上10万元以下", "C:1万元以上5万元以下", "D:5千元以上1万元以下" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 695,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，自行招用保安员的单位，应当自开始保安服务之日起（）日内向所在地设区的市级人民政府公安机关备案",
    "options" : [ "A:60", "B:30", "C:45", "D:15" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 696,
    "type" : "single",
    "content" : "对小腿骨折进行固定时，固定材料应超过（）",
    "options" : [ "A:髋关节.膝关节", "B:膝关节.脚趾间关节", "C:膝关节.踝关节", "D:髋关节.踝关节" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 697,
    "type" : "single",
    "content" : "救护员为伤员进行填塞止血时，不能填塞的地方是（）",
    "options" : [ "A:胸部较深的伤口", "B:大腿根部", "C:小腿上端", "D:上臂中部" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 698,
    "type" : "single",
    "content" : "以下方法中，不符合现场救护原则的是（）",
    "options" : [ "A:拨打急救电话", "B:保护现场，不允许任何人接近伤病员", "C:立即进行正确救护", "D:协助医务人员将伤病员送往医院" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 699,
    "type" : "single",
    "content" : "《物业管理条例》是国家为规范物业管理活动.维护业主和物业服务企业的合法权益.改善人民群众的生活和工作环境而由（）制定颁布的行政法规",
    "options" : [ "A:全国人大", "B:全国人大常委会", "C:住房和城乡建设部", "D:国务院" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 700,
    "type" : "single",
    "content" : "以下选项中，（）不是治安保卫重点单位",
    "options" : [ "A:广播电台", "B:中小学校", "C:通讯社", "D:小型超市" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 701,
    "type" : "single",
    "content" : "根据《治安管理处罚法》的规定，对违反治安管理行为人的罚款处罚数额，最高数额为（）",
    "options" : [ "A:3000元", "B:4000元", "C:5000元", "D:10000元" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 702,
    "type" : "single",
    "content" : "违反治安管理法律法规.应受治安管理处罚的具有（）危害性的行为就是违反治安管理行为",
    "options" : [ "A:社会", "B:组织", "C:单位", "D:内部" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 703,
    "type" : "single",
    "content" : "刑事诉讼活动是由国家法律所确定的专门机关为（）.保障人权而开展的侦查.起诉.审判等一系列活动",
    "options" : [ "A:预防犯罪", "B:保护群众", "C:制止犯罪", "D:惩罚犯罪" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 704,
    "type" : "single",
    "content" : "在某一刑事案件的诉讼过程中，一般不参与刑事诉讼的机构是（）",
    "options" : [ "A:公安局", "B:监察局", "C:人民检察院", "D:人民法院" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 705,
    "type" : "single",
    "content" : "一名14周岁的学生甲，到某工厂偷东西，被保安员乙发现，甲就拿着棍子打乙并妄图逃跑，乙恼怒之下，拿起保安棍朝甲猛砸，将甲左腿打断。乙的这种行为属于（）",
    "options" : [ "A:正当防卫行为", "B:紧急避险行为", "C:正当业务行为", "D:犯罪行为" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 706,
    "type" : "single",
    "content" : "张三在就餐时与李四发生纠纷，张三趁李四不注意，挥拳将李四打成重伤，张三的这种行为从主观心理上分析属于（）",
    "options" : [ "A:犯罪故意", "B:犯罪过失", "C:疏忽大意", "D:过于自信" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 708,
    "type" : "single",
    "content" : "保安押运按照路途远近可分为（）",
    "options" : [ "A:汽车押运和火车押运", "B:空中押运和火车护运", "C:船舶押运和汽车押运", "D:长途押运和短途押运" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 709,
    "type" : "single",
    "content" : "保安押运的勘察工作具体由（）组织开展",
    "options" : [ "A:县级以上公安机关", "B:派出所", "C:保安公司", "D:客户单位保卫部门" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 710,
    "type" : "single",
    "content" : "制订押运方案时，确定配备枪弹数量的依据是（）",
    "options" : [ "A:服务费标准高", "B:承担风险的程度和客户单位的需求", "C:上级领导要求", "D:任务紧急程度" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 711,
    "type" : "single",
    "content" : "以下物品必须武装押运的是（）",
    "options" : [ "A:高档建筑装修材料", "B:枪支.弹药", "C:现金.票据", "D:高档家具" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 712,
    "type" : "single",
    "content" : "押运中，发现物品包装损坏，押运员错误的做法是（）",
    "options" : [ "A:保持不动等待客户来人", "B:开箱检查核对是否缺少", "C:向客户单位领导报告", "D:向公司主管部门报告" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 713,
    "type" : "single",
    "content" : "押运工作中由于客观原因无法按时抵达目的地时，押运员做法错误的是（）",
    "options" : [ "A:通知公司领导并说明情况", "B:通知公司业务部并说明情况", "C:通知公安机关并说明情况", "D:通知客户单位并说明情况" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 714,
    "type" : "single",
    "content" : "保安押运公司为某银行护送款项，发现可疑人员长时间窥探运钞车上下款，下列做法错误的是（）",
    "options" : [ "A:暂停上下款", "B:立即通报银行", "C:按正常勤务继续上下款", "D:通知当地公安机关" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 715,
    "type" : "single",
    "content" : "保安员在出入口守卫勤务工作中的特点是（）",
    "options" : [ "A:值勤人员较多", "B:服务对象简单", "C:工作连续", "D:风险较小" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 716,
    "type" : "single",
    "content" : "在出入口守卫中，站岗一般适用于执行（）任务的保安员",
    "options" : [ "A:查验", "B:疏导", "C:登记", "D:巡视" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 717,
    "type" : "single",
    "content" : "出入口守卫是指在（）进行检查.警戒的活动",
    "options" : [ "A:游动岗位", "B:技术岗位", "C:特殊岗位", "D:固定岗位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 718,
    "type" : "single",
    "content" : "保安武装守护任务与目标部位任务的区别在于是否使用（）",
    "options" : [ "A:技防设施", "B:保安器材", "C:武器装备", "D:特殊车辆" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 719,
    "type" : "single",
    "content" : "保安员为客户提供守护服务的目的是为其（）",
    "options" : [ "A:杜绝隐患", "B:提供安全保障", "C:带来心理安慰", "D:增加安全感" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 720,
    "type" : "single",
    "content" : "保安守护一般分为出入口守卫和（）",
    "options" : [ "A:区域部位守护", "B:目标部位守护", "C:流动目标守护", "D:固定目标守护" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 721,
    "type" : "single",
    "content" : "保安员在执行勤务时，是依据（）完成勤务任务",
    "options" : [ "A:保安服务合同", "B:保安勤务方案", "C:客户单位要求", "D:保安公司要求" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 722,
    "type" : "single",
    "content" : "保安员为客户单位提供守护服务的正确方式是（）",
    "options" : [ "A:守护与守卫", "B:门卫与守护", "C:巡逻与守卫", "D:守护与巡逻" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 723,
    "type" : "single",
    "content" : "保安员以（）.守护等方式对服务单位特定目标进行看护和守卫的服务形式称为保安守护",
    "options" : [ "A:守卫", "B:巡逻", "C:护卫", "D:门卫" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 724,
    "type" : "single",
    "content" : "文明服务要求保安员在保安服务活动中必须()",
    "options" : [ "A:小心谨慎.团结互助.客观公正.规范服务", "B:尊重客户.团结互助.勤俭节约.规范服务", "C:小心谨慎.遵纪守法.勤俭节约.规范服务", "D:尊重客户.遵纪守法.客观公正.规范服务" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 725,
    "type" : "single",
    "content" : "根据保安守护中是否使用武器装备，可将保安守护分为武装守护和（）",
    "options" : [ "A:一般守护", "B:出入口守卫", "C:门卫守护", "D:部位守护" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 726,
    "type" : "single",
    "content" : "关于保安员防火巡查内容，下列说法错误的是（）",
    "options" : [ "A:消防设施.器材和消防安全标志均放置在规定位置并完好", "B:常闭式防火门要处于开放状态", "C:灭火器要放在显眼的位置，取用要方便，存放要牢固", "D:必须设置明显的消防安全提示性标志" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 727,
    "type" : "single",
    "content" : "关于保安员职业，下列说法正确的是（）",
    "options" : [ "A:保安员作为一种正式职业已经纳入国家职业大典", "B:保安员可能作为一种职业将纳入国家职业大典", "C:保安员是一种特殊职业，不会纳入国家职业大典", "D:保安员是保卫工作的辅助力量已经纳入国家职业大典" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 728,
    "type" : "single",
    "content" : "下列不属于取得《保安员证》的条件是（）",
    "options" : [ "A:经设区的市级人民政府公安机关考试合格", "B:经设区的市级人民政府公安机关审查通过", "C:经设区的市级人民政府公安机关留存指纹信息", "D:经设区的市级人民政府公安机关留存家庭其他成员指纹信息" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 729,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，除（）外，其他选项均属于取得《保安员证》的必备条件",
    "options" : [ "A:身体健康", "B:品行良好", "C:有保安工作经历", "D:年满18周岁" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 730,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，()核发《保安员证》",
    "options" : [ "A:设区的市级人民政府人力资源和社会保障部门", "B:设区的市级人民政府司法部门", "C:设区的市级人民政府", "D:设区的市级人民政府公安机关" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 731,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾被强制隔离戒毒", "B:曾经违反学校纪律", "C:吊销《保安员证》五年", "D:曾经违反职业道德" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 732,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾经违反社会公德", "B:曾经违反学校纪律", "C:曾被行政拘留一次", "D:曾被劳动教养" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 733,
    "type" : "single",
    "content" : "车辆在停稳前，（）",
    "options" : [ "A:不得开车门和上下人员", "B:可以开关车门，但是不得下乘客", "C:可以开关车门，但是不得上乘客", "D:只要车速低，可以随时开关车门和上下人员" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 734,
    "type" : "single",
    "content" : "若厨房液化石油气发生泄漏，首先应该做的是（）",
    "options" : [ "A:立刻关闭可燃气阀门", "B:准备干粉灭火器", "C:关闭厨房的门窗，防止气体进入其它房间", "D:拨打“119”报警" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 735,
    "type" : "single",
    "content" : "车辆进入小区停车场时，驾驶人不能（）",
    "options" : [ "A:在停车场内加油", "B:按照规定方向行驶", "C:保持停车场内清洁", "D:在车轮上加一把锁" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 736,
    "type" : "single",
    "content" : "拨打完“119”电话报警后,保安员需要立即对现场展开灭火救援，下列有关灭火救援的描述错误的是（）",
    "options" : [ "A:首先抢救贵重物品,尽量将火灾损失控制到最小", "B:快速报告单位负责人，启动应急预案，立即疏散人员，组织开展火灾扑救", "C:确认无人被困时，关闭火灾现场的门.窗，减少空气流通，延缓火势的发展", "D:立即派人到路口迎接.引导消防车进入救援现场" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 739,
    "type" : "single",
    "content" : "以下停车场中，属于公共停车场的是（）",
    "options" : [ "A:物业小区自用停车场", "B:大型超市设置的停车场", "C:事业单位内部停车场", "D:写字楼自用停车场" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 740,
    "type" : "single",
    "content" : "在押运过程中，下列不能作为确定配备防暴枪数量的依据是（）",
    "options" : [ "A:押运任务的性质", "B:承担风险的程度", "C:押运路途的远近", "D:客户单位的要求" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 741,
    "type" : "single",
    "content" : "一般不需要武装押运的物品是（）",
    "options" : [ "A:黄金.文物", "B:现金.有价证券", "C:爆炸.剧毒物品", "D:仪器设备" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 742,
    "type" : "single",
    "content" : "保安押运公司为某银行护送款项，发现可疑车辆长时间跟随运钞车，下列做法错误的是（）",
    "options" : [ "A:提高警惕不予理睬", "B:记清车号上报单位", "C:提高警惕做好准备", "D:联系公安机关" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 743,
    "type" : "single",
    "content" : "保安押运公司为某银行护送款项，途中突然发生爆胎，恰逢本公司运钞车途经此处，表示可以帮忙送款，下列做法错误的是（）",
    "options" : [ "A:婉言谢绝", "B:表示同意", "C:表示已报告领导，安排解决", "D:表示自己能够解决" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 744,
    "type" : "single",
    "content" : "保安押运公司为某银行护送款项，途中突然发生爆胎，造成运钞车无法行进，下列做法错误的是（）",
    "options" : [ "A:立即报警", "B:向本单位报告", "C:请求银行派车将款项接走", "D:严密看管所押物品" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 745,
    "type" : "single",
    "content" : "押运任务确定后，押运员要做好启运前的（）工作",
    "options" : [ "A:体检", "B:交接", "C:探亲", "D:休假" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 746,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾经违反社会公德", "B:曾经违反学校纪律", "C:曾被吊销《保安员证》未满3年", "D:曾被吊销《保安员证》未满5年" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 747,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾经违反社会公德", "B:曾经违反学校纪律", "C:曾被3次以上行政拘留", "D:曾经违反保安职业道德" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 748,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:违反社会公德", "B:违反学校纪律", "C:被强制隔离戒毒", "D:被吊销《保安员证》满5年" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 749,
    "type" : "single",
    "content" : "在物业小区内，业主可以（）",
    "options" : [ "A:练车", "B:试车", "C:低速行驶", "D:修车" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 750,
    "type" : "single",
    "content" : "关于保安员取得职业资格条件，下列说法正确的是（）",
    "options" : [ "A:必须是初中以上学历的中国公民", "B:必须是高中以上学历的中国公民", "C:必须是政治过硬.作风优良的中国公民", "D:必须是通过劳动和社会保障部门组织的考试且成绩合格的中国公民" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 751,
    "type" : "single",
    "content" : "关于保安员取得《保安员证》条件，下列说法正确的是（）",
    "options" : [ "A:必须通过公安机关的审查并且留存指纹信息", "B:必须通过劳动与社会保障部门的审查并且留存指纹信息", "C:必须通过公安机关的审查并且留存体貌特征信息", "D:必须通过劳动与社会保障部门的审查并且留存体貌特征信息" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 752,
    "type" : "single",
    "content" : "某单位柴油储罐发生火灾，该类火灾不能使用（）灭火器",
    "options" : [ "A:二氧化碳", "B:水型", "C:泡沫", "D:干砂" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 753,
    "type" : "single",
    "content" : "干粉灭火器扑救可燃.易燃液体火灾时，应对准（）扫射",
    "options" : [ "A:火焰上部", "B:火焰中部", "C:火焰中下部", "D:火焰根部" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 754,
    "type" : "single",
    "content" : "火灾报警专用电话号码是（）",
    "options" : [ "A:120", "B:110", "C:119", "D:114" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 755,
    "type" : "single",
    "content" : "城市公共汽车（）停车上.下乘客",
    "options" : [ "A:可以在站点以外的路段", "B:不得在站点以外的路段", "C:在交通流量不大的时段，可以随时", "D:可以在交通拥堵的时段" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 756,
    "type" : "single",
    "content" : "接到火灾警报后，消防控制室值守人员确认火情的做法错误的是（）",
    "options" : [ "A:通知报警区域的巡查人员到现场确认", "B:通知报警区域的工作人员到现场确认", "C:控制室职守人员必须立刻到现场确认", "D:利用控制室的监控设备和报警设备确认" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 757,
    "type" : "single",
    "content" : "关于保安员职业道德的作用，下面说法错误的是（）",
    "options" : [ "A:规范保安员服务行为", "B:形成高尚职业情操", "C:塑造良好的企业形象", "D:直接增加企业的利润" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 758,
    "type" : "single",
    "content" : "企业的社会形象主要由企业的()构成",
    "options" : [ "A:产品形象.服务形象.经营形象", "B:产品形象.服务形象.地理位置", "C:经营形象.服务形象.注册资本", "D:经营形象.注册资本.个人形象" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 759,
    "type" : "single",
    "content" : "文明服务要求保安员在保安服务活动中必须()",
    "options" : [ "A:团结互助.语言规范.举止得体.礼貌待人", "B:仪表端庄.爱岗敬业.举止得体.勤俭节约", "C:仪表端庄.语言规范.举止得体.礼貌待人", "D:态度谦卑.语言规范.举止得体.诚实守信" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 760,
    "type" : "single",
    "content" : "文明服务要求保安员在保安服务活动中必须()",
    "options" : [ "A:仪表端庄.语言规范.举止得体.礼貌待人", "B:仪表端庄.语言规范.举止得体.勤俭节约", "C:态度严肃.语言规范.举止得体.礼貌待人", "D:态度谦卑.语言规范.举止得体.勤俭节约" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 761,
    "type" : "single",
    "content" : "关于宽容的错误说法是()",
    "options" : [ "A:宽厚与容忍", "B:尊重他人的个性", "C:求同存异", "D:同意他人的所有意见" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 762,
    "type" : "single",
    "content" : "在保安员职业道德中，()不是团结互助的要求",
    "options" : [ "A:对同事宽容相待", "B:同事间互相学习", "C:同事间互相协作", "D:同事间不竞争" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 763,
    "type" : "single",
    "content" : "王某刚当上保安员,他知道爱岗敬业是做好保安工作的重要前提。爱岗敬业就是要求王某（）",
    "options" : [ "A:不要轻易转行", "B:不要计较待遇", "C:承担职业责任", "D:勤俭节约" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 764,
    "type" : "single",
    "content" : "在保安服务业中，提倡爱岗敬业的目的是使从业人员()",
    "options" : [ "A:不要轻易转行", "B:不要计较福利待遇", "C:不要计较加班加点", "D:认识保安服务的社会价值" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 765,
    "type" : "single",
    "content" : "出入口守卫工作的特点之一是（）",
    "options" : [ "A:位置独立", "B:位置复杂", "C:位置特殊", "D:流动服务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 766,
    "type" : "single",
    "content" : "火灾初起阶段是火灾扑救()的阶段",
    "options" : [ "A:最不利", "B:最有利", "C:较有利", "D:较不利" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 767,
    "type" : "single",
    "content" : "在物业小区内，机动车可以在()停放",
    "options" : [ "A:人行道", "B:车行道", "C:小区通道", "D:指定位置" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 768,
    "type" : "single",
    "content" : "保安员在消防控制室接到火灾警报或发现火灾时应首先（）",
    "options" : [ "A:确认火情,及时启动消防设施并报警", "B:组织人员救援", "C:立刻抢救贵重物资", "D:立刻组织人员疏散" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 769,
    "type" : "single",
    "content" : "物业小区停车场，必须实行严格的（）制度",
    "options" : [ "A:车辆出入登记", "B:车辆安全技术检验", "C:机动车号牌管理", "D:车辆保养管理" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 770,
    "type" : "single",
    "content" : "机动车在距离铁路道口30米以内的路段上（）",
    "options" : [ "A:不得停车", "B:可以临时停车", "C:可以长时间停车", "D:可以随意停车" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 771,
    "type" : "single",
    "content" : "机动车在设有禁停标志.禁停标线的路段（）",
    "options" : [ "A:不得停车", "B:可以临时停车", "C:可以长时间停车", "D:可以随意停车" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 773,
    "type" : "single",
    "content" : "在城市道路的人行横道上，机动车（）",
    "options" : [ "A:不得停车", "B:可以随意停车", "C:可以长时间停车", "D:可以停车" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 774,
    "type" : "single",
    "content" : "机动车在路边停车时，机动车驾驶人（），上下人员或者装卸物品后，立即驶离",
    "options" : [ "A:可以下车休息", "B:可以下车装卸物品", "C:不得离车", "D:在车上，可以不拉手刹" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 775,
    "type" : "single",
    "content" : "在机动车道与非机动车道之间设有隔离设施的路段，（）",
    "options" : [ "A:可以临时停车", "B:可以长时间停车", "C:可以随意停车", "D:不得停车" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 776,
    "type" : "single",
    "content" : "依据《中华人民共和国枪支管理法》和《专职守护押运人员枪支使用管理条例》，保安员（）可以使用武器",
    "options" : [ "A:从事保安武装守护时", "B:从事一般出入口守护时", "C:从事一般区域巡逻时", "D:协助处置纠纷时" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 777,
    "type" : "single",
    "content" : "下面关于礼的说法错误的是()",
    "options" : [ "A:表示敬意的通称", "B:为表示敬意而隆重举行的仪式", "C:社会交往中的礼节", "D:是一种纪律" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 778,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵守纪律", "B:履行劳动合同", "C:享受劳动条件和劳动保护", "D:保守秘密" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 779,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵守纪律", "B:履行劳动合同", "C:保守秘密", "D:开展安全检查" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 780,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，（）属于保安员的义务",
    "options" : [ "A:查验出入人员证件", "B:登记出入车辆", "C:开展守护巡逻", "D:保守客户单位秘密" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 781,
    "type" : "single",
    "content" : "钱某是某食品厂的保安员，某日凌晨两点，钱某巡逻至该厂财务室附近，发现财务室被盗，门口地面上散落一些钞票。钱某的下列做法错误的是（）",
    "options" : [ "A:报告保卫部门领导", "B:报告当地公安机关", "C:将钞票带回保卫部", "D:保护钞票散落现场" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 782,
    "type" : "single",
    "content" : "保安员的举止不包括()",
    "options" : [ "A:手势", "B:站姿", "C:走姿", "D:语速" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 783,
    "type" : "single",
    "content" : "门卫王某在检查来访人员证件时,不小心将证件掉在地上,这时他应该说()",
    "options" : [ "A:对不起，实在抱歉", "B:我不是故意的", "C:你自己捡一下吧", "D:没事没事" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 784,
    "type" : "single",
    "content" : "身上一旦着火，切忌()",
    "options" : [ "A:奔跑或用手拍打", "B:立即脱掉衣服", "C:往身上浇水", "D:就地打滚" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 785,
    "type" : "single",
    "content" : "下列选项中不属于自动消防设施的是（）",
    "options" : [ "A:疏散指示标志灯", "B:湿式喷淋", "C:感烟探测器", "D:电动防火门" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 786,
    "type" : "single",
    "content" : "消防控制室应当不间断地（）各种消防设备，保持系统的正常运行",
    "options" : [ "A:操作", "B:监测", "C:检查", "D:维修" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 787,
    "type" : "single",
    "content" : "操作人员在消防控制室内无法实施的行为是（）",
    "options" : [ "A:联动控制建筑物内防排烟系统.防火门.防火卷帘的运行状态", "B:接收并反馈建筑物内防排烟系统.防火门.防火卷帘等相关设备的信号", "C:联动控制建筑物内消火栓.灭火器的运行状态并反馈其运行情况", "D:通过消防广播组织引导人员疏散" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 788,
    "type" : "single",
    "content" : "消防控制室是建筑内消防设施系统的（）中心",
    "options" : [ "A:控制", "B:接收", "C:显示", "D:报警" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 789,
    "type" : "single",
    "content" : "搬运发生骨折的伤员前，要对骨折处进行有效固定。下面关于有效固定说法正确的是（）",
    "options" : [ "A:固定材料应直接接触皮肤", "B:固定时绑扎得越紧越好", "C:固定时不能超关节", "D:四肢骨折固定应将指（趾）末端露出" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 790,
    "type" : "single",
    "content" : "覆盖伤口的最好敷料为（）",
    "options" : [ "A:尼龙网袋", "B:面巾纸", "C:塑料袋", "D:布料.毛巾.手绢等" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 791,
    "type" : "single",
    "content" : "使用干粉灭火器扑救可燃.易燃液体火灾时应对准火焰（）扫射",
    "options" : [ "A:外部", "B:根部", "C:中心", "D:上部" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 792,
    "type" : "single",
    "content" : "搬运脊柱骨折伤员时，最好使用（）",
    "options" : [ "A:毛毯", "B:大床单", "C:橡胶雨衣", "D:木板" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 793,
    "type" : "single",
    "content" : "使用推车式二氧化碳灭火器时，一人快速取下喇叭筒并展开喷射软管后，握住喇叭筒根部的手柄，另一人（）",
    "options" : [ "A:拔掉保险卡，旋转开启旋钮", "B:快速按顺时针方向旋动手轮，并开到最大位置", "C:快速按逆时针方向旋动手轮，并开到最大位置", "D:拔去保险销，压下压把" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 794,
    "type" : "single",
    "content" : "指压止血法中的间接压迫法是指（）",
    "options" : [ "A:救护人用手压迫出血部位远心端的动脉", "B:压迫时不应将动脉压迫至骨面上", "C:救护人用手压迫出血部位近心端的动脉", "D:救护人用手压迫出血部位近心端的静脉" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 795,
    "type" : "single",
    "content" : "手提式二氧化碳灭火器可分为（）",
    "options" : [ "A:化学式和空气式", "B:手轮式和鸭嘴式", "C:储气式和窗贮压式", "D:喷射式和扫射式" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 796,
    "type" : "single",
    "content" : "二氧化碳灭火器所充装的二氧化碳灭火剂是一种化学性质稳定的气体，下列不属于二氧化碳灭火剂特点的是（）",
    "options" : [ "A:不燃烧", "B:不助燃", "C:不腐蚀", "D:不挥发" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 797,
    "type" : "single",
    "content" : "室外消火栓按其结构不同可分为（）",
    "options" : [ "A:低压消火栓和高压消火栓", "B:手提式消火栓和背负式消火栓", "C:地上消火栓和地下消火栓", "D:手提式消火栓和推车式消火栓" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 798,
    "type" : "single",
    "content" : "火灾发生的()阶段是逃生的最好时期",
    "options" : [ "A:末期", "B:初期", "C:救援期", "D:中期" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 799,
    "type" : "single",
    "content" : "剧院发生火灾后，应按照（）的方向选择安全出口逃生",
    "options" : [ "A:人流较大", "B:应急指示指引", "C:人流较小", "D:火焰较小" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 800,
    "type" : "single",
    "content" : "在现场急救中，给成人做心肺复苏时，5个循环约需要（）分钟",
    "options" : [ "A:1", "B:2", "C:3", "D:4-5" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 801,
    "type" : "single",
    "content" : "在物业小区内，保安员的主要任务之一是（）",
    "options" : [ "A:秩序维护", "B:守候伏击", "C:治安查处", "D:打击犯罪" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 802,
    "type" : "single",
    "content" : "对于保安员来说，秩序维护主要是指（）",
    "options" : [ "A:维护各类公共场所的治安秩序", "B:维护服务区域周边的工作.生活秩序", "C:维护服务区域内的正常工作.生活秩序", "D:维护服务区域及周边地区的治安秩序" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 803,
    "type" : "single",
    "content" : "保安员按照事先确定的巡逻路线，由起点到终点.再由终点原路返回的巡逻形式是（）",
    "options" : [ "A:单线巡逻", "B:往返巡逻", "C:交叉巡逻", "D:点线巡逻" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 805,
    "type" : "single",
    "content" : "风险等级是指存在于防护对象本身及其周围的.对其构成安全威胁的（）",
    "options" : [ "A:程度", "B:标准", "C:数量", "D:准则" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 806,
    "type" : "single",
    "content" : "安全管理系统是指对入侵报警.视频安防监控.出入口控制等子系统进行组合或集成，实现对各子系统的（）.管理和监控的电子系统",
    "options" : [ "A:功能提升", "B:系统测试", "C:有效联动", "D:系统叠加" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 807,
    "type" : "single",
    "content" : "保安服务可以借助安全技术防范系统的（）能力，及时发现不法入侵",
    "options" : [ "A:冗余", "B:反应", "C:升级", "D:节电" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 808,
    "type" : "single",
    "content" : "保安服务可以借助安全技术防范系统的（）作用，减少不法分子的入侵行为的发生",
    "options" : [ "A:侦查", "B:打击", "C:威慑", "D:恐吓" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 809,
    "type" : "single",
    "content" : "在执行区域巡逻勤务中，以下说法不正确的是（）",
    "options" : [ "A:填写交班.接班记录应当及时", "B:交班人员须填写已经发现但未能及时处理或未处理完结事项", "C:交班人员须特别提醒接班人员注意已经发现但未能及时处理或未处理完结的事项", "D:接班人员须填写对接班的思想认识和工作准备" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 810,
    "type" : "single",
    "content" : "对保安服务业来说安全技术防范系统就是利用（）为客户单位提供安全服务",
    "options" : [ "A:人力保安", "B:物理设施", "C:防范技术", "D:安全管理" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 811,
    "type" : "single",
    "content" : "巡逻人员填写交班记录时，以下说法正确的是（）",
    "options" : [ "A:交班记录可以补写", "B:交班人员班组.姓名可以用代号或昵称", "C:填写已经发现但未能及时处理的事项", "D:交班人员的巡逻体会应当填写在备注里" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 812,
    "type" : "single",
    "content" : "安全技术防范是以（）和预防犯罪为目的的一项社会公共安全业务",
    "options" : [ "A:预防灾害", "B:预防损失", "C:预防失误", "D:抓获罪犯" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 813,
    "type" : "single",
    "content" : "安全技术防范是一种由探测.（）.快速反应相结合的安全防范体系",
    "options" : [ "A:保安", "B:出警", "C:延迟", "D:监控" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 814,
    "type" : "single",
    "content" : "风险分析是指在特定系统中进行危险辨识.（）.后果分析的全过程",
    "options" : [ "A:频率分析", "B:资料调查", "C:环境调查", "D:资产辩识" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 815,
    "type" : "single",
    "content" : "风险管理的三要素是风险分析，风险评价和（）",
    "options" : [ "A:频率分析", "B:风险估计", "C:后果估计", "D:风险控制" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 816,
    "type" : "single",
    "content" : "风险管理的三要素是风险分析，（）和风险控制",
    "options" : [ "A:后果估计", "B:风险转移", "C:风险评价", "D:频率分析" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 817,
    "type" : "single",
    "content" : "保安员赵某担任演艺明星刘某的随身护卫，在一次大型演唱会上刘某遭遇歌迷滋扰，这时赵某不能（）",
    "options" : [ "A:劝说歌迷不要滋扰", "B:转移刘某", "C:驱赶不服从指挥的滋扰者", "D:采取措施保护刘某" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 818,
    "type" : "single",
    "content" : "面对护卫工作中的紧急情况，保安员可以采取的应急措施是（）",
    "options" : [ "A:堵截犯罪嫌疑人", "B:搜查犯罪嫌疑人", "C:扣押犯罪嫌疑人", "D:拘捕犯罪嫌疑人" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 819,
    "type" : "single",
    "content" : "下列对保安员防火巡查的内容叙述错误的是（）",
    "options" : [ "A:消防设施.器材和消防安全标志是否在位.完整", "B:安全出口.疏散通道是否畅通，安全疏散指示标志.应急照明是否完好", "C:常闭式防火门是否处于关闭状态，防火卷帘下是否堆放物品影响使用", "D:有消防设施.器材的部位是否有人员在位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 820,
    "type" : "single",
    "content" : "某公司因吊顶内照明线路短路发生火灾，造成21人死亡，1人受伤，直接财产损失725.8万元。这起火灾属于（）",
    "options" : [ "A:特别重大火灾", "B:重大火灾", "C:较大火灾", "D:一般火灾" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 821,
    "type" : "single",
    "content" : "有关消防安全的叙述，下列选项错误的是（）",
    "options" : [ "A:消防安全是社会公共安全的一个重要组成部分", "B:消防安全是尽量确保不发生火灾及发生火灾后能够及时扑救，尽量减小危害", "C:消防安全是构建和谐社会.确保经济社会科学发展的重要标志", "D:消防安全是维护社会稳定的主要手段" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 822,
    "type" : "single",
    "content" : "下列不属于保安员必须掌握的消防安全技能的是（）",
    "options" : [ "A:报火警", "B:组织人员疏散", "C:扑救初起火灾", "D:组织火灾事故原因调查" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 823,
    "type" : "single",
    "content" : "根据公安部确定的火灾等级标准，重大火灾是指造成（），或者1000万元以上5000万元以下直接财产损失的火灾",
    "options" : [ "A:10人以上30人以下死亡.50人以上100人以下重伤", "B:3人以上10人以下死亡.150人以上100人以下重伤", "C:3人以下死亡.20人以下重伤", "D:10人以下死亡.10人以上50人以下重伤" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 824,
    "type" : "single",
    "content" : "某工厂的生产原料甲醇不慎泄露，引发了火灾，这次火灾属于（）",
    "options" : [ "A:A类火灾", "B:B类火灾", "C:C类火灾", "D:D类火灾" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 825,
    "type" : "single",
    "content" : "消防专指（）",
    "options" : [ "A:火灾救援", "B:预防和扑救火灾", "C:消除火灾隐患和防止火灾发生", "D:控制火灾蔓延和整改火灾隐患" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 826,
    "type" : "single",
    "content" : "某加油站在给摩托车加油时违规操作，用塑胶桶给摩托车加油，有少量汽油泄漏，被另一位吸烟的员工不慎引燃，火势蔓延造成火灾，这种火灾属于（）",
    "options" : [ "A:A类火灾", "B:B类火灾", "C:C类火灾", "D:D类火灾" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 827,
    "type" : "single",
    "content" : "火灾是指（）",
    "options" : [ "A:在时间和空间上失去控制的燃烧所造成的灾害", "B:燃烧过程中产生的热量将可燃物加热到发光程度的一种现象", "C:可燃物被点燃后产生的一种现象", "D:可燃物被点燃后，发光发热的化学现象" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 828,
    "type" : "single",
    "content" : "我国现行国家标准将火灾分为A.B.C.D四类，下列属于B类火灾的是（）",
    "options" : [ "A:木材.棉.毛.麻.纸张火灾等", "B:钾.钠.镁.锂.铝镁合金火灾等", "C:煤气.天然气.甲烷.乙烷.丙烷.氢气火灾等", "D:汽油.煤油.柴油.原油.甲醇.乙醇.沥青.石蜡火灾等" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 829,
    "type" : "single",
    "content" : "我国现行国家标准将火灾分为A.B.C.D四类，下列属于A类火灾的是（）",
    "options" : [ "A:液体火灾和可熔化的固体物质火灾", "B:固体火灾", "C:气体火灾", "D:金属火灾" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 830,
    "type" : "single",
    "content" : "根据公安部确定的火灾等级标准，按照一次火灾造成的伤亡人数和直接财产损失，火灾划分为（）",
    "options" : [ "A:一级火灾.二级火灾.三级火灾.四级火灾", "B:A类火灾.B类火灾.C类火灾.D类火灾", "C:一类火灾.二类火灾.三类火灾.四类火灾", "D:特别重大火灾.重大火灾.较大火灾.一般火灾" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 831,
    "type" : "single",
    "content" : "《保安员证》是由（）依法颁发的保安服务从业资格证书",
    "options" : [ "A:公安机关", "B:保安行业协会", "C:保安培训单位", "D:人力资源和社会保障部门" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 832,
    "type" : "single",
    "content" : "某水果经销商在某市批发了数十箱苹果，途经一路段时，发生车辆倾翻事故，导致苹果散落周边，现场路人见状，纷纷哄拿捡拾后逃离现场。这些路人的哄拿捡拾行为属于（）",
    "options" : [ "A:犯罪行为", "B:侵犯他人财产行为", "C:危害公共安全行为", "D:妨害社会管理行为" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 833,
    "type" : "single",
    "content" : "某物业管理服务公司的保安员颜某，利用在物业小区监控室值班的机会，经常在夜间私自将监控探头对准业主窗口进行偷窥，颜某的行为属于（）的行为",
    "options" : [ "A:危害小区安全", "B:妨害小区管理", "C:泄露业主隐私", "D:侵犯业主隐私" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 834,
    "type" : "single",
    "content" : "保安员白某在某小区门卫值勤时，经常私自拆业主的信件。白某的行为（）",
    "options" : [ "A:危害客户安全", "B:妨碍物业管理", "C:侵犯业主权益", "D:泄露业主秘密" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 835,
    "type" : "single",
    "content" : "保安押运公司为某银行护送款项，途中突然发生火灾，造成运钞车无法行进，下列做法错误的是（）",
    "options" : [ "A:拨打110报警", "B:拨打119报警", "C:拨打122报警", "D:请警车帮助押款" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 836,
    "type" : "single",
    "content" : "押运工作中，车辆突然出现故障，无法正常行驶应立即启动（）",
    "options" : [ "A:通讯联络方案", "B:应急预案", "C:执勤方案", "D:消防方案" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 837,
    "type" : "single",
    "content" : "押运工作中，突然出现数字电台失灵应立即启动（）",
    "options" : [ "A:通讯联系方案", "B:消防方案", "C:紧急避险方案", "D:巡逻方案" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 838,
    "type" : "single",
    "content" : "保安员刘某从某保安服务公司辞职后，利用其曾经在国家某部委提供过保安服务的经历，冒充该部委的工作人员骗取他人钱财。刘某的行为属于（）的行为",
    "options" : [ "A:危害社会安全", "B:扰乱社会秩序", "C:招摇撞骗", "D:侵害单位财产" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 841,
    "type" : "single",
    "content" : "在施工地段，非施工机动车（）",
    "options" : [ "A:不得停车", "B:可以随意停车", "C:可以长时间停", "D:可以停车" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 842,
    "type" : "single",
    "content" : "机动车在消防栓或者消防队(站)门前（）米以内的路段，不得停车",
    "options" : [ "A:30", "B:20", "C:10", "D:5" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 845,
    "type" : "single",
    "content" : "关于巡逻中的特殊情况，下面说法不正确的是（）",
    "options" : [ "A:处理特殊情况采取的每项措施须请示报告", "B:须记录处理特殊情况的经过和结果", "C:如果本班次仍然未能完成处置须在交班记录上写明", "D:本班次未能处理的特殊情况，无须向下一班次做说明" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 846,
    "type" : "single",
    "content" : "防护级别是指为保障防护对象的安全所采取（）的水平",
    "options" : [ "A:技术设备", "B:防范措施", "C:物理设施", "D:人力保安" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 847,
    "type" : "single",
    "content" : "关于巡逻中的特殊情况，下面说法正确的是（）",
    "options" : [ "A:处理特殊情况不需请示报告", "B:处理特殊情况的结果不需记录", "C:处理特殊情况的经过不需记录", "D:本班次未能处理的特殊情况，须向下一班次说明" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 848,
    "type" : "single",
    "content" : "在执行区域巡逻勤务中，以下说法正确的是（）",
    "options" : [ "A:交接班记录可以补写", "B:交接班人员班组.姓名可以用代号或昵称", "C:接班人员对领导交代或交班人员交代事项要核实并填写清楚", "D:交接班人员工作体会要写在备注里" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 849,
    "type" : "single",
    "content" : "安全技术防范系统是以预防损失和（）为目的的一项社会公共安全业务",
    "options" : [ "A:预防灾害", "B:预防犯罪", "C:预防失误", "D:抓获罪犯" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 850,
    "type" : "single",
    "content" : "在执行区域巡逻勤务中，对于发现的异常情况，下面说法正确的是（）",
    "options" : [ "A:应当每次记录请示报告情况", "B:及时采取措施的不必记录处置过程", "C:没有及时采取措施的不必记录处置原因", "D:没有及时采取措施的不必每班次都做记录" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 851,
    "type" : "single",
    "content" : "安全技术防范是一种由（）.延迟.快速反应相结合的安全防范体系",
    "options" : [ "A:保安", "B:报警", "C:探测", "D:监控" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 852,
    "type" : "single",
    "content" : "行为人实施的妨害或可能妨害不特定多数人的人身和重大公私财产安全的行为，属于妨害（）的行为",
    "options" : [ "A:公共秩序", "B:公共安全", "C:财产安全", "D:人身安全" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 853,
    "type" : "single",
    "content" : "行为人实施的盗窃.诈骗.哄抢.抢夺等行为，属于侵犯（）的行为",
    "options" : [ "A:私人利益", "B:公共利益", "C:财产权利", "D:民事权利" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 854,
    "type" : "single",
    "content" : "治安管理处罚法解决的是违反治安管理（）.危害社会秩序.情节不严重的违法问题",
    "options" : [ "A:法律法规", "B:宪法", "C:刑法", "D:民法" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 855,
    "type" : "single",
    "content" : "一个单位或区域为了维护内部正常秩序，防止人身和财产遭受损失而制定并实施的人员和物资进出大门的规程和准则称为（）",
    "options" : [ "A:保卫制度", "B:门卫制度", "C:巡逻制度", "D:登记制度" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 856,
    "type" : "single",
    "content" : "某日，保安员小李在活动管辖区内值勤，发现有人利用迷信手段骗取群众财物。这时，小李应该（）",
    "options" : [ "A:对犯罪嫌疑人实施抓捕", "B:对犯罪活动予以制止", "C:对非法所得予以收", "D:对犯罪嫌疑人进行扣留查问" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 857,
    "type" : "single",
    "content" : "对于室内盗窃现场撒落在地面的衣物.文件.纸张和作案工具等物品，保安员正确的做法是（）",
    "options" : [ "A:对现场进行整理", "B:一律不准接触或移动", "C:先保管好疑似作案工具", "D:先保管好涉案文件" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 858,
    "type" : "single",
    "content" : "下列行为不属于公安机关治安管理对象的是（）",
    "options" : [ "A:危险物品", "B:管制刀具", "C:警察内务", "D:交通安全" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 859,
    "type" : "single",
    "content" : "若有发现群体性冲击门卫的迹象，保安员应立即（）",
    "options" : [ "A:关闭单位大门，把好侧门，严格按门卫制度验证出入", "B:将准备冲击的人员带离现场，并立刻报告上级有关领导", "C:扣押准备冲击的人员，并立刻报告上级有关领导", "D:严格检查准备冲击的人员随身所携带的所有物品" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 860,
    "type" : "single",
    "content" : "高层建筑物中部起火，疏散通道被火切断，保安员可以引导人员()",
    "options" : [ "A:疏散到相对安全区域，等待消防队救援", "B:清除障碍物后逃生", "C:尝试从窗口往下跳", "D:试图从火中冲出去" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 861,
    "type" : "single",
    "content" : "关于消防安全通道或疏散出口的管理和设置正确的是()",
    "options" : [ "A:某酒店在二楼窗户加上栅栏", "B:某小区地下室出口均上锁", "C:消防电梯必须每层都停靠", "D:安全出口必须直通消防电梯" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 862,
    "type" : "single",
    "content" : "在保安员职业道德中，()是对保安员合作精神的基本要求",
    "options" : [ "A:诚实守信", "B:爱岗敬业", "C:团结互助", "D:文明服务" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 863,
    "type" : "single",
    "content" : "单位内发生涉嫌刑事案件时，单位内部治安保卫部门应当（）",
    "options" : [ "A:立即报警，并先期开展搜查工作", "B:立即报警，并讯问犯罪嫌疑人", "C:立即报警，采取现场保护措施", "D:暂不报警，内部调查犯罪嫌疑人" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 864,
    "type" : "single",
    "content" : "单位内部治安保卫工作由（）负责",
    "options" : [ "A:辖区公安派出所", "B:保安从业单位", "C:本单位", "D:社会综合治理办公室" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 865,
    "type" : "single",
    "content" : "以下叙述中，（）不是保安员应享有的权利",
    "options" : [ "A:实施交通管制", "B:签订劳动合同", "C:接受表彰奖励", "D:享受劳动保护" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 866,
    "type" : "single",
    "content" : "对在单位表现良好的保安员进行表彰奖励是保安员的（）",
    "options" : [ "A:权利", "B:义务", "C:职责", "D:任务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 867,
    "type" : "single",
    "content" : "接受安全教育与技能培训是保安员的（）",
    "options" : [ "A:权利", "B:义务", "C:职责", "D:任务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 868,
    "type" : "single",
    "content" : "关于保安员享有社会保险权利的叙述，下列说法错误的是（）",
    "options" : [ "A:保安从业单位应当参加社会保险", "B:保安员应当参加社会保险", "C:保安员参加社会保险的条件和标准应遵守国家和地方的有关规定", "D:保安员参加社会保险的条件和标准是保安员自我的需要" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 869,
    "type" : "single",
    "content" : "2007年1月1日，原劳动和社会保障部与公安部制定的（）开始施行",
    "options" : [ "A:《保安员国家职业标准（试行）》", "B:《保安服务管理条例》", "C:《保安服务操作规程与质量控制》", "D:《公安机关实施保安服务管理条例办法》" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 870,
    "type" : "single",
    "content" : "根据《保安员国家职业标准（试行）》，保安师属于（）",
    "options" : [ "A:国家职业资格一级", "B:国家职业资格二级", "C:国家职业资格三级", "D:国家职业资格四级" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 871,
    "type" : "single",
    "content" : "根据《保安员国家职业标准（试行）》，中级保安员属于（）",
    "options" : [ "A:国家职业资格一级", "B:国家职业资格二级", "C:国家职业资格四级", "D:国家职业资格五级" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 872,
    "type" : "single",
    "content" : "曾（）次被吊销《保安员证》的人不得从事保安服务",
    "options" : [ "A:四", "B:三", "C:两", "D:一" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 873,
    "type" : "single",
    "content" : "被吊销《保安员证》未满（）年不得从事保安服务",
    "options" : [ "A:1", "B:2", "C:3", "D:4" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 874,
    "type" : "single",
    "content" : "曾经被收容教育.强制隔离戒毒.劳动教养或者（）次以上行政拘留不得担任保安员",
    "options" : [ "A:1", "B:2", "C:3", "D:4" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 875,
    "type" : "single",
    "content" : "关于保安员的服务内容，下列说法正确的是（）",
    "options" : [ "A:私自为公民.法人和其他社会组织提供人身.财产.信息等安全防范服务", "B:私自为公民.法人和其他社会组织提供人身.财产.信息等安全管理服务", "C:在从业单位为公民.法人和其他社会组织提供人身.财产.信息等治安管理服务", "D:在从业单位为公民.法人和其他社会组织提供人身.财产.信息等安全防范服务" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 876,
    "type" : "single",
    "content" : "根据保安守护中是否使用武器装备，可将保安守护分为一般守护和（）",
    "options" : [ "A:区域守护", "B:目标部位守护", "C:武装守护", "D:门卫守护" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 877,
    "type" : "single",
    "content" : "保安员文明服务的要求不包括()",
    "options" : [ "A:仪表端庄", "B:语言规范", "C:态度生硬", "D:举止得体" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 878,
    "type" : "single",
    "content" : "大家都称赞保安员张某是团结互助的模范，他在工作中应该做到了（）",
    "options" : [ "A:不与他人竞争", "B:不提任何要求", "C:诚心帮助他人", "D:勤俭节约" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 879,
    "type" : "single",
    "content" : "出入口守卫是指在固定岗位进行的（）活动，是服务区域安全的第一道防线",
    "options" : [ "A:查验与疏导", "B:检查与警戒", "C:查验人员与车辆", "D:检查可疑人员" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 880,
    "type" : "single",
    "content" : "出入口守卫方案内容中包括工作重点.交接班时间和（）等",
    "options" : [ "A:处理方法", "B:抢救措施", "C:应急措施", "D:整改措施" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 881,
    "type" : "single",
    "content" : "（）属于保安守护工作范围",
    "options" : [ "A:出入口守卫", "B:指定区域巡逻", "C:固定点监控", "D:流动区域守护" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 882,
    "type" : "single",
    "content" : "在保安守护工作中，保安员为客户提供服务履行门卫职责属于（）",
    "options" : [ "A:门岗守护", "B:区域守护", "C:出入口守卫", "D:目标守护" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 883,
    "type" : "single",
    "content" : "“全国十佳保安员”谢海宝认为，只要一门心思投入到本职工作中，就会干得出色。他的体会反映了职业道德中的（）",
    "options" : [ "A:诚实守信", "B:爱岗敬业", "C:团结互助", "D:文明服务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 884,
    "type" : "single",
    "content" : "根据《保安员国家职业标准（试行）》，初级保安员属于（）",
    "options" : [ "A:国家职业资格一级", "B:国家职业资格二级", "C:国家职业资格四级", "D:国家职业资格五级" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 885,
    "type" : "single",
    "content" : "根据《保安员国家职业标准（试行）》，保安员的最高职业能力等级是（）",
    "options" : [ "A:高级保安员", "B:高级保安师", "C:高级保卫师", "D:高级保卫员" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 886,
    "type" : "single",
    "content" : "《保安员国家职业标准（试行）》是由（）制定的",
    "options" : [ "A:原劳动和社会保障部与公安部", "B:原劳动和社会保障部与司法部", "C:公安部与司法部", "D:公安部和教育部" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 887,
    "type" : "single",
    "content" : "甲在互联网上认识了多名网友，并向网友吹嘘自己是国家某部委年轻的处长，能够帮助网友解决工作。通过这种方式甲先后骗取多名网友现金5万余元。甲某的这种行为属于（）",
    "options" : [ "A:职务侵占", "B:招摇撞骗行为", "C:侵占行为", "D:盗窃行为" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 888,
    "type" : "single",
    "content" : "某市私营保安服务公司客户经理甲负责按月到客户单位收取保安服务费。某日，甲从客户单位收到保安服务费6万元。甲回到保安服务公司后，将其中3万元交给公司财务入账，其余的3万元据为己有。甲的这种行为属于（）",
    "options" : [ "A:贪污行为", "B:诈骗行为", "C:职务侵占行为", "D:侵占行为" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 889,
    "type" : "single",
    "content" : "法律是由全国人大及其常委会制定的（）的总称",
    "options" : [ "A:基本的规范", "B:行政性文件", "C:政策性文件", "D:规范性文件" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 890,
    "type" : "single",
    "content" : "公安机关指导监督企事业单位的保卫部门开展工作，其目的在于维护（）的治安稳定，促进经济社会建设事业健康发展",
    "options" : [ "A:公共场所", "B:单位内部", "C:单位外部", "D:社区" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 891,
    "type" : "single",
    "content" : "《企事业单位内部治安保卫条例》由（）制定颁布",
    "options" : [ "A:国家资产管理委员会", "B:国务院", "C:全国人大常委会", "D:司法部" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 892,
    "type" : "single",
    "content" : "关于社会保险的叙述，下列说法错误的是（）",
    "options" : [ "A:社会保险属于非强制性保险", "B:养老保险由企业和个人共同缴纳", "C:医疗保险由企业和个人共同缴纳", "D:失业保险由企业和个人共同缴纳" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 893,
    "type" : "single",
    "content" : "保安员刘某，想获得保安员国家职业资格一级证书，那么，他必须通过（）",
    "options" : [ "A:高级保安员职业能力考试与技能鉴定", "B:中级保安员职业能力考试与技能鉴定", "C:保安师职业能力考试与技能鉴定", "D:高级保安师职业能力考试与技能鉴定" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 894,
    "type" : "single",
    "content" : "保安员王某，想获得保安员国家职业资格二级证书，那么，他必须通过（）",
    "options" : [ "A:高级保安员职业能力考试与技能鉴定", "B:中级保安员职业能力考试与技能鉴定", "C:保安师职业能力考试与技能鉴定", "D:高级保安师职业能力考试与技能鉴定" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 895,
    "type" : "single",
    "content" : "根据《保安员国家职业标准（试行）》，高级保安员属于（）",
    "options" : [ "A:国家职业资格一级", "B:国家职业资格二级", "C:国家职业资格三级", "D:国家职业资格四级" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 896,
    "type" : "single",
    "content" : "对于因不满16周岁不予刑事处罚的行为人，应责令其家长或监护人加以管教，必要时也可以由政府（）",
    "options" : [ "A:强制教育", "B:收容教养", "C:劳动教养", "D:监视居住" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 897,
    "type" : "single",
    "content" : "法律是由（）制定的规范性文件的总称",
    "options" : [ "A:国务院", "B:国务院各部委", "C:全国人大及其常委会", "D:全国人大" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 898,
    "type" : "single",
    "content" : "单位制定的内部治安保卫制度不包括单位内部的（）",
    "options" : [ "A:治安防范教育培训制度", "B:消防安全管理制度", "C:交通安全管理制度", "D:科研成果管理制度" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 899,
    "type" : "single",
    "content" : "单位内部治安保卫部门应当建立（）制度",
    "options" : [ "A:治安防范教育培训", "B:科研成果管理", "C:领导干部选拔", "D:产品生产与管理" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 900,
    "type" : "single",
    "content" : "保安员依法行使（）权利造成损害时，不负刑事责任",
    "options" : [ "A:紧急避险", "B:安全检查", "C:巡逻守护", "D:治安查处" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 901,
    "type" : "single",
    "content" : "以下选项中，不属于单位制定的内部治安保卫制度的是（）",
    "options" : [ "A:单位内部的消防安全管理制度", "B:治安保卫工作检查.考核以及奖惩制度", "C:门卫.值班.巡查制度", "D:职务晋升制度" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 902,
    "type" : "single",
    "content" : "以下选项中，属于单位制定的内部治安保卫制度的是（）",
    "options" : [ "A:干部人事制度", "B:刑事案件查处制度", "C:门卫值班制度", "D:科研奖惩制度" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 903,
    "type" : "single",
    "content" : "治安保卫重要部位是指关系到（）的部位和生产环节",
    "options" : [ "A:国家安全和社会稳定", "B:本单位生产业务全局", "C:国家经济发展大局", "D:城乡经济发展大局" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 904,
    "type" : "single",
    "content" : "宪法规定公民的社会经济权利包括财产权.劳动的权利和义务.（）.物质帮助权.文化教育权.特定人的权利等",
    "options" : [ "A:社会权", "B:救济权", "C:休息权", "D:健康权" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 905,
    "type" : "single",
    "content" : "保安员在查验货物出入时应注意（）",
    "options" : [ "A:货物是否是本单位的", "B:出入的货物是否为贵重物品", "C:核对单据与货物的数量和品名是否相符", "D:货物出入单的开具时间" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 906,
    "type" : "single",
    "content" : "验证的方法一般分为重点查验.免检放行和（）",
    "options" : [ "A:随机抽查", "B:查验单据", "C:逐个验证", "D:查验证件防伪标志" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 907,
    "type" : "single",
    "content" : "保安守护是对服务单位（）进行看护和守卫",
    "options" : [ "A:侦查目标", "B:怀疑目标", "C:怀疑对象", "D:特定目标" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 908,
    "type" : "single",
    "content" : "新来的保安员陈某工作没有经验,同事老王热心地帮助他。老王的行为符合职业道德中的()",
    "options" : [ "A:团结互助", "B:诚实守信", "C:文明服务", "D:爱岗敬业" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 909,
    "type" : "single",
    "content" : "保安员在武装守护活动中，应使用（）为客户提供安全服务",
    "options" : [ "A:技术设备", "B:武器装备", "C:技防设备", "D:特殊装备" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 910,
    "type" : "single",
    "content" : "保安员对服务单位特定目标进行看护和守卫的服务形式称为（）",
    "options" : [ "A:保安巡逻", "B:保安技防", "C:保安守护", "D:保安押运" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 911,
    "type" : "single",
    "content" : "保安员以门卫.守护等方式对服务单位特定目标进行（）和守卫的服务形式称为保安守护",
    "options" : [ "A:看护", "B:押运", "C:巡逻", "D:随身护卫" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 912,
    "type" : "single",
    "content" : "自行招用保安员的单位自开始保安服务之日起30日内要向所在地设区的（）备案",
    "options" : [ "A:公安派出所", "B:区级人民政府公安机关", "C:市级人民政府公安机关", "D:省级人民政府公安机关" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 913,
    "type" : "single",
    "content" : "（）是公民一切行动和生活的前提，是公民最基本的权利",
    "options" : [ "A:社会经济权利", "B:政治权利", "C:人身自由", "D:信仰自由" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 915,
    "type" : "single",
    "content" : "我国保安服务业逐步朝着专业化.规范化方向发展的标志是（）",
    "options" : [ "A:保安服务“五统一”原则的提出", "B:首次全国保安工作会议的召开", "C:《保安服务管理条例》的颁布", "D:《保安服务管理条例》的实施" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 916,
    "type" : "single",
    "content" : "1984年12月，在（）成立了全国第一家保安服务公司",
    "options" : [ "A:公安部", "B:中央政法委", "C:广东省公安厅", "D:广东省深圳市" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 917,
    "type" : "single",
    "content" : "职业道德是一个人事业成功的（）",
    "options" : [ "A:重要保证", "B:最终结果", "C:决定条件", "D:显著标志" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 918,
    "type" : "single",
    "content" : "企业的社会形象主要由企业的()构成",
    "options" : [ "A:产品形象.服务形象.经营形象", "B:企业精神.企业品牌.企业标志", "C:企业文化.企业职工.注册资本", "D:地理位置.注册资本.个人形象" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 919,
    "type" : "single",
    "content" : "下列（）不属于保安员防火巡查的内容",
    "options" : [ "A:检查安全疏散指示标志", "B:检查用火.用电情况", "C:检查安全疏散通道", "D:设置消防灭火设施" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 920,
    "type" : "single",
    "content" : "保安员在进行火灾预防时，应该学习掌握消防基本常识和技能，结合岗位实际做到“四懂四会”。下列描述不属于火灾预防“四懂四会”具体要求的是（）",
    "options" : [ "A:懂火灾危险性，懂防火巡查方法", "B:懂火灾扑救方法，会使用灭火器材", "C:懂组织消防力量，会分工灭火救援任务", "D:懂预防火灾措施，会组织疏散逃生" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 921,
    "type" : "single",
    "content" : "下列选项中不存在火灾隐患的是（）",
    "options" : [ "A:吸顶灯电源线故障引起短路打火", "B:某商场雇用无证上岗的电焊工违章电焊", "C:某公司用原来存储一般生活所需物品的仓库存储易燃易爆的化学物品", "D:某商场防火卷帘下未堆放物品" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 922,
    "type" : "single",
    "content" : "在现场急救中，为了使胸外按压更加有效，正确的方法是（）",
    "options" : [ "A:按压时间长一些，能压出更多的血", "B:按压和解除按压时间相等", "C:按压后，多放松一段时间，使心脏更好的充盈", "D:压5次，休息1分钟后，再压5次，反复操作不间断" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 923,
    "type" : "single",
    "content" : "（）不属于消防控制室保安员的职责范围",
    "options" : [ "A:如实向消防队报告情况", "B:调查火灾原因，统计火灾损失", "C:协助消防队员扑救火灾", "D:保护火灾观场" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 924,
    "type" : "single",
    "content" : "消防控制室内设有（）和消防设施控制设备",
    "options" : [ "A:固定消防设施", "B:防盗设施", "C:电脑设备", "D:火灾自动报警设备" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 927,
    "type" : "single",
    "content" : "春天来了，为了预防呼吸道传染病，下列做法错误的是（）",
    "options" : [ "A:勤洗手", "B:不与他人共用水杯", "C:少去人员密集的公共场所", "D:紧闭门窗，保持室内温度" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 928,
    "type" : "single",
    "content" : "关于雷电的预防，下面说法错误的是()",
    "options" : [ "A:要远离铁栏及其他金属物体", "B:如果正在驾车，应留在车内", "C:尽量回避开阔地上的帐篷", "D:尽量靠近避雷设备" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 930,
    "type" : "single",
    "content" : "交通信号灯黄灯亮时，()",
    "options" : [ "A:允许车辆通行", "B:已越过停止线的车辆可以继续通行", "C:允许车辆左转弯", "D:车辆应当加速通过" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 931,
    "type" : "single",
    "content" : "交通环境是道路交通活动的（）",
    "options" : [ "A:主体", "B:工具", "C:必要条件", "D:基础" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 932,
    "type" : "single",
    "content" : "预防中暑的正确方法是（）",
    "options" : [ "A:外出时戴遮阳帽", "B:舌下含服硝酸甘油", "C:涂防晒霜", "D:用手指掐人中" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 933,
    "type" : "single",
    "content" : "道路交通活动的目的是（）",
    "options" : [ "A:实现空间位置的移动", "B:保障道路交通的安全.有序和畅通", "C:方便.快捷", "D:促进国民经济快速发展" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 934,
    "type" : "single",
    "content" : "发现有人中暑，采取（）的措施是错误的",
    "options" : [ "A:把病人移到阴凉通风处,用凉毛巾擦拭病人的额头.腋窝.大腿根部等", "B:给病人适当饮水", "C:立即作心肺复苏", "D:必要时拨打急救电话" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 935,
    "type" : "single",
    "content" : "下列说法正确的是（）",
    "options" : [ "A:车辆是交通活动的载体", "B:道路是交通活动的基础", "C:人是道路交通活动的基础", "D:没有交通工具，人就无法进行交通活动" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 936,
    "type" : "single",
    "content" : "救护轻度中暑病人，不应该采用（）的方法",
    "options" : [ "A:把病人移到阴凉通风处", "B:给病人饮淡盐水或淡茶水", "C:用冰袋或冷毛巾敷头，擦拭腋窝.大腿根部等", "D:现场实施心肺复苏" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 937,
    "type" : "single",
    "content" : "道路是交通活动的场所，因此在道路上禁止（）",
    "options" : [ "A:放置隔离栅栏", "B:堆放沙石", "C:设置交通信息指示牌", "D:设置交通标志" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 938,
    "type" : "single",
    "content" : "在道路交通活动中，下列车辆属于道路交通工具的是（）",
    "options" : [ "A:路边临时停放的汽车", "B:正在修理厂维修的汽车", "C:车行待售的汽车", "D:私人车库中的汽车" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 939,
    "type" : "single",
    "content" : "在道路交通活动中，道路是人.车的（）",
    "options" : [ "A:载体", "B:途径", "C:通道", "D:基础" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 940,
    "type" : "single",
    "content" : "在道路交通活动中，车辆分为机动车和（）",
    "options" : [ "A:汽车", "B:摩托车", "C:非机动车", "D:电动车" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 941,
    "type" : "single",
    "content" : "在巡逻勤务中，下面不属于区域巡逻任务的是（）",
    "options" : [ "A:维护巡逻区域内秩序", "B:保护区域内发生的案件.事故.事件的现场", "C:排除各种不安全因素", "D:为区域内群众需求提供服务" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 942,
    "type" : "single",
    "content" : "狂犬病的病死率是()",
    "options" : [ "A:10%", "B:30%", "C:80%", "D:100%" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 943,
    "type" : "single",
    "content" : "1990年，由于工作人员粗心大意将一块小小的擦拭布遗留在发动机的循环系统中，造成“阿里安”火箭爆炸。这次事故反映了工作人员违背了职业道德中（）的要求",
    "options" : [ "A:文明服务", "B:爱岗敬业", "C:团结互助", "D:勤俭节约" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 944,
    "type" : "single",
    "content" : "保安员张某在工作中，苦练保安专业技能，成为技能标兵。这说明他在工作中遵守了职业道德中（）的要求",
    "options" : [ "A:诚实守信", "B:爱岗敬业", "C:勤俭节约", "D:团结互助" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 945,
    "type" : "single",
    "content" : "关于保安员职业道德的错误说法是()",
    "options" : [ "A:与警察的职业道德相同", "B:与物业管理员的职业道德不同", "C:与公务员的职业道德不同", "D:是本职业特有的" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 946,
    "type" : "single",
    "content" : "保安员职业道德()",
    "options" : [ "A:与警察的职业道德相同", "B:与物业管理员的职业道德相同", "C:与公务员的职业道德相同", "D:是本职业特有的" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 947,
    "type" : "single",
    "content" : "职业道德是通过()来增强单位的凝聚力",
    "options" : [ "A:营造和谐的人际关系", "B:增加职工福利", "C:为员工创造发展空间", "D:增强员工的独立性" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 948,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，业主对公用部位.公用设施设备和相关场地使用情况享有（）和监督权",
    "options" : [ "A:决定权", "B:知情权", "C:出租权", "D:共有权" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 949,
    "type" : "single",
    "content" : "以下（）是保安员的禁止性行为",
    "options" : [ "A:搜查他人身体", "B:查验出入人员证件", "C:登记出入车辆", "D:设立临时隔离区" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 950,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，房屋的所有权人被称为（）",
    "options" : [ "A:出资人", "B:业主", "C:户主", "D:住户" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 951,
    "type" : "single",
    "content" : "《物业管理条例》是国家为规范（）活动.维护业主和物业服务企业的合法权益.改善人民群众的生活和工作环境而由国务院制定颁布的行政法规",
    "options" : [ "A:物业管理", "B:维护秩序", "C:保安管理", "D:保安服务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 952,
    "type" : "single",
    "content" : "以下行为中，（）是保安员的禁止性行为",
    "options" : [ "A:限制他人人身自由", "B:查验出入人员的证件", "C:登记出入的车辆", "D:服务区内进行安全检查" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 953,
    "type" : "single",
    "content" : "消防控制室值班人员发现设备故障，应及时（）",
    "options" : [ "A:拆卸", "B:自行维修", "C:报修", "D:停用" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 954,
    "type" : "single",
    "content" : "在现场急救中，成人开放气道时，下颌角与耳垂连线和地面所成的角度为（）度",
    "options" : [ "A:90", "B:60", "C:45", "D:30" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 955,
    "type" : "single",
    "content" : "在现场急救中，救护员判断伤员有无呼吸时，应持续观察（）秒钟",
    "options" : [ "A:3", "B:10", "C:20", "D:60" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 956,
    "type" : "single",
    "content" : "某地举行一次大型游园灯会，为了防止人群拥挤，保安员王某采取了下列措施，其中错误的是（）",
    "options" : [ "A:限制人员进入", "B:设置隔离区", "C:及时疏散人群", "D:驱散部分人员" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 957,
    "type" : "single",
    "content" : "在执行巡逻勤务中，保安员接班前应首先做到的是（）",
    "options" : [ "A:认真听取交班人员情况说明", "B:认真检查交班人员移交的装备", "C:认真学习.熟悉该区域巡逻方案", "D:认真查看交班人员的巡逻记录并核对无误" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 958,
    "type" : "single",
    "content" : "在巡逻勤务中，下面不属于区域巡逻任务的是（）",
    "options" : [ "A:维护巡逻区域内的秩序", "B:协助处置区域内的自然灾害事故", "C:排除各种不安全因素", "D:为区域内群众需求提供服务" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 962,
    "type" : "single",
    "content" : "指示车辆和行人行进的标志是（）",
    "options" : [ "A:指示标志", "B:旅游区标志", "C:指路标志", "D:辅助标志" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 963,
    "type" : "single",
    "content" : "保安员严某在客户单位进行夜间巡逻时，发现一陌生的醉酒人有跳楼的企图，就立即报警，因该醉酒人情绪激动，警察就将其带到公安派出所并用警绳将其绑在椅子上。警察用警绳将醉酒人绑在椅子上的行为是（）",
    "options" : [ "A:约束", "B:拘留", "C:扣押", "D:管制" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 964,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务时使用武器的依据之一是（）",
    "options" : [ "A:中华人民共和国刑事诉讼法", "B:中华人民共和国宪法", "C:中华人民共和国民事诉讼法", "D:中华人民共和国枪支管理法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 965,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务时使用武器的依据之一是（）",
    "options" : [ "A:中华人民共和国刑事诉讼法", "B:中华人民共和国宪法", "C:中华人民共和国民事诉讼法", "D:专职守护押运人员枪支使用管理条例" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 966,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务的对象和目标是（）",
    "options" : [ "A:金融机构", "B:企业财务部", "C:超市收银处", "D:24小时加油站和便利店" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 967,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务的对象和目标是（）单位",
    "options" : [ "A:通讯枢纽工程", "B:高级商务楼", "C:大型集贸市场", "D:大型游船码头" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 968,
    "type" : "single",
    "content" : "风险分析是指在特定系统中进行（）.频率分析.后果分析的全过程",
    "options" : [ "A:资料调查", "B:环境调查", "C:资产辩识", "D:危险辨识" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 969,
    "type" : "single",
    "content" : "在一次大型歌舞晚会上，保安员许某担任歌星周某的随身护卫工作。在工作期间，许某应当准确掌握（）",
    "options" : [ "A:周某参加该晚会的预期收益和表演节目内容", "B:举行该晚会的具体时间及周某的动态活动时间", "C:周某的家庭和其他歌星的情况", "D:参加该晚会所有人员的性别.身份和年龄" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 970,
    "type" : "single",
    "content" : "关于随身护卫工作的要求，下列说法错误的是（）",
    "options" : [ "A:了解护卫方案的内容和要求", "B:掌握护卫对象的动态活动情况", "C:熟记与有关部门和人员的联系方式", "D:掌握与护卫对象有关的人员的生活情况" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 971,
    "type" : "single",
    "content" : "在一次大型展销会上，为防止踩踏事件的发生，保安员丁某采取了下列措施，其中错误的是（）",
    "options" : [ "A:现场实施分流措施", "B:限制人员进入", "C:驱散人群", "D:引导拥堵人员快速离开现场" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 972,
    "type" : "single",
    "content" : "保安员孙某在执行人群控制工作中发现一疑似犯罪嫌疑人，应立即（）",
    "options" : [ "A:报告执勤民警", "B:抓捕犯罪嫌疑人", "C:扣押犯罪嫌疑人", "D:搜查犯罪嫌疑人" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 978,
    "type" : "single",
    "content" : "下列不属于保安员职责任务的是（）",
    "options" : [ "A:登记出入车辆和物品", "B:开展安全检查.报警监控活动", "C:设隔离区域，隔离犯罪嫌疑人", "D:维护公共场所秩序" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 979,
    "type" : "single",
    "content" : "保安员在制止违法犯罪行为时，不能采取的措施是（）",
    "options" : [ "A:劝说", "B:劝解", "C:隔离", "D:抓捕" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 980,
    "type" : "single",
    "content" : "据报载，某市新婚夫妇刘某.王某一天中午在家观看婚姻登记机关所发的有关婚姻家庭及夫妻生活的录像时，当地公安派出所民警带领几名保安员到刘某家中，将刘某.王某抓获，并予以治安处罚。刘某.王某观看这些录像的行为属于（）",
    "options" : [ "A:正常生活行为", "B:违反治安管理行为", "C:传播淫秽音像制品行为", "D:观看淫秽音像制品行为" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 981,
    "type" : "single",
    "content" : "在保安服务工作中，当发生重大案件或事故时，应急处置的第一道程序是（）",
    "options" : [ "A:报告公安机关和单位领导", "B:维护现场及周边秩序", "C:向周围人员求援", "D:紧急进入现场处置" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 982,
    "type" : "single",
    "content" : "张三在就餐时与李四发生纠纷，张三顺手拿起身边的座椅朝李四头部砸去，李四边躲边用另一座椅抵挡并导致张三受伤，李四的这种行为属于（）",
    "options" : [ "A:紧急避险", "B:自救行为", "C:正当防卫", "D:犯罪行为" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 983,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，《保安员证》由（）负责审批",
    "options" : [ "A:设区的市级人民政府公安机关", "B:县级人民政府公安机关", "C:省级人民政府公安机关", "D:公安派出所" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 984,
    "type" : "single",
    "content" : "《保安服务管理条例》规定，保安员应具备的学历是（）",
    "options" : [ "A:高中以上文化程度", "B:中专以上文化程度", "C:小学以上文化程度", "D:初中以上文化程度" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 985,
    "type" : "single",
    "content" : "如果在某单位的重要守护区域附近发生紧急情况，保安员以下（）的行为是错误的",
    "options" : [ "A:若是来人报称，应积极协助来人报警", "B:首先前去查看.救助，然后向领导报告", "C:如果守护力量充足，先加强对目标的守护，经领导允许后，可在职责范围内处置", "D:若是来电报称，应告知对方电话报警" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 986,
    "type" : "single",
    "content" : "某日，保安员小吴在重点单位担任门卫时，发现一无出入证的车辆欲驶入单位，小吴有权（）",
    "options" : [ "A:查验证件，登记车辆", "B:扣留可疑车辆", "C:将驾驶员带入值班室讯问", "D:对车辆进行强行检查" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 987,
    "type" : "single",
    "content" : "在查验证件时，保安员应当（）出入服务区域人员的身份证明是否符合安全管理要求",
    "options" : [ "A:检查.识别.确认", "B:观察.检验.确认", "C:查看.识别.确认", "D:查验.鉴定.确认" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 988,
    "type" : "single",
    "content" : "保安公司从事保安武装守护服务的对象和目标是（）",
    "options" : [ "A:大型娱乐演出", "B:大型体育运动场所", "C:群众活动场所", "D:国家重要仓储" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 989,
    "type" : "single",
    "content" : "发生在影剧院.体育场(馆).集贸市场的群体闹事，属于在（）发生的群体性治安事件",
    "options" : [ "A:企业单位内部", "B:公共场所", "C:事业单位内部", "D:机关单位" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 990,
    "type" : "single",
    "content" : "下列关于《保安员证》说法正确的是（）",
    "options" : [ "A:必须年满16周岁", "B:必须考试合格", "C:没有违反社会道德的行为", "D:必须年满20周岁" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 991,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，取得《保安员证》的身体条件是（）",
    "options" : [ "A:身高必须达到1.65米以上", "B:达到国家规定的体能标准", "C:身体健康", "D:眼睛不能近视" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 992,
    "type" : "single",
    "content" : "从事保安工作的保安员其年龄条件说法正确的是（）",
    "options" : [ "A:年满18周岁", "B:年满16周岁", "C:年满20周岁", "D:60周岁以下" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 993,
    "type" : "single",
    "content" : "甲和乙发生争执，乙生气离去，过了一会儿，甲看见乙气势汹汹地拿着菜刀跑来，认为乙要砍自己，就拿起砖头朝乙头上砸去，致乙死亡。甲的这种行为属于（）",
    "options" : [ "A:紧急避险", "B:自救行为", "C:正当防卫", "D:犯罪行为" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 994,
    "type" : "single",
    "content" : "以国家的名义规定什么是犯罪和应负刑事责任，并给犯罪人何种处罚的法律属于（）",
    "options" : [ "A:民法", "B:民事诉讼法", "C:刑法", "D:刑事诉讼法" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 995,
    "type" : "single",
    "content" : "申领《保安员证》应具备的基本条件之一是（）",
    "options" : [ "A:高中以上文化", "B:品行良好", "C:遵纪守法", "D:品学兼优" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 996,
    "type" : "single",
    "content" : "关于保安员职业资格条件说法正确的是（）",
    "options" : [ "A:必须考试合格", "B:必须考试优秀", "C:必须培训合格", "D:必须培训合格且参加过考试" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 997,
    "type" : "single",
    "content" : "下列场所中，（）不属于公共场所",
    "options" : [ "A:机场", "B:码头", "C:工厂", "D:商场" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 998,
    "type" : "single",
    "content" : "下列不属于公共场所的是（）",
    "options" : [ "A:机关单位", "B:火车站", "C:公园", "D:影剧院" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 999,
    "type" : "single",
    "content" : "在保安服务活动中，保安员在保护现场时，在民警到达现场之前应（）",
    "options" : [ "A:不允许任何人进入", "B:允许事主进入", "C:允许单位领导进入", "D:允许保护现场人员进入" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1000,
    "type" : "single",
    "content" : "小张是某小区的一名门卫，他的主要任务是（）",
    "options" : [ "A:维护小区内公共场所的秩序", "B:在小区内开展巡逻活动", "C:查验出入小区人员的证件", "D:在小区内开展安全检查" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1001,
    "type" : "single",
    "content" : "小李是一名保安员，根据保安员职责任务的规定，他应当（）",
    "options" : [ "A:依据服务单位主要领导的需要维护服务区域的正常秩序", "B:依据服务单位员工的需要维护服务区域的正常秩序", "C:依据保安服务合同的约定或自招保安员单位的要求履行职责", "D:依据人民警察的需要维护服务单位及周边的治安秩序" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1002,
    "type" : "single",
    "content" : "犯罪是违反国家法律规定的.具有（）并且应当受到刑罚处罚的行为",
    "options" : [ "A:社会破坏性", "B:社会危害性", "C:国家破坏性", "D:国家危害性" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1003,
    "type" : "single",
    "content" : "公民的（）不受侵犯是指公民的人身不受非法逮捕.拘禁.剥夺或者限制人身自由，以及非法搜查身体",
    "options" : [ "A:人格尊严", "B:政治权利", "C:身体自由", "D:身体健康" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1004,
    "type" : "single",
    "content" : "如果公民不履行或不忠实地履行基本义务，国家有权予以谴责.处分和（）",
    "options" : [ "A:惩罚", "B:制裁", "C:批评", "D:制止" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1005,
    "type" : "single",
    "content" : "在现场急救中，判断伤员有无意识的方法是（）",
    "options" : [ "A:双手轻拍伤病员肩部，并在其耳边大声呼唤", "B:双手拍打伤员脸部", "C:摇晃伤病员身体", "D:拍打脸部的同时，高声呼唤" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1006,
    "type" : "single",
    "content" : "保安员在密集场所执勤时，不属于保安员职责范围的是（）",
    "options" : [ "A:人员密集场所可疑情况的识别和纠纷处理", "B:按照客户单位要求侦破案件", "C:人员密集场所人群的疏导和巡逻区域警戒", "D:人员密集场所隔离区的设置" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1007,
    "type" : "single",
    "content" : "根据保安押运过程中是否使用枪支可划分为武装押运和（）",
    "options" : [ "A:汽车押运", "B:长途押运", "C:非武装押运", "D:短途押运" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1008,
    "type" : "single",
    "content" : "为了禁止管制刀具等物品进入足球比赛现场，保安员可以在入口处使用的探测仪器是（）",
    "options" : [ "A:爆炸物品探测仪", "B:金属探测仪", "C:放射性物品探测仪", "D:有毒气体探测仪" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1009,
    "type" : "single",
    "content" : "对于通过直接观察和仪器探测仍然不能确定的可疑人员及其所携带的可疑物品时，可以采用的识别方法是（）",
    "options" : [ "A:接受群众举报", "B:查问", "C:审问", "D:调查取证" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1010,
    "type" : "single",
    "content" : "保安员张某和李某在某商场巡逻时，发现两名小青年寻衅滋事，引来不少群众围观，保安员首先应当（）",
    "options" : [ "A:立即制止并报告服务单位", "B:扭送公安机关", "C:对两人进行劝解", "D:制服两人，进行前期的讯问工作" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1011,
    "type" : "single",
    "content" : "根据巡逻区域的特点，既部署警戒点，又安排保安员按照一定路线巡逻的是（）",
    "options" : [ "A:单线巡逻", "B:往返巡逻", "C:交叉巡逻", "D:点线巡逻" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1012,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，《保安员证》由（）负责审批",
    "options" : [ "A:设区的市级人民政府公安机关", "B:县级人民政府公安机关", "C:省级人民政府公安机关", "D:公安派出所" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1013,
    "type" : "single",
    "content" : "根据《保安服务管理条例》规定，从事保安服务工作必须（）",
    "options" : [ "A:取得保安培训单位的合格证", "B:取得高中毕业证书", "C:取得《保安员证》", "D:取得初中毕业证书" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1014,
    "type" : "single",
    "content" : "保安员提供服务的主要内容是（）",
    "options" : [ "A:安全防范服务", "B:治安防范服务", "C:案件调查服务", "D:各种社会管理服务" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1015,
    "type" : "single",
    "content" : "《保安员证》是经由设区的（）单位进行发放",
    "options" : [ "A:市级人民政府公安机关", "B:市级人民政府劳动人事部门", "C:市级人民政府法制部门", "D:市级人民政府安全部门" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1017,
    "type" : "single",
    "content" : "某研究设计院存放的放射性物质和传染性病毒库房发生被盗，因该研究院领导怕被盗事件影响其单位声誉，也害怕被盗事件传出后影响社会稳定，因此就没有按规定报案，也没有向主管部门汇报。从治安管理角度看，该研究院这种不报告的行为属于（）的行为",
    "options" : [ "A:危害单位安全", "B:危害公共安全", "C:危害群众安全", "D:妨害社会秩序" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1018,
    "type" : "single",
    "content" : "某保安服务公司为了确保客户单位的安全，擅自在客户单位周边安装了电网。该保安服务公司的行为属于（）的行为",
    "options" : [ "A:危害公共安全", "B:妨害社会秩序", "C:加强安全管理", "D:维护单位利益" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1019,
    "type" : "single",
    "content" : "行为人实施的扰乱法律所保护的公共生活准则和公共行为规范的行为，属于妨害（）的行为",
    "options" : [ "A:公共秩序", "B:社会秩序", "C:公共安全", "D:社会安全" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1020,
    "type" : "single",
    "content" : "关于保安员履行查验与登记的职责，下列说法错误的是（）",
    "options" : [ "A:保安员可以查验出入人员证件", "B:保安员可以对出入服务区域的车辆进行登记", "C:保安员不能查验本单位人员的证件", "D:必要时，保安员可以登记单位内部车辆的出入情况" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1021,
    "type" : "single",
    "content" : "保安员小张和小李在巡逻时，接到小区一位居民的反映，称其隔壁邻居家门户敞开，家中无人，物品凌乱。小张和小李赶到现场后，首先应当做的是（）",
    "options" : [ "A:先锁门，再报警", "B:先看损失大小，再决定是否报警", "C:先通知失主回家清点物品，再看损失大小决定是否报警", "D:保护现场并且报警" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1022,
    "type" : "single",
    "content" : "保安从业人员在服务经济社会发展和（）社会治安工作中已成为一支重要的社会安全防范力量",
    "options" : [ "A:综合治理", "B:全面维护", "C:组织协调", "D:协助维护" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1023,
    "type" : "single",
    "content" : "制订武装押运方案时应确定的交通工具是（）",
    "options" : [ "A:厢式货车", "B:专用运钞车", "C:封闭货车", "D:物流专用车" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1024,
    "type" : "single",
    "content" : "进行区域巡逻时，保安员要按照（）要求的内容和程序进行",
    "options" : [ "A:守护方案", "B:押运方案", "C:巡逻方案", "D:社区群众" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1025,
    "type" : "single",
    "content" : "保安服务业是保安从业单位为（）或群体提供有偿安全服务的一个行业",
    "options" : [ "A:团体", "B:组织", "C:个体", "D:社会" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1026,
    "type" : "single",
    "content" : "某市公安机关在侦破案件过程中，错将张三刑事拘留了五天，该市公安机关发现错误后立即将张三释放，并给予其一定的经济赔偿。张三获得的赔偿属于（）的实现",
    "options" : [ "A:社会经济权利", "B:政治自由权利", "C:人身自由权利", "D:国家赔偿权利" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1027,
    "type" : "single",
    "content" : "中华人民共和国公民在法律面前（）",
    "options" : [ "A:相对平等", "B:一律平等", "C:自由平等", "D:绝对平等" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1028,
    "type" : "single",
    "content" : "凡具有中华人民共和国（）的人都是中国公民",
    "options" : [ "A:户口", "B:户籍", "C:身份", "D:国籍" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1029,
    "type" : "single",
    "content" : "我国公民的基本权利是由（）所赋予的",
    "options" : [ "A:宪法", "B:刑法", "C:民法", "D:行政法" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1030,
    "type" : "single",
    "content" : "我国保安服务具有特许性.有偿性.防范性.契约性.（）的特点",
    "options" : [ "A:安全性", "B:辅助性", "C:自律性", "D:风险性" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1031,
    "type" : "single",
    "content" : "我国保安服务具有特许性.（）.防范性.契约性.风险性的特点",
    "options" : [ "A:安全性", "B:互助性", "C:多样性", "D:有偿性" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1032,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵守纪律", "B:履行劳动合同", "C:开展守护", "D:保守秘密" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1033,
    "type" : "single",
    "content" : "保安员在行使权利时，必须履行一定的义务，下列属于保安员义务的是（）",
    "options" : [ "A:查验出入人员证件", "B:登记出入车辆和物品", "C:开展守护.巡逻", "D:遵纪守法" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1034,
    "type" : "single",
    "content" : "保安员文明服务的要求不包括()",
    "options" : [ "A:仪表端庄", "B:语言规范", "C:礼貌待人", "D:勤俭节约" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1035,
    "type" : "single",
    "content" : "下面关于诚实守信的说法，（）是不正确的",
    "options" : [ "A:中华民族的优良传统美德", "B:做人的基本准则", "C:社会主义道德建设的根本", "D:与职业道德无关" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1036,
    "type" : "single",
    "content" : "出入口守卫方案内容中包括出入口守卫的任务.上岗保安员人数和（）",
    "options" : [ "A:休假时间", "B:交接班时间", "C:加班时间", "D:自由活动时间" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1037,
    "type" : "single",
    "content" : "在出入口岗位中，属于专用设施控制岗的是（）",
    "options" : [ "A:消防监控岗", "B:楼宇监控岗", "C:巡逻监控岗", "D:区域监控岗" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1038,
    "type" : "single",
    "content" : "保安员在石化公司油库门卫岗位值勤时，发现距离值勤岗位2米处有火苗，应采取的处理方法是（）",
    "options" : [ "A:向客户单位报告", "B:取出灭火器灭火", "C:立即报警", "D:向客户单位报告同时用灭火器灭火" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1039,
    "type" : "single",
    "content" : "保安员在查验出入服务单位人员证件时，正确的做法是（）",
    "options" : [ "A:与保安员熟悉的人员直接放行", "B:核对证件与持证人相符放行", "C:对没有证件说明理由的放行", "D:有证件即放行" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1040,
    "type" : "single",
    "content" : "在保安守护工作中，出入口根据出入对象不同分为人员出入口.车辆出入口和（）",
    "options" : [ "A:内部人员出入口", "B:物资出入口", "C:非工作时间出入口", "D:停车区出入口" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1041,
    "type" : "single",
    "content" : "目前我国保安服务已经从单一的人力保安，发展为（）.保安巡逻.保安押运.安全技术防范等四大主要业务",
    "options" : [ "A:保安守护", "B:随身护卫", "C:安全检查", "D:秩序维护" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1042,
    "type" : "single",
    "content" : "一旦发生火情（）将成为紧急信息汇集.显示.处理的中心，及时.准确地反馈火情的发展过程",
    "options" : [ "A:消防队", "B:公安机关", "C:消防控制室", "D:保安值班室" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1043,
    "type" : "single",
    "content" : "判断伤员有无呼吸的方法是（）",
    "options" : [ "A:看胸廓有无起伏，感觉有无呼出的气流拂面", "B:将手指放在鼻孔处感觉有无气体呼出", "C:用棉絮放在口周围感觉有无气体呼出", "D:用棉絮放在鼻周围感觉有无气体呼出" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1044,
    "type" : "single",
    "content" : "在现场急救中，救护人员打开伤员气道的方法是（）",
    "options" : [ "A:仰头抬颈", "B:仰头举颏", "C:双下颌上提", "D:头部垫高" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1045,
    "type" : "single",
    "content" : "使用二氧化碳灭火器灭火时，要尽量接近着火点，并注意从（）方向喷出气体灭火",
    "options" : [ "A:上风", "B:逆时针", "C:逆风", "D:顺时针" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1047,
    "type" : "single",
    "content" : "保安员职业道德的主要内容不包括()",
    "options" : [ "A:诚实守信", "B:爱岗敬业", "C:勤俭节约", "D:文明服务" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1048,
    "type" : "single",
    "content" : "下列选项中属于职业道德作用的是()",
    "options" : [ "A:增强员工的独立性", "B:增强组织的凝聚力", "C:决定组织的经济效益", "D:增加员工的福利" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1049,
    "type" : "single",
    "content" : "在职业活动中形成的（）就是职业道德",
    "options" : [ "A:行为准则和基本规范", "B:行为准则和操作程序", "C:基本规范和思维习惯", "D:劳动技能和思维习惯" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1050,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，物业服务企业为物业小区提供物业管理服务时，应与（）签订物业服务合同",
    "options" : [ "A:业主", "B:业主大会", "C:业主委员会", "D:业主与承租人" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1051,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，物业服务企业在安全管理方面应当协助做好物业管理区域内的（）工作",
    "options" : [ "A:治安管理", "B:案件查处", "C:安全防范", "D:治安处罚" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1052,
    "type" : "single",
    "content" : "由业主选聘物业服务企业并约定由物业服务企业对房屋及配套设施进行维修.养护，维护物业服务区域内相关秩序的活动就是（）",
    "options" : [ "A:保安服务", "B:秩序维护", "C:保安管理", "D:物业管理" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1053,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，进入娱乐场所的人员可以从事（）活动",
    "options" : [ "A:弘扬民族文化", "B:宣扬邪教", "C:强迫他人信仰宗教", "D:煽动民族仇恨" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1054,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，依靠（）经营的电子游戏厅.游艺厅.台球厅等场所属于娱乐场所",
    "options" : [ "A:人员互助", "B:人际关系", "C:人机互动", "D:游艺器械" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1055,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所是以营利为目的.并向（）开放.消费者自娱自乐的场所",
    "options" : [ "A:流动人口", "B:常住人口", "C:白领阶层", "D:社会公众" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 79,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，在大型群众性活动举办前,由（）负责保障监控设备和消防设施.器材配置齐全，完好有效",
    "options" : [ "A:场所管理者", "B:活动举办者", "C:活动承办者", "D:公安机关" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1057,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，参加大型群众性活动的人员不得携带入场的物品有（）",
    "options" : [ "A:条幅", "B:烟花爆竹", "C:哨子", "D:饮料" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1058,
    "type" : "single",
    "content" : "某文化体育传播公司每年均组织一场春季马拉松长跑运动会，每年的参赛运动员达100余人，观众近万人。从安全管理角度讲，该运动会属于（）活动",
    "options" : [ "A:大型群众性", "B:中型群众性", "C:小型群众性", "D:社会公益性" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1059,
    "type" : "single",
    "content" : "某文化传播公司拟举办演唱会，2800张预售票被抢购一空，从安全管理角度讲，该演唱会属于（）活动",
    "options" : [ "A:社会公益性", "B:大型群众性", "C:中型群众性", "D:小型群众性" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1060,
    "type" : "single",
    "content" : "（）不属于单位内部治安保卫机构的职责",
    "options" : [ "A:开展治安防范宣传教育", "B:查验进入本单位人员的证件", "C:在单位周边开展巡逻与检查", "D:制止发生在本单位的违法行为" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1061,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所不得拒绝（）进入娱乐场所",
    "options" : [ "A:携带管制刀具人员", "B:携带烟花爆竹人员", "C:执行公务的人民警察", "D:传染病患者" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1062,
    "type" : "single",
    "content" : "我国《娱乐场所管理条例》是政府部门对娱乐场所日常经营及（）进行监管的行政法规",
    "options" : [ "A:经营状况", "B:人员状况", "C:安全状况", "D:娱乐情况" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1063,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所是以营利为目的.并向社会公众开放.消费者（）的场所",
    "options" : [ "A:自我表现", "B:自我管理", "C:自娱自乐", "D:自我展示" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1064,
    "type" : "single",
    "content" : "我国人民法院对刑事案件的审理实行的是（）终审制",
    "options" : [ "A:一审", "B:二审", "C:三审", "D:再审" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1065,
    "type" : "single",
    "content" : "我国刑事诉讼的目的是（）.保障人权",
    "options" : [ "A:打击犯罪", "B:惩罚犯罪", "C:制止犯罪", "D:保护群众" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1066,
    "type" : "single",
    "content" : "社会生活中，（）是关于如何打官司的法律",
    "options" : [ "A:宪法", "B:法律", "C:诉讼法", "D:实体法" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1067,
    "type" : "single",
    "content" : "刑事诉讼活动是由国家法律所确定的专门机关为惩罚犯罪.保障人权而开展的（）.起诉.审判等一系列活动",
    "options" : [ "A:侦查", "B:拘传", "C:拘留", "D:逮捕" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1068,
    "type" : "single",
    "content" : "刑事诉讼活动是由国家法律所确定的专门机关为（）.保障人权而开展的侦查.起诉.审判等一系列活动",
    "options" : [ "A:预防犯罪", "B:保护群众", "C:制止犯罪", "D:惩罚犯罪" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1069,
    "type" : "single",
    "content" : "在某一刑事案件的诉讼过程中，不可能参与刑事诉讼的人是（）",
    "options" : [ "A:公证员", "B:被告人", "C:辩护人", "D:公诉人" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1070,
    "type" : "single",
    "content" : "依据保安服务合同约定或者单位的要求，保安员的职责任务是（）",
    "options" : [ "A:维护客户单位周边的社会秩序", "B:维护客户单位及服务区域的正常秩序", "C:维护客户单位及周边的生活秩序", "D:维护服务区域外的治安秩序" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1071,
    "type" : "single",
    "content" : "张三在某超市购买了一把某著名品牌的剃须刀，后发现该剃须刀是假冒产品，张三因为与超市协商退赔不成，遂向人民法院起诉该超市。张三的起诉属于（）",
    "options" : [ "A:刑事诉讼", "B:民事诉讼", "C:行政诉讼", "D:法律仲裁" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1072,
    "type" : "single",
    "content" : "孕妇刘某因为在公共汽车上扒窃乘客现金2000元被群众扭送到公安机关，公安机关在对其讯问后，让其家人交纳了一定数量的保证金将其领回家，并要求刘某随传随到。公安机关对刘某采取的是（）强制措施",
    "options" : [ "A:拘传", "B:取保候审", "C:监视居住", "D:拘留" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1073,
    "type" : "single",
    "content" : "下列不属于刑事强制措施的是（）",
    "options" : [ "A:拘传", "B:拘留", "C:逮捕", "D:询问" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1074,
    "type" : "single",
    "content" : "刑事诉讼活动是由国家法律所确定的专门机关为惩罚犯罪.保障人权而开展的侦查.起诉.（）等一系列活动",
    "options" : [ "A:拘留", "B:逮捕", "C:辩护", "D:审判" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1075,
    "type" : "single",
    "content" : "根据刑事诉讼法的规定，人民检察院审查刑事案件终结后，应当作出起诉.不起诉或者（）的决定",
    "options" : [ "A:补充侦查", "B:撤销案件", "C:不立案", "D:不逮捕" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1076,
    "type" : "single",
    "content" : "根据刑事诉讼法的规定，人民检察院审查刑事案件终结后，应当作出起诉.（）或者撤销案件的决定",
    "options" : [ "A:补充侦查", "B:不逮捕", "C:不立案", "D:不起诉" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1077,
    "type" : "single",
    "content" : "根据刑事诉讼法的规定，人民检察院审查刑事案件终结后，应当作出（）.不起诉或者撤销案件的决定",
    "options" : [ "A:侦查", "B:拘传", "C:立案", "D:起诉" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1078,
    "type" : "single",
    "content" : "根据刑事诉讼法的规定，（）是刑事诉讼的开始",
    "options" : [ "A:侦查", "B:拘传", "C:立案", "D:起诉" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1079,
    "type" : "single",
    "content" : "公民甲因生活琐事被邻居乙殴打，经法医鉴定为轻伤。甲直接向人民法院起诉要求判处乙的刑事责任并承担民事赔偿责任。甲的起诉属于刑事（）",
    "options" : [ "A:审判", "B:公诉", "C:自侦", "D:自诉" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1080,
    "type" : "single",
    "content" : "道路辅助标志的形状与颜色分别为（）",
    "options" : [ "A:矩形；白底.黑字.黑边框.白色衬边", "B:正等边三角形；黄底.黑边框.黑图案", "C:圆形；白底.红圈.红杠.黑图形", "D:矩形；蓝底.白图形" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1081,
    "type" : "single",
    "content" : "保安员按照事先确定的环形巡逻路线，单向行进进行巡视.检查的巡逻形式是（）",
    "options" : [ "A:单线巡逻", "B:往返巡逻", "C:交叉巡逻", "D:点线巡逻" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1082,
    "type" : "single",
    "content" : "保安服务公司和自行招用保安员的单位统称为（）",
    "options" : [ "A:保安公司", "B:保安机构", "C:物业公司", "D:保安从业单位" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1083,
    "type" : "single",
    "content" : "道路警告标线是（）",
    "options" : [ "A:促使道路使用者了解道路上的特殊情况，提高警觉，准备应变措施的标线", "B:告知道路交通的通行.禁止.限制等特殊规定，车辆驾驶人及行人必须遵守的标线", "C:指示车行道.行驶方向.路面边缘.停车位等的标线", "D:说明车辆行驶时间范围.种类等的标线" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1084,
    "type" : "single",
    "content" : "保安服务公司为客户单位提供保安服务是通过（）实现的",
    "options" : [ "A:公安机关指派", "B:客户单位指令", "C:签订服务合同", "D:保安公司要求" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1085,
    "type" : "single",
    "content" : "在配合处置违法犯罪时，保安员可以（）",
    "options" : [ "A:使用管制刀具", "B:使用武器", "C:搜身", "D:扭送嫌疑人" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1086,
    "type" : "single",
    "content" : "单位内部可能引发灾害事故但还未造成现实危害的问题,称为（）",
    "options" : [ "A:刑事案件", "B:安全隐患", "C:治安事件", "D:自然灾害" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1087,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所应当在营业场所的大厅.包厢.包间内悬挂警示标志的内容不含有（）",
    "options" : [ "A:禁毒", "B:禁赌", "C:禁娼", "D:禁酒" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1088,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，进入娱乐场所的人员可以（）",
    "options" : [ "A:赌博", "B:观看淫秽录像", "C:饮酒", "D:吸食毒品" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1089,
    "type" : "single",
    "content" : "根据《娱乐场所管理条例》的规定，娱乐场所可以为进入娱乐场所的人员（）",
    "options" : [ "A:提供毒品", "B:介绍卖淫", "C:介绍嫖娼", "D:提供娱乐" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1090,
    "type" : "single",
    "content" : "根据大型群众性活动有关法律法规的规定，下列选项中参加大型群众性活动的人员可以携带入场的是（）",
    "options" : [ "A:烟花", "B:硫酸", "C:匕首", "D:条幅" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1091,
    "type" : "single",
    "content" : "大型群众性活动是由（）面向社会公众举办的每场次预计参加人数达到1000人以上的活动",
    "options" : [ "A:个体或群体", "B:法人或个人", "C:个人或其他组织", "D:法人或其他组织" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1092,
    "type" : "single",
    "content" : "根据我国法律法规的规定，下列选项不属于大型群众性活动特点的是（）",
    "options" : [ "A:规模比较大", "B:危险性较高", "C:参加人员较多", "D:运营成本较高" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1093,
    "type" : "single",
    "content" : "申请设立保安服务公司，应向所在地的（）提交申请书",
    "options" : [ "A:设区的市级人民政府公安机关", "B:县级人民政府公安机关", "C:设区的市级人民政府司法局", "D:乡镇人民政府公安派出所" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1094,
    "type" : "single",
    "content" : "保安员在提供保安服务时，不得（）",
    "options" : [ "A:采用暴力手段处置纠纷", "B:查验出入人员的证件", "C:登记出入的车辆", "D:根据任务需要设立临时隔离区" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1095,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，业主有权（）物业服务企业履行服务合同",
    "options" : [ "A:组织", "B:命令", "C:监督", "D:管理" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1096,
    "type" : "single",
    "content" : "以下选项中，（）不是《保安服务管理条例》中所称的“自行招用保安员的单位”",
    "options" : [ "A:物业服务企业", "B:机关", "C:事业单位", "D:保安服务公司" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1097,
    "type" : "single",
    "content" : "《保安服务管理条例》自（）起施行",
    "options" : [ "A:2009年1月1日", "B:2009年5月1日", "C:2010年1月1日", "D:2010年5月1日" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1098,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，业主无权（）",
    "options" : [ "A:监督业主委员会工作", "B:提议召开业主大会", "C:监督物业服务企业履行物业服务合同", "D:拒绝缴纳专项维修资金" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1099,
    "type" : "single",
    "content" : "某建筑公司的保安员小李在保安服务工作中不能（）",
    "options" : [ "A:根据任务需要设立临时隔离区", "B:查验出入人员的证件", "C:享受社会保险", "D:参与追索债务" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1100,
    "type" : "single",
    "content" : "根据《物业管理条例》的规定，业主对公用部位.公用设施设备和相关场地使用情况享有知情权和（）",
    "options" : [ "A:决定权", "B:出租权", "C:共有权", "D:监督权" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1101,
    "type" : "single",
    "content" : "人员密集场所的判断标准是（）",
    "options" : [ "A:人员的数量", "B:场所的面积", "C:场所的位置", "D:场所单位面积内人员的数量" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1102,
    "type" : "single",
    "content" : "以下情形不属于异常情况的是（）",
    "options" : [ "A:小区二楼一户人家的窗户玻璃破裂", "B:小区消防通道被占用", "C:一把扔在小区停车场内的带血匕首", "D:一个丢在小区路中间的矿泉水瓶" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1103,
    "type" : "single",
    "content" : "保安员何某和李某在公园中巡逻时发现一名老妇人在路中晕厥，首先选择的处理方式是（）",
    "options" : [ "A:不予理睬", "B:立即将老妇人抬往路边", "C:立即报警", "D:拨打120急救电话" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1104,
    "type" : "single",
    "content" : "以下各组情形都不属于区域巡逻中异常情况的是（）",
    "options" : [ "A:一人在公园湖边落水；人群中有人在街边打电话", "B:发现小区的地表有水渗出；一小孩子在公园摔倒后被扶起后继续玩耍", "C:一青年男子在公园的小山上放风筝；一双目失明的老人在搀扶下行走", "D:商场周围的电线掉落；商场的火灾报警信号灯闪烁" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1105,
    "type" : "single",
    "content" : "在区域巡逻中，下面说法不正确的是（）",
    "options" : [ "A:应当按照方案确定的班组随机确定人员名单", "B:应当按照方案确定的频次巡逻", "C:应当按照方案确定的路线巡逻", "D:应当按照方案确定的方式巡逻" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1106,
    "type" : "single",
    "content" : "巡逻人员应当认真填写接班记录，以下说法正确的是（）",
    "options" : [ "A:接班记录可以补写", "B:接班人员班组.姓名可以用代号或昵称", "C:领导交代和交班人员交代事项要填写清楚", "D:接班人员对巡逻重要性的认识应当写在备注里" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1107,
    "type" : "single",
    "content" : "保安员在从事随身护卫工作时，主要采取（）措施",
    "options" : [ "A:正当防卫", "B:紧急避险", "C:守候伏击", "D:警戒保护" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1108,
    "type" : "single",
    "content" : "在随身护卫工作中，保安员可以（），使未经允许者无法靠近护卫对象及其工作.生活区域",
    "options" : [ "A:筑起一道安全屏障", "B:实施交通制", "C:封锁周边区域", "D:开展治安检查" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1109,
    "type" : "single",
    "content" : "保安员陈某在执行一次随身护卫的工作中，护卫对象遭遇滋扰，这时他可以（）",
    "options" : [ "A:立即控制和扭送滋扰分子", "B:立即扣押滋扰分子", "C:将护卫对象转移到安全地带", "D:立即检查滋扰分子的身份证" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1110,
    "type" : "single",
    "content" : "巡逻人员应当认真填写接班记录，以下说法不正确的是（）",
    "options" : [ "A:填写接班记录应当及时", "B:填写接班人员班组姓名和接班时间", "C:填写领导交代事项和交班人员交代事项", "D:填写接班人员对接班的思想认识和工作准备" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1111,
    "type" : "single",
    "content" : "在随身护卫工作中，保安员应当准确掌握护卫对象的（）",
    "options" : [ "A:动态活动时间", "B:活动的具体内容与目的", "C:通讯工具与通讯内容", "D:同行人员的具体身份和年龄" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1112,
    "type" : "single",
    "content" : "护卫对象在公共场所参加活动前，保安员需要事先（）",
    "options" : [ "A:对公共场所进行治安检查", "B:检查公共场所人员证件", "C:了解活动情况", "D:搜查公共场所" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1113,
    "type" : "single",
    "content" : "护卫对象遭遇突然袭击时，保安员应当首先考虑（）",
    "options" : [ "A:把护卫对象转移到安全区域", "B:协助护卫对象反击袭击者", "C:拘捕袭击者", "D:制服袭击者" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1114,
    "type" : "single",
    "content" : "随身护卫的适合人群不包括（）",
    "options" : [ "A:社会名流", "B:演艺体育明星", "C:商业成功人士", "D:犯罪嫌疑人" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1115,
    "type" : "single",
    "content" : "随身护卫是指保安员根据（）对需要护卫的对象进行的警戒.保护活动",
    "options" : [ "A:合同约定", "B:客户单位的要求", "C:护卫环境的状况", "D:单位领导的要求" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1116,
    "type" : "single",
    "content" : "（）是保安服务的专业技能",
    "options" : [ "A:现场救护", "B:擒拿格斗", "C:指挥交通", "D:随身护卫" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1117,
    "type" : "single",
    "content" : "在人群聚集场所，保安员可以采取（）的措施防止发生踩踏事件",
    "options" : [ "A:对现场拥堵人员强制驱散", "B:对现场拥堵人员分流引导", "C:实施现场道路交通管制", "D:对不服从管理的人员进行教育与查处" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1118,
    "type" : "single",
    "content" : "在人群控制服务中，保安员可以根据场所容量.通道及活动特点，通过（）防止人群拥挤",
    "options" : [ "A:限制人员进入", "B:强制驱散现场周边人员", "C:实施交通管制措施", "D:处罚不服从管理的人员" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1119,
    "type" : "single",
    "content" : "保安员周某在一次人群控制服务工作中发现一名行为诡异的可疑人，这时他应该（）",
    "options" : [ "A:立即抓捕可疑人", "B:报告领导并密切注视其活动", "C:立即扣押可疑人", "D:立即搜查可疑人" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1120,
    "type" : "single",
    "content" : "对于人群的控制，一般情况下要事先制定（）",
    "options" : [ "A:交通管制方案", "B:犯罪嫌疑人的抓捕方案", "C:安全方案", "D:独立开展安全检查方案" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1121,
    "type" : "single",
    "content" : "在执行人群控制的服务工作中，保安员可以通过（）来防止拥挤.踩踏事故的发生",
    "options" : [ "A:对聚集场所的人群进行疏导.分散.限制", "B:独立开展违禁危险品的检查工作", "C:扣押非法危险物品", "D:对聚集场所中的可疑人群审查.驱赶" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1122,
    "type" : "single",
    "content" : "保安员做好区域巡逻的基本前提是（）",
    "options" : [ "A:熟悉区域巡逻方案", "B:按时交接班", "C:登记交接班记录", "D:着装整齐" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1123,
    "type" : "single",
    "content" : "作为物业小区的保安员，不准采用（）的手段维护小区内的正常秩序",
    "options" : [ "A:纠正不良行为", "B:制止不良行为", "C:疏导人群有序流动", "D:查处违法行为" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1124,
    "type" : "single",
    "content" : "某小区保安员胡某可通过（）手段维护小区内的正常秩序",
    "options" : [ "A:搜查外来人员", "B:安全检查", "C:治安查处", "D:治安整治" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1125,
    "type" : "single",
    "content" : "（）不是制定区域巡逻方案的依据",
    "options" : [ "A:巡逻区域的特点", "B:服务单位的机构设置", "C:服务单位的安全要求", "D:巡逻区域周边环境.治安状况" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1126,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵守纪律", "B:履行劳动合同", "C:保守秘密", "D:登记出入车辆" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1127,
    "type" : "single",
    "content" : "保安员在工作期间应做到仪容整洁，下面做法中不正确的是（）",
    "options" : [ "A:应当配套穿着保安制服", "B:应当佩戴保安服务标志", "C:不得佩戴与保安员身份无关的标志", "D:便服与制服混穿" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1128,
    "type" : "single",
    "content" : "两名及以上保安员身着保安制服走路时,应该()",
    "options" : [ "A:随意行走", "B:两人成列，三人成行", "C:两人及以上均成列", "D:两人成行，三人成列" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1129,
    "type" : "single",
    "content" : "保安员的举止不包括()",
    "options" : [ "A:坐姿", "B:语调", "C:走姿", "D:手势" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1130,
    "type" : "single",
    "content" : "保安员的行为举止要求中不包括()",
    "options" : [ "A:举止端庄", "B:仪容整洁", "C:举止规范", "D:语言文明" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1131,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列说法错误的是（）",
    "options" : [ "A:保安从业单位和保安员不得以任何理由参与追索债务", "B:经由当事人授权后保安员可以参与追索债务", "C:保安员不得以任何方式追索债务", "D:由当事人依法通过协商或人民法院调解.裁判解决的债务保安员也不能参与追索" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1132,
    "type" : "single",
    "content" : "大家都说门卫王某很有礼貌，那么可推测王某在工作和生活中是一个（）的人",
    "options" : [ "A:语言文明", "B:态度严肃", "C:不苟言笑", "D:服装整齐" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1133,
    "type" : "single",
    "content" : "关于搜查，下列说法错误的是（）",
    "options" : [ "A:只能由侦查人员进行", "B:搜查的目的是搜集犯罪证据", "C:搜查必须由公安机关.人民检察院批准", "D:保安员可以搜查，但必须由公安机关批准" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1134,
    "type" : "single",
    "content" : "礼包含礼节.（）和礼仪等内容",
    "options" : [ "A:语言", "B:礼貌", "C:行为表情", "D:服装器物" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1135,
    "type" : "single",
    "content" : "除（）行为外，其他均是保安员的禁止性行为",
    "options" : [ "A:参与追索债务", "B:以暴力手段处置纠纷", "C:侮辱拒不接受检查者", "D:堵截犯罪嫌疑人" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1136,
    "type" : "single",
    "content" : "在保安服务工作中，保安员可以（）",
    "options" : [ "A:扣押他人证件", "B:登记出入车辆", "C:搜查他人身体", "D:侮辱殴打他人" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1137,
    "type" : "single",
    "content" : "保安员在保安服务工作中，（）是被允许的",
    "options" : [ "A:限制他人自由", "B:查验出入人员的证件", "C:搜查他人身体", "D:侮辱.殴打他人" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1138,
    "type" : "single",
    "content" : "公安机关对保安从业单位在提供保安服务工作中，泄露国家秘密.商业机密的应责令限期改正，并处（）的罚款",
    "options" : [ "A:1万元以上2万元以下", "B:10万元以上15万元以下", "C:2万元以上10万元以下", "D:15万元以上20万元以下" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1139,
    "type" : "single",
    "content" : "保安服务标志式样是由（）确定的",
    "options" : [ "A:自行招用保安员的单位", "B:保安服务公司", "C:全国保安服务行业协会", "D:国务院公安部门" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1140,
    "type" : "single",
    "content" : "保安服务合同终止后，保安服务公司应当将保安服务合同至少留存（）备查",
    "options" : [ "A:5个月", "B:6个月", "C:1年", "D:2年" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1141,
    "type" : "single",
    "content" : "在保安服务工作中，保安员不得（）",
    "options" : [ "A:开展报警监控活动", "B:查验出入人员的证件", "C:删改报警记录", "D:开展安全检查活动" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1142,
    "type" : "single",
    "content" : "对于自招保安员单位的保安员来说，最基本的义务是（）",
    "options" : [ "A:遵守本单位的规章制度和工作纪律", "B:开展安全检查和报警监控活动", "C:听从本单位领导的指挥", "D:遵守客户单位的规章制度" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1143,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵守纪律", "B:开展报警监控活动", "C:履行劳动合同", "D:保守秘密" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1144,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列属于保安员义务的是（）",
    "options" : [ "A:查验出入人员证件", "B:登记出入车辆和物品", "C:遵纪守法", "D:开展守护巡逻" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1145,
    "type" : "single",
    "content" : "遵守本单位和客户单位的规章制度及工作纪律是保安员的（）",
    "options" : [ "A:权利", "B:义务", "C:职责", "D:任务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1146,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，遵纪守法是保安员的（）",
    "options" : [ "A:权利", "B:义务", "C:职责", "D:任务" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1147,
    "type" : "single",
    "content" : "关于保安员的基本坐姿，下面说法错误的是()",
    "options" : [ "A:坐满椅子的二分之一", "B:上体挺直", "C:两腿分开，不超过肩宽", "D:双目平视" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1148,
    "type" : "single",
    "content" : "保安员的举止不包括()",
    "options" : [ "A:坐姿", "B:站姿", "C:手势", "D:态度" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1149,
    "type" : "single",
    "content" : "保安员在制止违法犯罪行为时，不得采取（）的方式",
    "options" : [ "A:劝说", "B:劝解", "C:扭送", "D:扣押" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1150,
    "type" : "single",
    "content" : "保安押运服务中，常用的通讯工具主要是（）",
    "options" : [ "A:GPS全球定位系统和数字电台", "B:固定电话和数字电台", "C:GPS全球定位系统和固定电话", "D:固定电话和手机" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1151,
    "type" : "single",
    "content" : "为阻拦无关人员接近保护目标和随意出入保护区域，保安员不能使用的哨位警戒方式是（）",
    "options" : [ "A:流动哨位", "B:固定哨位", "C:视频监控哨位", "D:瞭望哨位" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1152,
    "type" : "single",
    "content" : "某保安服务公司保安员小张在工作中不能（）",
    "options" : [ "A:删改监控影像资料", "B:维护服务区域治安秩序", "C:登记出入的车辆", "D:开展报警监控活动" ],
    "answer" : "A",
    "multiAnswers" : null
  }, {
    "id" : 1153,
    "type" : "single",
    "content" : "根据《保安服务管理条例》的规定，下列不属于保安员义务的是（）",
    "options" : [ "A:遵守纪律", "B:履行劳动合同", "C:保守秘密", "D:登记出入物品" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1154,
    "type" : "single",
    "content" : "关于扣押，下列说法错误的是（）",
    "options" : [ "A:扣押是一种侦查措施", "B:扣押是一种行政强制措施", "C:扣押是一种查验手段", "D:扣押是一种执法行为" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1155,
    "type" : "single",
    "content" : "某小区保安员张某在夜间巡逻时，发现业主刘某家房门敞开，因怀疑发生被盗，张某进去查看。张某的行为属于（）",
    "options" : [ "A:合法搜查", "B:正确履行职责", "C:非法行为", "D:安全检查" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1156,
    "type" : "single",
    "content" : "某日，刘某到超市购物时，找到该超市保安队长周某，声称自己钱包被盗，要求通过查看监控录像资料找出扒窃嫌疑人。对此，下列说法正确的是（）",
    "options" : [ "A:周某必须把录像资料复制给刘某", "B:周某必须把录像资料向刘某播放", "C:周某必须让刘某查阅录像资料", "D:周某可以拒绝刘某查看录像资料" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1157,
    "type" : "single",
    "content" : "大家都说门卫王某很有礼貌，那么可推测王某在工作和生活中是一个（）的人",
    "options" : [ "A:性格直爽", "B:态度亲和", "C:不苟言笑", "D:服装整齐" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1158,
    "type" : "single",
    "content" : "下面是关于限制他人人身自由的说法，其中错误的是（）",
    "options" : [ "A:限制人身自由只能由公安机关.人民法院和人民检察院等司法机关在法定权限内实施", "B:司法机关超越职权限制他人人身自由也构成违法", "C:司法机关违反程序限制他人人身自由也构成违法", "D:保安员限制他人自由，必须经过人民警察的批准" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1159,
    "type" : "single",
    "content" : "礼包含（）.礼貌和礼仪等内容",
    "options" : [ "A:服装器物", "B:语言", "C:行为表情", "D:礼节" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1160,
    "type" : "single",
    "content" : "作为一名保安员，（）不属于保安员的禁止性行为",
    "options" : [ "A:扣押他人非法证件.财物", "B:搜查他人身体及物品", "C:开展守卫活动", "D:侮辱.殴打他人" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1161,
    "type" : "single",
    "content" : "下列各组均属于室外人员密集场所的是（）",
    "options" : [ "A:商场.超市.露天广场", "B:公共展览馆.客运车站.码头", "C:烟火晚会.庙会.露天音乐会", "D:体育场馆.餐饮场所.候机厅" ],
    "answer" : "C",
    "multiAnswers" : null
  }, {
    "id" : 1162,
    "type" : "single",
    "content" : "机动车行经人行横道时，应当（）",
    "options" : [ "A:迅速通过", "B:减速慢行", "C:适当加速", "D:鸣喇叭迅速通过" ],
    "answer" : "B",
    "multiAnswers" : null
  }, {
    "id" : 1163,
    "type" : "single",
    "content" : "在无交通信号和管理人员的铁路道口，行人应当（）",
    "options" : [ "A:保持原有速度通过", "B:加速通过", "C:随意通过", "D:在确认无火车后迅速通过" ],
    "answer" : "D",
    "multiAnswers" : null
  }, {
    "id" : 1164,
    "type" : "single",
    "content" : "在道路交通活动中，道路养护车辆.工程作业车进行作业时，过往车辆和人员()",
    "options" : [ "A:可以超越", "B:应当注意避让", "C:可以不让行", "D:应各行其道" ],
    "answer" : "B",
    "multiAnswers" : null
  }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , {
    "id" : 1225,
    "type" : "single",
    "content" : "刑法是以国家的名义规定什么是犯罪和应负（），并给犯罪人何种处罚的法律",
    "options" : [ "A:刑事责任", "B:行政责任", "C:民事责任", "D:刑事赔偿" ],
    "answer" : "A",
    "multiAnswers" : null
  }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , {
    "id" : 1472,
    "type" : "single",
    "content" : "某夜，保安员甲在客户单位巡逻时，发现保安员乙正在客户单位内一房间行窃，甲遂将乙抓获并关押在保安值班室内，次日上午甲下班时顺便将乙押送到当地公安派出所。甲的这种行为属于（）",
    "options" : [ "A:正当业务行为", "B:见义勇为行为", "C:非法拘禁行为", "D:治安拘留行为" ],
    "answer" : "C",
    "multiAnswers" : null
  }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,  ],
  "multiQuestions" : [ {
    "id" : 324,
    "type" : "multi",
    "content" : "下列关于保安服务活动说法正确的是（）",
    "options" : [ "A:应当文明服务", "B:应当合法经营", "C:不得损害社会公共利益", "D:应当由公安机关监督管理E:不得侵害他人利益" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 914,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，（）不得从事保安服务",
    "options" : [ "A:在校学习期间，受到通报批评的", "B:曾因盗窃被判处3年有期徒刑的", "C:曾因抢劫被判处3年有期徒刑的", "D:曾因抢劫被劳动教养1年的" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1165,
    "type" : "multi",
    "content" : "扑救带电火灾必须使用绝缘性能好.不会发生触电伤人事故的灭火器，下列可以作为扑救带电火灾的有（）",
    "options" : [ "A:消防水枪直接喷射", "B:泡沫灭火器", "C:干粉灭火器", "D:二氧化碳灭火器E:室内消火栓" ],
    "answer" : "C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1166,
    "type" : "multi",
    "content" : "某饭店因线路电量负荷过大，造成火灾。为控制火灾蔓延，应该使用（）灭火",
    "options" : [ "A:泡沫灭火器", "B:水", "C:二氧化碳灭火器", "D:干粉灭火器E:水型灭火器" ],
    "answer" : "C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1167,
    "type" : "multi",
    "content" : "道路交通信号包括（）",
    "options" : [ "A:交通标志", "B:交通标线", "C:交通警察的指挥", "D:交通信号灯E:交通信息诱导板" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1168,
    "type" : "multi",
    "content" : "勤务方案是保安员岗位工作的依据和指南，它的编写要求是（）",
    "options" : [ "A:结构编写合理", "B:全面", "C:细致", "D:文字简练E:操作性强" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1169,
    "type" : "multi",
    "content" : "骨折固定时，需要注意的事项有（）",
    "options" : [ "A:皮肤与固定材料之间要加衬垫", "B:超关节固定", "C:不易过紧，避免影响血液循环", "D:暴露肢体末端，以观察血液循环" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1170,
    "type" : "multi",
    "content" : "现场救护常用的止血方法包括（）",
    "options" : [ "A:指压止血法", "B:加压包扎止血法", "C:止血带止血法", "D:加垫屈肢止血法E:加垫加压止血法" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1171,
    "type" : "multi",
    "content" : "加压包扎止血法适用于（）的出血",
    "options" : [ "A:小动脉", "B:小静脉", "C:毛细血管", "D:大动脉E:大静脉" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1172,
    "type" : "multi",
    "content" : "现场救护不能达到（）的目的",
    "options" : [ "A:减少伤残", "B:为伤员节省费用", "C:代替医务人员，为伤员提供专业的救治", "D:为伤员免除去医院的麻烦E:避免后遗症" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1173,
    "type" : "multi",
    "content" : "在救护现场，救护员正确的做法是（）",
    "options" : [ "A:触电现场要切断电源", "B:煤气泄漏的现场要关掉总闸", "C:煤气泄漏的现场不要拨打电话", "D:煤气泄漏的现场不要开关电灯" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1174,
    "type" : "multi",
    "content" : "在现场急救中，对出现（）情况的伤员应实施心肺复苏",
    "options" : [ "A:心脏失去功能", "B:无呼吸，无心跳", "C:中暑", "D:发高烧E:腿骨折" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1175,
    "type" : "multi",
    "content" : "在现场急救中，现场救护人在（）条件下，可以终止心肺复苏",
    "options" : [ "A:伤员家属要求终止", "B:伤病员恢复自主呼吸及循环", "C:有医务人员来接替", "D:经医务人员检查伤员已死亡E:救护人精疲力竭，无法继续进行心肺复苏" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1176,
    "type" : "multi",
    "content" : "（）受伤出血的伤员，采用其他止血法不能奏效时，可以使用止血带",
    "options" : [ "A:上臂", "B:小腿", "C:脖子", "D:大腿E:胸" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1177,
    "type" : "multi",
    "content" : "（）发生火灾可使用泡沫灭火器",
    "options" : [ "A:石油化工企业", "B:汽车库", "C:柴油仓库", "D:煤矿E:金属" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1178,
    "type" : "multi",
    "content" : "现场救护前，要注意排除的险情包括（）",
    "options" : [ "A:落石", "B:泄漏的煤气", "C:易燃易爆危险品", "D:潜藏的违法犯罪嫌疑人E:太阳的照射" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1179,
    "type" : "multi",
    "content" : "（）发生火灾时，可用二氧化碳灭火器灭火",
    "options" : [ "A:图书馆", "B:档案馆", "C:燃气公司", "D:加油站E:塑料制品厂塑胶车间" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1180,
    "type" : "multi",
    "content" : "保护好火灾现场，能为查清火灾发生的真正原因提供许多重要的证据。保护火灾现场的主要措施为（）",
    "options" : [ "A:划出警戒区，指派专人看护", "B:火灾现场的一切遗留物，燃烧过的物质及其陈设的位置，必须保持原样", "C:火灾现场的一切遗留物，未燃烧过的物质及其陈设的位置，必须保持原样", "D:撤销现场保护，清扫火灾现场，必须得到当地公安消防监督机关的同意" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1181,
    "type" : "multi",
    "content" : "接.处警是火灾扑救的开端，火灾发生后，快速.果断的接.处警可以（）",
    "options" : [ "A:为灭火救援工作赢得宝贵的时间", "B:为成功扑救火灾创造条件", "C:将火灾控制在最小范围", "D:将火灾造成的财产损失控制在最小范围" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1182,
    "type" : "multi",
    "content" : "在消防安全管理中，正确.果断的接.处警应该做到（）",
    "options" : [ "A:确认火情", "B:启动消防设施", "C:及时报警", "D:启动应急预案E:组织疏散与扑救" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1183,
    "type" : "multi",
    "content" : "对于进入公共地下停车场的车辆，必须注意的是（）",
    "options" : [ "A:服从车场管理员的管理", "B:自觉维护停车场的秩序", "C:自觉维护停车场的环境卫生", "D:爱护停车场设施设备" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1184,
    "type" : "multi",
    "content" : "针对公共停车场保安员的行为，下列说法正确的是（）",
    "options" : [ "A:礼貌询问有疑问的机动车驾驶人", "B:对出入的车辆进行登记", "C:维护停车场秩序", "D:允许他人在无人的停车场练车E:允许车辆随意停放" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1185,
    "type" : "multi",
    "content" : "下列是物业小区停车场保安的一些做法，其中正确的是（）",
    "options" : [ "A:使用停车场长期无人使用的车辆", "B:任由陌生人在车库停留", "C:拒绝未登记车辆进入停车场", "D:制止车主在地下停车场修车" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1186,
    "type" : "multi",
    "content" : "机动车在距离（）50米以内的路段不得停车",
    "options" : [ "A:陡坡", "B:急弯路", "C:医院", "D:隧道E:桥梁" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1187,
    "type" : "multi",
    "content" : "进入物业小区停车场的车辆和驾驶人应当遵守防火安全规定，严禁（）",
    "options" : [ "A:在停车场吸烟", "B:携带易燃物品", "C:携带易爆物品", "D:携带剧毒物品E:携带打火机" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1188,
    "type" : "multi",
    "content" : "根据我国有关劳动法律法规的规定，（）可以成为合法的劳动合同主体",
    "options" : [ "A:身高180厘米.年龄15周岁的甲", "B:身高160厘米.年龄17周岁的乙", "C:个体工商户丙", "D:某市保安服务公司E:某市物业管理公司" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1189,
    "type" : "multi",
    "content" : "根据我国有关劳动法律法规的规定，劳动者在劳动过程中享有（）等多项权利",
    "options" : [ "A:社会福利权", "B:劳动报酬权", "C:休息休假权", "D:社会保险权E:获得劳动保护权" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1190,
    "type" : "multi",
    "content" : "下列灭火器可用于扑救B类火灾的是（）",
    "options" : [ "A:水型灭火器", "B:泡沫灭火器", "C:干粉灭火器", "D:二氧化碳灭火器E:干砂" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1191,
    "type" : "multi",
    "content" : "在拨打急救电话时，应该将（）等内容报告清楚",
    "options" : [ "A:意外发生的准确地点", "B:伤病员目前最危重的情况", "C:拨打电话人的电话及姓名", "D:伤病员家庭成员的具体情况及病史" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1192,
    "type" : "multi",
    "content" : "机动车在距离（）30米以内的地方不得停车",
    "options" : [ "A:医院", "B:幼儿园", "C:急救站", "D:加油站E:桥梁" ],
    "answer" : "C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1193,
    "type" : "multi",
    "content" : "进出公共地下停车场的机动车，应当注意（）",
    "options" : [ "A:遵守交通标志", "B:只要保证安全，行车速度可以自己决定", "C:可以逆行", "D:遵守交通标线E:停车场无车时飙车" ],
    "answer" : "A,D",
    "multiAnswers" : null
  },
  {
    "id" : 1194,
    "type" : "multi",
    "content" : "物业小区保安巡查的内容包括（）",
    "options" : [ "A:检查停车所有车辆，有无丢标志，车辆有无损伤，车门窗.后备箱有无撬痕", "B:车辆出库时，应仔细核对出库之车和驾驶人(车主)，有疑问时，应有礼貌盘问", "C:指挥车辆按照规定的秩序停放", "D:及时清扫，保持停车场内清洁" ],
    "answer" : "A,E",
    "multiAnswers" : null
  },
  {
    "id" : 1195,
    "type" : "multi",
    "content" : "停车场保安员应当严格遵循（）",
    "options" : [ "A:安全技术检验制度", "B:累计计分制度", "C:巡视检查制度", "D:停车场管理制度" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1196,
    "type" : "multi",
    "content" : "物业停车场常用的管理设施有（）",
    "options" : [ "A:出入登记制度", "B:雷达测速系统", "C:监控系统", "D:智能通行系统E:机动车安全技术检验系统" ],
    "answer" : "C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1197,
    "type" : "multi",
    "content" : "我国的社会保险主要包括（）保险等种类",
    "options" : [ "A:劳动", "B:救济", "C:生活", "D:失业E:生育" ],
    "answer" : "D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1198,
    "type" : "multi",
    "content" : "常见违反治安管理的行为有（）等几类",
    "options" : [ "A:扰乱公共秩序", "B:侵犯他人权益", "C:妨害社会管理", "D:妨害公共安全E:无证经营" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1199,
    "type" : "multi",
    "content" : "犯罪的主观方面是行为人对于犯罪行为所造成的危害结果所持的心理态度等。下列属于犯罪的主观方面的选项有（）等",
    "options" : [ "A:犯罪故意", "B:犯罪过失", "C:疏忽大意", "D:过于自信E:意外事件" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1200,
    "type" : "multi",
    "content" : "关于保安员对出入车辆和物品的登记，下列说法正确的是（）",
    "options" : [ "A:保安员一般是在查验出入人员身份证明的基础上登记出入车辆和物品", "B:保安员一般是在登记了出入车辆和物品之后查验出入人员身份证明", "C:保安员登记的方式主要是对出入车辆和物品进行书面记录", "D:保安员登记的对象可以包括所有出入服务区域的人员.车辆和物品的往来情况" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1201,
    "type" : "multi",
    "content" : "关于查验出入人员证件，下列说法正确的是（）",
    "options" : [ "A:查验证件的主要方式是查看.识别和确认", "B:查验证件主要目的是为了明确出入人员的身份证明是否符合安全管理的要求", "C:查验出入证件是门卫工作的主要任务", "D:查验出入证件包括一切出入服务区域的人员的证件" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1202,
    "type" : "multi",
    "content" : "下列行为属于违反治安管理行为的是（）",
    "options" : [ "A:把别人打成轻微伤", "B:私拆他人的信件", "C:偷盗他人的自行车", "D:捡拾他人的钱包E:盗用他人的电话" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1203,
    "type" : "multi",
    "content" : "在守卫工作中按照出入人员.车辆归属不同将出入口分为（）出入口",
    "options" : [ "A:内部人员", "B:来访人员", "C:内部车辆", "D:来访车辆E:货物车辆" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1204,
    "type" : "multi",
    "content" : "机动车通过既没有交通信号灯控制也没有交通警察指挥的交叉路口时（）",
    "options" : [ "A:准备进入环形路口的，应当让已在路口内的车辆先行", "B:有交通标志.交通标线控制的，让优先通行的一方先行", "C:转弯的机动车让直行的车辆先行", "D:相对方向行驶的右转弯机动车让左转弯的机动车先行" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1205,
    "type" : "multi",
    "content" : "火灾应急预案中，必须明确人员分工，可以划分为（）",
    "options" : [ "A:抢救物资组", "B:火灾发生后的报警组", "C:灭火救援组", "D:医疗救护组" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1206,
    "type" : "multi",
    "content" : "厨房煤气罐发生火灾，如果你在现场，应该做的是（）",
    "options" : [ "A:立刻关闭可燃气阀门", "B:立刻逃离现场", "C:使用泡沫灭火器", "D:使用二氧化碳作为灭火器" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1207,
    "type" : "multi",
    "content" : "保安员甲与其所在的某市保安服务公司乙发生了劳动争议，甲乙的劳动争议可以通过（）的调解解决",
    "options" : [ "A:乙公司的工会组织", "B:乙公司劳动争议调解委员会", "C:乙公司所在地街道办事处民事调解室", "D:乙公司所在地公安机关" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1208,
    "type" : "multi",
    "content" : "下列叙述涉嫌构成妨害公务罪的是（）",
    "options" : [ "A:保安员以暴力.威胁方法阻碍某省人大代表团的视察活动", "B:保安员以威胁的方法阻碍着便装的税务人员到其服务的歌厅消费", "C:在抗震救灾中以危险为由阻止红十字会工作人员进入灾区", "D:某歌厅保安员故意设置障碍拒绝民警入内进行安全检查" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1209,
    "type" : "multi",
    "content" : "保安押运服务中，发生被押物品丢失时，正确的处理方法是（）",
    "options" : [ "A:沿途查找", "B:立即报警", "C:向本单位报告", "D:隐瞒不报E:联系客户单位说明情况" ],
    "answer" : "B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1210,
    "type" : "multi",
    "content" : "对人员密集场所可疑情况的识别包括（）",
    "options" : [ "A:对可疑人员的识别", "B:对重点人口的识别", "C:对可疑物品的识别", "D:对贵重物品的识别E:对车辆的识别" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1212,
    "type" : "multi",
    "content" : "押运中，发现可疑车辆时应该（）",
    "options" : [ "A:高度警惕，做好应急准备", "B:不继续执行任务，返回单位", "C:将可疑车辆情况报本单位", "D:严密监视可疑车辆动向" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1213,
    "type" : "multi",
    "content" : "下列属于人员密集场所巡逻勤务特点的是（）",
    "options" : [ "A:危险因素不确定", "B:勤务难度大", "C:精力消耗大", "D:处置要求高" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1214,
    "type" : "multi",
    "content" : "对脊柱损伤并伴有脊髓损伤的伤员，现场处理的原则是（）",
    "options" : [ "A:不要轻易搬动伤员", "B:让伤员在原地保持原位不动", "C:迅速拨打急救电话", "D:由两人将伤员抬到车上送医院" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1215,
    "type" : "multi",
    "content" : "使用止血带止血时，需要注意的是（）",
    "options" : [ "A:止血带可以直接扎在出血的肢体上", "B:止血带止血法仅用于四肢的大出血", "C:上好止血带后，要标明时间，定期开放", "D:上止血带时，要松紧适度" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1216,
    "type" : "multi",
    "content" : "保安员在遇到丧失意识的病人时，紧急呼救的内容有（）",
    "options" : [ "A:快来人呀，有人晕倒了", "B:我是保安员，这里有人生病，快来帮忙", "C:请帮忙拨打120急救电话", "D:谁是医生，快来帮帮忙" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1217,
    "type" : "multi",
    "content" : "火灾发生时，要按照应急照明指示设施所指引的方向迅速逃生，下列属于逃生出口的有（）",
    "options" : [ "A:太平门", "B:出入口", "C:非常出口", "D:紧急出口E:安全出口" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1219,
    "type" : "multi",
    "content" : "在火灾现场，若选择火势.烟雾难以蔓延的房间作为紧急避难间，应该做的是（）",
    "options" : [ "A:利用自制灭火器材，阻止或减缓火势和烟雾的蔓延", "B:关好门窗，堵塞间隙", "C:只等待救援", "D:如有水源，要立刻将门.窗和各种可燃物浇湿" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1221,
    "type" : "multi",
    "content" : "根据我国有关劳动法律法规的规定，劳动者的合法权益应当受到保护，不能因（）等不同而受歧视",
    "options" : [ "A:民族", "B:性别", "C:宗教信仰", "D:文化程度E:财产状况" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1222,
    "type" : "multi",
    "content" : "保安从业单位应当定期对保安员进行考核，发现（）等品行问题，需要解除劳动合同的，应依法办理",
    "options" : [ "A:保安员违法犯罪", "B:严重违反管理制度", "C:未取得大专以上文凭", "D:未取得本科文凭E:严重违纪" ],
    "answer" : "A,B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1223,
    "type" : "multi",
    "content" : "下列属于保安员基本条件的是（）",
    "options" : [ "A:经过保安员资格考试合格", "B:经公安机关审查通过", "C:持有中华人民共和国居民身份证", "D:年满16周岁，身体健康E:具有初中以上文化程度" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1224,
    "type" : "multi",
    "content" : "出现（）症状的患者可能是危重伤病员",
    "options" : [ "A:突然倒地，呼之不应", "B:口涎外泄，半身活动受限", "C:表情淡漠不语.呼吸急促.出冷汗", "D:手背出血，大声呼喊E:额头擦破，大声呼" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1226,
    "type" : "multi",
    "content" : "保安员在提供保安服务时遭遇意外伤害可能性较大的有（）",
    "options" : [ "A:制止不法侵害", "B:调解矛盾纠纷", "C:扑救火灾", "D:紧急救援E:对出入人员进行登记" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1227,
    "type" : "multi",
    "content" : "保安服务公司可以为（）提供保安服务",
    "options" : [ "A:学校", "B:机关", "C:企业", "D:游乐场E:演艺明星" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1228,
    "type" : "multi",
    "content" : "某企业必须具备（）条件才能申请成为自行招用保安员的单位",
    "options" : [ "A:注册资本100万元以上", "B:负责人具有高级保安师资格", "C:具有法人资格", "D:相应的管理制度E:有符合条件的保安员" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1229,
    "type" : "multi",
    "content" : "某保安服务公司的保安员肖某与同事被派到某中学提供保安服务，则下列选项中属于肖某与同事的任务有（）",
    "options" : [ "A:维护该中学内的正常秩序", "B:协助保护发生在该中学内的违法犯罪现场", "C:查破学生自行车丢失案件", "D:在该中学内开展巡逻活动E:在该中学大门口进行巡视并对出入人员进行登记" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1230,
    "type" : "multi",
    "content" : "保安服务具有（）等特点",
    "options" : [ "A:安全性", "B:自助性", "C:防范性", "D:服务性E:有偿性" ],
    "answer" : "C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1232,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾被收容教育", "B:曾被领导批评教育", "C:曾被公安机关行政拘留", "D:曾受学校行政处分E:曾被劳动教养" ],
    "answer" : "A,E",
    "multiAnswers" : null
  },
  {
    "id" : 1233,
    "type" : "multi",
    "content" : "安全防范服务的内容主要包括（）",
    "options" : [ "A:人防服务", "B:物防服务", "C:技防服务", "D:治安服务E:社会公共秩序维护服务" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1234,
    "type" : "multi",
    "content" : "我国刑法对刑事责任年龄作了详细的规定，下列涉及刑事责任年龄的说法正确的是（）",
    "options" : [ "A:未满16周岁的人犯罪，不负刑事责任", "B:已满16周岁的人犯罪，应当负刑事责任", "C:未满18周岁的人犯罪，不负刑事责任", "D:已满18周岁的人犯罪，应当负刑事责任E:已满14周岁不满16周岁的人犯故意杀人.强奸.投毒等罪的，应当负刑事责任" ],
    "answer" : "B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1235,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:被刑事拘留", "B:被取保候审", "C:被刑事处罚", "D:被行政拘留E:被劳动教养" ],
    "answer" : "C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1236,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:被处一次行政警告", "B:被处1次行政拘留", "C:被处2次行政拘留", "D:被处3次以上行政拘留E:被处1次劳动教养" ],
    "answer" : "D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1237,
    "type" : "multi",
    "content" : "保安服务公司安全防范服务的对象是（）",
    "options" : [ "A:公民", "B:法人", "C:社会组织", "D:犯罪份子E:犯罪团伙" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1238,
    "type" : "multi",
    "content" : "作为保安员，应为公民.法人和其他社会组织提供()服务",
    "options" : [ "A:人身方面的安全防范", "B:人身方面的治安管理", "C:信息方面的安全防范", "D:信息方面的治安管理E:财产方面的安全防范" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1239,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，（）文化程度的，可以从事保安服务",
    "options" : [ "A:高中", "B:初中", "C:中专", "D:小学E:大专" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1240,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，具有下列（）情形之一的人员不得从事保安服务",
    "options" : [ "A:曾有盗窃嫌疑", "B:曾有抢劫嫌疑", "C:曾因过失被判刑", "D:曾因盗窃被处2年有期徒刑E:曾因抢劫被处3年有期徒刑" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1241,
    "type" : "multi",
    "content" : "我国刑法规定，构成犯罪必须具备（）和犯罪的主观方面等要件",
    "options" : [ "A:犯罪故意", "B:犯罪主体", "C:犯罪客体", "D:犯罪过失E:犯罪客观方面" ],
    "answer" : "B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1242,
    "type" : "multi",
    "content" : "保安从业单位制定的紧急情况应急预案中应当包括（）等内容",
    "options" : [ "A:应急措施", "B:职责分工", "C:力量配备", "D:任务目的E:通信联络" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1243,
    "type" : "multi",
    "content" : "保安从业单位应当依法建立健全的（）等管理制度",
    "options" : [ "A:保安服务管理制度", "B:保安员身份证管理制度", "C:保安员管理制度", "D:保安服务岗位责任制E:紧急情况应急预案" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1244,
    "type" : "multi",
    "content" : "保安员甲与其所在的某市保安服务公司乙发生了劳动争议，甲乙的劳动争议可以通过（）解决",
    "options" : [ "A:申请调解", "B:劳动仲裁", "C:甲乙协商", "D:信访上访E:提起诉讼" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1245,
    "type" : "multi",
    "content" : "根据我国有关劳动法律法规的规定，劳动者在劳动过程中的基本义务是（）等",
    "options" : [ "A:完成劳动任务", "B:服从管理", "C:听从指挥", "D:保守工作秘密E:提高劳动技能" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1246,
    "type" : "multi",
    "content" : "保安员制止违法犯罪行为时，应当注意的事项有（）",
    "options" : [ "A:不要采取侵害公民权利的行为", "B:要把自身安全置之度外", "C:制止无效时应当立即报警", "D:制止无效时应当采取措施保护现场E:要注意自身安全" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1247,
    "type" : "multi",
    "content" : "保安员制止违法犯罪行为的方式主要有（）",
    "options" : [ "A:劝说", "B:隔离", "C:堵截", "D:正当防卫E:紧急避险" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1248,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，违法行为人侵犯财产权利的行为有（）",
    "options" : [ "A:非法种植罂粟", "B:携带管制刀具", "C:敲诈勒索", "D:抢夺他人手机E:故意毁损单位桌椅" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1249,
    "type" : "multi",
    "content" : "保安员设立隔离区的要求是（）",
    "options" : [ "A:要根据任务需要来确定是否需要设立", "B:设立隔离区必须是临时性的", "C:一旦保安服务任务完成应立即解除", "D:设立隔离区的必要条件是不影响公民正常活动E:设立隔离区要注意最大限度地减少对公民正常活动的妨碍" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1250,
    "type" : "multi",
    "content" : "保安员维护公共场所秩序，具体包括维护（）的正常秩序",
    "options" : [ "A:公共交通场所", "B:观光游览场所", "C:购物场所", "D:娱乐休闲场所E:生产科研活动场所" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1251,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，对违法行为人（）的处罚决定只能由县级以上公安机关作出",
    "options" : [ "A:依法拘役3个月", "B:治安拘留5日", "C:吊销保安服务许可证", "D:罚款200元E:强行带离现场" ],
    "answer" : "B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1252,
    "type" : "multi",
    "content" : "保安员在保护区域开展报警监控活动的意义体现在（）",
    "options" : [ "A:是确保客户单位或服务区域内人身财产安全的有效措施", "B:是消除各种安全隐患的有效措施", "C:是预防违法犯罪的有效措施", "D:是区域保安服务工作的基本任务E:是打击各类违法犯罪的主要手段" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1253,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，下列（）属于公安机关在治安管理中可以采取的其他法律措施",
    "options" : [ "A:没收非法财物", "B:责令改正", "C:责令赔偿", "D:退赔损失E:责令看管" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1254,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，下列（）属于公安机关在治安管理中可以采取的其他法律措施",
    "options" : [ "A:管制", "B:拘役", "C:没收违法所得", "D:责令赔偿E:限期改正" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1255,
    "type" : "multi",
    "content" : "保安员在保护区域开展巡逻的意义体现在（）",
    "options" : [ "A:是打击各类违法犯罪的主要手段", "B:是消除各种安全隐患的有效措施", "C:是预防违法犯罪的有效措施", "D:是确保客户单位或服务区域内人身安全的有效措施" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1256,
    "type" : "multi",
    "content" : "保安员在保护区域开展守护的意义体现在（）",
    "options" : [ "A:是区域保安服务工作的基本任务", "B:能够发现各种安全隐患", "C:能够预防违法犯罪行为", "D:确保客户单位或服务区域内人身财产安全" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1258,
    "type" : "multi",
    "content" : "下列违反治安管理的行为属于妨害社会管理行为的是（）",
    "options" : [ "A:吸食毒品", "B:毁损公共设施", "C:强迫劳动", "D:谎报警情E:购买赃物" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1259,
    "type" : "multi",
    "content" : "治安管理处罚是公安机关以国家的名义依法强制剥夺违反治安管理行为人的（）或其他权利的行政法律制裁",
    "options" : [ "A:政治权", "B:人身自由权", "C:名誉权", "D:财产权E:宗教信仰权" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1260,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，治安处罚分为（）等几类",
    "options" : [ "A:警告", "B:罚款", "C:拘役", "D:治安拘留E:吊销许可证" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1261,
    "type" : "multi",
    "content" : "保安员的职责任务主要有（）",
    "options" : [ "A:查验出入人员证件", "B:登记出入车辆和物品", "C:开展守卫.巡逻.安全检查活动", "D:侦查破案E:设立临时隔离区" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1262,
    "type" : "multi",
    "content" : "对违反治安管理行为人的治安处罚有（）等几类",
    "options" : [ "A:警告", "B:罚款", "C:拘役", "D:治安拘留E:管制" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1263,
    "type" : "multi",
    "content" : "违反治安管理行为必须具备（）等特征",
    "options" : [ "A:社会危害性", "B:侵害公共财产", "C:违反治安管理法律法规", "D:应受行政处罚" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1264,
    "type" : "multi",
    "content" : "依据保安服务合同的约定或者自招保安员单位的要求，保安员的职责任务是（）",
    "options" : [ "A:维护客户单位及服务区域的正常秩序", "B:预防治安灾害事故的发生", "C:及时发现.制止违法犯罪", "D:确保人身与财产安全E:预防自然灾害事故的发生" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1266,
    "type" : "multi",
    "content" : "特种车辆在执行紧急任务时，可以（）",
    "options" : [ "A:使用警报器", "B:使用标志灯具", "C:遵守交通信号", "D:不受行驶路线.行驶方向限制E:不受行驶速度限制" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1267,
    "type" : "multi",
    "content" : "行人在道路上，应注意（）",
    "options" : [ "A:遵守右侧通行原则", "B:在人行道内行走", "C:若没有人行道，靠路边行走", "D:通过路口或者横过道路，走人行横道或走过街设施" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1268,
    "type" : "multi",
    "content" : "我国刑法对防卫过当作了规定，下列行为属于防卫过当的是（）",
    "options" : [ "A:甲用木棍将正在盗窃的乙打昏在地", "B:甲用木棍将正在持刀抢劫的乙打昏在地", "C:甲用木棍将正在抢夺的乙打昏在地", "D:甲用木棍将正在侮辱他人的乙打昏在地" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1269,
    "type" : "multi",
    "content" : "某保安培训单位必须开设的培训内容有（）等",
    "options" : [ "A:刑事侦查手段", "B:守护巡逻技能", "C:火灾预防技能", "D:礼仪礼貌知识E:犯罪现场勘查方法" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1270,
    "type" : "multi",
    "content" : "保安从业单位制定的紧急情况应急预案中应当包括（）等内容",
    "options" : [ "A:组织指挥", "B:应急措施", "C:力量配备", "D:职责分工E:通信联络" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1271,
    "type" : "multi",
    "content" : "保安员维护客户单位及服务区域内的正常秩序，是（）的前提，也是保安服务的基本任务",
    "options" : [ "A:制止违法犯罪活动", "B:消除治安灾害事故隐患", "C:公安机关侦破案件", "D:确保人身安全E:化解社会矛盾" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1272,
    "type" : "multi",
    "content" : "保安员对巡逻中发现的案件.事故.事件现场应当立即进行保护。以下做法正确的是（）",
    "options" : [ "A:划定现场保护区域", "B:设置警戒标志", "C:不准无关人员进入", "D:保护好现场证据E:抢救伤员" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1273,
    "type" : "multi",
    "content" : "在区域巡逻中需要重点检查安全照明的场所是（）",
    "options" : [ "A:高层建筑的楼梯间", "B:居民楼各单元门口", "C:居民楼楼梯间", "D:区域内人行便道E:区域内主要交通通道" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1274,
    "type" : "multi",
    "content" : "现场救护人员应从（）方面区别动脉和静脉出血",
    "options" : [ "A:颜色", "B:部位", "C:血流速度", "D:伤口的深浅E:伤口大小" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1275,
    "type" : "multi",
    "content" : "伤员大腿有很深的刀伤，现场救护员正确的处理方法是（）",
    "options" : [ "A:用干净的敷料将伤口填塞", "B:加压包扎", "C:必要时可使用止血带", "D:不作处理，直接送医院E:可用电线止血" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1276,
    "type" : "multi",
    "content" : "小区内有人斗殴，其中一人右前臂大出血，这时，保安员正确的做法是（）",
    "options" : [ "A:置之不理", "B:拨打110.120", "C:排除险情，确保安全", "D:为伤员止血E:可使用绳索止血" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1277,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，保安员应享有的权利有（）",
    "options" : [ "A:正当防卫", "B:接受安全教育", "C:开展巡逻守护", "D:享受社会保险E:登记出入车辆" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1278,
    "type" : "multi",
    "content" : "我国刑法明确规定了以危险方法危害公共安全罪，下列不属于以危险方法危害公共安全的行为是（）",
    "options" : [ "A:放火", "B:驾车撞人", "C:爆炸", "D:投放危险物质E:故意传播突发传染病病原体" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1279,
    "type" : "multi",
    "content" : "下列选项中属于职业道德作用的是()",
    "options" : [ "A:增强员工的独立性", "B:增强企业的凝聚力", "C:决定企业的经济效益", "D:增加员工的福利E:塑造良好的企业形象" ],
    "answer" : "B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1280,
    "type" : "multi",
    "content" : "保安员职业道德的作用有()",
    "options" : [ "A:规范保安员的服务行为", "B:提高保安员职业素养", "C:塑造良好的企业形象", "D:形成和谐的人际关系E:增强组织的凝聚力" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1281,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》的规定，下列说法正确的是（）",
    "options" : [ "A:保安员在保安服务过程中，不允许接触商业秘密", "B:不得泄露客户信息属于保安员的义务", "C:不得泄露客户信息属于保安员的权利", "D:泄露客户单位的秘密可能会给国家利益造成损害" ],
    "answer" : "B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1282,
    "type" : "multi",
    "content" : "在道路交通活动中，（）情况可以超车",
    "options" : [ "A:没有中心线的道路", "B:前车为正在作业的洒水车", "C:前车为前去加油的救护车", "D:行经隧道E:行经窄桥" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1283,
    "type" : "multi",
    "content" : "在没有中心线的道路上，机动车相遇相对方向来车时应当（）",
    "options" : [ "A:减速靠右行驶", "B:保持原有速度行驶", "C:与其他车辆保持必要的安全距离", "D:与行人保持必要的安全距离E:鸣喇叭并迅速通过" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1284,
    "type" : "multi",
    "content" : "机动车载人时应当遵守的规定有（）",
    "options" : [ "A:公路载客汽车在载客人数已满的情况下，按照规定免票的儿童不得超过核定载客人数的15％", "B:载货汽车载物高度超过车厢栏板时，货物上最多可以搭载2名乘客", "C:城市道路上，中型货载货汽车在留有安全位置的情况下，车厢内最多可以附载临时作业人员5人", "D:公路载客汽车不得超过核定的载客人数" ],
    "answer" : "C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1285,
    "type" : "multi",
    "content" : "在道路交通活动中，机动车载物时需要注意的是（）",
    "options" : [ "A:机动车载物，长度不得超出车厢", "B:机动车载物，高度从地面起不得超出车厢2米", "C:载客汽车不得载货", "D:载货汽车车厢不得载客" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1286,
    "type" : "multi",
    "content" : "我国的社会保险主要包括（）保险等种类",
    "options" : [ "A:养老", "B:救济", "C:医疗", "D:失业E:住房" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1287,
    "type" : "multi",
    "content" : "在物业小区内行驶的机动车，应注意（）",
    "options" : [ "A:按指挥慢行", "B:最高时速不超过２５公里", "C:禁止鸣号", "D:按规定行驶方向行驶E:车辆停放位置适当" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1288,
    "type" : "multi",
    "content" : "以下关于停车管理的说法中，正确的是（）",
    "options" : [ "A:停车管理是静态交通管理的重要组成部分", "B:停车管理包括对车辆的存放管理", "C:停车管理是动态交通管理的重要组成部分", "D:停车管理包括对车辆的停驶管理" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1289,
    "type" : "multi",
    "content" : "下列做法正确的是（）",
    "options" : [ "A:城市公共汽车在站点前5米处停车下客", "B:出租车在没有公交车的公交站点停车上下乘客", "C:出租车在距离加油站１０米左右停车等候加油", "D:在道路上行驶的汽车爆胎时，驾驶人应立即停车，就地更换轮胎" ],
    "answer" : "C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1290,
    "type" : "multi",
    "content" : "保安员在车站候车室座椅下发现一无人认领的包裹，不正确的做法是（）",
    "options" : [ "A:打开包裹查看", "B:把包裹拿到值班室", "C:立即报警", "D:寻找失主E:记录情况，继续巡逻" ],
    "answer" : "A,B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1291,
    "type" : "multi",
    "content" : "保安员在人员密集场所经常使用的安全探测仪器包括（）",
    "options" : [ "A:金属探测仪", "B:爆炸物品探测仪", "C:红外体温探测仪", "D:放射性物品探测仪E:有毒气体探测仪" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1292,
    "type" : "multi",
    "content" : "保安员李某和王某在某大型人才交流会现场巡逻，应当作为可疑人重点观察的是（）",
    "options" : [ "A:某甲：举止怪异，神情慌张", "B:某乙：行为局促，对现场保安员的行踪过分关注", "C:某丙：一直尾随一名携包女子", "D:某丁：在现场推销保险E:某戊：行为诡秘，动作反常" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1293,
    "type" : "multi",
    "content" : "物业小区停车场保安要严格履行值班制度.巡视检查制度等，主要是为了防止（　　）等事故事件的发生",
    "options" : [ "A:火灾", "B:盗窃", "C:漏油", "D:水灾E:漏水" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1294,
    "type" : "multi",
    "content" : "机动车应该在（　　）停放",
    "options" : [ "A:规划的停车场", "B:规划的停车位", "C:规划停车位的人行道上严格按规定的时间", "D:规划停车位的人行道上可以超出规定的时间E:人行道上" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1295,
    "type" : "multi",
    "content" : "公共停车场管理中，保安的职责是（）",
    "options" : [ "A:规划好停车位及进出通道", "B:加强停车场巡视检查", "C:车辆出入登记", "D:负责车内物品的看管E:协助驾驶人按顺序停放" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1296,
    "type" : "multi",
    "content" : "属于特种车辆的是（）",
    "options" : [ "A:前往抢救病人的救护车", "B:执行完救火任务的消防车", "C:赶往案发现场的警车", "D:赶往坍塌桥梁现场的工程救险车E:运送邮件的邮政车辆" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1297,
    "type" : "multi",
    "content" : "在现场急救中，出现下列（）症状不需做心肺复苏",
    "options" : [ "A:意识障碍", "B:骨折", "C:呼吸心跳骤停", "D:轻度中暑E:发高烧" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1298,
    "type" : "multi",
    "content" : "在搬运伤员中，双人徒手搬运的方式有（）",
    "options" : [ "A:杠轿式", "B:椅托式", "C:拉车式", "D:扶持法E:背负法" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1299,
    "type" : "multi",
    "content" : "在找不到止血带的现场，为避免造成皮肤损伤，不能用（）代替止血带",
    "options" : [ "A:电线", "B:领带", "C:布条", "D:围巾E:细绳" ],
    "answer" : "A,E",
    "multiAnswers" : null
  },
  {
    "id" : 1300,
    "type" : "multi",
    "content" : "救护大腿骨折的伤员，正确的做法是（）",
    "options" : [ "A:可以利用健肢对伤肢进行固定", "B:固定时一定要超关节", "C:绑扎越紧越好", "D:固定后要观察末梢血液循环E:固定材料不直接接触皮肤" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1301,
    "type" : "multi",
    "content" : "指压止血法包括（）",
    "options" : [ "A:直接压迫法", "B:间接压迫法", "C:加压包扎法", "D:止血带法E:三角巾法" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1302,
    "type" : "multi",
    "content" : "在救护现场可采用（）作为止血带",
    "options" : [ "A:电线", "B:领带", "C:布条", "D:围巾E:细绳" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1303,
    "type" : "multi",
    "content" : "需要为大腿较深的伤口进行填塞止血时，救护员正确的做法是（）",
    "options" : [ "A:立即用止血带", "B:用干净的敷料填塞伤口", "C:加压包扎", "D:用绳索绑扎伤口E:如果条件不允许，可以用不干净的敷料" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1304,
    "type" : "multi",
    "content" : "火灾得到确认后，保安员在消防控制室可以实施的灭火行为有（）",
    "options" : [ "A:立即将火灾报警联动控制开关转入自动状态", "B:立即将火灾报警联动控制开关转入手动状态", "C:开启防火门.防火卷帘", "D:立刻拨打“119”报警" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1305,
    "type" : "multi",
    "content" : "现场救护的要求是（）",
    "options" : [ "A:立即将伤病员送医院", "B:在现场展开紧急救护", "C:救护时要注意排除险情", "D:必须由医务人员对伤病员实施救护" ],
    "answer" : "B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1306,
    "type" : "multi",
    "content" : "在人员密集场所的活动中，设置隔离区通常采用的方法包括（）",
    "options" : [ "A:穿插隔离", "B:包围隔离", "C:设置隔离带", "D:单向隔离E:事先划定隔离区" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1307,
    "type" : "multi",
    "content" : "关于骑巡说法正确的有（）",
    "options" : [ "A:是指骑自行车.骑马的巡逻", "B:是指骑电动车的巡逻", "C:速度较快.行动敏捷", "D:适用于区域范围不大.巡逻中能够将区域全部纳入视线的情况" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1308,
    "type" : "multi",
    "content" : "下列关于道路交通标线叙述正确的是（）",
    "options" : [ "A:颜色可以为白色.黄色", "B:颜色可以为蓝色.橙色", "C:路面图形标记中可以出现红色的图案或文字", "D:路面图形标记中可以出现黑色的图案或文字" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1309,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，以下关于交叉巡逻说法正确的是（）",
    "options" : [ "A:是徒步巡逻的常见形式", "B:是两组以上保安员分别从不同方位沿相互交叉的路线进行的巡逻", "C:可以每名保安员单独编组", "D:可以使保安员相互呼应，相互支援" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1310,
    "type" : "multi",
    "content" : "机动车行经交通信号灯控制的交叉路口时，应当（）",
    "options" : [ "A:夜间行驶开启远光灯", "B:向左转弯时，靠路口中心点左侧转弯", "C:准备进入环形路口的让已在路口内的机动车先行", "D:在没有方向指示信号灯的交叉路口，转弯的机动车让直行的车辆.行人先行" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1311,
    "type" : "multi",
    "content" : "非机动车在道路上通行时，（）",
    "options" : [ "A:可以在任何车行道内行驶", "B:没有非机动车道的，应在人行道上行驶", "C:没有非机动车道的，应在车行道的右侧行驶", "D:不得进入高速公路行驶E:应当在非机动车道内行驶" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1312,
    "type" : "multi",
    "content" : "道路养护车辆进行作业时，在不影响过往车辆通行的前提下，（）",
    "options" : [ "A:行驶方向不受交通标线限制", "B:行驶不受交通信号灯限制", "C:行驶路线不受交通标志限制", "D:行驶不受速度限制E:不得逆行" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1313,
    "type" : "multi",
    "content" : "特种车辆在执行紧急任务时可以（）",
    "options" : [ "A:撞伤行人不承担责任", "B:闯红灯", "C:逆行", "D:超速E:压禁停线" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1314,
    "type" : "multi",
    "content" : "机动车会车时应当遵守（）规则",
    "options" : [ "A:在有障碍的路段，无障碍的一方先行", "B:夜间在窄桥与非机动车会车时应使用远光灯", "C:夜间在窄路与非机动车会车时应使用近光灯", "D:在有障碍的路段，有障碍的一方已经驶入障碍路段而无障碍的一方未驶入的，有障碍的一方先行" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1315,
    "type" : "multi",
    "content" : "在（）的情况下，禁止超车",
    "options" : [ "A:前车示意左转弯", "B:行经人行横道", "C:前车正在超车时", "D:前车是赶往医院的救护车E:前车是正常行驶.未鸣警笛的警车" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1316,
    "type" : "multi",
    "content" : "在目标部位守护中，（）需要设置瞭望岗",
    "options" : [ "A:危险物品储存单位", "B:单位办公楼", "C:人员密集区域", "D:居民生活区E:电影院" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1318,
    "type" : "multi",
    "content" : "人员密集场所巡逻发现（）时，保安员应当报告场所管理部门，必要时应当立即报警",
    "options" : [ "A:人潮涌动的地铁站突然发生火灾", "B:演唱会的现场突然天降暴雨", "C:展销会的现场两人因故扭打起来，周围大量围观人员", "D:火车站入口处，两乘客因故发生争吵，经保安员规劝后停止吵闹" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1319,
    "type" : "multi",
    "content" : "下列关于物业小区停车场的叙述中，正确的是（）",
    "options" : [ "A:属于业主等特定对象使用的停车场", "B:属于公共停车场", "C:一般实行封闭式管理", "D:一般实行开放式管理E:一般实行机动车与非机动车分开存放" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1320,
    "type" : "multi",
    "content" : "文明服务要求保安员在保安服务活动中必须()",
    "options" : [ "A:仪表端庄", "B:语言规范", "C:客观公正", "D:心胸开阔E:尊重客户" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1321,
    "type" : "multi",
    "content" : "下面关于团结互助的说法中,错误的是()",
    "options" : [ "A:可以营造和谐的人际关系", "B:与企业的凝聚力无关", "C:要求大家宽容相待", "D:要求大家加强协作E:要求大家不要竞争" ],
    "answer" : "B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1322,
    "type" : "multi",
    "content" : "关于保安员劳动合同的正确说法是（）",
    "options" : [ "A:履行合同不仅是保安员的权利，也是保安员的义务", "B:履行合同是保安员的权利", "C:履行合同是保安员的义务", "D:劳动合同是一个整体，各项条款相互联系" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1323,
    "type" : "multi",
    "content" : "作为一名保安员，除了依法享有权利，还须履行相应的（）义务",
    "options" : [ "A:遵守法律", "B:遵守纪律", "C:正当防卫", "D:紧急避险E:勘查现场" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1324,
    "type" : "multi",
    "content" : "下列单位属于安全技术防范重点单位的是（）",
    "options" : [ "A:铁路车站", "B:公园街道", "C:文物系统", "D:国家机关E:居民家庭" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1325,
    "type" : "multi",
    "content" : "安全技术防范工程以维护社会公共安全为目的，综合运用安全防范技术和其他科学技术，为建立具有（）.防爆安全检查等功能（或其组合）的系统而实施的工程。通常也称为技防工程",
    "options" : [ "A:防入侵", "B:防自然灾害", "C:防破坏", "D:防抢劫E:防盗窃" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1326,
    "type" : "multi",
    "content" : "在有交通信号灯的交叉路口，非机动车应注意（）",
    "options" : [ "A:转弯时让直行的车辆.行人先行", "B:遇有停止信号时，没有停止线的，停在路口以外", "C:遇前方交叉路口堵塞时，可以进入交叉路口等候", "D:右转弯时遇有同方向前车正在等候放行信号的，在本车道内能够转弯的，可以通行" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1327,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，（）不属于保安员享有的权利",
    "options" : [ "A:查验出入证件", "B:登记出入车辆", "C:开展巡逻守护", "D:享受劳动条件E:享受劳动保护" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1328,
    "type" : "multi",
    "content" : "道路交通标志的构成要素是（）",
    "options" : [ "A:交通信号灯", "B:图形", "C:颜色", "D:字符E:形状" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1329,
    "type" : "multi",
    "content" : "道路交通信号灯包括（）",
    "options" : [ "A:人行横道信号灯", "B:方向指示信号灯", "C:闪光警告信号灯", "D:道口信号灯E:非机动车道信号灯" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1330,
    "type" : "multi",
    "content" : "下列关于导流岛的叙述正确的是（）",
    "options" : [ "A:用以诱导车辆运行路线的岛状构筑物", "B:用以控制车辆运行路线的岛状构筑物", "C:用来供过街行人避让车辆", "D:常与道路交通标线配合使用" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1331,
    "type" : "multi",
    "content" : "道路交通安全设施中的物理隔离设施有（）",
    "options" : [ "A:交通护栏", "B:交通信息提示板", "C:交通隔离带", "D:交通岛E:隔离栅栏" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1332,
    "type" : "multi",
    "content" : "道路交通标志适用于（）",
    "options" : [ "A:公路", "B:城市道路", "C:广场", "D:公共停车场E:物业小区内" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1333,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，以下关于点线巡逻说法正确的（）",
    "options" : [ "A:是徒步巡逻的常见形式", "B:须事先确定警戒点部署警戒", "C:须事先确定巡逻路线", "D:巡逻路线应当经过警戒点" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1334,
    "type" : "multi",
    "content" : "道路交通标志设置方式有（）",
    "options" : [ "A:柱式", "B:悬臂式", "C:门架式", "D:附着式E:放置式" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1335,
    "type" : "multi",
    "content" : "我国道路交通标志可以分为（）两大类",
    "options" : [ "A:警告标志", "B:主标志", "C:禁令标志", "D:辅助标志E:指示标志" ],
    "answer" : "B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1336,
    "type" : "multi",
    "content" : "道路交通信号灯由（）组成",
    "options" : [ "A:红灯", "B:蓝灯", "C:黄灯", "D:绿灯E:橙色灯" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1337,
    "type" : "multi",
    "content" : "道路交通标线按照功能可以分为（）",
    "options" : [ "A:横向标线", "B:指示标线", "C:警告标线", "D:禁止标线E:纵向标线" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1338,
    "type" : "multi",
    "content" : "下列关于道路交通安全设施的叙述正确的是（）",
    "options" : [ "A:设置的目的是保障道路交通的安全和畅通", "B:管制和引导交通的设备", "C:道路交通系统不可缺少的重要组成部分", "D:功能齐全.完备的道路交通设施是保证行车安全.减少和减轻交通事故的重要保障" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1339,
    "type" : "multi",
    "content" : "道路交通设施包括（）",
    "options" : [ "A:交通信号灯", "B:交通警察手势指挥", "C:交通标志", "D:交通标线E:物理隔离设施" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1340,
    "type" : "multi",
    "content" : "保安员在查验货物出库单时，应着重查验单据中写明的（）",
    "options" : [ "A:货物的外形", "B:货物的名称", "C:货物的规格", "D:货物的数量E:货物的型号" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1341,
    "type" : "multi",
    "content" : "保安员在（）情况下应立即报警",
    "options" : [ "A:发现客户单位安全隐患", "B:发现客户单位物资被盗", "C:客户单位发生火灾", "D:发现有人破坏重要设施E:客户单位出现水管爆裂" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1342,
    "type" : "multi",
    "content" : "保安员对进入客户单位的车辆进行登记时，应登记的内容有（）",
    "options" : [ "A:驾驶员姓名", "B:车辆颜色", "C:来访原因", "D:车牌号码E:车辆型号" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1343,
    "type" : "multi",
    "content" : "保安员小王在化工厂门卫值勤时，司机小李驾车送货离开。在通过出入口时，小王请其停车核对货物出库单并进行查验，小王的正确做法是（）",
    "options" : [ "A:对小李说：“你好，请停车，请出示货物出库单。”", "B:在小李停车后，保安员小王打开车门查验货物", "C:请小李打开车门，对照货物出库单进行核对", "D:小李向小王说明货物没问题后，小王放行" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1344,
    "type" : "multi",
    "content" : "文明服务要求保安员在保安服务活动中必须()",
    "options" : [ "A:仪表端庄", "B:遵纪守法", "C:举止得体", "D:礼貌待人E:心胸开阔" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1345,
    "type" : "multi",
    "content" : "文明服务要求保安员在保安服务活动中必须()",
    "options" : [ "A:仪表端庄", "B:语言规范", "C:举止得体", "D:礼貌待人E:尊重客户" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1346,
    "type" : "multi",
    "content" : "下面关于团结互助的说法中,正确的是()",
    "options" : [ "A:可以营造和谐的人际关系", "B:可以增强企业的凝聚力", "C:要求大家宽容相待", "D:要求大家加强协作E:要求大家不要竞争" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1347,
    "type" : "multi",
    "content" : "下面关于团结互助的说法中,正确的是()",
    "options" : [ "A:可以营造和谐的人际关系", "B:与企业的凝聚力无关", "C:要求大家宽容相待", "D:要求大家加强协作E:要求大家不要竞争" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1348,
    "type" : "multi",
    "content" : "保安员遵守职业道德能够()",
    "options" : [ "A:增强员工的独立性", "B:增强保安从业单位的凝聚力", "C:规范保安员的服务行为", "D:形成高尚的职业情操E:塑造良好的企业形象" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1349,
    "type" : "multi",
    "content" : "下列设备是停车场管理系统中出口设备的有（）",
    "options" : [ "A:发卡机", "B:挡车器", "C:车辆检测线圈", "D:摄像机E:视频监视器" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1350,
    "type" : "multi",
    "content" : "下列设备是停车场管理系统中入口设备的有（）",
    "options" : [ "A:发卡机", "B:挡车器", "C:车辆检测线圈", "D:全方位云台E:视频监视器" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1351,
    "type" : "multi",
    "content" : "目前常用的周界报警设备有（）报警器",
    "options" : [ "A:红外对射", "B:被动红外", "C:激光对射", "D:泄漏电缆E:电子围栏" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1352,
    "type" : "multi",
    "content" : "入侵报警系统是指利用（）技术探测，并指示非法进入或试图非法进入设防区域的行为，处理报警信息，发出报警信息的电子系统或网络",
    "options" : [ "A:传感器", "B:视频压缩", "C:综合布线", "D:电子信息E:生物识别" ],
    "answer" : "A,D",
    "multiAnswers" : null
  },
  {
    "id" : 1353,
    "type" : "multi",
    "content" : "纵深防护体系是兼有（）的防护体系",
    "options" : [ "A:周界", "B:盲区", "C:禁区", "D:监视区E:防护区" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1354,
    "type" : "multi",
    "content" : "爱岗敬业是一个保安员做好本职工作的重要前提。提倡爱岗敬业，就是要求保安员（）",
    "options" : [ "A:不要转行", "B:勇于承担职业责任", "C:提高保安服务技能", "D:认识保安服务的社会价值E:不能玩忽职守" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1355,
    "type" : "multi",
    "content" : "下列关于保安员的守法义务中，说法正确的是（）",
    "options" : [ "A:守法是每一个保安员必须履行的基本义务", "B:对于保安员来说，守法有更高的要求", "C:必须遵守《保安服务管理条例》中对保安员行为的禁止性规定", "D:遵守法律法规的有关规定是保安员的基本义务" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1357,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》的规定，作为保安员必须履行的义务有（）",
    "options" : [ "A:报警监控", "B:遵守纪律", "C:遵守合同", "D:保守秘密E:遵守法律" ],
    "answer" : "B，C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1358,
    "type" : "multi",
    "content" : "在职业活动中形成的（）就是职业道德",
    "options" : [ "A:行为准则", "B:劳动技能", "C:基本规范", "D:思维习惯E:操作程序" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1359,
    "type" : "multi",
    "content" : "作为一名保安员，除了依法享有权利，还须履行相应的（）义务",
    "options" : [ "A:保守秘密", "B:勘查现场", "C:正当防卫", "D:紧急避险E:遵守纪律" ],
    "answer" : "A,E",
    "multiAnswers" : null
  },
  {
    "id" : 1360,
    "type" : "multi",
    "content" : "在现场急救中，现场心肺复苏的三个步骤包括（）",
    "options" : [ "A:判断意识", "B:人工呼吸", "C:胸外心脏按压", "D:打开气道E:大声呼救" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1361,
    "type" : "multi",
    "content" : "加压包扎止血的正确做法是（）",
    "options" : [ "A:用大块干净的毛巾.手绢等，覆盖伤口", "B:用绷带加压包扎伤口", "C:胸部伤口不能加敷料", "D:观察末梢血液循环" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1362,
    "type" : "multi",
    "content" : "用担架抬脊柱损伤伤员时，应注意（）",
    "options" : [ "A:将伤员固定在担架上，避免摔伤", "B:伤员头部朝前，脚朝后", "C:移动时注意脊柱的稳定", "D:首先要上好颈托E:采用硬质的担架" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1363,
    "type" : "multi",
    "content" : "保安员需要掌握的火灾应急疏散基本常识包括（）",
    "options" : [ "A:常用灭水器材的使用方法", "B:扑救初起火灾的知识", "C:消防控制主机的工作原理", "D:报火警的方法E:自救逃生的知识" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1364,
    "type" : "multi",
    "content" : "在发生火灾的房屋里，浓烟弥漫.充满毒气，这时保安员需要做的是（）",
    "options" : [ "A:先帮助老人.小孩.病人疏散", "B:稳定人员情绪，维护现场秩序", "C:能够安全疏散时，阻止人员跳楼", "D:防止脱离险境的人员再入“火口”" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1365,
    "type" : "multi",
    "content" : "发生火灾被迫跳楼时，保安员需要提醒逃生人员注意的是()",
    "options" : [ "A:将绳子或布条的一端紧拴在牢固的门窗格或其它重物上，再顺着滑下", "B:手扶窗台往下滑，以缩小跳楼高度", "C:保证上肢先着地", "D:向地面抛下一些棉被等物，以增加缓冲E:可以借助木板或竹竿等逃往相邻阳台" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1366,
    "type" : "multi",
    "content" : "高层建筑物发生火灾时，保安员需要做好的应急工作有()",
    "options" : [ "A:拨打“119”电话报警", "B:组织引导疏散", "C:对通风.煤气.电源做应急处理", "D:启动消防水泵E:立即制定应急疏散预案" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1367,
    "type" : "multi",
    "content" : "下列属于以生物特征作为识别凭证的出入口目标识别子系统的设备是（）",
    "options" : [ "A:指纹仪", "B:掌形仪", "C:韦根卡", "D:乱序键盘E:红外探测器" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1368,
    "type" : "multi",
    "content" : "文明服务要求保安员在保安服务活动中必须()",
    "options" : [ "A:客观公正", "B:遵纪守法", "C:举止得体", "D:礼貌待人E:尊重客户" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1369,
    "type" : "multi",
    "content" : "保安员张某在享受公民基本权利的同时，还可以享受（）的权利",
    "options" : [ "A:查验出入证件", "B:登记出入车辆", "C:开展巡逻守护", "D:社会保险E:接受安全教育和技能培训" ],
    "answer" : "D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1370,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，（）是保安员应享有的权利",
    "options" : [ "A:开展安全检查", "B:登记出入车辆", "C:签订劳动合同", "D:开展巡逻守护" ],
    "answer" : "C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1371,
    "type" : "multi",
    "content" : "成为一名合格的保安员需要做到品行良好，品行良好的具体含义包括（）",
    "options" : [ "A:遵守社会主义道德规范", "B:熟悉并遵守保安员道德要求", "C:没有犯罪记录", "D:未曾受过劳动教养E:遵纪守法" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1372,
    "type" : "multi",
    "content" : "下列人员中，符合保安员任职资格年龄的有（）",
    "options" : [ "A:年满16周岁", "B:年满17周岁", "C:年满19周岁", "D:年满30周岁E:年满55周岁" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1373,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，以下关于往返巡逻说法正确的是（）",
    "options" : [ "A:巡逻路线是事先确定的", "B:是由起点到终点，再由终点原路返回到起点", "C:适用于两组以上的保安员相向巡逻", "D:巡逻可以每名保安员单独编组" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1374,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，单线巡逻的特点是（）",
    "options" : [ "A:巡逻路线固定", "B:巡视范围固定", "C:看护对象固定", "D:巡逻范围大E:巡逻人员多" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1375,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，常采用的区域巡逻方式有（）",
    "options" : [ "A:机巡", "B:步巡", "C:骑巡", "D:车巡E:舟巡" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1376,
    "type" : "multi",
    "content" : "区域巡逻具有如下特点（）",
    "options" : [ "A:对象固定", "B:被动性强", "C:主动性强", "D:流动性大E:风险度高" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1377,
    "type" : "multi",
    "content" : "小张想成为一名保安员，他需要()才能取得《保安员证》",
    "options" : [ "A:经设区的市级公安机关考试合格", "B:经设区的市级教育行政机关考试合格", "C:经设区的市级公安机关审查通过", "D:在设区的市级公安机关留存指纹信息" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1378,
    "type" : "multi",
    "content" : "火灾报警控制器按其用途不同可分为（）火灾报警控制器几种基本类型",
    "options" : [ "A:主动型", "B:区域型", "C:集中型", "D:被动性E:通用型" ],
    "answer" : "B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1379,
    "type" : "multi",
    "content" : "（）是全球卫星定位系统的功能",
    "options" : [ "A:车辆监控", "B:反劫防盗", "C:导航", "D:最优路径向导E:倒车防撞" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1380,
    "type" : "multi",
    "content" : "我国刑法规定的刑罚有（）等种类",
    "options" : [ "A:管制", "B:拘役", "C:罚金", "D:驱逐出境E:死缓" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1381,
    "type" : "multi",
    "content" : "我国刑法规定刑罚的目的并非单纯给犯罪人造成一定的痛苦，而是通过刑罚处罚达到（）的目的",
    "options" : [ "A:侦查犯罪", "B:预防犯罪", "C:查处犯罪", "D:教育罪犯E:关押罪犯" ],
    "answer" : "B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1382,
    "type" : "multi",
    "content" : "下列不属于犯罪行为的是（）",
    "options" : [ "A:正当防卫", "B:见义勇为", "C:故意伤害", "D:自救行为E:紧急避险" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1383,
    "type" : "multi",
    "content" : "在某单位财务室内安装入侵报警设备可选择（　　）",
    "options" : [ "A:双技术报警器", "B:振动报警器", "C:电子围栏", "D:云台E:读卡器" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1384,
    "type" : "multi",
    "content" : "防爆安检系统主要检测的目标是（）",
    "options" : [ "A:爆炸物品", "B:武器", "C:金属器械", "D:毒品E:有毒食品" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1385,
    "type" : "multi",
    "content" : "火灾报警系统一般由（）等部分组成",
    "options" : [ "A:火灾探测报警器件", "B:火灾报警装置", "C:火灾警报装置", "D:火灾灭火装置" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1386,
    "type" : "multi",
    "content" : "下列设备属于防爆安检设备的有（）",
    "options" : [ "A:X射线检查设备", "B:半球形摄像机", "C:质谱分析设备", "D:毫米波探测设备" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1387,
    "type" : "multi",
    "content" : "下列设备是停车场管理系统中控制管理中心设备的有（）",
    "options" : [ "A:视频矩阵控制器", "B:报表打印机", "C:计算机", "D:收费显示屏E:发卡机" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1388,
    "type" : "multi",
    "content" : "“发生火灾时不能使用普通电梯”是国内外消防界的共识。主要原因是（）",
    "options" : [ "A:普通电梯不能直通安全疏散楼梯间", "B:火灾时的高温烟气和灭火积水蔓延.流淌到前室和电梯井，导致普通电梯故障", "C:普通电梯没有备用电源", "D:普通电梯容易造成人员被困" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1389,
    "type" : "multi",
    "content" : "在火场中，防烟是逃生自救的关键。穿越浓烟区时()",
    "options" : [ "A:用毛巾.口罩.床单.衣服作为临时的“空气呼吸器”", "B:用湿衣服.湿床单.湿毛毯将身体裹好", "C:若感到呼吸困难，可将毛巾从口鼻上拿开", "D:保持冷静.清醒的头脑E:低腰.匍匐前进" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1390,
    "type" : "multi",
    "content" : "建筑物在高层发生火灾，在火势较大.无路可逃的情况下，保安员在引导人员疏散时，可以()",
    "options" : [ "A:向室外扔出小东西，引起救援人员的注意", "B:试图从火中冲出去", "C:大声呼救", "D:清除障碍物后跳楼逃生E:从阳台直接往下跳" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1391,
    "type" : "multi",
    "content" : "高层建筑物发生火灾时，如果楼梯已经烧断，可利用()逃生",
    "options" : [ "A:建筑物的避雷网（线）", "B:带电电线", "C:落水管", "D:房屋向外突出部分" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1392,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，（）是保安员应享有的权利",
    "options" : [ "A:接受表彰奖励", "B:登记出入车辆", "C:开展巡逻守护", "D:参加社会保险" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1393,
    "type" : "multi",
    "content" : "关于保安员享受劳动条件和劳动保护的权利，下列说法正确的是（）",
    "options" : [ "A:劳动保护是用人单位保障保安员身体健康的有效措施", "B:劳动保护是用人单位保障保安员生命安全的有效措施", "C:劳动保护是用人单位预防保安员伤亡事故的有效措施", "D:劳动保护是用人单位避免保安员生病的唯一措施" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1394,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，车巡存在的工作缺陷有（）",
    "options" : [ "A:速度快.行程长.成本高", "B:巡查范围大.机动性不强", "C:速度快.难以细致观察情况", "D:目标明显.隐蔽性不强" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1395,
    "type" : "multi",
    "content" : "道路交通标志中的辅助标志按照作用可以分为表示（）的辅助标志",
    "options" : [ "A:警告", "B:车辆的种类", "C:时间范围", "D:区域E:距离" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1396,
    "type" : "multi",
    "content" : "在现场急救中，心肺复苏的有效指征包括（）",
    "options" : [ "A:伤病员面色由苍白.青紫转向红润", "B:恢复自主呼吸及循环", "C:瞳孔由大变小", "D:眼球转动.呻吟E:瞳孔由小变大" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1397,
    "type" : "multi",
    "content" : "在现场急救中，为了使胸外按压更加有效，正确的方法是（）",
    "options" : [ "A:按压时间长一些，能压出更多的血", "B:按压和解除按压时间相等", "C:按压后，多放松一段时间，使心脏更好的充盈", "D:压5次，休息5分钟后，再压5次，反复操作不间断E:尽量减少按压中断" ],
    "answer" : "B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1399,
    "type" : "multi",
    "content" : "在目标部位守护中，固定岗位应设立在目标部位的（）",
    "options" : [ "A:出入口", "B:重要地段", "C:便于控制的位置", "D:人员密集区域E:服务人员区域" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1400,
    "type" : "multi",
    "content" : "在目标部位守护工作中，流动岗工作的特点是（）",
    "options" : [ "A:必须注意活动区域内的地形地貌", "B:按照规定的路线和区域巡查", "C:随时加强重要部位的巡查", "D:根据天气变化情况选择巡查路线" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1401,
    "type" : "multi",
    "content" : "在保安服务中，目标部位容易发生的问题有（）",
    "options" : [ "A:群体上访", "B:违法分子破坏", "C:恐怖袭击", "D:不法分子的侵入" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1402,
    "type" : "multi",
    "content" : "在保安服务中，针对保安员依法享有的权利，下列说法正确的是（）",
    "options" : [ "A:保安员有行使紧急避险的权利", "B:保安员有行使正当防卫的权利", "C:保安员依法采取紧急避险，不负刑事责任", "D:保安员依法采取正当防卫，不负刑事责任E:保安员依法采取紧急避险，不负任何责任" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1403,
    "type" : "multi",
    "content" : "某公司的保安员小周工作多年，因表现突出，未参加过岗上培训，根据《保安服务管理条例》规定，小周没有享受到（）的权利",
    "options" : [ "A:劳动保护", "B:技能培训", "C:劳动条件", "D:社会保险E:安全教育" ],
    "answer" : "B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1404,
    "type" : "multi",
    "content" : "下列选项中属于职业道德作用的是()",
    "options" : [ "A:增强员工的独立性", "B:增强企业的凝聚力", "C:规范保安员的服务行为", "D:增加员工的福利E:塑造良好的企业形象" ],
    "answer" : "B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1405,
    "type" : "multi",
    "content" : "我国的社会保险主要包括（）保险等种类",
    "options" : [ "A:养老", "B:救济", "C:医疗", "D:失业E:生育" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1406,
    "type" : "multi",
    "content" : "一名外国人因为在中国境内贩卖毒品于2009年被我国某市中级人民法院判处有期徒刑8年，没收其财产，并处罚金10万元，同时判决在刑满释放后予以驱逐出境。对这名外国人的处罚中，属于附加刑的有（）",
    "options" : [ "A:有期徒刑8年", "B:没收财产", "C:罚金", "D:刑满释放E:驱逐出境" ],
    "answer" : "B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1407,
    "type" : "multi",
    "content" : "我国刑法规定的刑罚中，属于附加刑的有（）",
    "options" : [ "A:管制", "B:罚金", "C:没收财产", "D:拘役E:死缓" ],
    "answer" : "B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1408,
    "type" : "multi",
    "content" : "某市保安服务公司因为经营状况发生严重困难，准备单方面裁减保安员，该保安服务公司不能裁减（）等人员",
    "options" : [ "A:该公司中层领导", "B:在孕期.产期的女保安员", "C:年龄57岁.连续在该公司工作16年的员工", "D:因提供保安服务而受伤且在治疗期内的保安员E:受过保安专业技能培训的人员" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1409,
    "type" : "multi",
    "content" : "下列属于保安员职责任务的是（）",
    "options" : [ "A:维护客户单位及服务区域的正常秩序", "B:开展守护.巡逻活动", "C:设置临时隔离区", "D:严厉打击违法犯罪活动E:登记出入车辆和物品" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1410,
    "type" : "multi",
    "content" : "在治安灾害事故现场，发现现行违法犯罪分子时，保安员应（）",
    "options" : [ "A:及时堵截", "B:及时扭送到公安机关", "C:没收赃款赃物", "D:及时讯问，掌握证据" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1411,
    "type" : "multi",
    "content" : "发生治安灾害事故后，保安员应该做到（）",
    "options" : [ "A:保护现场", "B:紧急救护受伤人员", "C:排除险情，抢救物资", "D:扣押违法犯罪嫌疑人E:讯问违法犯罪嫌疑人" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1413,
    "type" : "multi",
    "content" : "我国的社会保险主要包括（）保险等种类",
    "options" : [ "A:就业", "B:失业", "C:养老", "D:医疗E:工伤" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1414,
    "type" : "multi",
    "content" : "劳动者与用人单位发生劳动争议后申请劳动仲裁，（）争议的劳动仲裁为终局裁决",
    "options" : [ "A:劳动者追索工伤医疗费不超过当地月最低工资标准12个月金额的", "B:劳动者追索劳动报酬超过当地月最低工资标准12个月金额的", "C:用人单位要求劳动者支付培训费及违约金的", "D:社会保险方面的" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1415,
    "type" : "multi",
    "content" : "区域保安服务工作的基本任务是在服务区域开展（）活动",
    "options" : [ "A:守护", "B:巡逻", "C:安全检查", "D:报警监控E:隔离犯罪嫌疑人" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1416,
    "type" : "multi",
    "content" : "关于设立隔离区的方式，下列说法正确的是（）",
    "options" : [ "A:拉设警戒线", "B:拉设隔离带", "C:保安员站位", "D:强制隔离可疑人员" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1417,
    "type" : "multi",
    "content" : "犯罪的客观方面是犯罪的客观外在表现。下列属于犯罪的客观方面的内容有（）等",
    "options" : [ "A:危害结果", "B:因果关系", "C:犯罪工具", "D:犯罪客体E:犯罪地点" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1418,
    "type" : "multi",
    "content" : "保安员甲看到保安员乙有一部3G手机，心里就盘算趁乙不注意的时候把手机偷了送给其女朋友。但由于乙把手机看管的比较严，甲一直没有机会偷走这部手机。下列说法正确的是（）",
    "options" : [ "A:甲有犯罪的故意", "B:甲的行为属于犯罪未遂", "C:甲的行为不具备犯罪的客观要件", "D:甲的行为构不成犯罪E:甲的行为属于犯罪中止" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1419,
    "type" : "multi",
    "content" : "我国刑法规定，构成犯罪必须具备（）.犯罪客观方面和犯罪的主观方面等要件",
    "options" : [ "A:犯罪主体", "B:犯罪客体", "C:犯罪年龄", "D:犯罪故意E:犯罪过失" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1420,
    "type" : "multi",
    "content" : "保安员在保安服务过程中，要树立（），尽量避免或降低自身伤害风险",
    "options" : [ "A:主动进攻意识", "B:主动打击意识", "C:安全防范意识", "D:保护证人意识" ],
    "answer" : "C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1421,
    "type" : "multi",
    "content" : "运钞车通过桥梁.隧道.港口遇到险情时，押运人员应该（）",
    "options" : [ "A:驾驶车辆继续行驶", "B:驾驶车辆离开该路段，绕行其他路段", "C:加强观察，在险情排除后再通过", "D:保持高度警惕，在确保安全情况下通过" ],
    "answer" : "C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1422,
    "type" : "multi",
    "content" : "押运人员站位警戒时，有人进入安全区域，应该（）",
    "options" : [ "A:将该人强行带离安全区域", "B:保持警惕，及时劝阻", "C:不听劝阻时，求助公安机关协助解决", "D:对无理取闹的要积极劝阻" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1423,
    "type" : "multi",
    "content" : "保安押运服务中，勘察的目的是（）",
    "options" : [ "A:选择交通工具", "B:掌握单程距离及时间", "C:掌握甲方经营及付款方式", "D:掌握沿途周边的社会治安情况E:掌握物品交接的位置及迂回路线" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1424,
    "type" : "multi",
    "content" : "在大型活动保卫工作中，保安员所采取的事先划定隔离区的方法有（）",
    "options" : [ "A:划线隔离", "B:利用专用设施隔离", "C:采用人墙隔离", "D:利用汽车隔离E:活动进行中设置隔离区" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1425,
    "type" : "multi",
    "content" : "春运期间，保安员李某和张某在候车大厅巡逻时发现两名乘客因相互碰撞而大声争吵，引来不少围观人员。保安员张某和李某的正确做法是（）",
    "options" : [ "A:两人对争吵人员进行劝说，使其停止争吵", "B:由于双方争吵激烈，两名保安员将两人分开进行劝解", "C:在争吵的过程中，围观人员越来越多，两名保安员劝解两人，并疏散围观群众", "D:两名保安员劝说无效后，继续巡逻" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1426,
    "type" : "multi",
    "content" : "保安员在巡逻过程中，发现地震等自然灾害事故，应当（）",
    "options" : [ "A:报告", "B:报警", "C:协助有关部门做好应急处置工作", "D:保护现场，防止有人趁火打劫E:抓捕趁火打劫者" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1427,
    "type" : "multi",
    "content" : "在区域巡逻服务中，需要重点检查消防设备的场所有（）",
    "options" : [ "A:交通干道", "B:重要仓库", "C:易燃易爆品集中地", "D:工程施工现场E:室外休闲场地" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1428,
    "type" : "multi",
    "content" : "区域巡逻中要排除的各种不安全因素包括（）",
    "options" : [ "A:有无照明灯具", "B:有无漏电", "C:有无断线", "D:有无电火花" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1429,
    "type" : "multi",
    "content" : "在区域巡逻勤务中，属于区域巡逻任务的是（）",
    "options" : [ "A:维护巡逻区域内秩序", "B:协助处置区域内的自然灾害事故", "C:排除各种不安全因素", "D:为区域内群众需求提供服务E:抓捕犯罪嫌疑人" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1430,
    "type" : "multi",
    "content" : "我国刑法明确规定了以危险方法危害公共安全罪，下列属于以危险方法危害公共安全的行为是（）",
    "options" : [ "A:放火", "B:驾车撞人", "C:爆炸", "D:投放危险物质E:故意传播突发传染病病原体" ],
    "answer" : "B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1431,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》规定，（）不得从事保安服务",
    "options" : [ "A:曾被劳动教养2年的", "B:被吊销《保安员证》未满2年的", "C:曾经被吊销《保安员证》2次的", "D:曾经被吊销《保安员证》1次的" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1433,
    "type" : "multi",
    "content" : "机动车载运易燃易爆化学物品时（）",
    "options" : [ "A:应取得公安机关批准", "B:机动车驾驶人可以在车内吸烟", "C:按指定的速度行驶", "D:按指定的时间.路线E:悬挂警示标志" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1434,
    "type" : "multi",
    "content" : "机动车超车时，应注意（）",
    "options" : [ "A:超车前应开启左转向灯", "B:发超车信号，示意前车做好被超越准备", "C:超车完毕返回原车道时，关闭左转向灯，开启右转向灯", "D:在确认安全的情况下驶回原车道" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1435,
    "type" : "multi",
    "content" : "交通主体参与交通活动时，必须遵守（）",
    "options" : [ "A:左侧通行原则", "B:右侧通行原则", "C:各行其道原则", "D:优先通行原则" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1436,
    "type" : "multi",
    "content" : "在目标部位守护中，瞭望岗一般设置在（）部位的最高处",
    "options" : [ "A:分布面广", "B:区域较大", "C:地形复杂", "D:视线障碍多E:能见度低" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1437,
    "type" : "multi",
    "content" : "在固定岗位工作的保安员应了解（）等通讯.报警设备的位置和使用方法",
    "options" : [ "A:电闸", "B:保安棍", "C:电铃", "D:电话E:手电筒" ],
    "answer" : "C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1438,
    "type" : "multi",
    "content" : "在固定岗位工作的保安员应了解电闸.灭火器.消火栓等安全设备的（）",
    "options" : [ "A:所在位置", "B:工作原理", "C:使用方法", "D:性能E:维修方法" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1439,
    "type" : "multi",
    "content" : "在大型活动保卫工作中，出现（）情况时，保安员可以在活动现场设置隔离区",
    "options" : [ "A:个别观众大声喧哗", "B:人员无序涌动", "C:场内设施异常", "D:人员拥挤的苗头" ],
    "answer" : "B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1440,
    "type" : "multi",
    "content" : "按照使用交通工具的不同，保安押运可划分为（）",
    "options" : [ "A:长途押运", "B:短途押运", "C:空中押运", "D:汽车押运E:船舶押运" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1441,
    "type" : "multi",
    "content" : "保安公司在进行押运勘察时，（）均应参加",
    "options" : [ "A:主管勤务的工作人员", "B:主管业务的工作人员", "C:主管消防的工作人员", "D:主管后勤的工作人员E:派出所民警" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1442,
    "type" : "multi",
    "content" : "保安押运服务方案的内容包括（）",
    "options" : [ "A:确定交通工具", "B:制定较为完备的通讯联络方案", "C:确定枪弹及其他械具的配备", "D:制定巡逻方案E:制定应急预案" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1443,
    "type" : "multi",
    "content" : "在一起大型的展销会现场出现了大量的人员哄抢行为，这时，保安人员应该采取的处置措施为（）",
    "options" : [ "A:会同场所的工作人员制止哄抢", "B:通过扩音设备进行劝告", "C:设置隔离区，疏导围观人员", "D:报告现场管理部门E:抓捕哄抢人员" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1444,
    "type" : "multi",
    "content" : "制定押运应急预案的主要内容包括（）",
    "options" : [ "A:防盗抢预案", "B:车辆事故预案", "C:技术防范预案", "D:自然灾害预案" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1445,
    "type" : "multi",
    "content" : "在保安押运过程中，运钞车辆临时停驶的要求是（）",
    "options" : [ "A:车辆停到安全位置", "B:押运人员可下车休息", "C:时刻观察周围情况", "D:妥善保管枪支弹药E:可不采取相应的警戒措施" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1446,
    "type" : "multi",
    "content" : "上下款过程中，发现可疑人时，下列正确的做法是（）",
    "options" : [ "A:做好应急准备", "B:不执行上下款任务，车辆返回原单位", "C:将可疑人扭送公安机关", "D:立即向本单位报告E:严密监视可疑人员动向" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1447,
    "type" : "multi",
    "content" : "通常情况下武装押运的物品是（）",
    "options" : [ "A:现金", "B:钢材", "C:剧毒物品", "D:黄金E:防水材料" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1448,
    "type" : "multi",
    "content" : "保安员人员密集场所情况处置的内容包括（）",
    "options" : [ "A:人员密集场所可疑情况的识别", "B:人员密集场所纠纷的处理", "C:人员密集场所人群的疏导", "D:人员密集场所隔离区的设置" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1449,
    "type" : "multi",
    "content" : "下列属于人员密集场所可疑情况的是（）",
    "options" : [ "A:保安员甲在演唱会的入口处发现一个黑色的袋子，内装不明物品", "B:保安员乙在展览会的现场发现一青年手拿镊子尾随一带包女子", "C:保安员丙在候机厅外发现有人抽烟", "D:保安员丁在候车室内发现有三名青年随身携带管制刀具" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1450,
    "type" : "multi",
    "content" : "识别人员密集场所可疑情况的方法包括（）",
    "options" : [ "A:直接观察法", "B:仪器探测法", "C:查问法", "D:接受群众举报E:秘密工作发现" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1451,
    "type" : "multi",
    "content" : "有关保安押运任务实施前的准备，下列描述正确的是（）",
    "options" : [ "A:勘察", "B:制作合同文本", "C:签订合同意向书", "D:制定押运方案" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1452,
    "type" : "multi",
    "content" : "押运中发生交通事故时，正确的处理方法是（）",
    "options" : [ "A:严密看管所押物品，确保安全", "B:与事发地公安机关联系", "C:向客户单位说明情况", "D:向本单位报告E:设定安全区域，禁止其他车辆通行" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1453,
    "type" : "multi",
    "content" : "下列会给火灾紧急疏散造成麻烦的有（）",
    "options" : [ "A:疏散通道.安全出口.消防车通道不畅通", "B:公共消防设施.器材以及消防安全标志不完整", "C:消防安全责任落实不到位", "D:消防安全疏散标志不符合国家规范" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1454,
    "type" : "multi",
    "content" : "在火灾现场，被困人员穿越浓烟区时，需要特别注意的是()",
    "options" : [ "A:低头弯腰", "B:朝明亮处或外面空旷地方跑", "C:若是高层建筑，则向楼房顶层跑", "D:保持冷静.清醒的头脑E:匍匐前进" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1456,
    "type" : "multi",
    "content" : "火灾现场中被困人员可利用()发出呼救信号，以引起救援人员的注意，帮助自己脱离困境",
    "options" : [ "A:消防专用电话", "B:大声呼救", "C:手机", "D:向外扔些小物品E:消防电梯里的电话" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1457,
    "type" : "multi",
    "content" : "安全防范技术在守护工作中应用的优势是（）",
    "options" : [ "A:不间断连续工作", "B:不受环境气候影响", "C:安全性低", "D:隐秘性强E:人力成本低" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1458,
    "type" : "multi",
    "content" : "在固定岗位工作的保安员应了解电铃.电话等通讯.报警设备的（）",
    "options" : [ "A:工作原理", "B:位置", "C:维修方法", "D:使用方法E:使用频次" ],
    "answer" : "B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1459,
    "type" : "multi",
    "content" : "在固定岗位工作的保安员应了解（）等安全设备的使用方法",
    "options" : [ "A:对讲机", "B:电闸", "C:移动电话", "D:灭火器E:消火栓" ],
    "answer" : "B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1460,
    "type" : "multi",
    "content" : "安全技术防范在目标守护工作中的作用是（）",
    "options" : [ "A:提高工作效率", "B:提高守护工作的科技含量", "C:提升保安服务水平", "D:提高巡逻人员对科技产品的认知能力E:提高目标部位的安全度" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1461,
    "type" : "multi",
    "content" : "在目标部位守护中，可采取（）形式对目标部位进行守护",
    "options" : [ "A:固定岗", "B:流动岗", "C:专用设施控制岗", "D:瞭望岗E:安全技术防范" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1462,
    "type" : "multi",
    "content" : "目标部位的特点是（）",
    "options" : [ "A:环境复杂", "B:性质特殊", "C:服务方式特殊", "D:地位重要E:工作人员特殊" ],
    "answer" : "B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1463,
    "type" : "multi",
    "content" : "在目标部位守护中，属于目标部位的有（）",
    "options" : [ "A:保存有害菌种.毒种的部位", "B:生产业务活动的关键部位", "C:单位内的生活区域", "D:存放重要档案的部位E:人员高度密集的部位" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1464,
    "type" : "multi",
    "content" : "良好的职业道德,对于()具有十分重要的作用",
    "options" : [ "A:规范员工职业行为", "B:提高员工心理素质", "C:提高员工技能水平", "D:塑造良好企业形象E:打造企业品牌" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1465,
    "type" : "multi",
    "content" : "良好的职业道德,对于()具有十分重要的作用",
    "options" : [ "A:规范员工职业行为", "B:提高员工服务水平", "C:提高员工技能水平", "D:提高员工心理素质E:打造企业品牌" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1466,
    "type" : "multi",
    "content" : "企业的社会形象主要由企业的()构成",
    "options" : [ "A:产品形象", "B:地理位置", "C:服务形象", "D:注册资本E:经营形象" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1467,
    "type" : "multi",
    "content" : "在我国刑法规定的故意伤害罪中，只有伤害结果达到（）的才能构成故意伤害罪",
    "options" : [ "A:轻微伤", "B:轻伤", "C:重伤", "D:残疾E:死亡" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1468,
    "type" : "multi",
    "content" : "人员密集场所可能存在的安全隐患类型有（）",
    "options" : [ "A:安全事故", "B:治安案件", "C:刑事案件", "D:群体性事件E:自然灾害" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1469,
    "type" : "multi",
    "content" : "我国刑法规定的刑罚有（）等种类",
    "options" : [ "A:管制", "B:拘役", "C:拘留", "D:逮捕E:死刑" ],
    "answer" : "A,B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1470,
    "type" : "multi",
    "content" : "下列关于道路交通标线的叙述中，正确的是（）",
    "options" : [ "A:道路交通标线可以单独使用", "B:道路交通标线依照功能可以分为警告标线.禁令标线.指示标线和指路标线", "C:道路交通标线的设置方式应采用单柱式", "D:道路交通标线向道路使用者传递有关道路交通的规则.警告.指示等信息" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1471,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，以下关于单线巡逻说法正确的是（）",
    "options" : [ "A:也称定线巡逻", "B:是保安员按照事先确定的环形巡逻路线.单向行进进行的巡逻", "C:看护对象比较固定", "D:一般以组队形式进行E:巡逻中各组队可以相互呼应.相互支援" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1473,
    "type" : "multi",
    "content" : "有权发放《保安员证》的部门有（）",
    "options" : [ "A:直辖市的人民政府公安部门", "B:设区的市级人民政府人力资源与社会保障部门", "C:设区的市级人民政府人事部门", "D:设区的市级人民政府教育部门" ],
    "answer" : "A,E",
    "multiAnswers" : null
  },
  {
    "id" : 1474,
    "type" : "multi",
    "content" : "在某地铁站，有一乘客向保安员举报：某人携带枪支。保安员使用金属探测仪器对其进行检查，未发现可疑物品，通过询问，该人携带了一把塑料玩具手枪，保安员随即放行。保安员在处置中使用的方法有（）",
    "options" : [ "A:直接观察法", "B:仪器探测法", "C:查问法", "D:接受群众举报E:跟踪法" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1475,
    "type" : "multi",
    "content" : "人员密集场所巡逻区域的警戒方法包括（）",
    "options" : [ "A:设置警戒线警戒", "B:设置哨位警戒", "C:设置路障警戒", "D:设置监控设施警戒" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1476,
    "type" : "multi",
    "content" : "在保安押运途中，被押物品包装发生损坏，押运员正确的做法是（）",
    "options" : [ "A:立即查明原因", "B:重新包装好", "C:做好检查记录", "D:及时报告E:不做任何处理" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1477,
    "type" : "multi",
    "content" : "运钞车行进中，实施押运工作时，押运员正确的工作方式是（）",
    "options" : [ "A:保持高度警惕", "B:按正确位置站位.警戒", "C:注意观察情况", "D:设定安全区域" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1478,
    "type" : "multi",
    "content" : "押运途中遇物品中转.改换交通工具时，下列做法正确的是（）",
    "options" : [ "A:押运员立即做好站位.警戒工作", "B:对所押物品形成安全区域", "C:押运员轮流就餐.饮水或处理其他生活事宜", "D:车辆按方案要求办理交接.转换手续，并在现场实施监督" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1479,
    "type" : "multi",
    "content" : "押运任务实施前，押运人员正确的做法是（）",
    "options" : [ "A:熟悉押运方案", "B:与客户商讨服务费的收取", "C:与客户单位研究合同文本", "D:与接收方接洽有关押运的具体事宜" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1480,
    "type" : "multi",
    "content" : "人员密集场所危险因素不确定的原因为（）",
    "options" : [ "A:人.财.物高度集散和人员的异质性", "B:保安员的能力要求高", "C:存在多种安全隐患", "D:保安员数量有一定的要求E:保安员的身体素质要求高" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1481,
    "type" : "multi",
    "content" : "下列属于人员密集场所巡逻任务的是（）",
    "options" : [ "A:疏导人员有序的行进和流动", "B:巡视.检查场所内的安全设施，确保运转正常", "C:进行安全宣传", "D:协助处理紧急情况E:预防制止违法犯罪活动" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1482,
    "type" : "multi",
    "content" : "抢救外伤大出血伤员的关键是（）",
    "options" : [ "A:不作处理，尽快将病人送往医院", "B:判断出血部位和性质", "C:迅速止血", "D:尽快拨打急救电话E:直接使用止血带止血" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1483,
    "type" : "multi",
    "content" : "手部出血时，压迫（）血管可以止血",
    "options" : [ "A:桡动脉", "B:股动脉", "C:尺动脉", "D:颞浅动脉E:肱动脉" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1484,
    "type" : "multi",
    "content" : "以下关于舟巡说法正确的是（）",
    "options" : [ "A:巡逻人员驾驶船.艇等水上交通工具进行的巡逻", "B:适用于江河水面的巡逻", "C:适用于海域水面的巡逻", "D:适用于湖海水面的巡逻E:对驾船技术要求高" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1485,
    "type" : "multi",
    "content" : "下列关于道路交通指示标志的叙述中，正确的是（）",
    "options" : [ "A:形状为圆形和矩形，颜色除个别标志外为蓝底.白图案", "B:多用于城市道路", "C:多用于高等级公路", "D:在村村通公路上比较常见E:一般设置在需要限制或者禁止的地方" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1486,
    "type" : "multi",
    "content" : "道路交通设施中的交通岛分为（）",
    "options" : [ "A:公交港湾", "B:导流岛", "C:安全岛", "D:中心岛E:指挥岛" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1487,
    "type" : "multi",
    "content" : "下列关于道路交通主标志的叙述中，正确的是（）",
    "options" : [ "A:必须和辅助标志配合使用", "B:能够传递特定交通管理信息的标志", "C:可以单独使用", "D:可以表示警告和禁令的理由E:警告标志属于主标志" ],
    "answer" : "B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1488,
    "type" : "multi",
    "content" : "交通标志中单柱式的支撑方式一般适用于中.小型尺寸的（）",
    "options" : [ "A:道路施工安全标志", "B:警告标志", "C:禁令标志", "D:指示标志E:旅游区标志" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1490,
    "type" : "multi",
    "content" : "下列属于保安从业单位的是（）",
    "options" : [ "A:某市保安服务公司", "B:自行招用保安员的某中学", "C:自行招用保安员的某大学保卫处", "D:自行招用保安员的某企业保卫部E:自行招用保安员的某企业" ],
    "answer" : "A,B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1491,
    "type" : "multi",
    "content" : "保安服务的主要任务有（）",
    "options" : [ "A:维护服务区域内的正常秩序", "B:协助保护服务区域内的违法犯罪现场", "C:预防服务区域内的治安灾害事故", "D:预防服务区域内的治安案件" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1492,
    "type" : "multi",
    "content" : "保安服务公司为客户单位提供的保安服务可以是（）等服务",
    "options" : [ "A:武装守护", "B:保安巡逻", "C:保安押运", "D:随身护卫E:搜身检查" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1493,
    "type" : "multi",
    "content" : "以下关于保安员遵守纪律的正确说法是（）",
    "options" : [ "A:既要遵守规章制度，也要遵守工作纪律", "B:既要遵守本单位的规章制度，也要遵守客户单位的规章制度", "C:既要遵守本单位的工作纪律，也要遵守客户单位的工作纪律", "D:只要遵守本单位的规章制度，不必考虑客户单位的规章制度" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1494,
    "type" : "multi",
    "content" : "爱岗敬业是一个保安员做好本职工作的重要前提。提倡爱岗敬业，就是要求保安员（）",
    "options" : [ "A:认识保安服务的社会价值", "B:勇于承担职业责任", "C:提高履行职责的能力", "D:不要转行E:不能玩忽职守" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1495,
    "type" : "multi",
    "content" : "保安员职业道德的主要内容是（）",
    "options" : [ "A:诚实守信", "B:爱岗敬业", "C:团结互助", "D:文明服务E:勤俭节约" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1496,
    "type" : "multi",
    "content" : "保安员在依法享有权利的同时，还须履行相应的（）义务",
    "options" : [ "A:遵守纪律", "B:履行合同", "C:正当防卫", "D:紧急避险E:勘查现场" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1497,
    "type" : "multi",
    "content" : "保安员在出入口履行疏导职责时，正确的做法是（）",
    "options" : [ "A:劝阻逗留在出入口的来访人员离开", "B:在出入口出现交通拥堵时进行疏导", "C:在疏导时发现可疑人立即报告客户单位", "D:遇有火灾或其他紧急情况应配合相关部门完成工作" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1498,
    "type" : "multi",
    "content" : "某天，保安员小张在出入口值勤时正逢上班高峰期，进入服务单位的人员较集中。突然，他发现一个鬼鬼祟祟，形迹可疑的人正随着人流进入。此时小张错误的做法是（）",
    "options" : [ "A:上前抓住可疑人送交客户单位保卫部门", "B:立即向客户单位保卫部门报告可疑人行迹", "C:立即将大门关上，禁止人员出入", "D:上前查验可疑人证件并向客户单位报告" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1499,
    "type" : "multi",
    "content" : "保安员小陈在政府机关门卫值勤，遇一来访者，小陈请其出示有效证件，来访人将身份证交给小陈，小陈查验证件的正确做法是（）",
    "options" : [ "A:查看身份证上的出生日期与来访者年龄是否相符", "B:核对身份证上的照片与本人是否相符", "C:请来访人出示其他有效证件", "D:查验身份证真伪" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1500,
    "type" : "multi",
    "content" : "下面关于团结互助的说法中,正确的是()",
    "options" : [ "A:可以营造和谐的人际关系", "B:与企业的凝聚力无关", "C:要求大家宽容相待", "D:要求大家加强协作" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1501,
    "type" : "multi",
    "content" : "根据《保安服务管理条例》的规定，（）是保安员必须履行的义务",
    "options" : [ "A:遵守法律", "B:遵守纪律", "C:遵守合同", "D:保守秘密E:守护巡逻" ],
    "answer" : "A,B，C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1502,
    "type" : "multi",
    "content" : "保安员在依法享有权利的同时，还须履行相应的（）义务",
    "options" : [ "A:正当防卫", "B:履行合同", "C:保守秘密", "D:紧急避险E:勘查现场" ],
    "answer" : "B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1503,
    "type" : "multi",
    "content" : "保安员在组织火灾应急疏散时，切忌()",
    "options" : [ "A:互相拥挤，乱跑乱窜", "B:因顾及个人财物再入“火口”", "C:在疏散通道里逗留", "D:靠近承重墙E:随意打开房间门" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1504,
    "type" : "multi",
    "content" : "在现场急救中，下面关于胸外心脏按压说法正确的是（）",
    "options" : [ "A:每5个循环更换一个按压者", "B:吹两口气后，立即进行按压", "C:按压频率为100次/分钟", "D:按压深度为4-5厘米" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1506,
    "type" : "multi",
    "content" : "在现场急救中，判断伤员有无意识的方法是（）",
    "options" : [ "A:双手轻拍伤病员肩部", "B:在其耳边大声呼唤", "C:摇晃伤病员身体", "D:拍打脸部的同时，高声呼唤" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1507,
    "type" : "multi",
    "content" : "在安全疏散时，可选择消防电梯作为疏散通道，这是因为消防电梯()",
    "options" : [ "A:载重量大", "B:具有紧急迫降的功能", "C:速度快，可直接在首层停", "D:配有接通火灾控制中心的联系电话E:配有备电，可防止因火灾发生而造成的断电" ],
    "answer" : "B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1508,
    "type" : "multi",
    "content" : "某保安服务公司的保安员小王享有的权利是（）",
    "options" : [ "A:参加社会保险", "B:检查出入车辆", "C:开展巡逻守护", "D:保守勤务秘密" ],
    "answer" : "A,E",
    "multiAnswers" : null
  },
  {
    "id" : 1509,
    "type" : "multi",
    "content" : "在目标部位守护中，下列（）属于目标部位",
    "options" : [ "A:存放珍贵文物部位", "B:流动岗守护的部位", "C:服务单位要求守护的重要部位", "D:重要的供油供热部位" ],
    "answer" : "A,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1510,
    "type" : "multi",
    "content" : "出入口目标识别子系统的主要功能是通过出入凭证所提供的出入人员信息进行识别和校验，下列属于出入口目标识别子系统出入凭证的是（）",
    "options" : [ "A:磁卡", "B:乱序键盘", "C:指纹", "D:虹膜E:体型" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1511,
    "type" : "multi",
    "content" : "下列设备中是视频安防监控系统的终端设备的有（）",
    "options" : [ "A:视频监视器", "B:门禁控制器", "C:变焦镜头", "D:视频矩阵控制主机" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1512,
    "type" : "multi",
    "content" : "下列设备中是视频安防监控系统的前端设备的有（）",
    "options" : [ "A:摄像机", "B:读卡器", "C:震动电缆", "D:硬盘录像机E:镜头" ],
    "answer" : "A,E",
    "multiAnswers" : null
  },
  {
    "id" : 1513,
    "type" : "multi",
    "content" : "下列设备属于视频安防监控系统的有（）",
    "options" : [ "A:球形摄像机", "B:解码器", "C:视频分配器", "D:震动探测器E:微波探测器" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1514,
    "type" : "multi",
    "content" : "某市保安服务公司的保安员小王在（）等情况下，可以单方面解除与该保安服务公司的劳动合同",
    "options" : [ "A:结婚", "B:父母生病", "C:保安服务公司没有按约支付工资", "D:提前30日书面通知保安服务公司E:保安服务公司以暴力手段强迫小王工作" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1515,
    "type" : "multi",
    "content" : "某市保安服务公司因为经营状况发生严重困难，准备单方面裁减保安员，该保安服务公司应当满足（）等条件才能单方面解除劳动合同",
    "options" : [ "A:提前30日向全体保安员说明情况", "B:在裁减具体人员前严格保密", "C:公布裁减保安员的方案", "D:向某市劳动行政部门报告" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1516,
    "type" : "multi",
    "content" : "根据我国有关劳动法律法规的规定，用人单位与劳动者劳动关系一经确定，用人单位应当按照劳动合同的约定为劳动者提供（）等",
    "options" : [ "A:上下班交通工具", "B:通讯工具", "C:食宿条件", "D:劳动安全条件E:劳动报酬" ],
    "answer" : "D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1517,
    "type" : "multi",
    "content" : "根据我国有关劳动法律法规的规定，劳动者在劳动过程中的基本义务是（）等",
    "options" : [ "A:遵守劳动纪律", "B:服从管理", "C:听从指挥", "D:保守工作秘密E:履行劳动合同" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1518,
    "type" : "multi",
    "content" : "下列属于公安机关治安管理的是（）",
    "options" : [ "A:危险物品管理", "B:管制刀具管理", "C:警察内务管理", "D:交通安全管理" ],
    "answer" : "A,B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1519,
    "type" : "multi",
    "content" : "保安员刘某在为客户单位提供保安服务时，下列选项中属于刘某职责范围的是（）",
    "options" : [ "A:在客户单位的出入口对出入人员进行登记", "B:在客户单位内进行巡视检查", "C:在客户单位内查找安全隐患", "D:在客户单位内完善安全防范措施" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1520,
    "type" : "multi",
    "content" : "保安服务具有（）的特点",
    "options" : [ "A:特许性", "B:契约性", "C:防范性", "D:风险性E:有偿性" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1521,
    "type" : "multi",
    "content" : "保安服务具有（）等特点",
    "options" : [ "A:特许性", "B:自助性", "C:防范性", "D:单一性E:有偿性" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1522,
    "type" : "multi",
    "content" : "保安服务公司为客户单位提供的保安服务可以是（）等服务",
    "options" : [ "A:门卫守护", "B:安全检查", "C:保安押运", "D:随身护卫E:人身搜查" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1523,
    "type" : "multi",
    "content" : "保安服务的客户单位可以是（）",
    "options" : [ "A:机关团体", "B:企业单位", "C:事业单位", "D:居民家庭E:公民个人" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1524,
    "type" : "multi",
    "content" : "保安员在提供保安服务时，主要履行（）等职责",
    "options" : [ "A:秩序维护", "B:便民助民", "C:侦查破案", "D:保护人身安全E:保护财产安全" ],
    "answer" : "A,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1525,
    "type" : "multi",
    "content" : "某大学自行招用了120名保安员，保安员可以在该大学（）区域开展安全防范工作",
    "options" : [ "A:学生食堂", "B:图书馆", "C:实验室", "D:家属区停车场E:学生宿舍" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1526,
    "type" : "multi",
    "content" : "保安员对巡逻中发现的案件.事故.事件现场应当立即进行保护。以下做法正确的是（）",
    "options" : [ "A:划定保护区域", "B:保护现场证据", "C:在现场内巡查", "D:抢救伤员" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1527,
    "type" : "multi",
    "content" : "某保安员甲在超市内着便衣巡视时，发现偷盗者并将其扭送到保安值班室内进行询问，同时强行要求偷盗者写检查并交纳赔偿金，最后将偷盗者放行。保安员甲的行为属于违法行为的有（）",
    "options" : [ "A:在超市内着便衣巡视", "B:将偷盗者扭送到保安值班室询问", "C:强行要求偷盗者写检查", "D:将偷盗者放行E:强行要求偷盗者交纳赔偿金" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1528,
    "type" : "multi",
    "content" : "我国刑法对正当防卫作了规定，关于正当防卫，下列说法正确的是（）",
    "options" : [ "A:必须有正当的防卫意图", "B:有不法侵害发生", "C:必须针对第三人或其他物", "D:可以不受加害限度的制约" ],
    "answer" : "A,B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1529,
    "type" : "multi",
    "content" : "马某等四人在一批发市场内游荡时，发现一摊位上的商品不错，于是强行以很低的价位拿走，因摊主追要，马某等人将该摊位掀翻后扬长而去。随后马某等人又到一歌厅内唱歌，买了500元的啤酒，因抢风头，又与人大打出手，并起哄闹事，导致歌厅秩序大乱。马某等人的行为属于寻衅滋事的是（）",
    "options" : [ "A:在批发市场内游荡", "B:强行以低价拿走商品", "C:将摊位掀翻在地", "D:在歌厅内起哄闹事E:买了500元啤酒" ],
    "answer" : "B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1530,
    "type" : "multi",
    "content" : "（）引起的火灾不能使用干粉扑救",
    "options" : [ "A:钾.钠.镁.钛等活泼金属", "B:金属氢化物", "C:金属氧化物", "D:天然气储罐E:电源电线" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1531,
    "type" : "multi",
    "content" : "高楼发生火灾时，逃生自救的一般做法是()",
    "options" : [ "A:用湿毛巾.口罩捂住口鼻", "B:遇有浓烟时，应匍匐前进", "C:乘坐普通电梯快速撤离", "D:沿不易倒塌的承重墙逃生" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1532,
    "type" : "multi",
    "content" : "影响目标部位安全的因素有（）",
    "options" : [ "A:物", "B:人", "C:高压变电站", "D:技术E:自然" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1533,
    "type" : "multi",
    "content" : "保安员在值勤中发现可疑情况时，常用（）向服务单位或有关单位报告",
    "options" : [ "A:移动电话", "B:可视电话", "C:对讲机", "D:固定电话E:楼宇对讲" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1534,
    "type" : "multi",
    "content" : "保安员在履行登记职责时，错误的做法有（）",
    "options" : [ "A:单独对登记人进行搜身", "B:处理可疑人员和物品", "C:登记时与对方保持安全距离", "D:注意自身防护E:发现可疑人及时报告" ],
    "answer" : "A,B",
    "multiAnswers" : null
  },
  {
    "id" : 1535,
    "type" : "multi",
    "content" : "在出入口守卫勤务实施中，保安员按照规定应做好的工作有（）",
    "options" : [ "A:处理纠纷", "B:验证", "C:登记", "D:报告E:交接班" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1536,
    "type" : "multi",
    "content" : "在出入口守卫中，专用设施控制岗是对（）进行控制的岗位",
    "options" : [ "A:内部管理设备", "B:出入口专用设施设备", "C:楼宇对讲系统", "D:电子系统E:特殊设施设备" ],
    "answer" : "B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1537,
    "type" : "multi",
    "content" : "出入口守卫的特点有（）",
    "options" : [ "A:接触对象复杂", "B:位置独立", "C:岗位固定", "D:工作连续E:工作人员较多" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1538,
    "type" : "multi",
    "content" : "保安员在出入口值勤时查验的证件有（）",
    "options" : [ "A:工作证", "B:出入证", "C:团员证", "D:货物出入单E:医疗证" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1539,
    "type" : "multi",
    "content" : "我国的社会保险主要包括（）保险等种类",
    "options" : [ "A:养老", "B:救济", "C:就业", "D:失业E:生活" ],
    "answer" : "A,D",
    "multiAnswers" : null
  },
  {
    "id" : 1540,
    "type" : "multi",
    "content" : "干粉灭火器使用的注意事项有（）",
    "options" : [ "A:要对有关人员进行适当的培训，确保火灾时在场人员能够正确使用所配置的灭火器", "B:对准火焰根部，用力压下开启压把并紧压不松开，由近而远左右扫射，直至将火焰全部扑灭", "C:操作时需要保持直立，以确保灭火剂完全喷出，要避免横置或倒立，以防驱动气体泄漏", "D:灭液体火灾时，注意不能直接对着液面喷射，防止燃烧液体飞溅，造成火势蔓延扩大，增加扑救难度" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1541,
    "type" : "multi",
    "content" : "在保安巡逻勤务中，供水设施异常主要是指（）",
    "options" : [ "A:室内输水管道堵塞", "B:公共区域的自来水管道漏水", "C:住户室内的水流到公共区域中", "D:地下输水管线漏水造成地面塌陷" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1542,
    "type" : "multi",
    "content" : "我国的社会保险主要包括（）保险等种类",
    "options" : [ "A:养老", "B:工伤", "C:医疗", "D:失业E:生育" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1543,
    "type" : "multi",
    "content" : "拨打“119”电话报警，需要向接警中心说明的情况有（）",
    "options" : [ "A:失火单位的名称和地址", "B:什么东西着火.火势大小", "C:着火范围", "D:是否有人员被困E:告知对方自己的电话号码和姓名" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1544,
    "type" : "multi",
    "content" : "如果高层建筑疏散通道被大火阻断，则可以按照以下方式引导人员逃生（）",
    "options" : [ "A:多层建筑可利用房屋的阳台.落水管或竹竿等逃生", "B:疏散到相对安全的房间，关闭好门窗，堵死缝隙，防止烟气进入", "C:确实无路可逃时，可利用身边的绳子或将床单.被罩等撕成条状连接起来，系牢后顺沿滑下逃生", "D:楼层不高.必须跳楼逃生时，可用棉被.床单保护好头部.胸部等重点部位，并先抛下一些物品，以增加缓冲，然后用手扶住窗台往下滑，并保证双脚首先落地" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1545,
    "type" : "multi",
    "content" : "建筑物内火灾发生时，保安员在组织引导楼上人员逃生时，应当提示人们（）",
    "options" : [ "A:用湿毛巾或衣物捂住口鼻", "B:以弯腰或匍匐的行进姿势，撤到安全地点寻机逃生", "C:如果通道被大火阻断，可选择跳楼逃生", "D:可利用房屋的阳台.落水管或竹竿等逃生" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1546,
    "type" : "multi",
    "content" : "高层建筑物火灾发生时，正确的组织疏散逃生方法包括（）",
    "options" : [ "A:按照最短.最安全的逃生路线", "B:按照“疏散走道--疏散楼梯--安全出口&”这一路线逃生", "C:避难层.避难间可作为相对安全的逃生区域", "D:组织着火层的下一层人员向楼顶疏散" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1547,
    "type" : "multi",
    "content" : "保安员甲与某市保安服务公司签订了2年期限的劳动合同，在合同期满前，如果保安员甲与该保安服务公司要解除合同，根据我国有关劳动法律法规的规定，甲可以通过（）解除这一劳动合同",
    "options" : [ "A:第三人替代", "B:随时离开", "C:提前30日向某市保安服务公司提出", "D:与某市保安服务公司协商" ],
    "answer" : "C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1548,
    "type" : "multi",
    "content" : "下列属于保安员职责任务的是（）",
    "options" : [ "A:维护客户单位及服务区域的正常秩序", "B:开展守护.巡逻活动", "C:设置临时隔离区", "D:制止违法犯罪行为E:查验出入人员的证件" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1549,
    "type" : "multi",
    "content" : "根据我国有关劳动法律法规的规定，劳动者在劳动过程中享有（）等多项权利",
    "options" : [ "A:劳动保护权", "B:劳动报酬权", "C:休息休假权", "D:社会保险权E:接受技能培训权" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1550,
    "type" : "multi",
    "content" : "实施现场保护的保安员应向到达现场的民警报告的主要情况有（）",
    "options" : [ "A:案件发生的时间", "B:保护现场的时间", "C:勘察现场痕迹.物证的情况", "D:堵截犯罪嫌疑人的实施情况E:被害人的情况" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1551,
    "type" : "multi",
    "content" : "保安员在巡逻区域发现液化石油气味后，正确的做法是（）",
    "options" : [ "A:及时报告", "B:仔细检查.寻找异常气味来源", "C:破窗入户寻找气味来源", "D:关闭漏气阀门E:在现场及时用手机拨打报警电话" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1552,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，下列行为属于扰乱公共秩序的是（）",
    "options" : [ "A:甲到某中学吵闹致使班级无法正常上课", "B:乙因某行政机关一工作人员欠款不还而到该机关吵闹", "C:丙在自己家中大吵大闹影响邻居休息", "D:丁在某歌厅娱乐时高声吼叫" ],
    "answer" : "A,B,E",
    "multiAnswers" : null
  },
  {
    "id" : 1553,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，公安机关对违法行为人（）可以适用没收措施",
    "options" : [ "A:用于赌博的赌资", "B:携带的管制刀具", "C:携带的银行工资卡", "D:赌博赢得的现金E:携带的淫秽物品" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1554,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，下列（）属于公安机关在治安管理中可以采取的其他法律措施",
    "options" : [ "A:依法拘役", "B:责令停止活动", "C:强行带离现场", "D:驱逐出境E:收缴违法工具" ],
    "answer" : "B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1555,
    "type" : "multi",
    "content" : "根据《治安管理处罚法》的规定，下列（）属于公安机关在治安管理中可以采取的其他法律措施",
    "options" : [ "A:扣押物品", "B:责令停止活动", "C:强行带离现场", "D:依法取缔E:收缴违法工具" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1556,
    "type" : "multi",
    "content" : "保安员在保护区域开展安全检查的意义体现在（）",
    "options" : [ "A:是区域保安服务工作的基本任务", "B:是消除各种安全隐患的有效措施", "C:是预防违法犯罪的有效措施", "D:是确保客户单位或服务区域内人身财产安全的有效措施" ],
    "answer" : "A,B,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1557,
    "type" : "multi",
    "content" : "某县级公安机关查破了一批治安案件，根据《治安管理处罚法》的规定，可以以自己的名义独立作出治安罚款决定的治安行政执法主体有该县（）",
    "options" : [ "A:公安局", "B:公安局所属派出所民警", "C:公安局所属派出所", "D:公安局交通警察大队民警E:公安局治安大队民警" ],
    "answer" : "A,C",
    "multiAnswers" : null
  },
  {
    "id" : 1558,
    "type" : "multi",
    "content" : "某县级公安机关查破了一批治安案件，根据《治安管理处罚法》的规定，可以以自己的名义独立作出治安罚款决定的治安行政执法主体有该县（）",
    "options" : [ "A:公安局", "B:公安局所属派出所", "C:公安局交通警察大队", "D:公安局治安大队E:公安局法制室" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1559,
    "type" : "multi",
    "content" : "机动车在道路上临时停放时，应当注意的事项有（）",
    "options" : [ "A:不得妨碍其他车辆和行人通行", "B:应当紧靠道路右侧", "C:雨.雪天临时停车可以不开启示廓灯.尾灯", "D:车辆停稳前可以先打开车门" ],
    "answer" : "A,B,D",
    "multiAnswers" : null
  },
  {
    "id" : 1560,
    "type" : "multi",
    "content" : "给伤员止血前，救护员应当（）",
    "options" : [ "A:观察环境，保证安全", "B:表明自己的身份", "C:做好自我防护", "D:寻找铁丝或细绳E:寻找伤员家属" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1561,
    "type" : "multi",
    "content" : "保安员小李在某大学机动车出入口值勤时，学生小张步行要进入校区，小李上前进行劝阻，正确的做法是（）",
    "options" : [ "A:用礼貌用语劝阻他通行", "B:大声喊：“站住，你不能从这里过！”", "C:向小张说明此出入口只能通过机动车", "D:强行阻止小张进入" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1562,
    "type" : "multi",
    "content" : "在出入口守卫中，属于专用设施控制岗位的有（）",
    "options" : [ "A:消防监控岗", "B:巡逻服务岗", "C:报警监控岗", "D:专业守护岗E:出入口控制系统操作岗" ],
    "answer" : "A,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1563,
    "type" : "multi",
    "content" : "在出入口守卫中，保安员在观察时应具备的能力有（）",
    "options" : [ "A:敏锐的观察力", "B:处理纠纷的能力", "C:准确的判断力", "D:快速的反应力E:处理紧急情况的能力" ],
    "answer" : "A,C,D",
    "multiAnswers" : null
  },
  {
    "id" : 1564,
    "type" : "multi",
    "content" : "保安员在登记时，应注意的事项有（）",
    "options" : [ "A:详细询问来访者个人情况", "B:登记时要与对方保持安全距离", "C:质押来访人员证件", "D:注意自身防护E:发现可疑人要及时报告" ],
    "answer" : "B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1565,
    "type" : "multi",
    "content" : "下列属于出入口守卫方案的内容是（）",
    "options" : [ "A:出入口守卫任务", "B:上岗保安员人数", "C:具体岗位要求", "D:客户单位人员情况E:应急措施" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  },
  {
    "id" : 1566,
    "type" : "multi",
    "content" : "保安员在出入口值勤时，主要完成的职责任务是（）",
    "options" : [ "A:查验证件", "B:来访登记", "C:帮助他人", "D:疏导人员与车辆E:维护秩序" ],
    "answer" : "A,B,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1567,
    "type" : "multi",
    "content" : "保安员在守护时发现目标区域存在安全隐患，正确的做法是（）",
    "options" : [ "A:向客户单位报告", "B:及时采取有效措施", "C:消除隐患", "D:向保安公司管理部门报告E:保护现场" ],
    "answer" : "A,B,C",
    "multiAnswers" : null
  },
  {
    "id" : 1568,
    "type" : "multi",
    "content" : "保安员在交接班时应完成（）",
    "options" : [ "A:交班人员要认真做好记录", "B:记录当班时岗位情况并签字", "C:交代接班人员应继续关注的问题", "D:将携带的防护器材交给接班人员" ],
    "answer" : "A,B,C,D,E",
    "multiAnswers" : null
  },
  {
    "id" : 1569,
    "type" : "multi",
    "content" : "根据道路交通管理法规的规定，行人在道路上禁止（）",
    "options" : [ "A:使用滑板.旱冰鞋等滑行工具", "B:不得倚坐道路隔离设施", "C:追车", "D:快速行走E:在车行道内嬉闹" ],
    "answer" : "A,B,C,E",
    "multiAnswers" : null
  } ],
  "judgeQuestions" : [ {
    "id" : 1570,
    "type" : "judge",
    "content" : "消防安全重点部位没有必要日夜看守。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1571,
    "type" : "judge",
    "content" : "存在重大火灾隐患的单位，一定有违反消防法律法规行为。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1572,
    "type" : "judge",
    "content" : "安装电路时，若没有保险丝，可以用钢.铁丝暂时代替。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1573,
    "type" : "judge",
    "content" : "机动车行经弯道时，可以迅速超车。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1574,
    "type" : "judge",
    "content" : "在交通信号灯控制的交叉路口，相对方向行驶的左转弯机动车让右转弯机动车先行。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1576,
    "type" : "judge",
    "content" : "夜晚进入煤气泄漏的房间救护煤气中毒患者时，首先应开灯查看环境是否安全。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1577,
    "type" : "judge",
    "content" : "对严重的煤气中毒患者，应及早送医院做高压氧仓治疗。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1578,
    "type" : "judge",
    "content" : "保安员在出入口岗位执行勤务时，遇一来访人员称自己有出入证，但出入证丢在朋友那里了。此时，保安员可以放行。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1580,
    "type" : "judge",
    "content" : "出入口守卫是客户服务区域安全的最后一道防线。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1582,
    "type" : "judge",
    "content" : "出入口是指单位一定区域内人员.车辆.物资等进出的通道口。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1583,
    "type" : "judge",
    "content" : "劳动者违反劳动合同离职的，应向用人单位支付违约金，用人单位要求劳动者支付的违约金不得超过服务期尚未履行部分所应分摊的培训费用。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1584,
    "type" : "judge",
    "content" : "现年56岁的刘某在某保安服务公司连续工作17年，现该保安服务公司因经营需要裁减人员，于是严格按照有关法律法规的程序解雇了包括刘某在内的一批保安员。该保安服务公司解雇刘某的行为是合法的。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1585,
    "type" : "judge",
    "content" : "保安员肖某在服务区域巡逻中，发现有人正在实施盗窃。肖某立即报警，同时将盗窃者抓获并送交给人民警察。肖某的这种行为不违法。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1586,
    "type" : "judge",
    "content" : "张三因琐事与李四发生纠纷，并将李四打成重伤，张三的行为不属于严重违法行为。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1587,
    "type" : "judge",
    "content" : "根据我国劳动法及保安服务管理条例等的规定，保安员有完成保安服务任务的义务。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1592,
    "type" : "judge",
    "content" : "在出入口值勤的保安员在上岗前要熟悉出入口守卫方案的内容，掌握出入口区域内安全防范措施及安全设施的使用方法。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1593,
    "type" : "judge",
    "content" : "在来访人员登记中，一般由来访人员自己登记，保安员要对照来访人员证件核对登记内容。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1594,
    "type" : "judge",
    "content" : "保安员在查验证件时，应与对方保持一定的安全距离。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1595,
    "type" : "judge",
    "content" : "出入口守卫中，观察的工作方法是指保安员在守卫工作中，注意查看进出人员的身份.行为.表情.陈述和携带物品等情况。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1597,
    "type" : "judge",
    "content" : "逐个验证是保安员逐个查验从出入口通行的所有人员.车辆及物资的证件和凭证的行为。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1601,
    "type" : "judge",
    "content" : "法是调整人们的行为或社会关系的规范。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1602,
    "type" : "judge",
    "content" : "保护用人单位的合法权益是我国劳动法的立法目的所在。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1605,
    "type" : "judge",
    "content" : "保安员学习消防基本常识和技能应做到“四懂四会”，所谓四懂即是：懂组织消防力量，懂预防火灾措施，懂火灾扑救方法，懂防火巡查方法。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1607,
    "type" : "judge",
    "content" : "保安押运的对象主要是来源合法，可以移动的财物。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1610,
    "type" : "judge",
    "content" : "不可以用可燃物遮挡灯具或做灯罩。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1611,
    "type" : "judge",
    "content" : "保安巡逻的目的之一是保障一定区域内的人身安全。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1613,
    "type" : "judge",
    "content" : "保安巡逻的目的之一是为了预防发生在特定区域.地段或针对特定目标的违法犯罪行为。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1618,
    "type" : "judge",
    "content" : "保安巡逻是指保安员对特定区域实施检查.警戒的服务形式。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1619,
    "type" : "judge",
    "content" : "保安巡逻是指保安员对特定的目标进行巡视.检查的服务形式。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1620,
    "type" : "judge",
    "content" : "保安巡逻是指保安员在特定的地段进行巡视.检查的服务形式。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1621,
    "type" : "judge",
    "content" : "保安巡逻是指保安员对特定的区域进行巡视.检查的服务形式。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1622,
    "type" : "judge",
    "content" : "保安员只要在工作中诚实守信.爱岗敬业.团结互助.文明服务，就能够取得个人进步.事业成功。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1624,
    "type" : "judge",
    "content" : "心肺复苏三个步骤中的第一步是胸外心脏按压。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1626,
    "type" : "judge",
    "content" : "一般情况下，在做心肺复苏时，最好做五个循环后更换一个按压者，可提高心肺复苏成功率。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1627,
    "type" : "judge",
    "content" : "干粉灭火器所充装的灭火剂是一种干燥.易于流动的微细固体粉末。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1628,
    "type" : "judge",
    "content" : "二氧化碳灭火器分为手提式和推车式两大类。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1629,
    "type" : "judge",
    "content" : "使用泡沫灭火器时，灭火器的筒盖和底部不能朝向人，以防止因筒盖.底部爆破造成伤亡事故。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1631,
    "type" : "judge",
    "content" : "运钞车临时停驶时，押运员不下车，时刻观察周围情况。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1632,
    "type" : "judge",
    "content" : "押运中，押运人员应坐在车内指定位置，注意观察途中情况的变化。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1633,
    "type" : "judge",
    "content" : "区域巡逻是“主动防护”，要求保安员不停地巡视.检查和警戒，时刻注意观察发现可疑人.可疑物.可疑事。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1636,
    "type" : "judge",
    "content" : "保安巡逻一般分为区域巡逻和人员密集场所巡逻。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1637,
    "type" : "judge",
    "content" : "保安巡逻的目的之一是保障一定区域内的财产安全。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1638,
    "type" : "judge",
    "content" : "保安押运通讯联络方案是保安押运方案的组成部分。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1640,
    "type" : "judge",
    "content" : "保安押运的程序分为任务实施前的准备和押运勤务实施两部分。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1641,
    "type" : "judge",
    "content" : "保安押运的目的是确保押运对象安全抵达目的地。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1642,
    "type" : "judge",
    "content" : "押运途中发生物品丢失，应立即报警。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1643,
    "type" : "judge",
    "content" : "保安押运途中遇被押物品中转，需改换交通工具时，押运人员可根据需要就餐.饮水或处理其他生活事宜。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1646,
    "type" : "judge",
    "content" : "隐私是指单位内部涉及个人且不能公开的信息资料。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1647,
    "type" : "judge",
    "content" : "保安员无权调解任何民间纠纷",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1649,
    "type" : "judge",
    "content" : "在提供保安服务中，无论是保安从业单位或保安员自作主张，还是受客户单位指使，殴打他人都是严格禁止的。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1650,
    "type" : "judge",
    "content" : "在保安服务活动中，客户单位内部职工携带物品外出且拒绝接受登记的，保安员应报告单位领导。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1651,
    "type" : "judge",
    "content" : "公共场所是指街道.公路.广场等露天场所。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1654,
    "type" : "judge",
    "content" : "机动车是道路交通参与者中的强者，能否遵守道路通行法规，直接关系到道路交通的安全.有序和畅通。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1655,
    "type" : "judge",
    "content" : "在交通信号灯控制的交叉路口，机动车应当在划有导向车道的路口按所需行进方向驶入导向车道。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1656,
    "type" : "judge",
    "content" : "载运易燃易爆化学物品的机动车，在必要时，应配备专门车辆.人员沿途押运，随时监控危险物品的运输情况。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1657,
    "type" : "judge",
    "content" : "使用的电线.开关如有变形.有焦糊味，要立即通知调换。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1658,
    "type" : "judge",
    "content" : "防护区是指不允许公众出入的.防护目标所在的区域或部位。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1659,
    "type" : "judge",
    "content" : "安全防护水平是指风险等级被防护级别所覆盖的程度。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1660,
    "type" : "judge",
    "content" : "从一定意义上说，现代社会是法治社会。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1661,
    "type" : "judge",
    "content" : "电子围栏是入侵报警系统的前端设备。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1662,
    "type" : "judge",
    "content" : "紧急按钮不是入侵报警系统的前端设备。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1663,
    "type" : "judge",
    "content" : "保安员专业技能是指保安员在履行职责时应具备的能力。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1665,
    "type" : "judge",
    "content" : "保安员专业技能是指保安员在完成安全技术防范与安全风险评估的服务活动中应具备的技术。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1666,
    "type" : "judge",
    "content" : "保安员专业技能是指保安员在安全技术防范中应具备的技术。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1669,
    "type" : "judge",
    "content" : "在保安服务中，监控设备与系统在使用过程中形成的监控影像资料，属于单位内部资料，除了公安.工商行政管理等行政机关可以查阅之外，任何其他单位.个人都不得查看。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1670,
    "type" : "judge",
    "content" : "根据我国《娱乐场所管理条例》的规定，娱乐场所的从业人员应当统一着工作服，佩戴工作标志并携带身份证明。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1671,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所及其从业人员不得为进入娱乐场所的人员从事邪教.迷信活动提供条件。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1672,
    "type" : "judge",
    "content" : "《娱乐场所管理条例》是我国政府对娱乐场所日常经营及安全状况进行监管的一部行政法规。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1674,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，所有娱乐场所必须配备安全检查设备，对进入娱乐场所的所有人员进行安全检查。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1675,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所必须聘用保安服务公司的保安员从事保安工作。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1676,
    "type" : "judge",
    "content" : "某客户单位领导让保安员小李去追索债务，小李因拒绝领导的要求而被辞退，该单位领导的做法侵犯了小李的劳动权。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1677,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所及其从业人员不得为进入娱乐场所的人员提供淫秽物品。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1679,
    "type" : "judge",
    "content" : "根据《保安服务管理条例》规定，享受社会保险既是保安员的权利，也是保安员的义务。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1681,
    "type" : "judge",
    "content" : "火灾报警与联动系统的电源应采用蓄电池。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1683,
    "type" : "judge",
    "content" : "风险等级是指为保障防护对象安全所采取的防范措施的水平。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1685,
    "type" : "judge",
    "content" : "安全管理系统也叫综合报警安全管理系统，它只能提供报警信息服务，不能利用网络的信息资源提供其他综合服务。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1686,
    "type" : "judge",
    "content" : "安全管理系统也叫综合报警安全管理系统，它除提供报警信息服务外，还可以利用网络的信息资源提供其他综合服务。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1687,
    "type" : "judge",
    "content" : "车辆探测器.挡车器是出入口控制系统的主要设备。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1688,
    "type" : "judge",
    "content" : "普通数码式对讲系统是视频监控系统的子系统。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1689,
    "type" : "judge",
    "content" : "可视对讲系统是视频监控系统的子系统。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1691,
    "type" : "judge",
    "content" : "癫痫发作时，可用手指掐病人的人中。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1692,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所及其从业人员不得容留.介绍他人卖淫嫖娼。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1693,
    "type" : "judge",
    "content" : "根据我国《娱乐场所管理条例》的规定，娱乐场所应当在营业场所的大厅.包厢等处悬挂警示标志并注明公安部门.文化部门的举报电话。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1694,
    "type" : "judge",
    "content" : "根据我国《娱乐场所管理条例》的规定，娱乐场所应当制定安全工作方案和应急疏散预案。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1695,
    "type" : "judge",
    "content" : "我国法律对搜查有严格的程序要求和限制。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1696,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所及其从业人员不得为进入娱乐场所的人员提供毒品。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1698,
    "type" : "judge",
    "content" : "在保安服务活动中，保安员不能采取紧急避险。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1699,
    "type" : "judge",
    "content" : "保安员在制止不法侵害时，可以行使正当防卫的权利。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1701,
    "type" : "judge",
    "content" : "根据《保安服务管理条例》规定，享受劳动条件和劳动保护既是保安员的权利，也是保安员的义务。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1702,
    "type" : "judge",
    "content" : "根据《保安服务管理条例》规定，签订劳动合同不是保安员的权利，而是保安员的义务。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1703,
    "type" : "judge",
    "content" : "根据《保安服务管理条例》规定，签订劳动合同是保安员的权利，不是保安员的义务。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1705,
    "type" : "judge",
    "content" : "限制他人自由的行政机关主要有公安机关.人民法院.人民检察院和纪律检查委员会。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1706,
    "type" : "judge",
    "content" : "保安员王某在值勤中与犯罪嫌疑人搏斗光荣负伤，当地政府对其进行表彰，并颁发了抚恤金。这是保安员享受社会保险权利的体现。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1707,
    "type" : "judge",
    "content" : "某客户单位领导让保安员小李去追索债务，小李因拒绝领导的要求而被辞退，该单位领导的做法是正确的。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1708,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所从业人员可以为进入娱乐场所的人员提供赌博用具。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1710,
    "type" : "judge",
    "content" : "对于中暑较轻者，可以给他喝淡盐水。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1711,
    "type" : "judge",
    "content" : "煤气中毒的患者不能移动，应就地实施心肺复苏。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1712,
    "type" : "judge",
    "content" : "加强对保安员的管理.教育和培训，目的在于提高保安员的职业道德水平.业务素质和责任意识，提高保安员的服务质量与水平。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1713,
    "type" : "judge",
    "content" : "保安从业单位应当建立健全的管理制度，并严格执行。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1714,
    "type" : "judge",
    "content" : "从事武装守护押运服务的保安员的枪支使用培训应当由人民警察院校或人民警察培训机构负责。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1715,
    "type" : "judge",
    "content" : "职业培训机构可以申请从事保安培训业务。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1716,
    "type" : "judge",
    "content" : "申请从事保安培训的单位，应当取得省级人民政府公安机关颁发的保安培训许可证或进行备案。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1717,
    "type" : "judge",
    "content" : "控制和打击发生在特定区域.地段或针对特定目标的违法犯罪行为是保安巡逻的目的之一。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1718,
    "type" : "judge",
    "content" : "保安巡逻的目的之一是为了预防.遏制和震慑针对特定区域.地段和目标的违法犯罪行为。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1719,
    "type" : "judge",
    "content" : "保安巡逻是指保安员对特定目标进行检查.警戒的服务形式。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1720,
    "type" : "judge",
    "content" : "保安巡逻是指保安员在特定岗位进行检查.警戒的服务形式。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1721,
    "type" : "judge",
    "content" : "对于进出服务区域的外来人员，保安员要细心观察其所携带的包裹或物品，若发现可疑包裹或物品一定要进行治安检查。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1722,
    "type" : "judge",
    "content" : "根据《保安服务管理条例》规定，在保安从业过程中，签订劳动合同是保安员的权利。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1723,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所应当建立巡查制度，发现娱乐场所内有违法犯罪活动的，应当立即报告有关部门。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1725,
    "type" : "judge",
    "content" : "在用人单位因为提供专项技术培训费用与劳动者约定的服务期满前，劳动者不得要求解除劳动合同。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1727,
    "type" : "judge",
    "content" : "我国劳动法规定，劳动者依法享受平等就业和自主择业的权利。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1728,
    "type" : "judge",
    "content" : "用人单位因为提供专项技术培训费用与劳动者约定的服务期满前，劳动者要求解除劳动合同的，应当向用人单位支付违约金。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1729,
    "type" : "judge",
    "content" : "我国劳动法规定，劳动者在用人单位连续工作满15年，且距法定退休年龄不足5年的，用人单位不得解除劳动合同。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1730,
    "type" : "judge",
    "content" : "根据我国劳动法的规定，劳动者在劳动过程中有遵守劳动纪律和职业道德的义务。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1731,
    "type" : "judge",
    "content" : "我国劳动法规定，用人单位招用人员可以根据劳动者性别不同而设置不同的录用标准。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1733,
    "type" : "judge",
    "content" : "依法设立的保安服务公司可以申请从事保安培训业务。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1734,
    "type" : "judge",
    "content" : "受理设立保安服务公司申请的公安机关应当自收到申请材料之日起15日内将审核意见报所在地省级人民政府公安机关。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1735,
    "type" : "judge",
    "content" : "工商管理部门负责对保安服务活动进行业务监督管理。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1736,
    "type" : "judge",
    "content" : "运钞车通过桥梁时应快速通过。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1738,
    "type" : "judge",
    "content" : "保安员在巡逻时发现有可疑物品，应当立即拆开查看。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1739,
    "type" : "judge",
    "content" : "设置警戒线警戒是指对人员密集场所中的警戒对象采取设置路障的阻隔方式，防止无关人员.车辆进入及穿行。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1740,
    "type" : "judge",
    "content" : "押运任务实施前，必须制定详尽的押运方案。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1742,
    "type" : "judge",
    "content" : "在道路交通活动中，除禁止停车标志外，禁令标志均应成对设置在限制或者禁止路段的起始点和终点及桥梁的两端。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1744,
    "type" : "judge",
    "content" : "在现场急救中，进行胸外按压时，为了防止并发症，保证按压效果，按压部位一定要准确。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1745,
    "type" : "judge",
    "content" : "在扑救油类等易燃液体火灾时，不要直接冲击液体表面，以防止液体溅出伤人或导致火势蔓延。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1746,
    "type" : "judge",
    "content" : "在使用有喷射软管的贮压式灭火器时，一手应始终压下压把，不能放开，否则会中断喷射。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1747,
    "type" : "judge",
    "content" : "防火巡查是预防和减少火灾发生的唯一途径。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1748,
    "type" : "judge",
    "content" : "保安员在进行防火巡查时，应该做好巡查记录。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1749,
    "type" : "judge",
    "content" : "防火巡查时需要检查用火.用电有无违章情况。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1750,
    "type" : "judge",
    "content" : "预防和减少火灾发生的唯一途径，就是及时发现和消除火灾隐患，把火灾消灭在萌芽状态。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1751,
    "type" : "judge",
    "content" : "保安巡逻的目的之一是保障一定区域内的有关目标安全。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1753,
    "type" : "judge",
    "content" : "运钞车临时停驶时，应停到正规的停车场。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1757,
    "type" : "judge",
    "content" : "押运中，指挥员可随时通过GPS监测运钞车的位置和状态。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1758,
    "type" : "judge",
    "content" : "押运中突然发生火灾，立即启动执勤方案。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1759,
    "type" : "judge",
    "content" : "设置路障警戒是指对人员密集场所中的警戒对象，采取设置警戒线等方式进行封闭式隔离，防止无关人员接近保护目标和随意出入保护区域。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1760,
    "type" : "judge",
    "content" : "押运中发现可疑人员时，应立即抓获并扭送公安机关。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1761,
    "type" : "judge",
    "content" : "押运工作中不要求押运员全部熟悉押运方案。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1762,
    "type" : "judge",
    "content" : "勘查工作具体由保安公司负责业务的部门组织开展。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1763,
    "type" : "judge",
    "content" : "隔离区是指通过拉警戒线.设隔离带.保安员站位等方式将服务对象与周围隔离而形成的一个相对安全的区域。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1766,
    "type" : "judge",
    "content" : "中暑的患者会出汗.恶心.呕吐，严重者可出现昏迷。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1767,
    "type" : "judge",
    "content" : "在救助晕厥的病人时，要解开衣领.腰带，保持其呼吸道畅通。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1769,
    "type" : "judge",
    "content" : "晕厥的特点是突然发生，数秒后或调整姿势后可自行恢复。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1770,
    "type" : "judge",
    "content" : "脑血栓病人多数无头痛.呕吐症状，但有偏瘫。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1771,
    "type" : "judge",
    "content" : "脑出血的病人没必要吸氧。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1773,
    "type" : "judge",
    "content" : "对心脏病引起呼吸.心跳停止的病人，可以不做心肺复苏。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1774,
    "type" : "judge",
    "content" : "急性心肌梗塞病人发病时会感到心前区.胸骨后压榨样疼痛，大汗淋漓.恶心.呕吐.面色苍白。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1775,
    "type" : "judge",
    "content" : "发现溺水者，应拨打电话122求助。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1778,
    "type" : "judge",
    "content" : "在潮湿的地方救护触电者，穿戴绝缘防护物非常重要。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1779,
    "type" : "judge",
    "content" : "发现有人触电，应立即切断电源，电源不明时应挑开电线。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1781,
    "type" : "judge",
    "content" : "在保安服务活动中，保安员为履行职责应具备的技术与能力称为保安员专业技能。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1784,
    "type" : "judge",
    "content" : "保安员专业技能是指保安员为完成任务应掌握的专业技术。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1785,
    "type" : "judge",
    "content" : "保安员专业技能具体表现在保安员从事守护.巡逻.押运.安全技术防范.随身护卫.安全风险评估.秩序维护等保安服务活动中应具备的技术与能力。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1788,
    "type" : "judge",
    "content" : "保安服务公司设立分公司应当向分公司所在地设区的市级人民政府公安机关备案。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1789,
    "type" : "judge",
    "content" : "省级人民政府公安机关应当自收到设立保安服务公司申请的审核意见之日起15日内核发保安服务许可证。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1790,
    "type" : "judge",
    "content" : "受理设立保安服务公司申请的公安机关应当自收到申请材料之日起15日内对申请事项给予书面答复。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1791,
    "type" : "judge",
    "content" : "我国对保安服务活动进行业务监督管理的部门是公安机关。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1792,
    "type" : "judge",
    "content" : "保安服务业是关系个体安全的特殊行业。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1794,
    "type" : "judge",
    "content" : "保安员肖某在服务区域巡逻中捡拾到一个钱包，内有现金人民币2000元，因找不到失主而据为己有。肖某的这种行为不违法。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1795,
    "type" : "judge",
    "content" : "一般违法行为要承担行政责任并且可能承担民事赔偿责任。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1796,
    "type" : "judge",
    "content" : "《保安服务管理条例》和《物业管理条例》不是法律。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1797,
    "type" : "judge",
    "content" : "物业管理公司可以向物业管理区域以外的单位派驻保安员。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1798,
    "type" : "judge",
    "content" : "保安员可以通过隔离.扭送的方式制止违法犯罪。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1801,
    "type" : "judge",
    "content" : "殴打.侮辱侵犯的是他人的人格尊严和名誉权。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1803,
    "type" : "judge",
    "content" : "区域巡逻是指保安员按照保安公司的要求，对特定区域.地段和目标进行的巡视.检查.警戒活动。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1804,
    "type" : "judge",
    "content" : "预防和减少火灾发生的一个重要途径，就是及时发现和消除火灾隐患，把火灾消灭在萌芽状态。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1806,
    "type" : "judge",
    "content" : "公安机关对于不符合设立保安服务公司条件的申请，应当书面通知申请人并说明理由。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1807,
    "type" : "judge",
    "content" : "从事保安培训业务的专业师资人员必须具有大学本科以上学历。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1808,
    "type" : "judge",
    "content" : "枪支弹药可以存放在一个牢固的保险柜内。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1809,
    "type" : "judge",
    "content" : "保安押运公司要根据有关法律法规，制定本单位枪支管理制度。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1811,
    "type" : "judge",
    "content" : "设立保安服务公司可以通过网络或电话方式提出申请。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1812,
    "type" : "judge",
    "content" : "周界是指需要进行实体防护和/或电子防护的某区域。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1813,
    "type" : "judge",
    "content" : "电子巡查系统是对巡查人员是否按规定的路线.时间和数量巡查了规定地点，进行监督管理的最有效的工具。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1814,
    "type" : "judge",
    "content" : "频谱分析设备是入侵报警系统前端设备。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1815,
    "type" : "judge",
    "content" : "虹视网膜识别技术，是用于视频监控系统前端设备中的技术。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1816,
    "type" : "judge",
    "content" : "在道路交通活动中，方向指示信号灯红色或黄色箭头表示仅对箭头所指向方向起红灯或黄灯作用。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1818,
    "type" : "judge",
    "content" : "在道路交通活动中，人行横道信号灯红灯亮时，已经进入人行横道的行人可以继续通行或者在道路中心线处停留等候。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1826,
    "type" : "judge",
    "content" : "在给伤病员心肺复苏时，为了保持连续性，即使医务人员来接替，救护员也不要将伤病员交给医务人员。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1828,
    "type" : "judge",
    "content" : "道路交通标志中的辅助标志可以单独设立。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1829,
    "type" : "judge",
    "content" : "在道路交通标志的设置中，当主标志无法完整表达或指示其规定时，应设置辅助标志。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1830,
    "type" : "judge",
    "content" : "伤病员呼吸.心跳骤停后，舌肌松弛后坠，可能阻塞呼吸道，此时用仰头颏法将气道打开，可使舌根上提，呼吸道畅通。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1831,
    "type" : "judge",
    "content" : "人员疏散通道里也应该放置灭火器。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1834,
    "type" : "judge",
    "content" : "在现场急救中，实施人工呼吸前，救护人员要将伤病员嘴掰开，观察口腔内是否有异物，如有异物，要立即取出。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1835,
    "type" : "judge",
    "content" : "手提式灭火器放置的要求是，顶部离地面高度应小于1.50m。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1836,
    "type" : "judge",
    "content" : "在现场急救中，观察气体是否吹入肺内的方法，是在吹气时用眼睛的余光看胸廓是否有起伏。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1838,
    "type" : "judge",
    "content" : "一位老人在家中软床上发生心跳骤停，为了争取时间，要立即在原地实施心肺复苏。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1839,
    "type" : "judge",
    "content" : "保安员如果发现有人突然倒地，应立即进行心肺复苏。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1840,
    "type" : "judge",
    "content" : "在现场急救中，伤员恢复自主呼吸及循环，可终止心肺复苏。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1842,
    "type" : "judge",
    "content" : "泡沫灭火器可以适用于扑救可燃气体火灾。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1843,
    "type" : "judge",
    "content" : "根据充装的泡沫灭火剂不同，泡沫灭火器可分为化学泡沫灭火器和水型泡沫灭火器两种。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1844,
    "type" : "judge",
    "content" : "根据《保安服务管理条例》规定，保安从业单位应该根据岗位的风险程度为保安员投保意外伤害险。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1847,
    "type" : "judge",
    "content" : "根据《保安服务管理条例》规定，接受安全教育和技能培训既是保安员的权利，也是保安员的义务。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1848,
    "type" : "judge",
    "content" : "保安员行使正当防卫权利时，可以适度殴打他人。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1850,
    "type" : "judge",
    "content" : "根据我国《娱乐场所管理条例》的规定，娱乐场所应当保证疏散通道和安全出口畅通。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1851,
    "type" : "judge",
    "content" : "保安员不得以任何理由限制他人人身自由。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1852,
    "type" : "judge",
    "content" : "保安员在区域巡逻中可能遭遇违法犯罪分子的袭击和治安灾害事故，因此保安员在巡逻中要提高警惕.加强防护。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1853,
    "type" : "judge",
    "content" : "在保安服务活动中，对拒不配合登记的车辆，保安员可以强行查验，但要注意安全。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1854,
    "type" : "judge",
    "content" : "使用干粉灭火器扑救可燃.易燃液体火灾时，应对准火焰根部，由远及近，直至把火焰全部扑灭。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1855,
    "type" : "judge",
    "content" : "干粉灭火器可以扑救可燃液体和可燃气体火灾。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1858,
    "type" : "judge",
    "content" : "因为职业道德不具有强制性，所以保安员职业道德没有约束.规范保安服务行为的作用。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1859,
    "type" : "judge",
    "content" : "提倡爱岗敬业，就要求保安员树立“干一行，爱一行”的理念。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1860,
    "type" : "judge",
    "content" : "保安员的职责是指保护国家财产安全。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1861,
    "type" : "judge",
    "content" : "保安员专业技能是指为履行维护秩序.保护人身及财产安全等职责，保安员完成任务时需具备的技术和能力。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1862,
    "type" : "judge",
    "content" : "在门卫保安服务活动中，保安员对拒不接受证件查验的人员，应严禁其进入客户单位。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1863,
    "type" : "judge",
    "content" : "在保安服务活动中，担任门卫的保安员发现服务区域内部发生爆炸事故时，应迅速报警。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1864,
    "type" : "judge",
    "content" : "在保安服务活动中，证件查验的内容包括：确认人证相符.识别证件内容.判定证件真伪。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1865,
    "type" : "judge",
    "content" : "在巡逻范围内，一旦发生突发性事件或意外事故，保安员要全力维护好现场秩序，协助做好人员与物资的抢救工作。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1868,
    "type" : "judge",
    "content" : "谎报警情者，其个人要承担相应的法律责任。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1871,
    "type" : "judge",
    "content" : "保安员在紧急避险的过程中殴打他人不负刑事责任。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1872,
    "type" : "judge",
    "content" : "保安员肖某在服务区域巡逻中，发现有人正在实施盗窃，肖某立即报警，同时将盗窃者抓获并立即进行讯问。肖某的这种行为不违法。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1873,
    "type" : "judge",
    "content" : "火灾报警系统中，接收到火灾报警信号后，能自动或手动启动相关消防设备并显示其状态的设备称为消防控制设备。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1876,
    "type" : "judge",
    "content" : "保安员对于区域巡逻中发现的案.事件现场应当进行保护，划定警戒区域，不准无关人员出入。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1878,
    "type" : "judge",
    "content" : "保护客户单位的人身及财产安全是保安员的职责之一。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1879,
    "type" : "judge",
    "content" : "保安员在工作中的诚实守信.爱岗敬业.团结互助.文明服务，与个人进步.事业成功没有关系。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1880,
    "type" : "judge",
    "content" : "某市保安服务公司为加强管理，提高保安服务水平，制定了本公司的保安服务行为规范，该规范属于我国法律体系的组成部分。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1881,
    "type" : "judge",
    "content" : "在心肺复苏时，只要发现伤病员眼球转动.呻吟.手足搐动，均可认为心肺复苏有效。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1884,
    "type" : "judge",
    "content" : "使用鸭嘴式二氧化碳灭火器时，应先拔去保险插销，然后压紧压把，二氧化碳气体便会从喇叭形角口喷出灭火。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1885,
    "type" : "judge",
    "content" : "在使用泡沫灭火器扑救火灾过程中，灭火器应当始终处于倾斜状态，否则会中断喷射。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1886,
    "type" : "judge",
    "content" : "保安员在保安服务工作中要注意保守客户秘密，不得随意谈论和泄露客户情况，不得私自开拆客户信件。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1887,
    "type" : "judge",
    "content" : "保安员不得以暴力手段索讨债务，但是，应客户单位领导的需要，可以通过劝告等方式追索债务。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1888,
    "type" : "judge",
    "content" : "照明灯具应安装在不燃或难燃基座上。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1890,
    "type" : "judge",
    "content" : "灭火器上应标注相应的检查测试报告和维修保养记录。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1891,
    "type" : "judge",
    "content" : "保安从业单位为保安员配备必要的装备是保安员应享有的劳动条件和劳动保护权利。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1892,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，只有娱乐场所的法定代表人才对娱乐场所的消防安全和其他安全负责。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1893,
    "type" : "judge",
    "content" : "我国《娱乐场所管理条例》规定，娱乐场所的法定代表人应当对娱乐场所的消防安全和其他安全负责。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1894,
    "type" : "judge",
    "content" : "根据有关法律法规的规定，娱乐场所是以营利为目的.并向社会公众开放.消费者自娱自乐的歌舞.游艺等场所。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1895,
    "type" : "judge",
    "content" : "根据有关法律法规的规定，娱乐场所是不以营利为目的.并向社会公众开放.消费者自娱自乐的场所。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1896,
    "type" : "judge",
    "content" : "保安员的职业道德对于保安从业单位良好形象的塑造不起作用。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1897,
    "type" : "judge",
    "content" : "事业成功的人往往具有较高的职业道德水平。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1898,
    "type" : "judge",
    "content" : "遵守职业道德是一个人事业成功的重要条件。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1899,
    "type" : "judge",
    "content" : "如果一个保安员不能诚实守信，会影响他本人的形象，但不影响他所在单位的形象。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1900,
    "type" : "judge",
    "content" : "火灾报警装置是用以接收.显示和传输火灾报警信号，并能发出控制信号和具有其他辅助功能的控制设备。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1901,
    "type" : "judge",
    "content" : "禁区是指在警戒范围内，安全防范手段未能覆盖的区域。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1902,
    "type" : "judge",
    "content" : "监视区是指实体周界防护系统和/或电子周界防护系统所组成的周界警戒线与防护区边界之间的区域。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1903,
    "type" : "judge",
    "content" : "保安员专业技能是指保安员为执行保安勤务应具备的能力。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1904,
    "type" : "judge",
    "content" : "道路交通标志的柱式支撑方式包括单柱式和双柱式两种。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1906,
    "type" : "judge",
    "content" : "根据我国劳动法的规定，用人单位可以与女劳动者协商在劳动合同中约定结婚.生育的限制性条款。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1908,
    "type" : "judge",
    "content" : "在保安服务活动中，设立临时隔离区属于保安员的职责任务。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1909,
    "type" : "judge",
    "content" : "预防自然灾害事故是区域保安服务工作的基本任务之一。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1913,
    "type" : "judge",
    "content" : "根据我国劳动法的规定，劳动者在试用期间被证明不适合录用条件的，用人单位可以解除劳动合同。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1915,
    "type" : "judge",
    "content" : "保安员在日常工作生活中都应当遵纪守法。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1916,
    "type" : "judge",
    "content" : "能判断伤病员死亡的人只有医务人员。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1918,
    "type" : "judge",
    "content" : "出入口守卫的目的是维护客户单位财产安全。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1919,
    "type" : "judge",
    "content" : "出入口守卫是客户单位服务区域安全的第一道防线。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1920,
    "type" : "judge",
    "content" : "由于区域巡逻需要保安员在巡逻区域内不断地巡视.检查，因此，区域巡逻具有流动性大的特点。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1921,
    "type" : "judge",
    "content" : "保安员徒步巡逻可以单人进行。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1922,
    "type" : "judge",
    "content" : "保护劳动者的合法权益是我国劳动法的立法目的所在。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1923,
    "type" : "judge",
    "content" : "宪法是国家的根本大法，是公民权利的保障书。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1924,
    "type" : "judge",
    "content" : "犯罪行为要承担刑事责任，并有可能承担民事责任。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1925,
    "type" : "judge",
    "content" : "保安员职业道德具有约束.规范保安服务行为的作用。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1927,
    "type" : "judge",
    "content" : "在职业活动中形成的行为准则和基本规范就是职业道德。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1928,
    "type" : "judge",
    "content" : "对于民族.宗教信仰.性别.职业等因素不同的劳动者，我国劳动法对其保护是不一样的。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1929,
    "type" : "judge",
    "content" : "根据我国劳动法的规定，用人单位不得在女职工孕期.产期.哺乳期内单方面解除劳动合同。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1931,
    "type" : "judge",
    "content" : "根据我国劳动法的规定，为便于管理，用人单位与劳动者签订劳动合同时，可以约定用人单位将劳动者的身份证集中保管。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1933,
    "type" : "judge",
    "content" : "区域巡逻是指保安员按照服务单位的要求，对特定区域.地段和目标进行的巡视.检查.警戒活动。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1934,
    "type" : "judge",
    "content" : "步巡一般不受气候.时间.地形.地物的限制和影响。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1936,
    "type" : "judge",
    "content" : "我国劳动法规定，国家保障妇女享有与男子平等的劳动权利。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1937,
    "type" : "judge",
    "content" : "我国劳动法对劳动者的保护是平等的和全面的。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1938,
    "type" : "judge",
    "content" : "保安员在门卫值勤时，对携带物品进入客户单位的人员，只需查验证件不需检查携带物品。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1939,
    "type" : "judge",
    "content" : "在不影响过往车辆通行的前提下，工程作业车的行驶路线和方向不受交通标志的限制。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1940,
    "type" : "judge",
    "content" : "在道路交通活动中，下车推行的自行车，应视为行人。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1942,
    "type" : "judge",
    "content" : "在不影响其他车辆通行的情况下，清扫车可以逆向行驶。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1943,
    "type" : "judge",
    "content" : "在城市道路通行的行人，必要时可以跨越道路隔离设施通行。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1944,
    "type" : "judge",
    "content" : "在交通信号灯控制的交叉路口，向右转弯的机动车遇有同车道前车正在等候放行信号时，应依次停车等候。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1945,
    "type" : "judge",
    "content" : "机动车通过没有信号灯控制的交叉路口时，应当减速慢行，并让行人和优先通行的车辆先行。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1946,
    "type" : "judge",
    "content" : "诚实守信是人类在交往实践中总结出来的做人的基本准则。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1947,
    "type" : "judge",
    "content" : "文明服务就是要求保安员在保安服务活动中必须仪表端庄.语言规范.举止得体.礼貌待人。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1949,
    "type" : "judge",
    "content" : "不同的职业具有完全相同的行为准则和规范。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1954,
    "type" : "judge",
    "content" : "某日，保安员夏某在某大型超市巡视过程中，发现有人偷拿商品，夏某可以将其带往值班室进行询问处理。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1955,
    "type" : "judge",
    "content" : "人员密集场所巡逻区域警戒是指保安员在巡逻时，为了保障人员密集场所中重点目标或重点区域的安全而采取的限制人员出入的安全保障措施。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1957,
    "type" : "judge",
    "content" : "在一般情况下，保安员在疏导人员和车辆时要按照先出后进.靠右通行.分流疏导的原则进行。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1958,
    "type" : "judge",
    "content" : "出入口发生火灾等治安灾害事故，应及时报告客户单位，待客户单位同意后再报警。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1959,
    "type" : "judge",
    "content" : "保安员在对进入车辆进行登记时，请驾驶员出示证件即可放行。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1960,
    "type" : "judge",
    "content" : "行车中遇行动缓慢的老人横过道路时，可持续鸣喇叭催促。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1961,
    "type" : "judge",
    "content" : "夜间会车应当在距离相对方向来车100米以外改用近光灯。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1962,
    "type" : "judge",
    "content" : "机动车在通过没有交通信号灯控制也没有交通警察指挥的交叉路口时，向左转弯时，靠路口中心点的左侧转弯。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1963,
    "type" : "judge",
    "content" : "防火卷帘下可以暂时堆放物品。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1964,
    "type" : "judge",
    "content" : "严格禁止在楼内焚烧垃圾，但小区花园角落可以焚烧垃圾。",
    "options" : null,
    "answer" : "×",
    "multiAnswers" : null
  }, {
    "id" : 1965,
    "type" : "judge",
    "content" : "保安员在巡查用火安全时，发现明火装修，必须立刻制止。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  }, {
    "id" : 1966,
    "type" : "judge",
    "content" : "重大火灾隐患可能造成特大火灾事故和严重社会影响。",
    "options" : null,
    "answer" : "√",
    "multiAnswers" : null
  } ]
};

// 答题系统核心逻辑

(function() {
    'use strict';

    // DOM元素
    const elements = {
        questionNumber: document.getElementById('questionNumber'),
        questionType: document.getElementById('questionType'),
        questionContent: document.getElementById('questionContent'),
        optionsContainer: document.getElementById('optionsContainer'),
        feedback: document.getElementById('feedback'),
        btnConfirm: document.getElementById('btnConfirm'),
        btnPrev: document.getElementById('btnPrev'),
        btnNext: document.getElementById('btnNext'),
        btnSubmit: document.getElementById('btnSubmit'),
        jumpInput: document.getElementById('jumpInput'),
        btnJump: document.getElementById('btnJump'),
        statSingle: document.getElementById('statSingle'),
        statMulti: document.getElementById('statMulti'),
        statJudge: document.getElementById('statJudge'),
        resultModal: document.getElementById('resultModal'),
        resultScore: document.getElementById('resultScore'),
        totalScore: document.getElementById('totalScore'),
        resultCorrect: document.getElementById('resultCorrect'),
        resultAccuracy: document.getElementById('resultAccuracy'),
        resultAnswered: document.getElementById('resultAnswered'),
        totalQuestions: document.getElementById('totalQuestions'),
        btnClose: document.getElementById('btnClose'),
        loading: document.getElementById('loading')
    };

    // 状态
    let allQuestions = [];
    let currentIndex = 0;
    let userAnswers = {};
    let answeredQuestions = new Set();
    let confirmedQuestions = new Set();

    // 初始化
    function init() {
        loadQuestions();
        setupEventListeners();
    }

    // 加载题库
    function loadQuestions() {
        try {
            // 合并所有题目
            allQuestions = [
                ...QUESTIONS_DATA.singleQuestions,
                ...QUESTIONS_DATA.multiQuestions,
                ...QUESTIONS_DATA.judgeQuestions
            ];

            // 更新统计信息
            elements.statSingle.textContent = `0/${QUESTIONS_DATA.singleCount}`;
            elements.statMulti.textContent = `0/${QUESTIONS_DATA.multiCount}`;
            elements.statJudge.textContent = `0/${QUESTIONS_DATA.judgeCount}`;
            elements.totalQuestions.textContent = allQuestions.length;

            // 隐藏加载提示
            elements.loading.classList.add('hidden');

            // 显示第一题
            showQuestion(0);
        } catch (e) {
            console.error('加载题库失败:', e);
            alert('题库加载失败，请刷新重试');
        }
    }

    // 设置事件监听
    function setupEventListeners() {
        elements.btnConfirm.addEventListener('click', confirmAnswer);
        elements.btnPrev.addEventListener('click', prevQuestion);
        elements.btnNext.addEventListener('click', nextQuestion);
        elements.btnSubmit.addEventListener('click', submitExam);
        elements.btnClose.addEventListener('click', closeModal);
        elements.btnJump.addEventListener('click', jumpToQuestion);
        elements.jumpInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') jumpToQuestion();
        });
    }

    // 跳转到指定题号
    function jumpToQuestion() {
        const num = parseInt(elements.jumpInput.value);
        if (isNaN(num) || num < 1 || num > allQuestions.length) {
            alert(`请输入 1 到 ${allQuestions.length} 之间的数字`);
            return;
        }
        showQuestion(num - 1);
    }

    // 显示题目
    function showQuestion(index) {
        if (index < 0 || index >= allQuestions.length) return;

        currentIndex = index;
        const question = allQuestions[index];

        // 更新题号
        elements.questionNumber.textContent = `${index + 1}/${allQuestions.length}`;

        // 更新题目类型
        let typeText = '单选题';
        let typeClass = '';
        if (question.type === 'judge') {
            typeText = '判断题';
            typeClass = 'judge';
        } else if (question.type === 'multi') {
            typeText = '多选题';
            typeClass = 'multi';
        }
        elements.questionType.textContent = typeText;
        elements.questionType.className = 'question-type ' + typeClass;

        // 更新题目内容
        elements.questionContent.textContent = question.content;

        // 更新选项
        renderOptions(question);

        // 更新反馈
        elements.feedback.className = 'feedback';
        elements.feedback.textContent = '';

        // 更新导航按钮状态
        updateNavButtons();

        // 如果已答过，恢复答案
        if (userAnswers[index] !== undefined) {
            restoreAnswer(index);
        }
    }

    // 渲染选项
    function renderOptions(question) {
        elements.optionsContainer.innerHTML = '';

        if (question.type === 'judge') {
            // 判断题：√ 和 ×
            renderJudgeOptions(question);
        } else {
            // 单选题/多选题
            renderSingleOptions(question);
        }
    }

    // 渲染单选题选项
    function renderSingleOptions(question) {
        const options = question.options || [];
        const prefixes = ['A', 'B', 'C', 'D', 'E', 'F'];

        options.forEach((option, index) => {
            const item = document.createElement('div');
            item.className = 'option-item';
            item.dataset.index = index;

            // 解析选项（格式可能是 "A:内容" 或直接是 "内容"）
            let text = option;
            let prefix = prefixes[index];
            if (option.includes(':')) {
                const parts = option.split(':');
                prefix = parts[0];
                text = parts.slice(1).join(':');
            }

            item.innerHTML = `
                <span class="option-prefix">${prefix}</span>
                <span class="option-text">${text}</span>
            `;

            item.addEventListener('click', () => selectOption(index));
            elements.optionsContainer.appendChild(item);
        });
    }

    // 渲染判断题选项
    function renderJudgeOptions(question) {
        const item = document.createElement('div');
        item.className = 'option-item judge-option';
        item.innerHTML = `
            <span class="option-text">√ 正确</span>
            <span class="option-text">× 错误</span>
        `;

        item.addEventListener('click', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x < rect.width / 2) {
                selectJudgeOption('√');
            } else {
                selectJudgeOption('×');
            }
        });

        elements.optionsContainer.appendChild(item);
    }

    // 选择选项
    function selectOption(index) {
        const question = allQuestions[currentIndex];
        const isMulti = question.type === 'multi';

        if (isMulti) {
            // 多选题：支持多选
            const items = elements.optionsContainer.querySelectorAll('.option-item');
            const option = question.options[index];
            let prefix = '';
            if (option.includes(':')) {
                prefix = option.split(':')[0];
            } else {
                prefix = String.fromCharCode(65 + index);
            }

            // 获取当前已选答案
            let currentAnswers = userAnswers[currentIndex] ? userAnswers[currentIndex].split(',') : [];

            // toggle该选项
            if (currentAnswers.includes(prefix)) {
                currentAnswers = currentAnswers.filter(a => a !== prefix);
            } else {
                currentAnswers.push(prefix);
            }

            // 排序后保存
            currentAnswers.sort();
            userAnswers[currentIndex] = currentAnswers.join(',');

            // 更新UI
            items.forEach((item, i) => {
                const itemOption = question.options[i];
                let itemPrefix = '';
                if (itemOption.includes(':')) {
                    itemPrefix = itemOption.split(':')[0];
                } else {
                    itemPrefix = String.fromCharCode(65 + i);
                }
                item.classList.toggle('selected', currentAnswers.includes(itemPrefix));
            });
        } else {
            // 单选题：只选一个
            const items = elements.optionsContainer.querySelectorAll('.option-item');
            items.forEach((item, i) => {
                item.classList.toggle('selected', i === index);
            });

            const option = question.options[index];
            let answer = '';

            if (option.includes(':')) {
                answer = option.split(':')[0];
            } else {
                answer = String.fromCharCode(65 + index); // A, B, C, D...
            }

            userAnswers[currentIndex] = answer;
        }

        answeredQuestions.add(currentIndex);
        // 重新选择时清除确认状态，这样点击确定会重新确认而不是跳过
        confirmedQuestions.delete(currentIndex);
        updateStats();
    }

    // 选择判断题选项
    function selectJudgeOption(answer) {
        const item = elements.optionsContainer.querySelector('.option-item');
        if (item) {
            const isCorrect = answer === '√';
            item.innerHTML = `
                <span class="option-prefix">${isCorrect ? '√' : '×'}</span>
                <span class="option-text">${isCorrect ? '正确' : '错误'}</span>
            `;
            item.classList.add('selected');
        }

        userAnswers[currentIndex] = answer;
        answeredQuestions.add(currentIndex);
        // 重新选择时清除确认状态
        confirmedQuestions.delete(currentIndex);
        updateStats();
    }

    // 恢复答案
    function restoreAnswer(index) {
        const question = allQuestions[index];
        const answer = userAnswers[index];
        const isMulti = question.type === 'multi';

        if (question.type === 'judge') {
            const item = elements.optionsContainer.querySelector('.option-item');
            if (item) {
                const isCorrect = answer === '√';
                item.innerHTML = `
                    <span class="option-prefix">${isCorrect ? '√' : '×'}</span>
                    <span class="option-text">${isCorrect ? '正确' : '错误'}</span>
                `;
                item.classList.add('selected');
            }
        } else {
            const options = question.options || [];
            const prefixes = ['A', 'B', 'C', 'D', 'E', 'F'];

            // 多选题答案可能是 "A,B,C" 格式
            const answerParts = isMulti ? answer.split(',') : [answer];

            for (let i = 0; i < options.length; i++) {
                let prefix = prefixes[i];
                if (options[i].includes(':')) {
                    prefix = options[i].split(':')[0];
                }
                if (answerParts.includes(prefix)) {
                    const items = elements.optionsContainer.querySelectorAll('.option-item');
                    if (items[i]) {
                        items[i].classList.add('selected');
                    }
                }
            }
        }
    }

    // 确认答案
    function confirmAnswer() {
        if (userAnswers[currentIndex] === undefined) {
            alert('请先选择一个答案');
            return;
        }

        if (confirmedQuestions.has(currentIndex)) {
            // 已确认，切换到下一题
            nextQuestion();
            return;
        }

        const question = allQuestions[currentIndex];
        const userAnswer = userAnswers[currentIndex];
        // 多选题需要排序后比较，确保顺序无关
        const isMulti = question.type === 'multi';
        let isCorrect;
        if (isMulti) {
            const userSorted = userAnswer.split(',').sort().join(',');
            const answerSorted = question.answer.split(',').sort().join(',');
            isCorrect = userSorted === answerSorted;
        } else {
            isCorrect = userAnswer === question.answer;
        }

        // 显示反馈
        elements.feedback.textContent = isCorrect ? '回答正确！' : `回答错误！正确答案：${question.answer}`;
        elements.feedback.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');

        // 标记选项
        const items = elements.optionsContainer.querySelectorAll('.option-item');
        items.forEach(item => item.classList.add('disabled'));

        if (question.type === 'judge') {
            const item = elements.optionsContainer.querySelector('.option-item');
            if (item) {
                const correctAnswer = question.answer === '√';
                item.innerHTML = `
                    <span class="option-prefix">${correctAnswer ? '√' : '×'}</span>
                    <span class="option-text">${correctAnswer ? '正确' : '错误'}</span>
                `;
                item.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
        } else {
            const options = question.options || [];
            const prefixes = ['A', 'B', 'C', 'D', 'E', 'F'];
            items.forEach((item, i) => {
                let prefix = prefixes[i];
                if (options[i] && options[i].includes(':')) {
                    prefix = options[i].split(':')[0];
                }
                if (prefix === question.answer) {
                    item.classList.add('correct');
                } else if (item.classList.contains('selected') && !isCorrect) {
                    item.classList.add('incorrect');
                }
            });
        }

        confirmedQuestions.add(currentIndex);

        // 更新按钮文字
        if (currentIndex < allQuestions.length - 1) {
            elements.btnConfirm.textContent = '下一题';
        } else {
            elements.btnConfirm.textContent = '查看结果';
        }
    }

    // 上一题
    function prevQuestion() {
        if (currentIndex > 0) {
            showQuestion(currentIndex - 1);
        }
    }

    // 下一题
    function nextQuestion() {
        if (currentIndex < allQuestions.length - 1) {
            showQuestion(currentIndex + 1);
        }
    }

    // 更新导航按钮
    function updateNavButtons() {
        elements.btnPrev.disabled = currentIndex === 0;
        elements.btnNext.disabled = currentIndex === allQuestions.length - 1;

        // 重置确定按钮文字
        if (!confirmedQuestions.has(currentIndex)) {
            elements.btnConfirm.textContent = '确定';
        }
    }

    // 更新统计
    function updateStats() {
        let singleAnswered = 0;
        let multiAnswered = 0;
        let judgeAnswered = 0;

        answeredQuestions.forEach(index => {
            const q = allQuestions[index];
            if (q.type === 'judge') {
                judgeAnswered++;
            } else if (q.type === 'multi') {
                multiAnswered++;
            } else {
                singleAnswered++;
            }
        });

        elements.statSingle.textContent = `${singleAnswered}/${QUESTIONS_DATA.singleCount}`;
        elements.statMulti.textContent = `${multiAnswered}/${QUESTIONS_DATA.multiCount}`;
        elements.statJudge.textContent = `${judgeAnswered}/${QUESTIONS_DATA.judgeCount}`;
    }

    // 交卷
    function submitExam() {
        const answered = answeredQuestions.size;
        const total = allQuestions.length;

        if (answered === 0) {
            alert('请至少回答一道题后再交卷');
            return;
        }

        let correctCount = 0;
        let score = 0;

        answeredQuestions.forEach(index => {
            const q = allQuestions[index];
            if (userAnswers[index] === q.answer) {
                correctCount++;
                // 每题分值：单选1分，判断0.5分
                score += q.type === 'judge' ? 0.5 : 1;
            }
        });

        const accuracy = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;

        elements.resultScore.textContent = score;
        elements.totalScore.textContent = QUESTIONS_DATA.singleCount + Math.floor(QUESTIONS_DATA.judgeCount * 0.5);
        elements.resultCorrect.textContent = correctCount;
        elements.resultAccuracy.textContent = accuracy + '%';
        elements.resultAnswered.textContent = answered;

        elements.resultModal.classList.add('show');
    }

    // 关闭弹窗
    function closeModal() {
        elements.resultModal.classList.remove('show');
    }

    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', init);
})();