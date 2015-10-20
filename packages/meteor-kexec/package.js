Package.describe({
  summary: "Wrapper around the kexec npm package",
  version: '1.2.0_1',
  name: 'ghughes:kexec',
  git: 'https://github.com/meteor/meteor_kexec.git',
  documentation: null
});

Npm.depends({
  kexec: '1.2.0'
});

Package.onUse(function (api) {
  api.export('NpmModuleKexec', 'server');
  api.addFiles('wrapper.js', 'server');
});
