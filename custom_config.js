Hooks.on('ready', () => {
	CONFIG.DND5E.weaponProperties['covert'] = 'Covert';
	CONFIG.DND5E.weaponProperties['auto'] = 'Auto';
    CONFIG.DND5E.weaponProperties['burst'] = 'Burst';
    CONFIG.DND5E.weaponProperties['doubletap'] = 'Double Tap';

    CONFIG.DND5E.physicalDamageTypes['ballistics'] = 'Ballistics';

    CONFIG.DND5E.skills['tek'] = { label: "Technology", ability: "int" };
});