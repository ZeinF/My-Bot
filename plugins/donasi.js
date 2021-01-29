let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088235435804]
│ • Telkomsel [082154994100]
│ • Gopay [081357302007]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282154994100
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
