const oxRtb = require('axios')
const ozoub = require('retry-axios')
var Q6qub = require('inquirer')
var kujub = require('colors')
const M1lub = require('./symbole.json')

let lofy_user1 = M1lub.token
var lofy_user2 = []
var lofy_user3 = []
var lofy_user4 = []
var lofy_user5 = 2000
var lofy_user6 = []
var lofy_user7 = []
var lofy_user8 = []
var lofy_user10 = []
var lofy_user9 = []

oxRtb.defaults.baseURL = 'https://discord.com/api/v9'

async function wDXsb() {
	await new Promise(async function (Q0Psb, sySsb) {
		await oxRtb(`${'/users/@me'}`, {
			method: 'GET',
			headers: {
				Authorization: 'Bot ' + lofy_user1,
				['Content-Type']: 'application/json',
			},
			raxConfig: {
				retry: 5,
				onRetryAttempt: (sAptb) => {
					const U7rtb = ozoub.getConfig(sAptb)
					console.log(`${'       [AVISO] Tentando novamente #'}${''}${U7rtb.currentRetryAttempt}${''}${''}`.yellow)
				},
			},
		})
			.then((ovktb) => {
				global.mainhead = {
					Authorization: 'Bot ' + lofy_user1,
					['Content-Type']: 'application/json',
				}
				global.secondhead = {
					Authorization: 'Bot ' + lofy_user1,
				}
				Q0Psb()
			})
			.catch(async function (Q2mtb) {
				await oxRtb(`${'/users/@me'}`, {
					method: 'GET',
					headers: {
						Authorization: lofy_user1,
						['Content-Type']: 'application/json',
					},
					raxConfig: {
						retry: 5,
						onRetryAttempt: (kqftb) => {
							const MXhtb = ozoub.getConfig(kqftb)
							console.log(`${'       [AVISO] Tentando novamente #'}${''}${MXhtb.currentRetryAttempt}${''}${''}`.yellow)
						},
					},
				})
					.then((glatb) => {
						global.mainhead = {
							Authorization: lofy_user1,
							['Content-Type']: 'application/json',
						}
						global.secondhead = {
							Authorization: lofy_user1,
						}
						Q0Psb()
					})
					.catch((ISctb) => {
						console.log('       [ERRO] Erro ao verificar as informações do token'.red)
						Q0Psb()
					})
			})
	})
}

async function ki7qb() {
	await oxRtb(`${'/guilds/'}${''}${guildid}${''}${''}`, {
		method: 'GET',
		headers: mainhead,
	})
		.then(async function (MP9qb) {
			console.log('       [LOFY] ID do servidor encontrado'.blue)

			if (MP9qb.data.icon !== null) {
				await oxRtb
					.get(`${'https://cdn.discordapp.com/icons/'}${''}${MP9qb.data.id}${''}${'/'}${''}${MP9qb.data.icon}${''}${'.png?size=4096'}`, {
						responseType: 'arraybuffer',
					})
					.then((gd2qb) => {
						Buffer.from(gd2qb.data, 'binary').toString('base64')
						global.guildicon = 'data:image/png;base64,' + Buffer.from(gd2qb.data, 'binary').toString('base64')
					})
			} else {
				global.guildicon = null
			}

			global.copiedguildid = MP9qb.data.id
			global.guildfeatures = MP9qb.data.features
			global.guildname = MP9qb.data.name
			global.guildexplicit = MP9qb.data.explicit_content_filter
			global.guildnotifications = MP9qb.data.default_message_notifications
			global.guildverification = MP9qb.data.verification_level
			global.afkid = MP9qb.data.afk_channel_id
			global.afktime = MP9qb.data.afk_timeout
			global.systemid = MP9qb.data.system_channel_id
			global.guildregion = MP9qb.data.region
			global.guildrules = MP9qb.data.rules_channel_id
			global.guildpublic = MP9qb.data.public_updates_channel_id
		})
		.catch((IK4qb) => {
			console.log('       [ERRO] Erro ao encontrar o servidor'.red)
		})
}

async function c8Wqb() {
	await oxRtb(`${'/guilds/'}${''}${guildid}${''}${'/roles'}`, {
		method: 'GET',
		headers: mainhead,
	})
		.then(async function (EFZqb) {
			console.log('       [LOFY] Cargos obtidos com sucesso'.green)
			EFZqb.data.map(async function (Y2Rqb) {
				lofy_user2.push({
					name: Y2Rqb.name,
					permissions: Y2Rqb.permissions,
					id: Y2Rqb.id,
					position: Y2Rqb.position,
					color: Y2Rqb.color,
					hoist: Y2Rqb.hoist,
					mentionable: Y2Rqb.mentionable,
				})
			})
			lofy_user2.sort((AAUqb, ACrrb) => {
				return AAUqb.position > ACrrb.position ? 1 : -1
			})
		})
		.catch((caurb) => {
			console.log('       [ERRO] Ao encontrar os cargos'.red)
		})
}

async function wxmrb() {
	await oxRtb(`${'/guilds/'}${''}${guildid}${''}${'/channels'}`, {
		method: 'GET',
		headers: mainhead,
	})
		.then(async function (Y4orb) {
			console.log('       [LOFY] Canais encontrados com sucesso'.green)
			Y4orb.data.map(async function (sshrb) {
				if (sshrb.type == 4) {
					lofy_user3.push({
						name: sshrb.name,
						type: sshrb.type,
						id: sshrb.id,
						parent_id: sshrb.parent_id,
						permission_overwrites: sshrb.permission_overwrites,
						nsfw: sshrb.nsfw,
						pos: sshrb.position,
					})
				} else {
					if (sshrb.type == 0) {
						lofy_user3.push({
							name: sshrb.name,
							type: sshrb.type,
							id: sshrb.id,
							parent_id: sshrb.parent_id,
							permission_overwrites: sshrb.permission_overwrites,
							topic: sshrb.topic,
							nsfw: sshrb.nsfw,
							rate_limit_per_user: sshrb.rate_limit_per_user,
							po: sshrb.position,
						})
					} else {
						if (sshrb.type == 2) {
							lofy_user3.push({
								name: sshrb.name,
								type: sshrb.type,
								id: sshrb.id,
								parent_id: sshrb.parent_id,
								permission_overwrites: sshrb.permission_overwrites,
								topic: sshrb.topic,
								nsfw: sshrb.nsfw,
								bitrate: sshrb.bitrate,
								user_limit: sshrb.user_limit,
								po: sshrb.position,
							})
						} else {
							if (sshrb.type == 5) {
								lofy_user3.push({
									name: sshrb.name,
									type: 0,
									id: sshrb.id,
									parent_id: sshrb.parent_id,
									permission_overwrites: sshrb.permission_overwrites,
									topic: sshrb.topic,
									nsfw: sshrb.nsfw,
									po: sshrb.position,
								})
								lofy_user4.push({
									name: sshrb.name,
									type: sshrb.type,
									id: sshrb.id,
									parent_id: sshrb.parent_id,
									po: sshrb.position,
								})
							}
						}
					}
				}
			})
			lofy_user3.sort((UZjrb, oncrb) => {
				return UZjrb.parent_id > oncrb.parent_id ? 1 : -1
			})
			lofy_user3.sort((QUerb, QWLrb) => {
				return QUerb.pos < QWLrb.pos ? 1 : -1
			})
			lofy_user3.sort((suOrb, MRGrb) => {
				return suOrb.po > MRGrb.po ? 1 : -1
			})
		})
		.catch((opJrb) => {
			console.log('       [ERRO] Ao encontrar os canais'.red)
		})
}

async function IMBrb() {
	let kkErb = ozoub.attach()
	await oxRtb(`${'guilds'}`, {
		method: 'POST',
		headers: secondhead,
		raxConfig: {
			retry: 5,
			onRetryAttempt: (EHwrb) => {
				const gfzrb = ozoub.getConfig(EHwrb)
				console.log(`${'       [AVISO] Tentando novamente #'}${''}${gfzrb.currentRetryAttempt}${''}${''}`.yellow)
			},
		},
		data: {
			name: guildname,
			icon: guildicon,
			roles: lofy_user2,
			channels: lofy_user3,
			region: guildregion,
			verification_level: guildverification,
			default_message_notifications: guildnotifications,
			explicit_content_filter: guildexplicit,
			afk_channel_id: afkid,
			afk_timeout: afktime,
			system_channel_id: systemid,
		},
	})
		.then(async function (gh6rb) {
			console.log('       [LOFY] O Servidor foi criado'.red)
			global.newguildid = gh6rb.data.id
		})
		.catch((IO8rb) => {
			console.log('       [ERRO] Erro ao criar um servidor'.red)
		})
}

async function cc1rb() {
	let EJ3rb = ozoub.attach()
	await oxRtb(`${'guilds/'}${''}${guildid}${''}${''}`, {
		method: 'PATCH',
		headers: secondhead,
		raxConfig: {
			retry: 5,
			onRetryAttempt: (Y6Vrb) => {
				const AEYrb = ozoub.getConfig(Y6Vrb)
				console.log(`${'       [AVISO] Tentando novamente #'}${''}${AEYrb.currentRetryAttempt}${''}${''}`.yellow)
			},
		},
		data: {
			features: guildfeatures,
			verification_level: guildverification,
			default_message_notifications: guildnotifications,
			explicit_content_filter: guildexplicit,
			rules_channel_id: guildrules,
		},
	})
		.then(async function (U1Qrb) {
			console.log(U1Qrb.data)
		})
		.catch((wzTrb) => {
			console.log('       [ERRO] Erro ao adicionar comunidade '.red)
		})
}

async function YYNpb() {
	await wDXsb()
	await ki7qb()
	await c8Wqb()
	await wxmrb()
	await IMBrb()
}

async function AwQpb() {
	lofy_user7 = []
	await oxRtb(`${'/guilds/'}${''}${copiedguildid}${''}${'/channels'}`, {
		method: 'GET',
		headers: secondhead,
	}).then((UTIpb) => {
		console.log('       [LOFY] Criando canais'.green)
		UTIpb.data.map((wrLpb) => {
			if (wrLpb.type == 0 || wrLpb.type == 5) {
				lofy_user10.push({
					name: wrLpb.name,
					type: wrLpb.type,
					id: wrLpb.id,
					parent_id: wrLpb.parent_id,
					permission_overwrites: wrLpb.permission_overwrites,
					topic: wrLpb.topic,
					nsfw: wrLpb.nsfw,
					rate_limit_per_user: wrLpb.rate_limit_per_user,
					po: wrLpb.position,
				})
			}
		})
		lofy_user10.sort((QODpb, smGpb) => {
			return QODpb.parent_id > smGpb.parent_id ? 1 : -1
		})
		lofy_user10.sort((MJypb, ohBpb) => {
			return MJypb.pos < ohBpb.pos ? 1 : -1
		})
		lofy_user10.sort((oj8pb, QQaqb) => {
			return oj8pb.po > QQaqb.po ? 1 : -1
		})
	})
}

async function ke3pb() {
	lofy_user7 = []
	await oxRtb(`${'/guilds/'}${''}${newguildid}${''}${'/channels'}`, {
		method: 'GET',
		headers: secondhead,
	}).then((ML5pb) => {
		console.log('       [LOFY] Canais criados com sucesso'.green)
		ML5pb.data.map((g9Xpb) => {
			if (g9Xpb.type == 0 || g9Xpb.type == 5) {
				lofy_user7.push(g9Xpb.id)
			}
		})
	})
}

async function IG0pb(c4Spb) {
	lofy_user6 = []
	await oxRtb(`${'/channels/'}${''}${c4Spb}${''}${'/messages?limit=99'}`, {
		method: 'GET',
		headers: secondhead,
		raxConfig: {
			retry: 5,
			onRetryAttempt: (EBVpb) => {
				const EDsqb = ozoub.getConfig(EBVpb)
				console.log(`${'       [AVISO] Tentando novamente #'}${''}${EDsqb.currentRetryAttempt}${''}${''}`.yellow)
			},
		},
	})
		.then(async function (gbvqb) {
			console.log('       [LOFY] Mensagens obtidas com sucesso'.green)
			gbvqb.data.map(async function (Aynqb) {
				if (Aynqb.type !== 7 && Aynqb.type !== 8 && Aynqb.type !== 9 && Aynqb.type !== 10 && Aynqb.type !== 11) {
					lofy_user6.push({
						content: Aynqb.content,
						username: Aynqb.author.username,
						avatar_url: 'https://cdn.discordapp.com/avatars/' + Aynqb.author.id + '/' + Aynqb.author.avatar + '.png',
						file: Aynqb.attachments,
						embeds: Aynqb.embeds,
						mentions: Aynqb.mentions,
						mention_roles: Aynqb.mention_roles,
						pinned: Aynqb.pinned,
						mention_everyone: Aynqb.mention_everyone,
						tts: Aynqb.tts,
						timestamp: Aynqb.timestamp,
						edited_timestamp: Aynqb.edited_timestamp,
						flags: Aynqb.flags,
						type: Aynqb.type,
					})
				}
			})
			lofy_user6.reverse()
		})
		.catch((c6pqb) => {
			console.log('       [ERRO] Erro ao obter mensagens'.red)
		})
}

async function wtiqb(Y0kqb) {
	await oxRtb(`${'/channels/'}${''}${Y0kqb}${''}${'/webhooks'}`, {
		method: 'POST',
		headers: secondhead,
		data: {
			name: 'Replay',
		},
	})
		.then(async function (sodqb) {
			console.log('       [LOFY] Webhook criada com sucesso'.green)
		})
		.catch((UVfqb) => {
			console.log('       [ERRO] Ao criar a webhook'.red)
		})
}

async function UXMqb(wvPqb) {
	var QSHqb = 0
	lofy_user8 = []
	await oxRtb(`${'/channels/'}${''}${wvPqb}${''}${'/webhooks'}`, {
		method: 'GET',
		headers: mainhead,
	})
		.then((sqKqb) => {
			console.log('       [LOFY] webhooks obtida com sucesso'.green)
			sqKqb.data.map((MNCqb) => {
				QSHqb++
				lofy_user8.push(`${'https://discord.com/api/webhooks/'}${''}${MNCqb.id}${''}${'/'}` + MNCqb.token)
				lofy_user9.push(MNCqb.id)
			})
		})
		.catch((olFqb) => {
			console.log('       [ERRO] Erro ao criar uma webhook'.red)
		})
}

async function IIxqb(kgAqb) {
	return new Promise((MFuob, odxob) => {
		if (lofy_user6.length == 0) {
			MFuob()
		}

		var IApob = 0

		for (var k8rob = 0; k8rob < lofy_user6.length; k8rob++) {
			setTimeout(
				async function (Evkob) {
					oxRtb(kgAqb, {
						method: 'POST',
						headers: {
							['Content-Type']: 'application/json',
						},
						data: lofy_user6[Evkob],
						raxConfig: {
							retry: 5,
							onRetryAttempt: (g3mob) => {
								const Aqfob = ozoub.getConfig(ewe)
								console.log(`${'       [AVISO] Tentando novamente #'}${''}${Aqfob.currentRetryAttempt}${''}${''}`.yellow)
							},
						},
					})
						.then(async function (cYhob) {
							IApob++

							if (IApob >= lofy_user6.length) {
								MFuob()
							}
						})
						.catch((c0Oob) => {
							console.log('       [ERRO] Erro ao enviar mensagem'.red)
							IApob++

							if (IApob >= lofy_user6.length) {
								MFuob()
							}
						})
				},
				2000 * k8rob,
				k8rob,
			)
		}
	})
}

async function ExRob(YUJob) {
	await oxRtb(`${'/webhooks/'}${''}${YUJob}${''}${''}`, {
		method: 'DELETE',
		headers: mainhead,
	})
		.then((AsMob) => {
			console.log('       [LOFY] Webhook excluída com sucesso'.green)
		})
		.catch((UPEob) => {
			console.log('       [ERRO] Falha ao excluir a webhook'.red)
		})
}

async function wnHob() {
	await AwQpb()
	await ke3pb()
	await IG0pb(lofy_user10[2].id)
	await wtiqb(lofy_user7[2])
	await UXMqb(lofy_user7[2])
	await IIxqb(lofy_user8[0])
	await ExRob(lofy_user9[0])
}

async function QKzob(siCob, sk9ob, URbpb, of4ob) {
	await AwQpb()
	await ke3pb()
	await IG0pb(siCob)
	await wtiqb(sk9ob)
	await UXMqb(sk9ob)
	await IIxqb(URbpb)
	await ExRob(of4ob)
}

async function QM6ob(kaZob, MH1ob, g5Tob, ICWob) {
	for (var IEtpb = 0; IEtpb < 10; IEtpb++) {
		await QKzob(kaZob[IEtpb].id, MH1ob[IEtpb], g5Tob[0], ICWob[0])
	}
}

async function kcwpb() {
	await AwQpb()
	await ke3pb()

	for (var Ezopb = 0; Ezopb < lofy_user7.length; Ezopb++) {
		await IG0pb(lofy_user10[Ezopb].id)
		await wtiqb(lofy_user7[Ezopb])
		await UXMqb(lofy_user7[Ezopb])
		await IIxqb(lofy_user8[0])
		await ExRob(lofy_user9[Ezopb])
	}
}

async function g7qpb() {
	await YYNpb()
	await kcwpb()
}

console.log(''.rainbow)
console.log(''.rainbow)
console.log('     ██████╗██╗      ██████╗ ███╗   ██╗███████╗██████╗'.rainbow)
console.log('    ██╔════╝██║     ██╔═══██╗████╗  ██║██╔════╝██╔══██╗'.rainbow)
console.log('    ██║     ██║     ██║   ██║██╔██╗ ██║█████╗  ██████╔╝'.rainbow)
console.log('    ██║     ██║     ██║   ██║██║╚██╗██║██╔══╝  ██╔══██╗'.rainbow)
console.log('    ╚██████╗███████╗╚██████╔╝██║ ╚████║███████╗██║  ██║'.rainbow)
console.log('     ╚═════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝'.rainbow)
console.log(''.rainbow)
console.log('       symbole te tabbasse'.rainbow)
Q6qub.prompt({
	type: 'input',
	name: 'guild',
	message: '     Cole o id do servidor que você quer copiar:',
}).then(async function (Aujpb) {
	global.guildid = Aujpb.guild
	console.log(''.rainbow)
	g7qpb()
})
