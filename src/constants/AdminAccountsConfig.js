const adminMap = {
  prod: "LKOVbOpgp1S8wdfyhh95azx5FvO2",
  preprod: "LKOVbOpgp1S8wdfyhh95azx5FvO2",
  dev: "LKOVbOpgp1S8wdfyhh95azx5FvO2"
}

const adminUid = adminMap[process.env.NEXT_PUBLIC_STAGE]

export default adminUid

export function isAdmin(uid) {
  return adminUid === uid
}