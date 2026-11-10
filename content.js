/* Study content. Each chapter has levels; each level is a list of questions:
   [question, [option A, B, C, D], index of correct option (0-3), explanation, optional hint]
   To add harder questions, append a new level array to a chapter. To add a subject, fill its chapters list. */
window.CONTENT = {
 "subjects": [
  {
   "id": "physics",
   "name": "Physics",
   "chapters": [
    {
     "n": 1,
     "t": "Electric Charges and Fields",
     "levels": [
      [
       [
        "Which of these charges can NOT exist on a body?",
        [
         "1.6 × 10⁻¹⁹ C",
         "3.2 × 10⁻¹⁹ C",
         "2.4 × 10⁻¹⁹ C",
         "4.8 × 10⁻¹⁹ C"
        ],
        2,
        "q = ne, so the charge must be a whole-number multiple of 1.6 × 10⁻¹⁹ C. 2.4 × 10⁻¹⁹ C is 1.5e, which is not allowed.",
        "Charge is quantised: q = ne."
       ],
       [
        "Two point charges repel with force F. If each charge is doubled and the distance is halved, the new force is:",
        [
         "4F",
         "8F",
         "16F",
         "F"
        ],
        2,
        "F ∝ q₁q₂/r². Doubling both charges gives ×4, and halving r gives ×4, so the force becomes 16F."
       ],
       [
        "Which statement about electrostatic field lines is FALSE?",
        [
         "They start on positive charges and end on negative charges",
         "Two field lines never cross",
         "They can form closed loops",
         "They are closer together where the field is stronger"
        ],
        2,
        "Electrostatic field lines never form closed loops, because the electrostatic field is conservative. Magnetic field lines do form closed loops."
       ],
       [
        "A closed surface encloses charges +q and −q. The net electric flux through it is:",
        [
         "2q/ε₀",
         "q/ε₀",
         "Zero",
         "Depends on the shape of the surface"
        ],
        2,
        "By Gauss’s law, flux = (net enclosed charge)/ε₀. The net enclosed charge is zero, so the flux is zero, whatever the shape."
       ],
       [
        "An electric dipole is placed in a uniform field E with its dipole moment at 90° to E. The net force and torque are:",
        [
         "Force zero, torque pE",
         "Force pE, torque zero",
         "Both zero",
         "Both maximum"
        ],
        0,
        "In a uniform field the forces on +q and −q cancel, so the net force is zero. The torque is τ = pE sin θ, which equals pE at 90°."
       ],
       [
        "For a short dipole, at the same distance r, what is the ratio of the axial field to the equatorial field (magnitudes)?",
        [
         "1 : 1",
         "2 : 1",
         "1 : 2",
         "4 : 1"
        ],
        1,
        "E(axial) = 2kp/r³ and E(equatorial) = kp/r³, so the ratio is 2 : 1. The two fields also point in opposite directions."
       ],
       [
        "The field due to an infinitely long, uniformly charged straight wire varies with distance r as:",
        [
         "1/r²",
         "1/r",
         "Independent of r",
         "1/r³"
        ],
        1,
        "Gauss’s law with a cylindrical surface gives E = λ/(2πε₀r), so E ∝ 1/r."
       ],
       [
        "The electric field near a uniformly charged infinite plane sheet of surface charge density σ is:",
        [
         "σ/ε₀, decreasing with distance",
         "σ/2ε₀, independent of distance",
         "σ/2ε₀, decreasing with distance",
         "2σ/ε₀"
        ],
        1,
        "E = σ/2ε₀, and it does not depend on the distance from the sheet. A favourite one-mark question."
       ],
       [
        "What is the electric field inside a uniformly charged thin spherical shell?",
        [
         "Maximum at the centre",
         "kq/R²",
         "Zero",
         "Increases linearly with r"
        ],
        2,
        "A Gaussian sphere drawn inside the shell encloses no charge, so the field inside is zero everywhere."
       ],
       [
        "A charge q is at the centre of a cube. The electric flux through ONE face is:",
        [
         "q/ε₀",
         "q/6ε₀",
         "q/4ε₀",
         "6q/ε₀"
        ],
        1,
        "The total flux is q/ε₀, shared equally by 6 faces, so one face gets q/6ε₀.",
        "By symmetry, all six faces share the flux equally."
       ],
       [
        "Electrostatics is the study of:",
        [
         "forces on charges moving with a constant velocity",
         "forces, fields and potentials arising from static charges",
         "magnetic fields produced by steady currents",
         "charges flowing through a conductor"
        ],
        1,
        "Static means not changing with time, so electrostatics deals with forces, fields and potentials due to charges at rest."
       ],
       [
        "A glass rod is rubbed with silk. Which statement is correct?",
        [
         "Protons pass from the rod to the silk, so the rod becomes positive",
         "Electrons pass from the silk to the rod, so the rod becomes negative",
         "New positive charge is created on the rod and new negative charge on the silk",
         "Electrons pass from the rod to the silk, so the rod becomes positive and the silk negative"
        ],
        3,
        "Loosely bound electrons move from glass to silk. No new charge is created, and only a tiny fraction of the electrons is transferred."
       ],
       [
        "In a gold-leaf electroscope, a charged body touches the metal knob and the leaves diverge. This is because:",
        [
         "charge flows on to both leaves, which then repel each other",
         "the leaves acquire charges of opposite sign and attract each other",
         "the glass box attracts the two leaves",
         "the knob becomes neutral and the leaves become heavier"
        ],
        0,
        "Both leaves get the same kind of charge and repel. The greater the divergence, the greater the charge."
       ],
       [
        "Why does a plastic comb get charged on rubbing, but a metal spoon held in the bare hand does not?",
        [
         "Metals have no electrons that can be transferred",
         "Plastic has more electrons than metal",
         "The charge on the metal leaks through the body to the ground, as both are conductors",
         "Rubbing cannot transfer charge to a metal"
        ],
        2,
        "Charge on a conductor flows away through the body to earth. On an insulator it stays where it is."
       ],
       [
        "Two charged spheres can be treated as point charges when:",
        [
         "they are made of metal",
         "their sizes are much larger than the distance between them",
         "their sizes are very small compared with the distance between them",
         "they carry equal charges"
        ],
        2,
        "A body is a point charge when its size is negligible compared with the separation, so all its charge may be taken at one point."
       ],
       [
        "A system has charges +3 nC, −5 nC, +4 nC, −2 nC and +6 nC. Its total charge is:",
        [
         "+6 nC",
         "−6 nC",
         "+20 nC",
         "+13 nC"
        ],
        0,
        "Charges add algebraically with their signs: 3 − 5 + 4 − 2 + 6 = +6 nC."
       ],
       [
        "A glass rod rubbed with silk gains a charge of +3.2 × 10⁻⁹ C. The charge on the silk is:",
        [
         "+3.2 × 10⁻⁹ C",
         "zero",
         "−6.4 × 10⁻⁹ C",
         "−3.2 × 10⁻⁹ C"
        ],
        3,
        "Charge is conserved: what one body gains the other loses, so the total of rod and silk stays zero."
       ],
       [
        "Three equal charges q sit at the vertices of an equilateral triangle, and a charge Q of the same sign is at its centroid. The net force on Q is:",
        [
         "directed towards one vertex",
         "zero",
         "directed away from the nearest side",
         "3Qq/(4πε₀l²), where l is the side"
        ],
        1,
        "The three equal forces (each 3Qq/4πε₀l²) act at 120° to each other, so they cancel by the superposition principle (NCERT Example 1.5)."
       ],
       [
        "A charge Q feels a force of 3 N due to charge q₁ and 4 N due to charge q₂, the two forces being at right angles. The net force on Q is:",
        [
         "5 N",
         "7 N",
         "1 N",
         "12 N"
        ],
        0,
        "By superposition each force is unaffected by the other charge, and they add as vectors: √(3² + 4²) = 5 N."
       ],
       [
        "What is the electric field at a distance of 30 cm from a point charge of 2 µC?",
        [
         "6 × 10⁴ N/C",
         "6 × 10⁵ N/C",
         "2 × 10⁵ N/C",
         "2 × 10⁶ N/C"
        ],
        2,
        "E = kq/r² = (9 × 10⁹ × 2 × 10⁻⁶)/(0.3)² = 2 × 10⁵ N/C."
       ],
       [
        "A −2 µC charge is placed at a point where the electric field is 5 × 10³ N/C towards the east. The force on it is:",
        [
         "1.0 × 10⁻² N towards the east",
         "1.0 × 10⁻² N towards the west",
         "2.5 × 10⁻³ N towards the west",
         "1.0 × 10⁻⁸ N towards the west"
        ],
        1,
        "F = qE, so its magnitude is 2 × 10⁻⁶ × 5 × 10³ = 10⁻² N. The charge is negative, so the force is opposite to E."
       ],
       [
        "A charge +q and a charge −q lie on a line, and a point P is exactly midway between them, at distance d from each. The electric field at P is:",
        [
         "zero",
         "kq/d², directed towards −q",
         "2kq/d², directed towards +q",
         "2kq/d², directed towards −q"
        ],
        3,
        "At P the field of +q points away from +q, and that of −q points towards −q. These are the same direction, so the two fields add."
       ],
       [
        "Which statement about the electric field is correct?",
        [
         "It is a scalar field because charge is a scalar",
         "It exists only at points where a test charge is placed",
         "A change in the source charge is felt instantly at any distance",
         "It is a property of the source charges and does not depend on the test charge used to find it"
        ],
        3,
        "E = F/q does not depend on q, and the field exists at every point in space. Changes spread at the speed of light, not instantly."
       ],
       [
        "The electric flux through a plane area of 0.5 m² in a uniform field of 200 N/C, when the normal to the area makes 60° with the field, is:",
        [
         "100 N m² C⁻¹",
         "50 N m² C⁻¹",
         "86.6 N m² C⁻¹",
         "zero"
        ],
        1,
        "φ = E S cos θ = 200 × 0.5 × cos 60° = 50 N m² C⁻¹."
       ],
       [
        "Charges +2 µC and −2 µC are 4 mm apart. Their dipole moment is:",
        [
         "8 × 10⁻⁹ C m, directed from +2 µC to −2 µC",
         "4 × 10⁻⁹ C m, directed from −2 µC to +2 µC",
         "8 × 10⁻⁹ C m, directed from −2 µC to +2 µC",
         "zero, because the total charge is zero"
        ],
        2,
        "p = q × 2a = 2 × 10⁻⁶ × 4 × 10⁻³ = 8 × 10⁻⁹ C m. By convention, p points from the negative to the positive charge."
       ],
       [
        "Which of these molecules has a permanent electric dipole moment?",
        [
         "H₂O",
         "CO₂",
         "CH₄",
         "None of them; only ions can have a dipole moment"
        ],
        0,
        "In H₂O the centres of positive and negative charge do not coincide, so it is a polar molecule. In CO₂ and CH₄ they coincide."
       ],
       [
        "A sphere of radius 10 cm carries a charge of 4π × 10⁻⁸ C spread uniformly over its surface. The surface charge density is:",
        [
         "4 × 10⁻⁶ C m⁻²",
         "10⁻⁶ C m⁻²",
         "10⁻⁴ C m⁻²",
         "10⁻⁸ C m⁻²"
        ],
        1,
        "σ = Q/area = 4π × 10⁻⁸ / (4π × 0.1²) = 10⁻⁶ C m⁻²."
       ],
       [
        "Gauss’s law is a convenient way to find the electric field when:",
        [
         "all the charges present are of the same sign",
         "there are only a few charges",
         "the electric field is zero everywhere",
         "the charge distribution has high symmetry, so a suitable Gaussian surface can be chosen"
        ],
        3,
        "With spherical, cylindrical or planar symmetry, E has constant magnitude and a fixed direction on the Gaussian surface, so E comes out of the flux integral."
       ]
      ],
      [
       [
        "On a dry day, a student slides along a synthetic car seat and gets a shock on touching the metal door handle. Which explanation is correct?",
        [
         "Rubbing moved electrons between the insulating surfaces, so charge built up on her body and discharged through the conductor on touching the metal",
         "Rubbing created new net charge out of nothing on the seat, which then flowed to the handle",
         "Metals are insulators, so charge on the handle jumped across to her",
         "Only protons can be transferred by rubbing, and they discharged through the door"
        ],
        0,
        "Charge accumulated on insulating surfaces by rubbing discharges through the body when it touches a conductor. Charge is only transferred, never created."
       ],
       [
        "Assertion (A): When a glass rod is rubbed with silk, the glass rod becomes positively charged.\nReason (R): Protons are transferred from the silk cloth to the glass rod.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Glass loses electrons to silk and so becomes positive. Protons are bound in nuclei and are not transferred, so R is false."
       ],
       [
        "When a glass rod is rubbed with silk, 3 × 10¹² electrons pass from the rod to the silk. The charges on the rod and the silk are respectively:",
        [
         "−4.8 × 10⁻⁷ C and +4.8 × 10⁻⁷ C",
         "+4.8 × 10⁻⁷ C and +4.8 × 10⁻⁷ C",
         "+4.8 × 10⁻⁷ C and −4.8 × 10⁻⁷ C",
         "+9.6 × 10⁻⁷ C and −9.6 × 10⁻⁷ C"
        ],
        2,
        "q = ne = 3 × 10¹² × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻⁷ C. The rod loses electrons (positive), the silk gains them (negative), and the total stays zero."
       ],
       [
        "Assertion (A): A metal rod with a plastic handle can be charged by rubbing if it is held by the handle, but a metal spoon held in the bare hand cannot.\nReason (R): Electric charge is quantised.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "A is true because the charge on a spoon leaks through the body to the ground, while the plastic handle blocks that path. Quantisation is true but has nothing to do with it."
       ],
       [
        "Coulomb’s law in the form F = kq₁q₂/r² can be applied directly to which pair?",
        [
         "Two metal spheres of radius 10 cm with centres 25 cm apart",
         "Two long charged rods, each 1 m long, kept 10 cm apart",
         "Two small beads of diameter 1 mm kept 20 cm apart",
         "Two large charged plates of side 50 cm kept 1 cm apart"
        ],
        2,
        "The formula holds for point charges, i.e. when the sizes are much smaller than the separation. Only the small beads satisfy this."
       ],
       [
        "A student finds the total charge of +5 nC, −3 nC, +2 nC and −8 nC as 5 + 3 + 2 + 8 = 18 nC. What is the error?",
        [
         "Charge is a scalar that adds algebraically with its sign, so the total is −4 nC",
         "Charges add as vectors, so the answer depends on their directions",
         "Only positive charges count, so the total is +7 nC",
         "Negative charges must be added and positive ones subtracted, so the total is +4 nC"
        ],
        0,
        "Total charge = (+5) + (−3) + (+2) + (−8) = −4 nC. Charge has magnitude but no direction, and the signs must be kept."
       ],
       [
        "A student says: When a neutron turns into a proton and an electron, charge is not conserved, because two charged particles appear from a neutral one. What is wrong with this?",
        [
         "Charged particles can never be created, so such a decay cannot happen",
         "The electron produced is positive, so the total charge becomes +2e",
         "Charge conservation applies only to charging by rubbing",
         "The proton (+e) and electron (−e) have equal and opposite charges, so the net charge stays zero; charged particles may be created, but net charge cannot"
        ],
        3,
        "Conservation of charge refers to the net charge of an isolated system. The pair created has zero net charge, the same as the neutron."
       ],
       [
        "Electrons leave a body at the rate of 10¹¹ per second. How long does it take the body to collect a charge of 1 µC?",
        [
         "6.25 s",
         "62.5 s",
         "625 s",
         "1.6 s"
        ],
        1,
        "Charge per second = 10¹¹ × 1.6 × 10⁻¹⁹ = 1.6 × 10⁻⁸ C. Time = 10⁻⁶ / 1.6 × 10⁻⁸ = 62.5 s (NCERT Example 1.1 method).",
        "Find the charge leaving per second first."
       ],
       [
        "An oil drop of mass 4.8 × 10⁻¹⁵ kg hangs at rest in a uniform vertical electric field of 9.8 × 10⁴ N/C (g = 9.8 m/s²). The number of excess electrons on the drop is:",
        [
         "3",
         "2",
         "4",
         "6"
        ],
        0,
        "qE = mg gives q = 4.8 × 10⁻¹⁹ C. Since q = ne, n = 4.8 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ = 3.",
        "Balance the electric force against the weight, then use q = ne."
       ],
       [
        "Two identical metal spheres carry +8 µC and −2 µC. They are touched together and then placed with centres 30 cm apart. The force between them is:",
        [
         "0.9 N, attractive",
         "1.6 N, attractive",
         "0.9 N, repulsive",
         "2.5 N, repulsive"
        ],
        2,
        "By symmetry the charge (8 − 2) = 6 µC splits equally, 3 µC each. F = 9 × 10⁹ × (3 × 10⁻⁶)² / (0.3)² = 0.9 N, repulsive.",
        "Identical spheres share the net charge equally."
       ],
       [
        "A charge Q is divided into two parts q and (Q − q), which are then placed a fixed distance apart. For the force between them to be maximum, q must be:",
        [
         "Q/4",
         "Q/2",
         "Q/3",
         "2Q/3"
        ],
        1,
        "F ∝ q(Q − q), which is maximum when q = Q/2. The maximum force is kQ²/4r².",
        "F ∝ q(Q − q)."
       ],
       [
        "A +2 µC charge is at x = 0 and a −2 µC charge is at x = 0.3 m, both on the x-axis. The force on a +1 µC charge at x = 0.1 m is:",
        [
         "1.35 N towards +x",
         "2.25 N towards −x",
         "1.8 N towards +x",
         "2.25 N towards +x"
        ],
        3,
        "The +2 µC repels it: 9 × 10⁹ × 2 × 10⁻⁶ × 10⁻⁶ / (0.1)² = 1.8 N towards +x. The −2 µC attracts it: 0.45 N, also towards +x. The total is 2.25 N."
       ],
       [
        "Equal charges q are placed at three corners of a square of side a. The force on an identical charge q at the fourth corner is:",
        [
         "(√2 + 2) kq²/a²",
         "3kq²/a²",
         "(√2 − ½) kq²/a²",
         "(√2 + ½) kq²/a²"
        ],
        3,
        "The two adjacent charges give forces kq²/a² at right angles, with resultant √2 kq²/a². The diagonal charge gives kq²/2a² in the same direction, so the total is (√2 + ½)kq²/a²."
       ],
       [
        "An electron is released from rest in a uniform electric field of 910 N/C. How long does it take to reach a speed of 8 × 10⁶ m/s (ignore gravity)?",
        [
         "1 × 10⁻⁷ s",
         "5 × 10⁻⁸ s",
         "2.5 × 10⁻⁸ s",
         "5 × 10⁻⁹ s"
        ],
        1,
        "a = eE/m = 1.6 × 10⁻¹⁹ × 910 / 9.1 × 10⁻³¹ = 1.6 × 10¹⁴ m/s². Then t = v/a = 8 × 10⁶ / 1.6 × 10¹⁴ = 5 × 10⁻⁸ s.",
        "a = eE/m, then t = v/a."
       ],
       [
        "Two positive charges, 4 µC and 1 µC, are 30 cm apart. The electric field is zero at a point:",
        [
         "10 cm from the 4 µC charge, between the charges",
         "15 cm from the 4 µC charge, at the midpoint",
         "20 cm from the 4 µC charge, between the charges",
         "60 cm from the 4 µC charge, beyond the 1 µC charge"
        ],
        2,
        "Between the charges the fields oppose: 4/x² = 1/(0.3 − x)², so x = 0.2 m. Beyond the 1 µC charge both fields point the same way and cannot cancel."
       ],
       [
        "Charges +q, +q, +q and −q are at the four corners of a square of side a, with −q diagonally opposite one of the +q charges. The magnitude of the field at the centre is:",
        [
         "4kq/a²",
         "0",
         "2kq/a²",
         "8kq/a²"
        ],
        0,
        "Each charge is a/√2 from the centre, so each field is kq/(a²/2) = 2kq/a². The two +q charges on one diagonal cancel. The +q and −q on the other diagonal give fields in the same direction, so the total is 4kq/a²."
       ],
       [
        "Charge q₁ is suddenly shaken. Charge q₂ is 4.5 × 10⁸ m from it. The earliest time at which q₂ feels a changed force is:",
        [
         "0 s, because the force is instantaneous",
         "1.5 s",
         "3.0 s",
         "0.67 s"
        ],
        1,
        "Changes in the field travel at the speed of light, c = 3 × 10⁸ m/s. t = 4.5 × 10⁸ / 3 × 10⁸ = 1.5 s."
       ],
       [
        "A student draws electric field lines for some static charges. Which feature shows that the drawing cannot be an electrostatic field?",
        [
         "Lines crowded close together near a point charge",
         "Lines that start on a positive charge and end on a negative charge",
         "Equally spaced parallel straight lines in a region",
         "A line that leaves a positive charge and curves back to end on the same charge"
        ],
        3,
        "Electrostatic field lines never form closed loops, since the electrostatic field is conservative. The other features are all allowed."
       ],
       [
        "A student writes: The plane surface of area 2 m² makes 30° with a uniform field of 100 N/C, so φ = 100 × 2 × cos 30° = 173 N m² C⁻¹. What is the error?",
        [
         "The 30° is between the surface and the field, not between the normal and the field; the correct flux is 100 N m² C⁻¹",
         "There is no error; the flux is 173 N m² C⁻¹",
         "Area is a scalar, so no angle is needed and the flux is 200 N m² C⁻¹",
         "The flux through an inclined surface is always zero"
        ],
        0,
        "In φ = ES cos θ, θ is the angle between E and the normal. Here θ = 60°, so φ = 100 × 2 × 0.5 = 100 N m² C⁻¹."
       ],
       [
        "Two identical dipoles, each of dipole moment p, have the same centre and their axes are at right angles. Together they behave like a single dipole of moment:",
        [
         "2p, along either axis",
         "p, along the bisector",
         "√2 p, along the bisector of the two axes",
         "p/√2, along the bisector"
        ],
        2,
        "Dipole moment is a vector, and fields superpose. The resultant of two perpendicular vectors of magnitude p is √(p² + p²) = √2 p."
       ],
       [
        "A short dipole has p = 3 × 10⁻⁹ C m. The electric fields at 30 cm from its centre on its axis and on its equatorial line are respectively:",
        [
         "1000 N/C along p, and 2000 N/C opposite to p",
         "2000 N/C along p, and 1000 N/C along p",
         "2000 N/C along p, and 1000 N/C opposite to p",
         "6000 N/C along p, and 3000 N/C opposite to p"
        ],
        2,
        "kp/r³ = 9 × 10⁹ × 3 × 10⁻⁹ / (0.3)³ = 1000 N/C. The axial field is twice this, along p. The equatorial field is this value, opposite to p.",
        "Axial 2kp/r³, equatorial kp/r³."
       ],
       [
        "A short dipole has charges ±q separated by 2a. If q is doubled and 2a is halved, the field at the same large distance on its axis:",
        [
         "remains the same",
         "doubles",
         "becomes half",
         "becomes four times"
        ],
        0,
        "For r ≫ a the field depends only on p = q × 2a (E = 2p/4πε₀r³). Doubling q and halving 2a leaves p unchanged."
       ],
       [
        "Which statement is correct?",
        [
         "CH₄ has a permanent dipole moment but CO₂ does not",
         "H₂O has no dipole moment because the molecule is neutral",
         "CO₂ and CH₄ stay non-polar even in a strong electric field",
         "CO₂ has no dipole moment without a field, but acquires one when a field is applied, whereas H₂O has a permanent dipole moment"
        ],
        3,
        "In CO₂ and CH₄ the centres of positive and negative charge coincide, so p = 0, but a field induces a dipole moment. In H₂O they do not coincide, so it is polar."
       ],
       [
        "A dipole of moment 4 × 10⁻⁹ C m is placed in a uniform field of 5 × 10⁴ N/C at 30° to the field. The net force and the torque are:",
        [
         "net force zero; torque 1.7 × 10⁻⁴ N m",
         "net force zero; torque 1.0 × 10⁻⁴ N m",
         "net force zero; torque 2.0 × 10⁻⁴ N m",
         "net force 2 × 10⁻⁴ N; torque 1.0 × 10⁻⁴ N m"
        ],
        1,
        "In a uniform field the forces on the two charges cancel. τ = pE sin θ = 4 × 10⁻⁹ × 5 × 10⁴ × 0.5 = 1.0 × 10⁻⁴ N m."
       ],
       [
        "A charged comb attracts small uncharged bits of paper. Which explanation is correct?",
        [
         "The comb’s field induces a dipole moment in the paper, and because the field is non-uniform, the dipole feels a net force towards the comb",
         "The paper carries a net charge opposite to that of the comb",
         "A uniform field of the comb exerts a net force on the induced dipole",
         "The comb’s field only twists the paper and gives no net force"
        ],
        0,
        "A dipole in a non-uniform field feels a net force. The induced dipole lines up with the field, so the force is towards the stronger field near the comb."
       ],
       [
        "A thin wire is bent into a circle of radius 0.5 m and carries a uniform linear charge density of 2 µC/m. The total charge on it is:",
        [
         "3.14 µC",
         "12.6 µC",
         "6.28 µC",
         "1.0 µC"
        ],
        2,
        "Q = λ × length = 2 × 10⁻⁶ × 2π × 0.5 = 6.28 × 10⁻⁶ C."
       ],
       [
        "A closed surface encloses charges +3 nC, −5 nC and +4 nC, and a charge of +10 nC lies outside it. The net flux through the surface is about:",
        [
         "1.36 × 10³ N m² C⁻¹",
         "2.26 × 10² N m² C⁻¹",
         "1.13 × 10³ N m² C⁻¹",
         "zero"
        ],
        1,
        "Only the enclosed charge counts: q = 3 − 5 + 4 = 2 nC. φ = q/ε₀ = 2 × 10⁻⁹ / 8.85 × 10⁻¹² ≈ 226 N m² C⁻¹."
       ],
       [
        "Assertion (A): If the net electric flux through a closed surface is zero, the electric field must be zero at every point on that surface.\nReason (R): By Gauss’s law, the flux through a closed surface equals the net enclosed charge divided by ε₀.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Zero flux only means zero net enclosed charge. The field at points of the surface can be non-zero, for example with a dipole inside or charges outside, so A is false while R is true."
       ],
       [
        "Gauss’s law can be used directly to find the electric field of:",
        [
         "an electric dipole",
         "a charged rod of finite length",
         "a uniformly charged square plate of side 10 cm",
         "a uniformly charged thin spherical shell"
        ],
        3,
        "The shell has spherical symmetry, so E is constant in magnitude and radial on a concentric Gaussian sphere. The other distributions lack such symmetry."
       ],
       [
        "A long straight wire carries 2 µC uniformly spread over 4 m. Ignoring end effects, the field 10 cm from the middle of the wire is:",
        [
         "4.5 × 10⁴ N/C",
         "9 × 10³ N/C",
         "1.8 × 10⁵ N/C",
         "9 × 10⁴ N/C"
        ],
        3,
        "λ = 2 µC / 4 m = 0.5 µC/m. E = λ/2πε₀r = 2 × 9 × 10⁹ × 0.5 × 10⁻⁶ / 0.1 = 9 × 10⁴ N/C."
       ],
       [
        "A large plane sheet has σ = 8.85 × 10⁻⁸ C m⁻². A 2 µC charge is placed 10 cm from it, and later 1 m from it. The force on the charge is:",
        [
         "2.0 × 10⁻² N at both distances",
         "1.0 × 10⁻² N at both distances",
         "1.0 × 10⁻² N at 10 cm and 1.0 × 10⁻⁴ N at 1 m",
         "2.0 × 10⁻² N at 10 cm and 2.0 × 10⁻³ N at 1 m"
        ],
        1,
        "E = σ/2ε₀ = 5000 N/C, independent of distance. F = qE = 2 × 10⁻⁶ × 5000 = 1.0 × 10⁻² N."
       ],
       [
        "Assertion (A): The electric field of an infinite uniformly charged plane sheet does not depend on the distance from the sheet.\nReason (R): For a Gaussian pillbox, Gauss’s law gives 2EA = σA/ε₀, in which the area A cancels and no distance appears.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Gauss’s law gives E = σ/2ε₀ with no distance term, which is exactly why E is the same at every distance."
       ],
       [
        "A thin spherical shell of radius 10 cm has σ = 8.85 × 10⁻⁶ C m⁻². The fields at 30 cm and at 5 cm from its centre are respectively:",
        [
         "1.0 × 10⁶ N/C and zero",
         "1.1 × 10⁵ N/C and 4.0 × 10⁶ N/C",
         "1.1 × 10⁵ N/C and zero",
         "1.0 × 10⁶ N/C and 1.1 × 10⁵ N/C"
        ],
        2,
        "Outside, E = σR²/ε₀r² = 10⁶ × (0.1)²/(0.3)² = 1.1 × 10⁵ N/C. Inside, the Gaussian sphere encloses no charge, so E = 0."
       ],
       [
        "A student says: A charged thin shell has all its charge on the surface, so inside it E = kq/R² at every point. What is wrong?",
        [
         "A Gaussian sphere inside the shell encloses no charge, so E = 0 everywhere inside",
         "The surface value is right, but E increases linearly with r inside",
         "Inside the shell E = kq/r², not kq/R²",
         "The shell has no charge inside, so E is undefined there"
        ],
        0,
        "By Gauss’s law, E × 4πr² = 0 for r < R, so the field inside a thin uniformly charged shell is zero."
       ]
      ]
     ]
    },
    {
     "n": 2,
     "t": "Electrostatic Potential and Capacitance",
     "levels": [
      [
       [
        "What is the work done in moving a charge q between two points on an equipotential surface?",
        [
         "qV",
         "Depends on the path",
         "Zero",
         "Infinite"
        ],
        2,
        "W = q(V₂ − V₁), and on an equipotential surface V₂ = V₁, so W = 0."
       ],
       [
        "At any point, the electric field relative to the equipotential surface through that point is:",
        [
         "Parallel to the surface",
         "Perpendicular to the surface, towards decreasing potential",
         "Perpendicular to the surface, towards increasing potential",
         "At 45° to the surface"
        ],
        1,
        "E = −dV/dr. The field is always perpendicular to equipotential surfaces and points towards decreasing potential."
       ],
       [
        "What is the potential at any point on the equatorial line of an electric dipole?",
        [
         "Maximum",
         "kp/r²",
         "Zero",
         "Infinite"
        ],
        2,
        "Every point on the equatorial line is equidistant from +q and −q, so their potentials cancel: V = 0. The field there is NOT zero."
       ],
       [
        "Inside a charged conductor in electrostatic equilibrium:",
        [
         "E = 0, V = 0",
         "E = 0, V = constant (same as surface)",
         "E constant, V = 0",
         "E maximum, V maximum"
        ],
        1,
        "E = 0 inside a conductor, so the potential has no gradient and is constant throughout, equal to the surface potential."
       ],
       [
        "A parallel plate capacitor has capacitance C in air. When the gap is completely filled with a dielectric of constant K, the capacitance becomes:",
        [
         "C/K",
         "C",
         "KC",
         "K²C"
        ],
        2,
        "C = Kε₀A/d, so filling the gap with a dielectric multiplies the capacitance by K."
       ],
       [
        "A capacitor is charged and then disconnected from the battery. A dielectric slab (constant K) is then inserted. The stored energy:",
        [
         "Increases K times",
         "Decreases to 1/K",
         "Stays the same",
         "Becomes zero"
        ],
        1,
        "With the battery disconnected, Q stays the same. C becomes KC, so U = Q²/2C becomes U/K.",
        "Battery disconnected means Q stays constant. Use U = Q²/2C."
       ],
       [
        "2 µF and 3 µF capacitors are connected in series. The equivalent capacitance is:",
        [
         "1.2 µF",
         "5 µF",
         "6 µF",
         "0.83 µF"
        ],
        0,
        "1/C = 1/2 + 1/3 = 5/6, so C = 1.2 µF. The series value is always less than the smallest capacitor."
       ],
       [
        "A 12 pF capacitor is connected to a 50 V battery. What is the energy stored?",
        [
         "3.0 × 10⁻⁸ J",
         "1.5 × 10⁻⁸ J",
         "6.0 × 10⁻¹⁰ J",
         "1.5 × 10⁻¹⁰ J"
        ],
        1,
        "U = ½CV² = ½ × 12 × 10⁻¹² × 50² = 1.5 × 10⁻⁸ J. (NCERT Exercise 2.10)"
       ],
       [
        "Two positive charges are brought closer together. The potential energy of the system:",
        [
         "Increases",
         "Decreases",
         "Stays the same",
         "Becomes zero"
        ],
        0,
        "U = kq₁q₂/r is positive for like charges. Decreasing r increases U, because work is done against the repulsion."
       ],
       [
        "At a point near a point charge, V = 600 V and E = 200 N/C. How far is the point from the charge?",
        [
         "0.33 m",
         "1.5 m",
         "3 m",
         "9 m"
        ],
        2,
        "V = kq/r and E = kq/r², so V/E = r = 600/200 = 3 m.",
        "Divide V by E."
       ],
       [
        "The work done by the electrostatic force in moving a charge from one point to another depends on:",
        [
         "The path taken",
         "The speed of the charge",
         "The time taken",
         "Only the initial and final positions"
        ],
        3,
        "Electrostatic force is conservative, so the work depends only on the end points and not on the path."
       ],
       [
        "The electrostatic potential at a point is defined as the work done by an external agent in:",
        [
         "Bringing a unit positive charge from infinity to that point, without acceleration",
         "Bringing any charge from infinity to that point",
         "Taking a unit negative charge from that point to infinity",
         "Moving a unit positive charge around a closed loop"
        ],
        0,
        "Potential is work done per unit positive charge in bringing it slowly from infinity to the point (taking V = 0 at infinity)."
       ],
       [
        "Charges 4 µC and −1 µC are each 30 cm from a point P. The potential at P is:",
        [
         "1.5 × 10⁵ V",
         "1.2 × 10⁵ V",
         "9 × 10⁴ V",
         "0"
        ],
        2,
        "Potentials add as scalars: V = 9 × 10⁹ × (4 − 1) × 10⁻⁶ / 0.3 = 9 × 10⁴ V.",
        "Add the potentials with their signs."
       ],
       [
        "An electron is accelerated from rest through a potential difference of 100 V. Its gain in kinetic energy is:",
        [
         "1.6 × 10⁻¹⁹ J",
         "1.6 × 10⁻¹⁷ J",
         "1.6 × 10⁻²¹ J",
         "100 J"
        ],
        1,
        "ΔK = eΔV = 100 eV = 100 × 1.6 × 10⁻¹⁹ = 1.6 × 10⁻¹⁷ J."
       ],
       [
        "Two charges 2 nC and 3 nC are 6 cm apart, at points where an external field has potentials 50 V and 20 V respectively. The total potential energy of the system is:",
        [
         "9.0 × 10⁻⁷ J",
         "1.6 × 10⁻⁷ J",
         "7.4 × 10⁻⁷ J",
         "1.06 × 10⁻⁶ J"
        ],
        3,
        "U = q₁V(r₁) + q₂V(r₂) + q₁q₂/4πε₀r₁₂ = 1.0 × 10⁻⁷ + 6 × 10⁻⁸ + 9.0 × 10⁻⁷ = 1.06 × 10⁻⁶ J.",
        "Add the external-field terms to the mutual term."
       ],
       [
        "A dipole of moment 4 × 10⁻⁹ C m is in a uniform field of 5 × 10⁴ N/C, making 60° with the field. Taking U = 0 at 90°, its potential energy is:",
        [
         "+1.0 × 10⁻⁴ J",
         "−1.7 × 10⁻⁴ J",
         "−1.0 × 10⁻⁴ J",
         "−2.0 × 10⁻⁴ J"
        ],
        2,
        "U = −pE cosθ = −4 × 10⁻⁹ × 5 × 10⁴ × 0.5 = −1.0 × 10⁻⁴ J."
       ],
       [
        "Which of the following molecules is non-polar?",
        [
         "O₂",
         "HCl",
         "H₂O",
         "None; every molecule has a permanent dipole moment"
        ],
        0,
        "In O₂ the centres of positive and negative charge coincide, so there is no permanent dipole moment. HCl and H₂O are polar."
       ],
       [
        "The dipole moment per unit volume of a dielectric is called its:",
        [
         "Susceptibility",
         "Permittivity",
         "Dielectric constant",
         "Polarisation"
        ],
        3,
        "Polarisation P is the net dipole moment per unit volume; for linear dielectrics P = ε₀χₑE."
       ],
       [
        "A 5 µF capacitor carries a charge of 100 µC. The potential difference across it is:",
        [
         "500 V",
         "0.05 V",
         "20 V",
         "20 µV"
        ],
        2,
        "V = Q/C = 100 µC / 5 µF = 20 V."
       ],
       [
        "The maximum electric field a dielectric medium can withstand without breaking down is called its:",
        [
         "Permittivity",
         "Dielectric strength",
         "Dielectric constant",
         "Susceptibility"
        ],
        1,
        "This limit is the dielectric strength; for air it is about 3 × 10⁶ V m⁻¹."
       ],
       [
        "A parallel plate air capacitor has plates of area 0.01 m² separated by 1 mm. Its capacitance is about:",
        [
         "8.85 pF",
         "88.5 pF",
         "885 pF",
         "8.85 nF"
        ],
        1,
        "C = ε₀A/d = 8.85 × 10⁻¹² × 0.01 / 10⁻³ = 8.85 × 10⁻¹¹ F = 88.5 pF."
       ],
       [
        "Far from the edges, the electric field between the plates of a charged parallel plate capacitor (surface charge density ±σ) is:",
        [
         "σ/ε₀, uniform and directed from the positive to the negative plate",
         "σ/2ε₀, directed from the positive to the negative plate",
         "Zero",
         "2σ/ε₀, directed from the negative to the positive plate"
        ],
        0,
        "The fields of the two plates add between them to give σ/ε₀ and cancel outside."
       ],
       [
        "A 5 µF and a 10 µF capacitor are connected in parallel across a 12 V battery. The charge on the 10 µF capacitor is:",
        [
         "40 µC",
         "60 µC",
         "180 µC",
         "120 µC"
        ],
        3,
        "In parallel both have the same voltage, so Q = CV = 10 µF × 12 V = 120 µC."
       ],
       [
        "A cavity with no charge inside it lies within a conductor placed in an external electric field. The field inside the cavity is:",
        [
         "Equal to the external field",
         "Half the external field",
         "Zero, whatever the shape of the cavity",
         "Equal to the field at the surface of the conductor"
        ],
        2,
        "This is electrostatic shielding: the cavity is protected from outside electric influence."
       ],
       [
        "A charged conductor has surface charge density σ. The electric field just outside its surface is:",
        [
         "σ/2ε₀, normal to the surface",
         "σ/ε₀, normal to the surface",
         "Zero",
         "σ/ε₀, tangential to the surface"
        ],
        1,
        "E = (σ/ε₀) n̂ at the surface of a conductor, from Gauss’s law with a pill box."
       ]
      ],
      [
       [
        "A 2 µC charge is moved slowly from R to P against the repulsion of a fixed charge, the external agent doing 0.6 J of work. It is then released at P and returns to R under the electric force alone. Its kinetic energy on reaching R is:",
        [
         "0.6 J",
         "1.2 J",
         "Zero",
         "0.3 J"
        ],
        0,
        "The 0.6 J of external work is stored as potential energy. The electrostatic force is conservative, so the same 0.6 J returns as kinetic energy.",
        "Stored energy equals energy returned for a conservative force."
       ],
       [
        "An external agent does 4 mJ of work in bringing a 2 µC charge from infinity to a point P. The potential at another point Q is 1500 V. The work done by the external agent in taking the charge slowly from P to Q is:",
        [
         "+1 mJ",
         "−1 mJ",
         "+3 mJ",
         "−3 mJ"
        ],
        1,
        "V_P = 4 mJ / 2 µC = 2000 V. W = q(V_Q − V_P) = 2 × 10⁻⁶ × (−500) = −1 × 10⁻³ J.",
        "Find V at P first."
       ],
       [
        "The potential at a point 50 cm from a point charge is 360 V. The work done by an external agent in bringing a 5 nC charge slowly from 50 cm to 20 cm from the charge is:",
        [
         "4.5 × 10⁻⁶ J",
         "1.8 × 10⁻⁶ J",
         "2.7 × 10⁻⁶ J",
         "6.3 × 10⁻⁶ J"
        ],
        2,
        "V ∝ 1/r, so V at 20 cm = 360 × 50/20 = 900 V. W = q ΔV = 5 × 10⁻⁹ × (900 − 360) = 2.7 × 10⁻⁶ J.",
        "V is inversely proportional to r."
       ],
       [
        "A dipole has charges ±2 nC separated by 2 cm. Treating it as a point dipole, the potential at a point 40 cm from its centre, on a line making 60° with the dipole moment, is:",
        [
         "2.25 V",
         "1.95 V",
         "0.45 V",
         "1.125 V"
        ],
        3,
        "p = 2 × 10⁻⁹ × 0.02 = 4 × 10⁻¹¹ C m. V = p cosθ / 4πε₀r² = 9 × 10⁹ × 4 × 10⁻¹¹ × 0.5 / 0.16 = 1.125 V.",
        "Use V = p cosθ / (4πε₀r²)."
       ],
       [
        "A thin spherical shell of radius 10 cm carries a uniform charge of 2 µC. The work done by the electric field in moving a 1 nC charge from a point 30 cm from the centre to the centre of the shell is:",
        [
         "−1.2 × 10⁻⁴ J",
         "+1.2 × 10⁻⁴ J",
         "−1.8 × 10⁻⁴ J",
         "Zero, because the field inside is zero"
        ],
        0,
        "V at 30 cm = 6 × 10⁴ V. Inside, V equals the surface value 1.8 × 10⁵ V. W by field = q(V_i − V_f) = 10⁻⁹ × (6 × 10⁴ − 1.8 × 10⁵) = −1.2 × 10⁻⁴ J.",
        "Potential inside the shell equals the surface potential."
       ],
       [
        "Find the error. Two equal positive charges q are a distance d apart. A student says: the potential at the mid-point is zero because the fields of the two charges cancel there. The mistake is:",
        [
         "The field at the mid-point is not zero either",
         "Potentials add as scalars, so V = 4q/(4πε₀d), which is not zero",
         "The potential is 2q/(4πε₀d), taking the distance of each charge as d",
         "Nothing is wrong, since zero field always means zero potential"
        ],
        1,
        "Zero field does not imply zero potential. Each charge is d/2 away, so the two positive potentials add to 4q/(4πε₀d)."
       ],
       [
        "Assertion (A): The electric field at a point on an equipotential surface is tangential to the surface.\nReason (R): No work is done in moving a test charge along an equipotential surface.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: the field is normal to an equipotential surface. R is true, and it is the reason the field cannot have a tangential component."
       ],
       [
        "In a uniform field, the potential is 12 V at x = 2 cm and 6 V at x = 5 cm on the x-axis, and E has only an x-component. The field is:",
        [
         "200 V m⁻¹ along −x",
         "120 V m⁻¹ along +x",
         "200 V m⁻¹ along +x",
         "400 V m⁻¹ along +x"
        ],
        2,
        "E = −ΔV/Δx = −(6 − 12)/0.03 = +200 V m⁻¹. V falls along +x, so E points along +x.",
        "E points towards decreasing potential."
       ],
       [
        "Charges +2 µC, +2 µC and −2 µC are placed at the corners of an equilateral triangle of side 20 cm. The electrostatic potential energy of the system is:",
        [
         "−0.18 J",
         "+0.18 J",
         "−0.54 J",
         "+0.54 J"
        ],
        0,
        "U = (kq²/a)(+1 − 1 − 1) = −kq²/a = −9 × 10⁹ × 4 × 10⁻¹² / 0.2 = −0.18 J.",
        "Sum over the three pairs with signs."
       ],
       [
        "Find the error. A student finds the potential energy of charges 3 µC and −3 µC placed 30 cm apart as U = (9 × 10⁹)(3 × 10⁻⁶)(3 × 10⁻⁶)/0.3 = +0.27 J. The correct value is:",
        [
         "+0.27 J; nothing is wrong",
         "−0.27 J, because q₁q₂ is negative for unlike charges",
         "−0.54 J, because both charges contribute",
         "−0.9 J, because r must be squared"
        ],
        1,
        "U = kq₁q₂/r keeps the sign of q₁q₂, so U = −0.27 J. Unlike charges give negative potential energy."
       ],
       [
        "An electron starts from rest and is accelerated through 200 V. Its final speed is about:",
        [
         "5.9 × 10⁶ m s⁻¹",
         "1.2 × 10⁷ m s⁻¹",
         "8.4 × 10⁶ m s⁻¹",
         "7.0 × 10¹³ m s⁻¹"
        ],
        2,
        "½mv² = eΔV, so v = √(2 × 200 × 1.6 × 10⁻¹⁹ / 9.1 × 10⁻³¹) = 8.4 × 10⁶ m s⁻¹.",
        "Equate the kinetic energy to eΔV."
       ],
       [
        "A 3 nC charge and a −2 nC charge are 3 cm apart in an external field, at points where the external potentials are 200 V and 100 V respectively. The total electrostatic potential energy of the system is:",
        [
         "−1.8 × 10⁻⁶ J",
         "+4.0 × 10⁻⁷ J",
         "+2.2 × 10⁻⁶ J",
         "−1.4 × 10⁻⁶ J"
        ],
        3,
        "External part: 3 × 10⁻⁹ × 200 + (−2 × 10⁻⁹) × 100 = 4 × 10⁻⁷ J. Mutual part: 9 × 10⁹ × (−6 × 10⁻¹⁸)/0.03 = −1.8 × 10⁻⁶ J. Total = −1.4 × 10⁻⁶ J.",
        "Add the external terms and the mutual term."
       ],
       [
        "A dipole of moment 2 × 10⁻⁸ C m lies along a uniform field of 4 × 10⁴ N/C. The work done by an external torque in slowly rotating it through 60° is:",
        [
         "4.0 × 10⁻⁴ J",
         "8.0 × 10⁻⁴ J",
         "6.9 × 10⁻⁴ J",
         "1.2 × 10⁻³ J"
        ],
        0,
        "W = pE(cos0° − cos60°) = 2 × 10⁻⁸ × 4 × 10⁴ × 0.5 = 4.0 × 10⁻⁴ J.",
        "W = pE(cosθ₀ − cosθ₁)."
       ],
       [
        "Find the error. A student says: U = −pE cosθ, so at θ = 90° the energy of a dipole in a uniform field is −pE, the minimum possible. The mistake is:",
        [
         "The minimum is at θ = 180°, where U = −pE",
         "At θ = 90°, cosθ = 0 so U = 0 (the chosen reference); the minimum −pE occurs at θ = 0°",
         "At θ = 90° the energy is +pE",
         "U = −pE cosθ holds only for θ = 0°"
        ],
        1,
        "Putting θ = 90° gives U = 0, which is why that angle is chosen as the zero. U is least (−pE) when the dipole is aligned with the field."
       ],
       [
        "An isolated conducting sphere of radius 10 cm is at a potential of 900 V. The potential at its centre and the electric field just outside its surface are:",
        [
         "0 and 9 × 10³ V m⁻¹",
         "900 V and zero",
         "900 V and 9 × 10³ V m⁻¹",
         "900 V and 90 V m⁻¹"
        ],
        2,
        "Potential is constant inside a conductor, so V = 900 V at the centre. Just outside, E = kQ/R² = V/R = 900/0.1 = 9 × 10³ V m⁻¹.",
        "E = V/R at the surface of a sphere."
       ],
       [
        "Assertion (A): A cavity inside a charged conductor is shielded from the outside electric field.\nReason (R): Charges placed inside the cavity cannot produce any field outside the conductor.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true (electrostatic shielding). R is false: charge inside the cavity induces charge on the outer surface, so the outside is not shielded from it."
       ],
       [
        "Find the error. A student places +Q at the centre of the cavity of a neutral conducting shell and says: the conductor shields, so the field outside the shell is zero. The mistake is:",
        [
         "Shielding protects the cavity from outside only; +Q induces −Q on the inner and +Q on the outer surface, so there is a field outside",
         "The shell is neutral, so the induced charges cancel and the field outside is zero after all",
         "The induced charges are +Q on the inner and −Q on the outer surface",
         "The field outside is 2Q/(4πε₀r²), because the induced charge doubles it"
        ],
        0,
        "Shielding does not work the other way round. The outer surface carries +Q, so outside the shell the field is Q/(4πε₀r²)."
       ],
       [
        "A conductor and a dielectric slab are placed separately in the same uniform external field. Which statement is correct?",
        [
         "In both, the induced charges cancel the field inside completely",
         "In the conductor the induced charges cancel the field inside completely; in the dielectric the bound surface charges only reduce it",
         "In the dielectric the induced field exceeds the external field and reverses the net field",
         "The dielectric develops free charges that drift to its surfaces, as in a conductor"
        ],
        1,
        "A dielectric has no free charges. Its induced bound surface charges give an opposing field that is smaller than the external field."
       ],
       [
        "The plates of a parallel plate capacitor carry free charge density ±5 µC m⁻². A dielectric of K = 5 fills the gap. The induced (bound) surface charge density on the dielectric faces is:",
        [
         "1 µC m⁻²",
         "5 µC m⁻²",
         "4 µC m⁻²",
         "25 µC m⁻²"
        ],
        2,
        "σ − σₚ = σ/K, so σₚ = σ(1 − 1/K) = 5 × (1 − 1/5) = 4 µC m⁻².",
        "Use σ − σₚ = σ/K."
       ],
       [
        "A parallel plate air capacitor has plates of area 0.02 m² separated by 2 mm. Air breaks down at 3 × 10⁶ V m⁻¹. The maximum charge it can hold without breakdown is about:",
        [
         "5.3 × 10⁻⁴ C",
         "2.7 × 10⁻⁷ C",
         "1.1 × 10⁻⁶ C",
         "5.3 × 10⁻⁷ C"
        ],
        3,
        "Q = σA = ε₀E_max A = 8.85 × 10⁻¹² × 3 × 10⁶ × 0.02 = 5.3 × 10⁻⁷ C. (Equivalently C = 88.5 pF and V_max = 6000 V.)",
        "Q = CV with the breakdown voltage E × d."
       ],
       [
        "A parallel plate capacitor stays connected to a battery while the plate separation is tripled. Compared with the initial values, the charge Q, the field E between the plates and the stored energy U become:",
        [
         "Q/3, E/3, U/3",
         "Q, E/3, U/3",
         "Q/3, E, U/3",
         "Q/3, E/3, 3U"
        ],
        0,
        "V is fixed and C becomes C/3, so Q = CV becomes Q/3. E = V/d becomes E/3, and U = ½CV² becomes U/3.",
        "The battery keeps V constant."
       ],
       [
        "An air capacitor has C₀ = 6 pF. A dielectric slab of K = 3 with the same area as the plates and thickness d/2 (d is the plate separation) is inserted. The new capacitance is:",
        [
         "18 pF",
         "9 pF",
         "4 pF",
         "12 pF"
        ],
        1,
        "V = E₀(d/2)/K + E₀(d/2) = V₀(K + 1)/(2K) = 2V₀/3 for the same Q, so C = 1.5 C₀ = 9 pF.",
        "Find the new potential difference for the same charge."
       ],
       [
        "A 50 pF air capacitor is connected to a 100 V battery. With the battery still connected, a dielectric of K = 3 fills the gap. The extra charge that flows from the battery is:",
        [
         "5.0 × 10⁻⁹ C",
         "1.5 × 10⁻⁸ C",
         "1.0 × 10⁻⁸ C",
         "3.3 × 10⁻⁹ C"
        ],
        2,
        "Q₀ = CV = 5 × 10⁻⁹ C. Q becomes KCV = 1.5 × 10⁻⁸ C, so ΔQ = (K − 1)CV = 1.0 × 10⁻⁸ C.",
        "Final charge is KCV."
       ],
       [
        "Assertion (A): The dielectric constant of any insulating substance is greater than 1.\nReason (R): The capacitance of a parallel plate capacitor depends on the plate area and the plate separation.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "K > 1 because the polarised dielectric opposes the external field and lowers the potential difference. R is a true statement but does not explain why K > 1."
       ],
       [
        "A 4 µF and a 12 µF capacitor are connected in series across a 16 V battery. The potential difference across the 4 µF capacitor is:",
        [
         "4 V",
         "8 V",
         "16 V",
         "12 V"
        ],
        3,
        "C_eq = 3 µF, Q = 3 × 16 = 48 µC on each. V across 4 µF = 48/4 = 12 V.",
        "Series capacitors carry the same charge."
       ],
       [
        "Find the error. A student says: in a series combination of 2 µF and 6 µF capacitors the same voltage appears across each, so the 6 µF capacitor holds three times the charge. The mistake is:",
        [
         "In series the charge is the same on each; the voltages differ, and the smaller capacitance has the larger voltage",
         "The voltages are equal, but the 6 µF capacitor holds one third of the charge",
         "Both the charges and the voltages are equal, since the capacitors are in one circuit",
         "Charges add up in series, so each holds the total charge divided by 8"
        ],
        0,
        "Series capacitors carry the same charge Q, so V = Q/C is larger across the smaller capacitor (three times larger across 2 µF)."
       ],
       [
        "Two 6 µF capacitors in series are connected in parallel with a 4 µF capacitor, and the combination is connected across 60 V. The charge on each 6 µF capacitor is:",
        [
         "360 µC",
         "180 µC",
         "240 µC",
         "90 µC"
        ],
        1,
        "The series pair is 3 µF and sits across the full 60 V, so Q = 3 × 60 = 180 µC on each 6 µF capacitor.",
        "The series branch has C = 3 µF."
       ],
       [
        "A 6 µF capacitor charged to 100 V is disconnected from the supply and connected across an uncharged 4 µF capacitor. The energy lost is:",
        [
         "18 mJ",
         "30 mJ",
         "12 mJ",
         "6 mJ"
        ],
        2,
        "Initial U = ½ × 6 µF × 100² = 30 mJ. Q = 600 µC is shared, V′ = 600/10 = 60 V, final U = ½ × 10 µF × 60² = 18 mJ. Loss = 12 mJ.",
        "Charge is conserved, energy is not."
       ],
       [
        "The electric field in air just before breakdown is 3 × 10⁶ V m⁻¹. The energy stored per unit volume of the field is about:",
        [
         "80 J m⁻³",
         "1.3 × 10⁻⁵ J m⁻³",
         "4.0 × 10² J m⁻³",
         "40 J m⁻³"
        ],
        3,
        "u = ½ε₀E² = 0.5 × 8.85 × 10⁻¹² × (3 × 10⁶)² ≈ 40 J m⁻³.",
        "u = ½ε₀E²."
       ],
       [
        "Assertion (A): When the plates of an isolated charged capacitor are moved apart, the stored energy increases.\nReason (R): The charge stays constant while the capacitance decreases, so U = Q²/2C rises.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Isolated means Q is constant. Pulling the plates apart lowers C, so U = Q²/2C increases; the extra energy comes from the work done in pulling them apart."
       ]
      ]
     ]
    },
    {
     "n": 3,
     "t": "Current Electricity",
     "levels": [
      [
       [
        "The same current flows through two wires of the same material. The second has double the cross-sectional area. Its drift velocity:",
        [
         "Doubles",
         "Halves",
         "Stays the same",
         "Becomes four times"
        ],
        1,
        "I = neAv_d. With I fixed, v_d ∝ 1/A, so doubling A halves v_d."
       ],
       [
        "The resistivity of a conductor depends on:",
        [
         "Length of the wire",
         "Area of cross-section",
         "Material and temperature",
         "Current through it"
        ],
        2,
        "Resistivity is a property of the material and changes with temperature. Resistance depends on the dimensions; resistivity does not."
       ],
       [
        "A wire of resistance R is stretched to twice its length (volume constant). The new resistance is:",
        [
         "2R",
         "R/2",
         "4R",
         "R"
        ],
        2,
        "Doubling l with volume constant halves A, so R = ρl/A becomes ρ(2l)/(A/2) = 4R.",
        "The volume stays the same, so the area changes too."
       ],
       [
        "What is the SI unit of mobility?",
        [
         "m s⁻¹",
         "m² V⁻¹ s⁻¹",
         "V m⁻¹",
         "Ω m"
        ],
        1,
        "Mobility µ = v_d/E, so its unit is (m/s)/(V/m) = m² V⁻¹ s⁻¹."
       ],
       [
        "As temperature increases, the resistivity of a semiconductor:",
        [
         "Increases",
         "Decreases",
         "Stays constant",
         "First increases, then decreases"
        ],
        1,
        "In semiconductors, more charge carriers become available as temperature rises, so resistivity falls (negative temperature coefficient)."
       ],
       [
        "A battery of emf 10 V and internal resistance 3 Ω delivers 0.5 A. What is its terminal voltage?",
        [
         "10 V",
         "11.5 V",
         "8.5 V",
         "7 V"
        ],
        2,
        "V = ε − Ir = 10 − 0.5 × 3 = 8.5 V. (NCERT Exercise 3.2)"
       ],
       [
        "Kirchhoff’s loop rule is based on:",
        [
         "Conservation of charge",
         "Conservation of energy",
         "Conservation of momentum",
         "Ohm’s law"
        ],
        1,
        "The loop rule comes from conservation of energy. The junction rule comes from conservation of charge."
       ],
       [
        "A Wheatstone bridge is balanced with P = 10 Ω, Q = 20 Ω and R = 15 Ω. What is S?",
        [
         "7.5 Ω",
         "15 Ω",
         "30 Ω",
         "45 Ω"
        ],
        2,
        "P/Q = R/S, so 10/20 = 15/S, giving S = 30 Ω. At balance, no current flows through the galvanometer."
       ],
       [
        "Two identical cells (emf ε, internal resistance r) are connected in parallel. The equivalent emf and internal resistance are:",
        [
         "2ε, 2r",
         "2ε, r/2",
         "ε, r/2",
         "ε, 2r"
        ],
        2,
        "For identical cells in parallel, the emf stays ε and the internal resistances combine in parallel to give r/2."
       ],
       [
        "A 100 W and a 60 W bulb, both rated 220 V, are connected in series to 220 V. Which glows brighter?",
        [
         "100 W bulb",
         "60 W bulb",
         "Both equally",
         "Neither glows"
        ],
        1,
        "R = V²/P, so the 60 W bulb has higher resistance. In series the current is the same, so P = I²R is larger for the 60 W bulb.",
        "In series the current is the same, so compare I²R."
       ],
       [
        "Which of the following is an example of a steady flow of charge?",
        [
         "Lightning",
         "A spark when you touch a door handle",
         "The current in a torch run by a cell",
         "Discharge of a charged balloon"
        ],
        2,
        "A cell keeps a steady electric field in the circuit, so charge flows at a constant rate. Lightning is not steady."
       ],
       [
        "A steady current of 3 A flows through a wire for 2 minutes. The charge that passes any cross-section is:",
        [
         "6 C",
         "360 C",
         "180 C",
         "0.025 C"
        ],
        1,
        "q = It = 3 × 120 = 360 C."
       ],
       [
        "When no electric field is applied across a metal, the free electrons:",
        [
         "Move randomly, with the average velocity zero, so there is no net current",
         "Drift towards the positive end",
         "Are at rest",
         "Carry a steady current because of thermal motion"
        ],
        0,
        "Electrons keep moving randomly (thermal motion) but equal numbers go in opposite directions, so the net current is zero."
       ],
       [
        "A current of 2 A flows through a wire of cross-sectional area 4 mm². The current density is:",
        [
         "8 A m⁻²",
         "8 × 10⁻⁶ A m⁻²",
         "0.5 A m⁻²",
         "5 × 10⁵ A m⁻²"
        ],
        3,
        "j = I/A = 2/(4 × 10⁻⁶) = 5 × 10⁵ A m⁻².",
        "Convert mm² to m² first."
       ],
       [
        "In a metal, the average time between successive collisions of an electron (relaxation time) doubles, with n unchanged. The resistivity ρ = m/(ne²τ) becomes:",
        [
         "Twice",
         "Four times",
         "Half",
         "Unchanged"
        ],
        2,
        "ρ is inversely proportional to τ, so doubling τ halves ρ."
       ],
       [
        "Which of the following does NOT obey Ohm’s law?",
        [
         "A copper wire at constant temperature",
         "A p-n junction diode",
         "A nichrome wire at constant temperature",
         "A manganin resistor at constant temperature"
        ],
        1,
        "For a diode, V is not proportional to I and the current depends on the sign of V."
       ],
       [
        "Metals have resistivities typically in the range:",
        [
         "10⁻⁸ Ω m to 10⁻⁶ Ω m",
         "10⁻² Ω m to 10² Ω m",
         "10⁶ Ω m to 10⁸ Ω m",
         "10¹⁸ Ω m or more"
        ],
        0,
        "Metals are the best conductors, with ρ between about 10⁻⁸ and 10⁻⁶ Ω m. Insulators are far higher."
       ],
       [
        "A metal wire has resistance 10 Ω at 0 °C. If α = 4 × 10⁻³ °C⁻¹, its resistance at 100 °C is:",
        [
         "10.4 Ω",
         "40 Ω",
         "4 Ω",
         "14 Ω"
        ],
        3,
        "R = R₀(1 + αΔT) = 10(1 + 4 × 10⁻³ × 100) = 14 Ω."
       ],
       [
        "Manganin and constantan are used to make standard resistors because their resistivity:",
        [
         "Is very high",
         "Is zero at room temperature",
         "Changes very little with temperature",
         "Decreases with temperature"
        ],
        2,
        "These alloys have a very weak temperature dependence, so the resistance stays almost constant."
       ],
       [
        "A 220 V, 100 W bulb has a filament resistance of:",
        [
         "2.2 Ω",
         "484 Ω",
         "22 Ω",
         "48400 Ω"
        ],
        1,
        "R = V²/P = 220²/100 = 484 Ω."
       ],
       [
        "Electrical power is transmitted at very high voltage mainly because:",
        [
         "The power wasted in the cables, P²R/V², is much smaller",
         "It makes the current larger",
         "The cables have lower resistance at high voltage",
         "It increases the power delivered to homes"
        ],
        0,
        "For a given power P, I = P/V is small at high V, so the loss I²R_c is small."
       ],
       [
        "The emf of a cell is equal to the potential difference between its terminals when:",
        [
         "A large current is drawn",
         "The cell is short-circuited",
         "The cell is being charged",
         "No current is drawn from it"
        ],
        3,
        "emf is the open-circuit terminal voltage, when I = 0 and there is no drop Ir."
       ],
       [
        "Two cells of emf 6 V and 4 V are joined in series with their negative terminals connected together. The emf across the free ends is:",
        [
         "10 V",
         "24 V",
         "2 V",
         "5 V"
        ],
        2,
        "With opposition, ε_eq = ε₁ − ε₂ = 6 − 4 = 2 V."
       ],
       [
        "At a junction, currents of 3 A and 2 A enter and a current of 4 A leaves along one wire. The current in the remaining wire leaving the junction is:",
        [
         "5 A",
         "1 A",
         "9 A",
         "0 A"
        ],
        1,
        "By the junction rule, 3 + 2 = 4 + I, so I = 1 A leaving."
       ]
      ],
      [
       [
        "A lightning flash carries 30 C in 3 ms, while a torch draws a steady 0.5 A from a cell. Which statement is correct?",
        [
         "Lightning has an average current of 10⁴ A and is as steady as the torch current",
         "Lightning has an average current of 10⁴ A and the flow is not steady, unlike the torch",
         "Lightning has an average current of 10² A and is not steady",
         "Lightning has an average current of 10⁷ A and is steady"
        ],
        1,
        "I = q/t = 30/(3 × 10⁻³) = 10⁴ A. The flow in lightning is not steady, while a cell maintains a steady current in a torch."
       ],
       [
        "In a gas discharge tube, 2 × 10¹⁸ electrons move towards the anode and 1 × 10¹⁸ singly charged positive ions move towards the cathode every second. The current in the tube is:",
        [
         "0.48 A",
         "0.32 A",
         "0.16 A",
         "0.96 A"
        ],
        0,
        "Both flows add to the current: I = (2 + 1) × 10¹⁸ × 1.6 × 10⁻¹⁹ = 0.48 A.",
        "Opposite charges moving in opposite directions both contribute in the same sense."
       ],
       [
        "Assertion (A): When charges +Q and −Q are placed on discs at the ends of a metal cylinder, the current stops after a very short while.\nReason (R): The electrons move to neutralise the charges, so the electric field inside the conductor disappears.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Without a source to replenish the charges, the field dies out and the current stops. A cell or battery is needed to maintain a steady field."
       ],
       [
        "A copper wire of diameter 1 mm carries 3 A. If ρ for copper is 1.7 × 10⁻⁸ Ω m, the electric field inside the wire is nearly:",
        [
         "6.5 × 10⁻⁵ V m⁻¹",
         "1.6 × 10⁻² V m⁻¹",
         "6.5 × 10⁻² V m⁻¹",
         "3.8 × 10⁶ V m⁻¹"
        ],
        2,
        "j = I/A = 3/(π × 0.25 × 10⁻⁶) = 3.8 × 10⁶ A m⁻², so E = ρj = 1.7 × 10⁻⁸ × 3.8 × 10⁶ ≈ 6.5 × 10⁻² V m⁻¹.",
        "Use the radius, not the diameter, in A = πr²."
       ],
       [
        "A student argues: “If both the length and the radius of a wire are doubled, the resistance doubles, because R ∝ l.” What is wrong with this?",
        [
         "Nothing, the resistance doubles",
         "Area also changes: A becomes 4 times, so R becomes R/2",
         "Resistivity also doubles, so R becomes 4R",
         "Area becomes 2 times, so R stays the same"
        ],
        1,
        "R = ρl/A. Doubling l doubles R, but doubling the radius makes A four times, so R′ = R × 2/4 = R/2."
       ],
       [
        "For copper, ρ = 1.7 × 10⁻⁸ Ω m and n = 8.5 × 10²⁸ m⁻³. The relaxation time of its conduction electrons is about:",
        [
         "2.5 × 10⁻¹⁴ s",
         "2.5 × 10⁻¹⁰ s",
         "4 × 10⁻¹⁴ s",
         "2.5 × 10⁻¹⁷ s"
        ],
        0,
        "τ = m/(ρne²) = 9.1 × 10⁻³¹ / (1.7 × 10⁻⁸ × 8.5 × 10²⁸ × (1.6 × 10⁻¹⁹)²) ≈ 2.5 × 10⁻¹⁴ s.",
        "Use ρ = m/(ne²τ)."
       ],
       [
        "Assertion (A): Under a steady electric field, the free electrons in a metal move with a constant average drift velocity.\nReason (R): The electric field does not accelerate the electrons in a metal.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true: collisions limit the average velocity to v_d = eEτ/m. R is false: electrons are accelerated between collisions, but they lose their drift velocity at each collision."
       ],
       [
        "The relaxation time of electrons in a wire is 2 × 10⁻¹⁴ s. A potential difference of 4 V is applied across a 2 m length of the wire. The drift speed is about:",
        [
         "3.5 × 10⁻³ m s⁻¹",
         "1.4 × 10⁻² m s⁻¹",
         "7.0 × 10⁻³ m s⁻¹",
         "7.0 × 10⁻⁵ m s⁻¹"
        ],
        2,
        "E = V/l = 2 V m⁻¹, so v_d = eEτ/m = 1.6 × 10⁻¹⁹ × 2 × 2 × 10⁻¹⁴ / 9.1 × 10⁻³¹ ≈ 7.0 × 10⁻³ m s⁻¹.",
        "Find E first, then use v_d = eEτ/m."
       ],
       [
        "A student says: “A diode does not obey Ohm’s law, so V = IR cannot be used for it and its resistance is undefined.” What is the error?",
        [
         "No error, R is defined only for ohmic materials",
         "V = IR defines resistance for any device; Ohm’s law says R is independent of V",
         "A diode obeys Ohm’s law in one direction, so R is constant",
         "A diode has zero resistance, so V = IR gives V = 0"
        ],
        1,
        "V = IR is the definition of resistance and applies to every conductor. Ohm’s law is the statement that the I–V graph is linear, i.e. R does not depend on V."
       ],
       [
        "Sample X has ρ = 5 × 10⁻⁸ Ω m at 300 K and its resistance rises on heating. Sample Y has a much larger ρ, which falls on heating and drops sharply when a trace of impurity is added. The most likely classification is:",
        [
         "X is a metal and Y is a semiconductor",
         "X is a semiconductor and Y is a metal",
         "X is a metal and Y is an insulator",
         "Both are metals"
        ],
        0,
        "Low ρ with a positive temperature coefficient is a metal. A middle-range ρ that falls with temperature and with doping is a semiconductor."
       ],
       [
        "The resistance of a heating element at 27 °C is 40 Ω. Connected to 210 V, it settles at a steady current of 5 A. If α = 1.5 × 10⁻⁴ °C⁻¹, the steady temperature is about:",
        [
         "333 °C",
         "840 °C",
         "306 °C",
         "360 °C"
        ],
        3,
        "R₂ = 210/5 = 42 Ω. ΔT = (R₂ − R₁)/(R₁α) = 2/(40 × 1.5 × 10⁻⁴) ≈ 333 °C, so T₂ ≈ 27 + 333 = 360 °C.",
        "T₂ = T₁ + ΔT."
       ],
       [
        "A student writes: “In a metal, resistivity increases with temperature because the number of free electrons n increases.” What is the correct reason?",
        [
         "Nothing is wrong",
         "n decreases with temperature",
         "n is nearly constant; the collision time τ decreases, so ρ = m/(ne²τ) increases",
         "The charge e of each electron decreases"
        ],
        2,
        "In a metal, n barely changes. Hotter ions mean more frequent collisions, so τ falls and ρ rises."
       ],
       [
        "Power of 100 kW is delivered through cables of total resistance 5 Ω. The cable loss is changed by sending the power at 20 kV instead of 2 kV. The loss goes from:",
        [
         "12.5 kW to 1.25 kW",
         "12.5 kW to 125 W",
         "25 kW to 250 W",
         "1.25 kW to 12.5 W"
        ],
        1,
        "Loss = (P/V)²R_c. At 2 kV, I = 50 A and loss = 12.5 kW. At 20 kV, I = 5 A and loss = 125 W (a 100-fold fall).",
        "Loss ∝ 1/V²."
       ],
       [
        "A heater coil of resistance R is cut so that 3/4 of its length is used, and connected across the same supply. The heat produced per second becomes:",
        [
         "4/3 times",
         "3/4 times",
         "16/9 times",
         "9/16 times"
        ],
        0,
        "R′ = (3/4)R, and P = V²/R, so P′ = V²/(3R/4) = 4P/3."
       ],
       [
        "A cell sends a current of 2 A through an external resistance of 2 Ω, and 1 A when the resistance is 5 Ω. The emf and internal resistance of the cell are:",
        [
         "4 V, 1 Ω",
         "5 V, 0.5 Ω",
         "6 V, 2 Ω",
         "6 V, 1 Ω"
        ],
        3,
        "ε = 2(2 + r) = 1(5 + r), so r = 1 Ω and ε = 6 V."
       ],
       [
        "Assertion (A): The terminal voltage of a battery is always less than its emf.\nReason (R): When a current I flows out of the positive terminal, the terminal voltage is V = ε − Ir.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "R is true, but A is false: while a battery is being charged, current enters the positive terminal and V = ε + Ir exceeds ε."
       ],
       [
        "Two cells, ε₁ = 12 V, r₁ = 2 Ω and ε₂ = 6 V, r₂ = 1 Ω, are connected in parallel (positives together, negatives together). This combination is connected across a 2 Ω resistor. The current through the resistor is:",
        [
         "4.5 A",
         "3 A",
         "2.25 A",
         "2 A"
        ],
        1,
        "ε_eq = (ε₁r₂ + ε₂r₁)/(r₁ + r₂) = 8 V and r_eq = r₁r₂/(r₁ + r₂) = 2/3 Ω. I = 8/(2 + 2/3) = 3 A.",
        "Replace the pair by one equivalent cell first."
       ],
       [
        "A student joins three identical cells (ε, r) in series but connects one of them reversed. She claims: “emf = 3ε and internal resistance = 3r.” The correct values are:",
        [
         "ε and 3r",
         "3ε and r",
         "ε and r",
         "3ε and 3r"
        ],
        0,
        "The reversed cell enters with a negative sign: ε_eq = ε + ε − ε = ε. The internal resistances still add: 3r."
       ],
       [
        "In a circuit, a 10 V cell with a 2 Ω resistor in one branch and a 9 V cell with a 3 Ω resistor in a second branch both feed a common 2 Ω resistor (cell resistances negligible). The branch currents are 2 A and 1 A. The power dissipated in the common resistor is:",
        [
         "4.5 W",
         "8 W",
         "2 W",
         "18 W"
        ],
        3,
        "By the junction rule the common resistor carries 2 + 1 = 3 A. Check with the loop rule: 10 − 2(2) − 2(3) = 0. Then P = I²R = 9 × 2 = 18 W."
       ],
       [
        "Assertion (A): Kirchhoff’s junction rule remains valid even if the wires meeting at a junction are bent or reoriented.\nReason (R): Kirchhoff’s loop rule is based on conservation of energy.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "A is true because the junction rule only compares total current in and out (conservation of charge). R is also true, but it concerns the loop rule and does not explain A."
       ],
       [
        "In a Wheatstone bridge, AB = 6 Ω, BC = 12 Ω, AD = 4 Ω and DC = 8 Ω. A 9 V cell of negligible resistance is connected across AC, with a galvanometer across BD. The current drawn from the cell is:",
        [
         "0.5 A",
         "1.25 A",
         "0.75 A",
         "2.5 A"
        ],
        1,
        "6/12 = 4/8, so the bridge is balanced and the galvanometer carries no current. The two arms (18 Ω and 12 Ω) are in parallel: I = 9/18 + 9/12 = 1.25 A."
       ],
       [
        "A Wheatstone bridge is balanced with the battery across AC and the galvanometer across BD. If the battery and the galvanometer are now interchanged, the galvanometer current will:",
        [
         "Remain zero",
         "Become non-zero",
         "Become infinite",
         "Reverse its direction but stay non-zero"
        ],
        0,
        "The balance condition P/Q = R/S (that is, PS = QR) is symmetrical, so the bridge stays balanced after interchanging."
       ]
      ]
     ]
    },
    {
     "n": 4,
     "t": "Moving Charges and Magnetism",
     "levels": [
      [
       [
        "A charge q moves with velocity v parallel to a magnetic field B. The magnetic force on it is:",
        [
         "qvB",
         "qvB/2",
         "Zero",
         "Maximum"
        ],
        2,
        "F = qvB sin θ, and θ = 0° when moving parallel to B, so F = 0."
       ],
       [
        "A charged particle moves in a circle perpendicular to a uniform magnetic field. If its speed is doubled, its time period:",
        [
         "Doubles",
         "Halves",
         "Stays the same",
         "Becomes four times"
        ],
        2,
        "T = 2πm/qB, which does not depend on speed. A faster particle moves in a bigger circle but takes the same time per revolution."
       ],
       [
        "A circular coil of 100 turns and radius 8 cm carries 0.4 A. What is the field at its centre?",
        [
         "1.6 × 10⁻⁴ T",
         "3.1 × 10⁻⁴ T",
         "6.3 × 10⁻⁴ T",
         "3.1 × 10⁻⁶ T"
        ],
        1,
        "B = µ₀NI/2R = (4π × 10⁻⁷ × 100 × 0.4)/(2 × 0.08) ≈ 3.1 × 10⁻⁴ T. (NCERT Exercise 4.1)",
        "Use B = µ₀NI/2R."
       ],
       [
        "A long straight wire carries 35 A. What is the magnetic field 20 cm from it?",
        [
         "3.5 × 10⁻⁵ T",
         "7.0 × 10⁻⁵ T",
         "1.75 × 10⁻⁵ T",
         "3.5 × 10⁻⁷ T"
        ],
        0,
        "B = µ₀I/2πr = 2 × 10⁻⁷ × 35/0.2 = 3.5 × 10⁻⁵ T. (NCERT Exercise 4.2)"
       ],
       [
        "Two long parallel wires carry currents in the SAME direction. They:",
        [
         "Attract each other",
         "Repel each other",
         "Exert no force",
         "Exert only a torque"
        ],
        0,
        "Parallel currents attract and antiparallel currents repel, the opposite of the rule for like electric charges."
       ],
       [
        "The magnetic field inside a long solenoid with n turns per unit length carrying current I is:",
        [
         "µ₀I/2πr",
         "µ₀NI/2R",
         "µ₀nI",
         "Zero"
        ],
        2,
        "B = µ₀nI. It is uniform inside the solenoid and nearly zero outside."
       ],
       [
        "The torque on a current loop in a uniform magnetic field is maximum when the PLANE of the loop is:",
        [
         "Perpendicular to the field",
         "Parallel to the field",
         "At 45° to the field",
         "The torque is always the same"
        ],
        1,
        "τ = NIAB sin θ, with θ between the area vector and B. It is maximum at θ = 90°, when the PLANE of the coil is parallel to B.",
        "The angle in the formula is between the area vector (normal to the coil) and B."
       ],
       [
        "To convert a galvanometer into an ammeter, you connect:",
        [
         "A high resistance in series",
         "A low resistance in parallel",
         "A high resistance in parallel",
         "A low resistance in series"
        ],
        1,
        "A small shunt in parallel carries most of the current and keeps the ammeter’s resistance low."
       ],
       [
        "To convert a galvanometer into a voltmeter, you connect:",
        [
         "A high resistance in series",
         "A low resistance in parallel",
         "A high resistance in parallel",
         "A low resistance in series"
        ],
        0,
        "A large series resistance limits the current, so the voltmeter draws very little current from the circuit."
       ],
       [
        "When a charged particle moves through a magnetic field (no electric field), its kinetic energy:",
        [
         "Increases",
         "Stays the same",
         "Decreases",
         "Depends on the charge"
        ],
        1,
        "The magnetic force is always perpendicular to the velocity, so it does no work. Only the direction changes."
       ],
       [
        "Oersted noticed a compass needle deflect when placed near a wire carrying current. What did he conclude?",
        [
         "Moving charges or currents produce a magnetic field around them",
         "A stationary charge produces a magnetic field",
         "A magnet produces an electric current in the wire",
         "The wire becomes a permanent magnet"
        ],
        0,
        "The needle aligned tangentially to circles around the wire, showing that currents set up a magnetic field in the surrounding space."
       ],
       [
        "The magnetic field at a point due to several current-carrying wires is found by:",
        [
         "Adding their magnitudes only",
         "Adding the individual fields vectorially",
         "Taking the largest of the individual fields",
         "Multiplying the individual fields"
        ],
        1,
        "Magnetic fields obey the principle of superposition: the net field is the vector sum of the fields of the individual sources."
       ],
       [
        "The Earth’s magnetic field is about 3.6 × 10⁻⁵ T. In gauss (1 G = 10⁻⁴ T) this is:",
        [
         "3.6 G",
         "36 G",
         "0.36 G",
         "0.036 G"
        ],
        2,
        "3.6 × 10⁻⁵ T ÷ 10⁻⁴ T per gauss = 0.36 G. The tesla is a large unit; the gauss is the smaller one."
       ],
       [
        "What is the magnetic force per unit length on a wire carrying 8 A at 30° to a uniform field of 0.15 T?",
        [
         "1.2 N m⁻¹",
         "1.04 N m⁻¹",
         "0.15 N m⁻¹",
         "0.6 N m⁻¹"
        ],
        3,
        "F/l = IB sin θ = 8 × 0.15 × sin 30° = 0.6 N m⁻¹."
       ],
       [
        "What is the magnitude of dB at a point 0.1 m from a current element of 5 A and length 2 cm, if the point is on the line perpendicular to the element?",
        [
         "1 × 10⁻⁷ T",
         "1 × 10⁻⁶ T",
         "4π × 10⁻⁷ T",
         "0"
        ],
        1,
        "dB = (µ₀/4π) I dl sin θ / r² = 10⁻⁷ × 5 × 0.02 × 1/(0.1)² = 1 × 10⁻⁶ T.",
        "Use µ₀/4π = 10⁻⁷ T m A⁻¹ and θ = 90°."
       ],
       [
        "According to the Biot–Savart law, the field dB due to a current element is zero at a point:",
        [
         "Exactly perpendicular to the element",
         "Very close to the element",
         "Along the line of the element itself",
         "Very far from the element on a perpendicular line"
        ],
        2,
        "dB ∝ sin θ, and θ = 0° for any point on the line along dl, so dB = 0 there."
       ],
       [
        "A planar loop of area 0.0025 m² carries 2 A. Its magnetic moment is:",
        [
         "5 × 10⁻³ A m²",
         "5 × 10⁻³ T",
         "1.25 × 10⁻³ A m²",
         "5 A m²"
        ],
        0,
        "m = IA = 2 × 0.0025 = 5 × 10⁻³ A m². The unit of magnetic moment is A m².",
        "m = IA."
       ],
       [
        "The magnetic field lines due to a long straight current-carrying wire are:",
        [
         "Straight lines parallel to the wire",
         "Straight lines radiating from the wire",
         "Circles that begin and end on the wire",
         "Closed concentric circles around the wire"
        ],
        3,
        "By Ampère’s law B is tangential and has the same magnitude on a circle around the wire. Magnetic field lines always form closed loops."
       ]
      ],
      [
       [
        "A compass needle lies directly above a long horizontal wire that carries a large current towards the north. Ignoring the Earth’s field, the north pole of the needle points towards:",
        [
         "East",
         "West",
         "North",
         "South"
        ],
        0,
        "For current towards north, the right-hand thumb rule gives B above the wire pointing east (I × r̂ = north × up = east).",
        "Thumb along the current, fingers curl in the direction of B."
       ],
       [
        "Which statement about the fields of a point charge is correct?",
        [
         "A charge at rest produces both E and B",
         "A moving charge produces a magnetic field in addition to its electric field",
         "A moving charge produces only a magnetic field",
         "A moving charge has no electric field because it is moving"
        ],
        1,
        "Static charges give an electric field; moving charges (currents) give a magnetic field as well, and the fields add vectorially."
       ],
       [
        "An electron passes undeflected through perpendicular uniform fields E = 3 × 10⁴ V m⁻¹ and B = 0.2 T. What is its speed?",
        [
         "6.0 × 10³ m s⁻¹",
         "7.5 × 10⁴ m s⁻¹",
         "1.5 × 10⁵ m s⁻¹",
         "3.0 × 10⁵ m s⁻¹"
        ],
        2,
        "For zero net Lorentz force, qE = qvB, so v = E/B = 3 × 10⁴/0.2 = 1.5 × 10⁵ m s⁻¹.",
        "Set the electric and magnetic forces equal."
       ],
       [
        "A student writes: “B is along +y and an electron moves along +x, so v × B is along +z and the electron is pushed along +z.” What is wrong?",
        [
         "v × B should be along −z",
         "The force on an electron is zero",
         "The force is along +y",
         "The electron is negative, so the force is along −z"
        ],
        3,
        "x̂ × ŷ = ẑ, so a proton is pushed along +z, but for an electron the force q(v × B) reverses to −z. (NCERT Example 4.2)"
       ],
       [
        "A straight wire of mass 40 g and length 0.5 m hangs in a horizontal field B = 0.4 T perpendicular to it. What current keeps it suspended in mid-air? (g = 9.8 m s⁻²)",
        [
         "0.98 A",
         "1.96 A",
         "3.92 A",
         "0.196 A"
        ],
        1,
        "IlB = mg, so I = mg/(lB) = 0.04 × 9.8/(0.5 × 0.4) = 1.96 A.",
        "Magnetic force upward balances the weight."
       ],
       [
        "Assertion (A): A straight wire carrying current along the direction of a uniform magnetic field experiences no magnetic force.\nReason (R): The force on a current-carrying wire is F = I l × B, which is zero when l is parallel to B.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The cross product vanishes for parallel vectors, and this directly explains why there is no force."
       ],
       [
        "An electron enters a uniform field B = 2 × 10⁻³ T with speed 4 × 10⁶ m s⁻¹ at 30° to B. What is the pitch of its helical path? (e = 1.6 × 10⁻¹⁹ C, mₑ = 9.1 × 10⁻³¹ kg)",
        [
         "3.6 cm",
         "5.7 mm",
         "6.2 cm",
         "7.1 cm"
        ],
        2,
        "Pitch = 2πm v cos 30°/(eB) = 2π × 9.1 × 10⁻³¹ × 3.46 × 10⁶/(1.6 × 10⁻¹⁹ × 2 × 10⁻³) ≈ 6.2 cm.",
        "Only the component of v along B moves the particle along the field."
       ],
       [
        "A proton and an α-particle (mass 4 times, charge 2 times) have the same kinetic energy and enter the same uniform field perpendicular to it. The ratio of their radii r(α) : r(p) is:",
        [
         "2 : 1",
         "1 : 2",
         "√2 : 1",
         "1 : 1"
        ],
        3,
        "r = mv/qB = √(2mK)/(qB). The ratio is √4/2 = 1, so the radii are equal.",
        "Write r in terms of kinetic energy K."
       ],
       [
        "A student claims: “The Biot–Savart field of a current element at a point on the extended line of the element is µ₀Idl/4πr².” What is wrong?",
        [
         "The field there is zero because sin θ = 0",
         "The field is infinite because θ = 0",
         "The field should be µ₀Idl/2πr",
         "The field is maximum there and the r² should be r"
        ],
        0,
        "dB = (µ₀/4π) I dl sin θ/r², and θ = 0° along the line of the element, so dB = 0."
       ],
       [
        "The product µ₀ε₀ has the dimensions of:",
        [
         "Length/time",
         "(Time/length)², i.e. L⁻²T²",
         "L²T⁻²",
         "Dimensionless"
        ],
        1,
        "µ₀ε₀ = 1/c², and c has dimensions LT⁻¹, so µ₀ε₀ has dimensions L⁻²T²."
       ],
       [
        "A circular coil of radius 3 cm carries 4 A. What is the field on its axis at 4 cm from the centre?",
        [
         "8.4 × 10⁻⁵ T",
         "3.6 × 10⁻⁵ T",
         "4.5 × 10⁻⁶ T",
         "1.8 × 10⁻⁵ T"
        ],
        3,
        "B = µ₀IR²/[2(x² + R²)^(3/2)] = 4π × 10⁻⁷ × 4 × 9 × 10⁻⁴/[2 × (5 × 10⁻²)³] ≈ 1.8 × 10⁻⁵ T.",
        "x² + R² = (5 cm)²."
       ],
       [
        "A wire carrying 5 A has two straight radial segments joined by a quarter-circular arc of radius 10 cm. What is the field at the centre of the arc?",
        [
         "7.9 × 10⁻⁶ T",
         "1.6 × 10⁻⁵ T",
         "3.1 × 10⁻⁵ T",
         "3.9 × 10⁻⁶ T"
        ],
        0,
        "Straight radial segments give zero (dl × r = 0). The quarter arc gives (1/4) × µ₀I/2R = µ₀I/8R = 4π × 10⁻⁷ × 5/0.8 ≈ 7.9 × 10⁻⁶ T."
       ],
       [
        "Two long parallel wires 10 cm apart carry 5 A and 3 A in opposite directions. What is the field at the midpoint between them?",
        [
         "8.0 × 10⁻⁶ T",
         "1.6 × 10⁻⁵ T",
         "3.2 × 10⁻⁵ T",
         "6.4 × 10⁻⁵ T"
        ],
        2,
        "Between antiparallel currents the two fields point the same way: B = (µ₀/2π)(5 + 3)/0.05 = 2 × 10⁻⁷ × 8/0.05 = 3.2 × 10⁻⁵ T.",
        "Use the right-hand rule to decide whether the fields add or subtract."
       ],
       [
        "Assertion (A): Ampère’s circuital law can be used directly to get the field at the centre of a circular current loop.\nReason (R): Ampère’s law holds for any closed loop carrying a steady current.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "R is true, but the circular loop lacks the symmetry that makes B constant and tangential on an Amperian loop, so the law gives no simple result there; A is false."
       ],
       [
        "A long straight wire of radius a carries a current I spread uniformly over its cross-section. The ratio of the field at r = a/2 to the field at r = 2a is:",
        [
         "2",
         "1",
         "1/2",
         "4"
        ],
        1,
        "Inside, B = µ₀Ir/2πa² = µ₀I/4πa at r = a/2. Outside, B = µ₀I/2πr = µ₀I/4πa at r = 2a. The two are equal."
       ],
       [
        "A solenoid is 50 cm long and has 4 layers of 300 turns each. It carries 5 A. What is the field inside near its centre?",
        [
         "1.5 × 10⁻² T",
         "7.5 × 10⁻³ T",
         "3.8 × 10⁻³ T",
         "3.0 × 10⁻² T"
        ],
        0,
        "n = 4 × 300/0.5 = 2400 turns per metre, so B = µ₀nI = 4π × 10⁻⁷ × 2400 × 5 ≈ 1.5 × 10⁻² T.",
        "Count the turns of all the layers."
       ],
       [
        "A long solenoid with a fixed number of turns carries a fixed current. If it is stretched to twice its length, the field inside becomes:",
        [
         "Double",
         "Unchanged",
         "One-fourth",
         "Half"
        ],
        3,
        "B = µ₀nI, and n = N/L halves when L doubles, so B halves."
       ],
       [
        "A student says: “Wire X carries 20 A and wire Y carries 10 A, parallel and close, so X pulls Y twice as hard as Y pulls X.” What is wrong?",
        [
         "Y pulls X twice as hard",
         "The forces are equal and opposite, as Newton’s third law requires",
         "The wires repel, not attract",
         "There is no force because the currents differ"
        ],
        1,
        "Force per unit length is µ₀I₁I₂/2πd for both wires. Same-direction currents attract, and F(ba) = −F(ab)."
       ],
       [
        "Two long parallel wires carry the same current. If both currents are doubled and the separation is also doubled, the force per unit length becomes:",
        [
         "4 times",
         "Unchanged",
         "2 times",
         "8 times"
        ],
        2,
        "f = µ₀I₁I₂/2πd ∝ I²/d, so the change is 4/2 = 2 times.",
        "f is proportional to I₁I₂/d."
       ],
       [
        "A coil of 50 turns, 4 cm × 5 cm, carries 2 A. Its plane makes 30° with a uniform field of 0.5 T. What is the torque on it?",
        [
         "8.7 × 10⁻² N m",
         "5.0 × 10⁻² N m",
         "1.0 × 10⁻¹ N m",
         "4.3 × 10⁻² N m"
        ],
        0,
        "The angle between the normal and B is 60°. τ = NIAB sin 60° = 50 × 2 × 2 × 10⁻³ × 0.5 × 0.866 ≈ 8.7 × 10⁻² N m.",
        "θ in τ = NIAB sin θ is measured from the normal to the plane."
       ],
       [
        "Assertion (A): When the magnetic moment of a current loop is parallel to the external field, the loop is in stable equilibrium.\nReason (R): The torque on a current loop is zero when its magnetic moment is parallel or antiparallel to the field.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both are true, but zero torque also occurs at the unstable antiparallel position, so R alone does not explain the stability; stability follows from the restoring torque after a small rotation."
       ],
       [
        "A small loop has magnetic moment 0.5 A m². What is the field on its axis at 0.5 m from its centre?",
        [
         "4 × 10⁻⁷ T",
         "8 × 10⁻⁷ T",
         "1.6 × 10⁻⁶ T",
         "2 × 10⁻⁷ T"
        ],
        1,
        "For x much greater than R, B = (µ₀/4π)(2m/x³) = 10⁻⁷ × 2 × 0.5/0.125 = 8 × 10⁻⁷ T."
       ],
       [
        "At the same large distance from a small current loop, the field on its axis is how many times the field in the plane of the loop?",
        [
         "1/2",
         "1",
         "2",
         "4"
        ],
        2,
        "On the axis B = (µ₀/4π)(2m/x³), and in the equatorial plane B = (µ₀/4π)(m/x³), the same as the electric dipole results."
       ],
       [
        "A galvanometer of resistance 50 Ω gives full-scale deflection at 5 mA. What shunt converts it into a 0–1 A ammeter?",
        [
         "2.5 Ω",
         "0.05 Ω",
         "50 Ω",
         "0.25 Ω"
        ],
        3,
        "I_g × G = (I − I_g) × r_s, so r_s = 0.005 × 50/0.995 ≈ 0.25 Ω.",
        "Voltage across the galvanometer and the shunt is the same."
       ],
       [
        "The number of turns of a moving-coil galvanometer is doubled, and its coil resistance also doubles. Its current sensitivity and voltage sensitivity become:",
        [
         "Current sensitivity doubles; voltage sensitivity is unchanged",
         "Both double",
         "Both stay unchanged",
         "Current sensitivity is unchanged; voltage sensitivity doubles"
        ],
        0,
        "Current sensitivity NAB/k ∝ N doubles. Voltage sensitivity ∝ N/R is unchanged because R also doubles."
       ]
      ]
     ]
    },
    {
     "n": 5,
     "t": "Magnetism and Matter",
     "levels": [
      [
       [
        "A bar magnet is cut into two pieces along its length. You get:",
        [
         "One piece with only N, the other only S",
         "Two magnets, each with N and S",
         "The magnetism is destroyed",
         "Only one piece remains a magnet"
        ],
        1,
        "Magnetic monopoles do not exist. Each piece is a complete magnet with a north and a south pole."
       ],
       [
        "The net magnetic flux through any closed surface is zero because:",
        [
         "Magnetic fields are weak",
         "Field lines cross each other",
         "Magnetic monopoles do not exist",
         "The surface is a conductor"
        ],
        2,
        "Magnetic field lines form closed loops because there are no isolated poles, so as many lines enter a closed surface as leave it."
       ],
       [
        "A bar magnet at 30° to a 0.25 T field experiences a torque of 4.5 × 10⁻² J. What is its magnetic moment?",
        [
         "0.18 J T⁻¹",
         "0.36 J T⁻¹",
         "0.72 J T⁻¹",
         "1.8 J T⁻¹"
        ],
        1,
        "τ = mB sin θ, so m = 4.5 × 10⁻²/(0.25 × 0.5) = 0.36 J T⁻¹. (NCERT Exercise 5.1)"
       ],
       [
        "A magnet with m = 0.32 J T⁻¹ is in a 0.15 T field. What is its potential energy in STABLE equilibrium?",
        [
         "−0.048 J",
         "+0.048 J",
         "Zero",
         "−0.024 J"
        ],
        0,
        "U = −mB cos θ. Stable equilibrium is at θ = 0°, so U = −0.048 J. At 180° (unstable) it is +0.048 J."
       ],
       [
        "For a diamagnetic substance, the magnetic susceptibility χ is:",
        [
         "Large and positive",
         "Small and positive",
         "Small and negative",
         "Zero"
        ],
        2,
        "Diamagnetic materials (bismuth, copper, water) have small negative χ and move from stronger to weaker parts of a field."
       ],
       [
        "A superconductor is a perfect diamagnet. For it:",
        [
         "χ = 0, µᵣ = 1",
         "χ = −1, µᵣ = 0",
         "χ = 1, µᵣ = 2",
         "χ = −1, µᵣ = 1"
        ],
        1,
        "A superconductor expels the magnetic field completely (Meissner effect): χ = −1 and µᵣ = 0."
       ],
       [
        "A material has susceptibility χ = 399. What is its relative permeability µᵣ?",
        [
         "399",
         "400",
         "398",
         "1/399"
        ],
        1,
        "µᵣ = 1 + χ = 1 + 399 = 400."
       ],
       [
        "For a paramagnetic material, as the temperature is LOWERED, its magnetisation:",
        [
         "Decreases",
         "Increases",
         "Stays the same",
         "Becomes negative"
        ],
        1,
        "Lower temperature means less random thermal motion, so more atomic dipoles line up with the field."
       ],
       [
        "Which material is best for making a permanent magnet?",
        [
         "Soft iron",
         "Copper",
         "Alnico",
         "Aluminium"
        ],
        2,
        "Alnico is a hard ferromagnet: it keeps its magnetisation. Soft iron loses it, so it is used in electromagnets."
       ],
       [
        "A short bar magnet has m = 0.48 J T⁻¹. What is the field on its AXIS, 10 cm from its centre?",
        [
         "0.48 × 10⁻⁴ T",
         "4.8 × 10⁻⁴ T",
         "0.96 × 10⁻⁴ T",
         "1.92 × 10⁻⁴ T"
        ],
        2,
        "B = (µ₀/4π)(2m/r³) = 10⁻⁷ × 2 × 0.48/(0.1)³ = 0.96 × 10⁻⁴ T, along the magnet’s moment. (NCERT Exercise 5.7)",
        "Axial field: B = (µ₀/4π)(2m/r³)."
       ],
       [
        "Iron filings sprinkled on a glass sheet over a short bar magnet form a pattern. This suggests that the bar magnet behaves like:",
        [
         "A single magnetic monopole",
         "A magnetic dipole with a north and a south pole",
         "A point electric charge",
         "A source of a uniform magnetic field"
        ],
        1,
        "The filing pattern resembles the field of a dipole (and of a current-carrying solenoid), so the magnet has two poles and acts as a magnetic dipole."
       ],
       [
        "Which of these is NOT a property of magnetic field lines?",
        [
         "They form continuous closed loops",
         "The tangent at a point gives the direction of B",
         "Two field lines never intersect",
         "They begin at the north pole and end at the south pole"
        ],
        3,
        "Field lines are closed loops: outside the magnet they go from N to S, but they continue inside the magnet from S to N, so they do not begin or end anywhere."
       ],
       [
        "A closely wound solenoid has 800 turns, cross-section 2.5 × 10⁻⁴ m² and carries 3.0 A. What is its magnetic moment (it acts like a bar magnet)?",
        [
         "0.06 J T⁻¹",
         "0.2 J T⁻¹",
         "0.6 J T⁻¹",
         "6.0 J T⁻¹"
        ],
        2,
        "m = NIA = 800 × 3.0 × 2.5 × 10⁻⁴ = 0.6 J T⁻¹, along the axis. (NCERT Exercise 5.3)",
        "Moment of a coil: m = NIA."
       ],
       [
        "A short bar magnet has m = 0.48 J T⁻¹. What is the field on its EQUATORIAL line, 10 cm from its centre?",
        [
         "4.8 × 10⁻⁵ T, along m",
         "4.8 × 10⁻⁵ T, opposite to m",
         "9.6 × 10⁻⁵ T, opposite to m",
         "9.6 × 10⁻⁵ T, along m"
        ],
        1,
        "B = (µ₀/4π)(m/r³) = 10⁻⁷ × 0.48/(0.1)³ = 4.8 × 10⁻⁵ T, directed opposite to m on the equator. (NCERT Exercise 5.7)",
        "Equatorial field is half the axial value."
       ],
       [
        "A long solenoid has n = 500 turns per metre and carries 3 A. Its core has µᵣ = 100. What is the magnetic intensity H in the core?",
        [
         "15 A m⁻¹",
         "150 A m⁻¹",
         "1.5 × 10⁵ A m⁻¹",
         "1.5 × 10³ A m⁻¹"
        ],
        3,
        "H = nI = 500 × 3 = 1.5 × 10³ A m⁻¹. H depends only on the current, not on the core material.",
        "H = nI."
       ],
       [
        "A substance has relative permeability µᵣ = 0.99998. It is:",
        [
         "Paramagnetic",
         "Diamagnetic",
         "Ferromagnetic",
         "A superconductor"
        ],
        1,
        "µᵣ slightly less than 1 means χ is small and negative, so the substance is diamagnetic. A superconductor has µᵣ = 0."
       ],
       [
        "When an external field is applied to an unmagnetised ferromagnet, the domains:",
        [
         "Disappear completely",
         "Shrink along the field",
         "Align with the field, and those along the field grow in size",
         "Rotate to point opposite to the field"
        ],
        2,
        "Each domain already has a net magnetisation; the field turns them towards B₀ and the domains oriented along B₀ grow."
       ]
      ],
      [
       [
        "Assertion (A): An isolated north pole can be obtained by cutting a bar magnet at its middle.\nReason (R): Magnetic monopoles do not exist.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Cutting a magnet gives two smaller magnets, each with N and S poles. R is true and is why A is false."
       ],
       [
        "Riya sprinkles iron filings over a glass sheet placed on (i) a short bar magnet and (ii) a current-carrying solenoid, and gets similar patterns. She also hangs the magnet freely and it settles along north–south. Which conclusion is justified?",
        [
         "The magnet is a single north monopole whose field resembles a solenoid",
         "The magnet carries a net electric charge that aligns the filings",
         "The magnet is a magnetic dipole with two poles, resembling a solenoid, and its north-seeking end is its north pole",
         "The solenoid has only one pole because the filings start at one end"
        ],
        2,
        "Similar patterns show both act as magnetic dipoles; a freely suspended magnet points N–S, and its north-seeking tip is called the north pole."
       ],
       [
        "A student writes: “Field lines of a bar magnet start at its north pole and end at its south pole, just like the lines of an electric dipole start at + and end at −.” What is wrong?",
        [
         "Magnetic lines start at the south pole and end at the north pole",
         "Magnetic lines are closed loops, continuing inside the magnet from S to N",
         "Electric dipole lines also form closed loops",
         "There are no field lines inside a magnet"
        ],
        1,
        "Since monopoles do not exist, magnetic field lines are continuous closed loops; inside the magnet they run from S to N."
       ],
       [
        "Which of these could be a correct pattern of static magnetic field lines?",
        [
         "Lines radiating outward from a point in all directions",
         "Two field lines crossing at a point in empty space",
         "A closed loop of field line in empty space, enclosing no current",
         "Closed circular loops around a long straight current-carrying wire"
        ],
        3,
        "Lines cannot emanate from a point (net flux would be non-zero), cannot cross, and a closed loop must enclose a current. Circles around a wire are correct. (NCERT Example 5.3)"
       ],
       [
        "A bar magnet is modelled as a solenoid carrying a fixed current. It is cut transversely into two equal halves. Compared with the original, each half has:",
        [
         "Magnetic moment m, magnetisation M doubled",
         "Magnetic moment m/2, magnetisation M unchanged",
         "Magnetic moment m/2, magnetisation M halved",
         "Magnetic moment m, magnetisation M unchanged"
        ],
        1,
        "Half the turns gives m = NIA/2; the volume is also halved, so M = m/V is unchanged. The pieces are weaker magnets."
       ],
       [
        "A closely wound solenoid of 2000 turns and cross-section 1.6 × 10⁻⁴ m² carries 4.0 A. It is free to turn in a horizontal plane, and a horizontal field of 7.5 × 10⁻² T is applied at 30° to its axis. What is the torque on it?",
        [
         "4.8 × 10⁻² N m",
         "8.3 × 10⁻² N m",
         "9.6 × 10⁻² N m",
         "1.28 × 10⁻² N m"
        ],
        0,
        "m = NIA = 2000 × 4 × 1.6 × 10⁻⁴ = 1.28 J T⁻¹; τ = mB sin 30° = 1.28 × 7.5 × 10⁻² × 0.5 = 4.8 × 10⁻² N m. The net force is zero. (NCERT Exercise 5.6)",
        "First find m = NIA, then τ = mB sin θ."
       ],
       [
        "A bar magnet of moment 1.5 J T⁻¹ lies along a uniform field of 0.22 T. How much work must an external torque do to turn it through 120°?",
        [
         "0.165 J",
         "0.33 J",
         "0.495 J",
         "0.66 J"
        ],
        2,
        "W = mB(cos 0° − cos 120°) = 1.5 × 0.22 × 1.5 = 0.495 J. (0.33 J would be 90°, 0.66 J would be 180°.)",
        "W = U(θ₂) − U(θ₁), with U = −mB cos θ."
       ],
       [
        "Assertion (A): A bar magnet in a uniform magnetic field experiences a torque but no net force.\nReason (R): The magnetic potential energy of a dipole is minimum when m is parallel to B.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both are true. The zero net force is due to the field being uniform (equal and opposite forces on the two ends); R is a separate fact and does not explain A."
       ],
       [
        "At a point on the equatorial line of a short bar magnet, 10 cm from its centre, the field is 2.4 × 10⁻⁵ T. What is the field on the axis of the same magnet at 20 cm from its centre?",
        [
         "1.2 × 10⁻⁵ T",
         "3 × 10⁻⁶ T",
         "6 × 10⁻⁶ T",
         "4.8 × 10⁻⁵ T"
        ],
        2,
        "B_E = (µ₀/4π)m/r³ gives (µ₀/4π)m = 2.4 × 10⁻⁸. Then B_A = 2 × 2.4 × 10⁻⁸/(0.2)³ = 6 × 10⁻⁶ T.",
        "B_A = 2 (µ₀/4π) m/r³ and B_E = (µ₀/4π) m/r³."
       ],
       [
        "A student says: “For a short bar magnet, the field at a point on its equator at distance r is µ₀m/(4πr³), in the same direction as m.” What is wrong?",
        [
         "The magnitude should be 2µ₀m/(4πr³)",
         "The magnitude should be µ₀m/(2πr³)",
         "Both magnitude and direction are correct",
         "The magnitude is right, but the direction is opposite to m"
        ],
        3,
        "B_E = −(µ₀/4π)(m/r³): the magnitude is right, but the equatorial field points opposite to m (unlike the axial field)."
       ],
       [
        "Assertion (A): The net magnetic flux through any closed surface is zero.\nReason (R): The magnetic field is zero everywhere inside a closed surface.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is Gauss’s law for magnetism. R is false: field lines can pass through the surface, entering as many as leave, so the flux cancels."
       ],
       [
        "A closed box is placed in a non-uniform magnetic field. The magnetic flux through five faces is +3, −1, +2, +4 and −2 mWb. What is the flux through the sixth face?",
        [
         "+6 mWb",
         "−6 mWb",
         "Zero",
         "+2 mWb"
        ],
        1,
        "The net flux through a closed surface is zero, so the sixth face carries −(3 − 1 + 2 + 4 − 2) = −6 mWb.",
        "Use ∮B·dS = 0."
       ],
       [
        "A long solenoid has 500 turns per metre and carries 4 A. Its core has µᵣ = 200. What is the magnetic field B in the core? (µ₀ = 4π × 10⁻⁷ T m A⁻¹)",
        [
         "2.5 × 10⁻³ T",
         "0.25 T",
         "0.50 T",
         "1.0 T"
        ],
        2,
        "H = nI = 2000 A m⁻¹, so B = µᵣµ₀H = 200 × 4π × 10⁻⁷ × 2000 ≈ 0.50 T. (2.5 × 10⁻³ T is the field without the core.)",
        "B = µᵣµ₀H, with H = nI."
       ],
       [
        "In a solenoid core the field is B = 1.2 T and H = 2000 A m⁻¹. A student writes M = B/µ₀ = 9.55 × 10⁵ A m⁻¹. What is wrong?",
        [
         "He forgot to subtract H: M = B/µ₀ − H ≈ 9.53 × 10⁵ A m⁻¹",
         "He should add H: M ≈ 9.57 × 10⁵ A m⁻¹",
         "He should multiply B by µ₀ instead of dividing",
         "Nothing is wrong"
        ],
        0,
        "B = µ₀(H + M), so M = B/µ₀ − H = 9.549 × 10⁵ − 2000 ≈ 9.53 × 10⁵ A m⁻¹."
       ],
       [
        "Three materials P, Q and R have relative permeabilities 0.99998, 1.00002 and 1200 respectively. They are respectively:",
        [
         "Paramagnetic, diamagnetic, ferromagnetic",
         "Diamagnetic, ferromagnetic, paramagnetic",
         "Diamagnetic, paramagnetic, ferromagnetic",
         "Ferromagnetic, paramagnetic, diamagnetic"
        ],
        2,
        "µᵣ < 1 means diamagnetic, µᵣ slightly above 1 means paramagnetic, and µᵣ ≫ 1 means ferromagnetic."
       ],
       [
        "A superconducting rod fills the core of a long solenoid, where the magnetic intensity is H = 500 A m⁻¹. What are M and B inside the rod?",
        [
         "M = −500 A m⁻¹, B = 0",
         "M = 0, B = µ₀H",
         "M = +500 A m⁻¹, B = 2µ₀H",
         "M = −500 A m⁻¹, B = −µ₀H"
        ],
        0,
        "A superconductor is a perfect diamagnet (χ = −1, µᵣ = 0), so M = −H = −500 A m⁻¹ and B = µ₀(H + M) = 0 (Meissner effect)."
       ],
       [
        "A bismuth rod and an aluminium rod are placed near the stronger part of a non-uniform field. Which statement is correct?",
        [
         "Both are attracted towards the stronger field",
         "Bismuth is repelled towards the weaker field; aluminium is weakly attracted towards the stronger field",
         "Both are repelled towards the weaker field",
         "Bismuth is strongly attracted; aluminium is repelled"
        ],
        1,
        "Bismuth is diamagnetic (induced moment opposes the field), so it moves to weaker field. Aluminium is paramagnetic and moves weakly towards stronger field."
       ],
       [
        "A paramagnetic sample has already reached its saturation magnetisation. Which of these will increase its magnetisation further?",
        [
         "Doubling the applied field",
         "Lowering the temperature",
         "Doing both of the above",
         "None of these, since all atomic dipoles are already aligned"
        ],
        3,
        "At saturation every atomic dipole points along the field, so M cannot increase any more by raising the field or lowering the temperature."
       ],
       [
        "A student says: “Soft iron has µᵣ > 1000, so it will make an excellent permanent magnet.” What is wrong?",
        [
         "Nothing, large µᵣ means magnetisation is retained",
         "High µᵣ does not mean retention: soft iron loses its magnetisation when the field is removed, so alnico-type hard magnets are used",
         "Soft iron is diamagnetic, so it cannot be magnetised",
         "Soft iron has µᵣ < 1000, not > 1000"
        ],
        1,
        "Soft ferromagnets lose their magnetisation when the external field is removed; hard ferromagnets such as alnico retain it and make permanent magnets."
       ],
       [
        "Assertion (A): A ferromagnet becomes paramagnetic at a sufficiently high temperature.\nReason (R): Thermal agitation destroys the domain structure.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Above a high enough temperature the domains disintegrate, so the cooperative alignment is lost and the material behaves as a paramagnet."
       ]
      ]
     ]
    },
    {
     "n": 6,
     "t": "Electromagnetic Induction",
     "levels": [
      [
       [
        "A closed loop is held stationary between the poles of a very strong permanent magnet. The induced current is:",
        [
         "A large current",
         "A small current",
         "No current",
         "A current that keeps reversing"
        ],
        2,
        "An emf is induced only when the magnetic flux CHANGES. A strong but steady field gives no emf (NCERT Example 6.5a)."
       ],
       [
        "Lenz’s law is a consequence of the conservation of:",
        [
         "Charge",
         "Energy",
         "Momentum",
         "Mass"
        ],
        1,
        "If the induced current helped the change instead of opposing it, energy would come from nowhere. So Lenz’s law follows from conservation of energy."
       ],
       [
        "The north pole of a magnet is pushed towards a coil. The face of the coil nearest the magnet behaves as a:",
        [
         "North pole",
         "South pole",
         "No pole",
         "Alternately N and S"
        ],
        0,
        "To oppose the increasing flux, the near face becomes a north pole and repels the magnet. The current is anticlockwise as seen from the magnet."
       ],
       [
        "A 10 m wire falls at 5 m/s perpendicular to a field of 0.30 × 10⁻⁴ T. What is the induced emf?",
        [
         "1.5 × 10⁻⁴ V",
         "1.5 × 10⁻³ V",
         "3.0 × 10⁻³ V",
         "15 V"
        ],
        1,
        "e = Blv = 0.30 × 10⁻⁴ × 10 × 5 = 1.5 × 10⁻³ V. (NCERT Exercise 6.6)"
       ],
       [
        "A 1 m rod rotates about one end at 400 rad/s in a 0.5 T field parallel to the axis. What emf develops between its ends?",
        [
         "50 V",
         "200 V",
         "100 V",
         "400 V"
        ],
        2,
        "e = ½BωR² = ½ × 0.5 × 400 × 1² = 100 V. (NCERT Exercise 6.5)",
        "For a rotating rod, e = ½BωR²."
       ],
       [
        "Current in a circuit falls from 5 A to 0 in 0.1 s, inducing an average emf of 200 V. What is the self-inductance?",
        [
         "0.4 H",
         "40 H",
         "4 H",
         "2.5 H"
        ],
        2,
        "|e| = L(ΔI/Δt), so L = 200 × 0.1/5 = 4 H. (NCERT Exercise 6.7)"
       ],
       [
        "Two coils have mutual inductance 1.5 H. The current in one changes from 0 to 20 A in 0.5 s. What is the change in flux linkage with the other?",
        [
         "15 Wb",
         "30 Wb",
         "60 Wb",
         "7.5 Wb"
        ],
        1,
        "NΦ = MI, so Δ(NΦ) = 1.5 × 20 = 30 Wb. The time is not needed. (NCERT Exercise 6.8)",
        "The time given is a distractor."
       ],
       [
        "What is the energy stored in a 2 H inductor carrying 3 A?",
        [
         "6 J",
         "9 J",
         "18 J",
         "3 J"
        ],
        1,
        "U = ½LI² = ½ × 2 × 3² = 9 J."
       ],
       [
        "If the number of turns per unit length of a solenoid is doubled (same length and area), its self-inductance:",
        [
         "Doubles",
         "Halves",
         "Becomes four times",
         "Stays the same"
        ],
        2,
        "L = µ₀n²Al, so doubling n multiplies L by 4."
       ],
       [
        "In an AC generator, the induced emf is maximum when the plane of the coil is:",
        [
         "Perpendicular to the field (maximum flux)",
         "Parallel to the field (zero flux)",
         "At 45° to the field",
         "The emf is always the same"
        ],
        1,
        "e = NBAω sin ωt is maximum when the PLANE of the coil is parallel to B: the flux is zero but changing fastest."
       ],
       [
        "In the experiment with two stationary coils, C₁ is joined to a galvanometer and C₂ to a battery through a tapping key. What does the galvanometer show while the key is held pressed down continuously?",
        [
         "A steady deflection in one direction",
         "No deflection",
         "A deflection that keeps alternating",
         "A deflection that slowly grows"
        ],
        1,
        "A deflection appears only while the current in C₂ is changing, that is, when the key is pressed or released. A steady current gives a steady flux and no induced emf."
       ],
       [
        "Oersted and Ampere showed that electric currents produce magnetic fields. The converse effect, a changing magnetic field producing an electric current, was demonstrated by:",
        [
         "Oersted and Ampere",
         "Coulomb and Gauss",
         "Lenz and Tesla",
         "Faraday and Henry"
        ],
        3,
        "Around 1830, Michael Faraday in England and Joseph Henry in the USA independently showed that a moving magnet or a changing current can induce current in a nearby coil."
       ],
       [
        "A flat loop of area 0.05 m² is in a uniform field of 0.4 T. The angle between the field and the area vector of the loop is 60°. What is the magnetic flux through the loop?",
        [
         "0.02 Wb",
         "0.017 Wb",
         "0.01 Wb",
         "0.04 Wb"
        ],
        2,
        "Φ = BA cos θ = 0.4 × 0.05 × cos 60° = 0.01 Wb."
       ],
       [
        "The flux through each turn of a 100-turn coil falls uniformly from 0.02 Wb to zero in 0.1 s. What is the magnitude of the induced emf?",
        [
         "2 V",
         "200 V",
         "0.2 V",
         "20 V"
        ],
        3,
        "|e| = N ΔΦ/Δt = 100 × 0.02/0.1 = 20 V."
       ],
       [
        "The SI unit of inductance, the henry, is equal to:",
        [
         "1 Wb A⁻¹",
         "1 Wb A",
         "1 V A⁻¹",
         "1 T A⁻¹"
        ],
        0,
        "Inductance is flux linkage divided by current, so 1 H = 1 Wb A⁻¹ (which also equals 1 V s A⁻¹)."
       ],
       [
        "The mutual inductance of a pair of coils depends on:",
        [
         "Only the current in the first coil",
         "Only the emf induced in the second coil",
         "Their separation and relative orientation",
         "The rate at which the current changes"
        ],
        2,
        "Mutual inductance is a geometric property of the pair (and the medium): it depends on their separation and relative orientation, not on the current or its rate of change."
       ]
      ],
      [
       [
        "Which of these situations will induce a current in a closed coil C₁?\n(i) A steady current of 5 A in a stationary neighbouring coil C₂\n(ii) A bar magnet being pushed towards C₁\n(iii) The current in C₂ being switched on\n(iv) C₁ held at rest between the poles of a very strong fixed magnet",
        [
         "(i) and (iv) only",
         "(ii) and (iii) only",
         "(i), (ii) and (iii)",
         "All four"
        ],
        1,
        "Current is induced only when the flux through C₁ changes: moving the magnet and switching C₂ on both change it. A steady current or a steady strong field gives no change."
       ],
       [
        "Assertion (A): In the two-coil experiment, the galvanometer shows no deflection while the key is held pressed, even though the current in the battery coil is large.\nReason (R): The induced emf depends on the rate of change of magnetic flux, not on the magnitude of the flux.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "With a steady current the flux through the second coil is constant, so dΦ/dt = 0 and the emf is zero, however large the flux is. R explains A."
       ],
       [
        "A flat coil of area 200 cm² is placed in a uniform field of 0.4 T so that the plane of the coil makes an angle of 30° with the field. What is the flux through the coil?",
        [
         "4.0 × 10⁻³ Wb",
         "6.9 × 10⁻³ Wb",
         "8.0 × 10⁻³ Wb",
         "2.0 × 10⁻³ Wb"
        ],
        0,
        "The angle between B and the area vector is 90° − 30° = 60°, so Φ = 0.4 × 0.02 × cos 60° = 4 × 10⁻³ Wb.",
        "Use the angle between B and the normal to the plane."
       ],
       [
        "A circular coil of radius 5 cm, 200 turns and resistance 4 Ω has its plane perpendicular to a field of 0.2 T. It is turned through 180° in 0.1 s. Estimate the average current induced.",
        [
         "0.79 A",
         "3.14 A",
         "1.57 A",
         "6.28 A"
        ],
        2,
        "ΔΦ = 2BA = 2 × 0.2 × π × (0.05)² = 3.14 × 10⁻³ Wb, so e = NΔΦ/Δt = 6.28 V and I = e/R = 1.57 A (cf. NCERT Example 6.3).",
        "The flux changes from +BA to −BA."
       ],
       [
        "A bar magnet is dropped, north pole first, along the axis of a closed copper ring and, separately, through an identical ring that has a small cut. Which statement is correct?",
        [
         "Both rings make the magnet fall with acceleration less than g",
         "The closed ring makes it fall with acceleration less than g; with the cut ring it falls almost freely, though an emf is still induced across the cut",
         "The cut ring slows the magnet more because the emf across the gap is larger",
         "Both rings leave the fall unaffected since copper is non-magnetic"
        ],
        1,
        "In the closed ring an induced current flows and opposes the motion (Lenz’s law), so the magnet is slowed. In the cut ring there is an emf but no current, so there is no opposing force."
       ],
       [
        "A student writes: “When the north pole of a magnet is withdrawn from a coil, the flux decreases, so the near face of the coil becomes a north pole and repels the magnet to slow it.” What is wrong?",
        [
         "Nothing is wrong",
         "No current flows because the flux is decreasing",
         "The near face becomes a south pole, which attracts the magnet and so opposes its withdrawal",
         "The induced current opposes the magnet’s field, not the change in flux, so the face is unaffected"
        ],
        2,
        "Lenz’s law opposes the change. Withdrawal reduces the flux, so the coil tries to keep it up: the near face becomes a south pole, which attracts the receding magnet (clockwise current seen from the magnet)."
       ],
       [
        "A rod of length 0.5 m slides at a constant 4 m/s on two parallel rails that are 0.5 m apart and joined by a 2 Ω resistor, in a uniform field of 0.2 T perpendicular to the rails. What mechanical power must be supplied to keep the rod moving uniformly? (Neglect friction and rail resistance.)",
        [
         "0.04 W",
         "0.16 W",
         "0.08 W",
         "0.40 W"
        ],
        2,
        "e = Blv = 0.2 × 0.5 × 4 = 0.4 V, I = e/R = 0.2 A, and the power = I²R = 0.08 W (equal to F v with F = BIl = 0.02 N).",
        "Power supplied = power dissipated in the resistor."
       ],
       [
        "A student calculates the emf between the ends of a 0.5 m rod rotating at 40 rad/s about one end in a field of 0.2 T (parallel to the axis) as e = B l v = 0.2 × 0.5 × (40 × 0.5) = 2 V. What is the error and the correct value?",
        [
         "No error; 2 V is correct",
         "The rod length should be squared, so e = 4 V",
         "The emf must be divided by 40, so e = 0.05 V",
         "The speed should be the average speed of the rod, ωl/2, so e = 1 V"
        ],
        3,
        "Different points of the rod move at different speeds from 0 to ωl, so use the mean speed ωl/2: e = ½Bωl² = ½ × 0.2 × 40 × 0.25 = 1 V."
       ],
       [
        "Assertion (A): A closed rectangular loop moving with constant velocity entirely inside a uniform magnetic field has no induced current.\nReason (R): The magnetic flux through the loop is zero.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true because the flux does not change, so there is no emf. R is false: the flux is BA, not zero, but it stays constant."
       ],
       [
        "Which of the following has the same dimensions as inductance?",
        [
         "Ω s⁻¹",
         "Ω² s",
         "J A⁻¹",
         "Ω s"
        ],
        3,
        "e = L dI/dt gives L = V s/A = (V/A) s = Ω s. J A⁻¹ is a weber, the unit of flux, not of inductance."
       ],
       [
        "Two long co-axial solenoids of the same length 0.5 m have 1000 and 2000 turns per metre; the inner one has radius 2 cm. A current in the inner solenoid changes by 5 A in 0.01 s. What emf is induced in the outer solenoid?",
        [
         "0.79 V",
         "0.40 V",
         "1.58 V",
         "7.9 V"
        ],
        0,
        "M = µ₀n₁n₂πr₁²l = 4π × 10⁻⁷ × 1000 × 2000 × π × (0.02)² × 0.5 = 1.58 × 10⁻³ H, so e = M ΔI/Δt = 1.58 × 10⁻³ × 500 = 0.79 V.",
        "The flux is confined to the inner radius."
       ],
       [
        "A student says: “M₁₂ for a small coil inside a large coil is 0.2 H, but M₂₁ must be smaller because the large coil is not affected much by the small one.” What is wrong?",
        [
         "Nothing is wrong",
         "M₂₁ is zero because the small coil has little flux",
         "M₁₂ = M₂₁ always, so M₂₁ is also 0.2 H",
         "M₂₁ must be larger, because the large coil has more turns"
        ],
        2,
        "Mutual inductance is symmetric: M₁₂ = M₂₁. The equality is useful when one of the two is much easier to calculate."
       ],
       [
        "A solenoid has 1000 turns, length 0.5 m and cross-section 2 × 10⁻⁴ m², with a soft-iron core of relative permeability 400. How much energy is stored when it carries 2 A?",
        [
         "1.0 × 10⁻³ J",
         "0.20 J",
         "0.80 J",
         "0.40 J"
        ],
        3,
        "L = µᵣµ₀n²Al = 400 × 4π × 10⁻⁷ × (2000)² × 2 × 10⁻⁴ × 0.5 = 0.201 H, so U = ½LI² = ½ × 0.201 × 4 ≈ 0.40 J.",
        "n = N/l = 2000 m⁻¹."
       ],
       [
        "Assertion (A): The self-inductance of a coil depends on the current flowing through it.\nReason (R): The flux linked with a coil is proportional to the current through it.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: L = NΦ/I depends only on geometry and the medium (µᵣ). R is true, but it is the reason the ratio NΦ/I is a constant, not a dependence on I."
       ],
       [
        "A rectangular coil of 200 turns and area 0.05 m² rotates at 50 Hz in a uniform field of 0.2 T, about an axis perpendicular to the field. The emf is zero at t = 0. What is the emf at t = 1/600 s?",
        [
         "50 V",
         "314 V",
         "544 V",
         "628 V"
        ],
        1,
        "e₀ = NBAω = 200 × 0.2 × 0.05 × 100π = 628 V, and ωt = π/6, so e = 628 × sin 30° = 314 V.",
        "Convert frequency to ω = 2πn first."
       ],
       [
        "The coil of an ac generator is spun twice as fast, with everything else unchanged. What happens to the peak emf and to the frequency of the emf?",
        [
         "Both stay the same",
         "Peak emf doubles; frequency stays the same",
         "Peak emf stays the same; frequency doubles",
         "Both double"
        ],
        3,
        "e₀ = NBAω is proportional to ω, and the frequency of the emf equals the rotation frequency, so both double."
       ]
      ]
     ]
    },
    {
     "n": 7,
     "t": "Alternating Current",
     "levels": [
      [
       [
        "Household supply is 220 V (rms). What is its peak voltage?",
        [
         "220 V",
         "156 V",
         "311 V",
         "440 V"
        ],
        2,
        "V₀ = √2 × V(rms) = 1.414 × 220 ≈ 311 V. The 220 V rating is the rms value."
       ],
       [
        "In a purely inductive AC circuit, the current:",
        [
         "Leads the voltage by π/2",
         "Lags the voltage by π/2",
         "Is in phase with the voltage",
         "Lags by π"
        ],
        1,
        "In a pure inductor the current lags the voltage by π/2. In a pure capacitor it leads by π/2."
       ],
       [
        "What is the reactance of a capacitor for DC?",
        [
         "Zero",
         "1/C",
         "Infinite",
         "Equal to R"
        ],
        2,
        "X_C = 1/ωC. For DC, ω = 0, so X_C is infinite. This is why a capacitor blocks DC."
       ],
       [
        "A 44 mH inductor is connected to a 220 V, 50 Hz supply. What is the rms current?",
        [
         "5 A",
         "15.9 A",
         "22.5 A",
         "1.6 A"
        ],
        1,
        "X_L = 2πfL ≈ 13.8 Ω, so I(rms) = 220/13.8 ≈ 15.9 A. (NCERT Exercise 7.3)",
        "First find X_L = 2πfL."
       ],
       [
        "At resonance in a series LCR circuit:",
        [
         "Impedance is maximum",
         "Current is minimum",
         "X_L = X_C and impedance = R",
         "Power factor is zero"
        ],
        2,
        "At resonance X_L = X_C, so Z = R (minimum) and the current is maximum. ω₀ = 1/√(LC)."
       ],
       [
        "What is the power factor of a purely inductive circuit?",
        [
         "1",
         "0.5",
         "0.707",
         "0"
        ],
        3,
        "For a pure inductor or capacitor, φ = 90°, so cos φ = 0 and the average power is zero (wattless current)."
       ],
       [
        "A series LCR circuit has R = 30 Ω, X_L = 80 Ω and X_C = 40 Ω. What is its impedance?",
        [
         "150 Ω",
         "50 Ω",
         "70 Ω",
         "10 Ω"
        ],
        1,
        "Z = √(R² + (X_L − X_C)²) = √(30² + 40²) = 50 Ω."
       ],
       [
        "An ideal transformer has 100 primary and 2000 secondary turns, with 220 V input. What is the output voltage?",
        [
         "11 V",
         "2200 V",
         "4400 V",
         "44,000 V"
        ],
        2,
        "Vₛ/Vₚ = Nₛ/Nₚ, so Vₛ = 220 × 20 = 4400 V. The current is stepped DOWN in the same ratio."
       ],
       [
        "The iron core of a transformer is laminated to reduce:",
        [
         "Copper loss",
         "Eddy current loss",
         "Flux leakage",
         "Hysteresis loss only"
        ],
        1,
        "Laminations break up the paths of eddy currents in the core, reducing energy lost as heat."
       ],
       [
        "At resonance in a series LCR circuit, the voltages across L and C are:",
        [
         "Equal and in phase",
         "Both zero",
         "Equal in magnitude and 180° out of phase",
         "Unequal and 90° out of phase"
        ],
        2,
        "V_L leads the current by 90° and V_C lags it by 90°. At resonance they are equal and cancel, so the whole supply voltage appears across R."
       ],
       [
        "Why is alternating voltage preferred over direct voltage for supplying electrical energy?",
        [
         "AC cannot be used in motors",
         "AC voltages can be easily and efficiently changed from one value to another by transformers",
         "AC wires have no resistance",
         "AC sources never need a generator"
        ],
        1,
        "Transformers work only on ac, so voltage can be stepped up for economical long-distance transmission and stepped down for use (NCERT Section 7.1)."
       ],
       [
        "In a phasor diagram for v = v_m sin ωt, what do the length of the phasor and its vertical component represent?",
        [
         "Length = rms value, vertical component = average value",
         "Length = amplitude, vertical component = instantaneous value",
         "Length = instantaneous value, vertical component = amplitude",
         "Length = average value, vertical component = rms value"
        ],
        1,
        "A phasor rotates at angular speed ω; its magnitude is the peak value and its vertical projection v_m sin ωt is the value at that instant."
       ]
      ],
      [
       [
        "Assertion (A): Electrical energy is mostly transmitted over long distances as alternating current rather than direct current.\nReason (R): The voltage of an ac supply can be easily stepped up or down using transformers.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Stepping the voltage up cuts the current and hence the I²R loss, and only ac can be transformed. So R explains A."
       ],
       [
        "A bulb rated 100 W for a 220 V (rms) supply is connected to a source whose peak voltage is 220 V. Taking its resistance as unchanged, the power it consumes is:",
        [
         "100 W",
         "50 W",
         "70.7 W",
         "25 W"
        ],
        1,
        "R = 220²/100 = 484 Ω. V(rms) = 220/√2 = 155.6 V, so P = V²/R = 50 W.",
        "Find R from the rating, then the rms value of the new source."
       ],
       [
        "A student argues: “The average current over a full cycle is zero, so an ac current through a resistor produces no heating.” What is wrong?",
        [
         "The average power over a cycle is also zero",
         "Heating needs a voltage, not a current",
         "Heating depends on i²R, which is always positive, so the average power is ½ i_m²R, not zero",
         "A resistor does not heat on ac, only on dc"
        ],
        2,
        "Joule heating depends on i², which is positive for both directions, so the average power is I²R with I = i_m/√2."
       ],
       [
        "For an ac source v = v_m sin ωt, a pure inductor carries i = i_m sin(ωt − π/2). At the instant ωt = 30°, the ratio i/i_m is:",
        [
         "+0.866",
         "+0.5",
         "−0.5",
         "−0.866"
        ],
        3,
        "i/i_m = sin(30° − 90°) = sin(−60°) = −0.866. The current phasor is 90° behind the voltage phasor.",
        "Put ωt = 30° into the current equation."
       ],
       [
        "An inductor of negligible resistance draws 2 A (rms) from a 100 V, 50 Hz source. The current when it is connected to a 200 V, 100 Hz source is:",
        [
         "2 A",
         "1 A",
         "4 A",
         "8 A"
        ],
        0,
        "I = V/(2πfL). Doubling both V and f leaves the current unchanged: X_L is also doubled, so I = 200/100 = 2 A.",
        "X_L = 100/2 = 50 Ω at first."
       ],
       [
        "A bulb is connected in series with a coil of negligible resistance. Which statement is correct for a 220 V dc and a 220 V ac supply?",
        [
         "It glows fully on ac and dimly on dc",
         "It glows equally on both; an iron rod in the coil makes it dimmer",
         "It glows fully on dc; on ac it is dim and becomes brighter when an iron rod is inserted",
         "It glows fully on dc; on ac it is dim and becomes still dimmer when an iron rod is inserted"
        ],
        3,
        "On dc there is no reactance. On ac the coil has X_L = ωL, which grows when an iron rod raises L, so less voltage is left across the bulb (NCERT Example 7.5)."
       ],
       [
        "A 20 µF capacitor is connected to a 100 V (rms) source of angular frequency 100π rad/s. The peak current is about:",
        [
         "0.628 A",
         "0.888 A",
         "1.26 A",
         "0.444 A"
        ],
        1,
        "X_C = 1/(100π × 20 × 10⁻⁶) = 159 Ω. I(rms) = 100/159 = 0.628 A, so i_m = √2 × 0.628 = 0.888 A.",
        "Do not forget to convert rms to peak."
       ],
       [
        "A series circuit has R = 30 Ω, L = 0.5 H and C = 500 µF, and is connected to a 100 V (rms) source of ω = 100 rad/s. The rms current and the phase relation are:",
        [
         "1.67 A, current lags the voltage",
         "2.36 A, current leads the voltage",
         "2.36 A, current lags the voltage by 45°",
         "3.33 A, current is in phase with the voltage"
        ],
        2,
        "X_L = 50 Ω, X_C = 20 Ω, Z = √(30² + 30²) = 42.4 Ω, so I = 2.36 A. X_L > X_C, so the current lags, with tan φ = 30/30.",
        "Find X_L and X_C first."
       ],
       [
        "In an RC series circuit, V_R = 60 V and V_C = 80 V (rms). A student says the source voltage is 140 V because the same current flows in both. The correct statement is:",
        [
         "Wrong: V_R and V_C differ in phase by 90°, so V = √(60² + 80²) = 100 V",
         "Wrong: V_C opposes V_R, so V = 80 − 60 = 20 V",
         "Correct: series voltages always add arithmetically",
         "Wrong: the source voltage is the mean, 70 V"
        ],
        0,
        "The resistor and capacitor voltages are 90° out of phase and add as phasors, giving 100 V (NCERT Example 7.6)."
       ],
       [
        "Assertion (A): In a series LCR circuit with X_L > X_C, the current lags the source voltage.\nReason (R): The voltage across the inductor leads the current by 90°, the voltage across the capacitor lags it by 90°, and V_L is larger than V_C.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "With X_L > X_C the net reactive voltage V_L − V_C leads the current by 90°, so the source voltage leads and the current lags. R explains A."
       ],
       [
        "A series LCR circuit has R = 10 Ω, L = 5 mH and C = 20 µF, and a 50 V (rms) source whose frequency is varied to resonance. The rms voltage across the inductor at resonance is about:",
        [
         "50 V",
         "112 V",
         "158 V",
         "79 V"
        ],
        3,
        "ω₀ = 1/√(LC) = 3162 rad/s and I = 50/10 = 5 A. V_L = I ω₀L = 5 × 3162 × 0.005 ≈ 79 V, more than the source voltage.",
        "Find ω₀, then use I = V/R at resonance."
       ],
       [
        "Assertion (A): Resonance cannot occur in a series RC circuit.\nReason (R): In an RC circuit the current is always in phase with the source voltage.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Resonance needs both L and C so that their voltages cancel. In an RC circuit the current leads the voltage, so R is false."
       ],
       [
        "A radio is tuned to a station at 600 kHz with a tuning capacitor of 200 pF. To tune to a station at 1200 kHz with the same coil, the capacitance should be:",
        [
         "400 pF",
         "100 pF",
         "50 pF",
         "25 pF"
        ],
        2,
        "ω₀ = 1/√(LC), so f ∝ 1/√C. Doubling f needs C to fall to one-fourth, i.e. 50 pF.",
        "Frequency doubles, so what happens to C?"
       ],
       [
        "A series circuit has R = 8 Ω, X_L = 14 Ω, X_C = 8 Ω and a 200 V (rms) source. The average power dissipated is:",
        [
         "4000 W",
         "3200 W",
         "2400 W",
         "5600 W"
        ],
        1,
        "Z = √(8² + 6²) = 10 Ω, I = 20 A, so P = I²R = 400 × 8 = 3200 W. Check: VI cos φ = 200 × 20 × 0.8.",
        "Power is dissipated only in R."
       ],
       [
        "In a series circuit V = 100 V, I = 5 A (rms) and φ = 60°. A student writes P = 100 × 5 × sin 60° = 433 W. The error and correct answer are:",
        [
         "Uses tan φ; correct value is 866 W",
         "Nothing is wrong, since sin 60° is the power factor",
         "Uses sin φ instead of cos φ; correct power is 250 W",
         "Uses sin φ instead of cos φ; correct power is 433 W with φ = 30°"
        ],
        2,
        "The power factor is cos φ, so P = VI cos φ = 100 × 5 × 0.5 = 250 W."
       ],
       [
        "The same power is delivered through a transmission line at the same voltage. If the power factor of the load falls from 1 to 0.5, the power lost in the line becomes:",
        [
         "Double",
         "Unchanged",
         "Half",
         "Four times"
        ],
        3,
        "I = P/(V cos φ) doubles when cos φ halves, so the line loss I²R becomes four times (NCERT Example 7.7)."
       ],
       [
        "A step-down transformer has 2000 primary and 100 secondary turns, with a 4400 V primary. It delivers 4.4 kW at the secondary and is 90% efficient. The primary current is:",
        [
         "1.0 A",
         "0.9 A",
         "1.11 A",
         "20 A"
        ],
        2,
        "V_s = 4400 × 100/2000 = 220 V. Input power = 4400/0.9 = 4889 W, so I_p = 4889/4400 = 1.11 A.",
        "Input power = output power / efficiency."
       ],
       [
        "The primary of a transformer is connected to a 12 V battery (dc) through a switch. What happens at the secondary?",
        [
         "Only a momentary emf at switching; no steady emf because the flux is constant",
         "A steady voltage of 12 × N_s/N_p appears",
         "An alternating voltage of 50 Hz appears",
         "The primary current stays zero because the coil blocks dc"
        ],
        0,
        "A transformer works on changing flux. Steady dc gives constant flux, so no steady emf is induced, and the primary current is limited only by its small resistance."
       ]
      ]
     ]
    },
    {
     "n": 8,
     "t": "Electromagnetic Waves",
     "levels": [
      [
       [
        "The displacement current is given by:",
        [
         "ε₀ Φ_E",
         "ε₀ (dΦ_E/dt)",
         "µ₀ (dΦ_B/dt)",
         "(1/ε₀)(dΦ_E/dt)"
        ],
        1,
        "i_d = ε₀ (dΦ_E/dt). Maxwell added this term to Ampere’s law: a changing electric field produces a magnetic field."
       ],
       [
        "Between the plates of a capacitor that is being charged, there is:",
        [
         "Only conduction current",
         "Both, equal in size",
         "Only displacement current",
         "Neither"
        ],
        2,
        "No charge crosses the gap, so i_c = 0. The changing field gives a displacement current equal to the current in the wires."
       ],
       [
        "The magnetic field amplitude of an EM wave in vacuum is 510 nT. What is the electric field amplitude?",
        [
         "1.7 V/m",
         "153 V/m",
         "510 V/m",
         "1530 V/m"
        ],
        1,
        "E₀ = cB₀ = 3 × 10⁸ × 510 × 10⁻⁹ = 153 V/m. (NCERT Exercise 8.7)"
       ],
       [
        "What is the wavelength of a 30 MHz EM wave in vacuum?",
        [
         "1 m",
         "100 m",
         "10 m",
         "0.1 m"
        ],
        2,
        "λ = c/ν = 3 × 10⁸/(30 × 10⁶) = 10 m. (NCERT Exercise 8.4)"
       ],
       [
        "Electromagnetic waves are produced by:",
        [
         "Stationary charges",
         "Charges moving with constant velocity",
         "Accelerated charges",
         "Steady currents"
        ],
        2,
        "Stationary charges give only static fields and steady currents give only steady fields. Only ACCELERATED charges radiate EM waves."
       ],
       [
        "An EM wave travels along the x-axis and its E field is along the y-axis. Its B field is along the:",
        [
         "x-axis",
         "y-axis",
         "z-axis",
         "At 45° to y and z"
        ],
        2,
        "E × B points along the direction of travel (+x). Since ĵ × k̂ = î, B points along z. (NCERT Example 8.1)",
        "E × B points in the direction of propagation."
       ],
       [
        "Which of these has the LONGEST wavelength?",
        [
         "X-rays",
         "Ultraviolet",
         "Microwaves",
         "Infrared"
        ],
        2,
        "Increasing wavelength: γ, X-rays, UV, visible, IR, microwaves, radio. Microwaves are the longest of these four."
       ],
       [
        "Which radiation is used in LASIK eye surgery and in water purifiers?",
        [
         "Infrared",
         "Ultraviolet",
         "Microwaves",
         "X-rays"
        ],
        1,
        "UV can be focused into very narrow beams (LASIK), and UV lamps kill germs in water purifiers."
       ],
       [
        "What is the SAME for X-rays, red light and radio waves?",
        [
         "Frequency",
         "Energy of a photon",
         "Speed in vacuum",
         "Wavelength"
        ],
        2,
        "All EM waves travel at c = 3 × 10⁸ m/s in vacuum. Only wavelength and frequency differ. (NCERT Exercise 8.3)"
       ],
       [
        "Which radiation is called ‘heat waves’?",
        [
         "Ultraviolet",
         "Infrared",
         "Gamma rays",
         "Radio waves"
        ],
        1,
        "Infrared is absorbed by water molecules and raises their thermal motion, so it heats things up."
       ],
       [
        "What is the most important prediction to emerge from Maxwell’s equations?",
        [
         "The existence of electromagnetic waves",
         "The existence of magnetic monopoles",
         "The particle nature of electricity",
         "That light is a longitudinal wave"
        ],
        0,
        "Maxwell’s equations predict coupled, time-varying electric and magnetic fields that propagate in space, with a speed very close to that of light."
       ],
       [
        "Which of Maxwell’s equations says that a time-varying electric field (or a current) produces a magnetic field?",
        [
         "Gauss’s law for electricity",
         "Ampere–Maxwell law",
         "Gauss’s law for magnetism",
         "Faraday’s law"
        ],
        1,
        "∮B·dl = µ₀iᶜ + µ₀ε₀ dΦ_E/dt. Faraday’s law is the reverse: a changing B produces an E field."
       ],
       [
        "Who first produced and detected electromagnetic waves in the laboratory, in 1887?",
        [
         "James Clerk Maxwell",
         "Guglielmo Marconi",
         "Heinrich Hertz",
         "Michael Faraday"
        ],
        2,
        "Hertz verified Maxwell’s prediction with radio-frequency waves; Marconi later used such waves for long-distance communication."
       ],
       [
        "Radio waves are produced by:",
        [
         "Nuclear reactions",
         "Inner-shell electron transitions",
         "Vibrating atoms and molecules",
         "Accelerated motion of charges in conducting wires"
        ],
        3,
        "Rapid acceleration and deceleration of electrons in aerials produces radio waves, used for radio and TV."
       ],
       [
        "In a microwave oven, the microwave frequency is chosen to:",
        [
         "Match the resonant frequency of the glass plate",
         "Match the resonant frequency of water molecules",
         "Be the same as the frequency of visible light",
         "Be absorbed only by metals"
        ],
        1,
        "Water molecules absorb energy efficiently at their resonant frequency, which raises the temperature of food containing water."
       ],
       [
        "The visible region of the electromagnetic spectrum corresponds roughly to wavelengths of:",
        [
         "4 nm to 7 nm",
         "0.4 mm to 0.7 mm",
         "400 nm to 700 nm",
         "40 nm to 70 nm"
        ],
        2,
        "Visible light runs from about 4 × 10¹⁴ Hz to 7 × 10¹⁴ Hz, i.e. about 700 nm to 400 nm."
       ],
       [
        "A common way of generating X-rays is to:",
        [
         "Heat a glass rod strongly",
         "Pass a steady current through a coil",
         "Use a magnetron valve",
         "Bombard a metal target with high-energy electrons"
        ],
        3,
        "X-ray tubes work by stopping fast electrons in a metal target."
       ],
       [
        "Gamma rays are produced in:",
        [
         "Nuclear reactions and by radioactive nuclei",
         "Klystron tubes",
         "Hot filament lamps",
         "Oscillating circuits"
        ],
        0,
        "Gamma rays lie at the highest-frequency end of the spectrum; the nucleus is their source, and they are used to destroy cancer cells."
       ]
      ],
      [
       [
        "Assertion (A): Maxwell’s work unified electricity, magnetism and light.\nReason (R): The speed of electromagnetic waves obtained from Maxwell’s equations came out very close to the measured speed of light.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The calculated speed 1/√(µ₀ε₀) ≈ 3 × 10⁸ m/s matched optical measurements, so light was identified as an electromagnetic wave."
       ],
       [
        "The charging current of a parallel plate capacitor with circular plates of radius 12 cm is a constant 0.15 A. What is the magnetic field between the plates at a distance 6 cm from the axis? (Take µ₀/4π = 10⁻⁷ T m A⁻¹.)",
        [
         "1.25 × 10⁻⁷ T",
         "2.5 × 10⁻⁷ T",
         "5.0 × 10⁻⁷ T",
         "6.25 × 10⁻⁸ T"
        ],
        0,
        "Displacement current is uniform over the plates, so the part inside radius r is i(r²/R²) = 0.15 × 0.25 = 0.0375 A. B = µ₀i_d/(2πr) = 2 × 10⁻⁷ × 0.0375/0.06 = 1.25 × 10⁻⁷ T.",
        "Only the displacement current through the circle of radius r counts."
       ],
       [
        "A parallel plate capacitor of capacitance 100 pF is connected to a 230 V (rms) ac supply of angular frequency 300 rad s⁻¹. What is the amplitude of the displacement current between the plates?",
        [
         "6.9 µA",
         "9.8 µA",
         "4.9 µA",
         "13.8 µA"
        ],
        1,
        "i_rms = V ωC = 230 × 300 × 100 × 10⁻¹² = 6.9 µA. The displacement current equals the conduction current in the wires, so its amplitude is √2 × 6.9 ≈ 9.8 µA. (NCERT Exercise 8.2)",
        "Displacement current between the plates equals the conduction current in the wires."
       ],
       [
        "A student argues: “For a capacitor being charged, a pot-shaped surface passing between the plates has no current through it, so Ampere’s law gives B = 0 at the loop.” What is wrong?",
        [
         "Ampere’s law cannot be applied to a loop",
         "The surface must touch the wire to be valid",
         "The displacement current ε₀ dΦ_E/dt through that surface was left out, so B is not zero",
         "The electric field between the plates is zero"
        ],
        2,
        "The generalised Ampere–Maxwell law includes µ₀ε₀ dΦ_E/dt; the changing field between the plates carries i_d = i, giving the same B for every surface."
       ],
       [
        "If magnetic monopoles were found to exist, which of Maxwell’s equations would have to be modified?",
        [
         "Gauss’s law for electricity",
         "The expression for the Lorentz force",
         "The relation c = νλ",
         "Gauss’s law for magnetism, ∮B·dA = 0"
        ],
        3,
        "∮B·dA = 0 states that there are no sources of magnetic field analogous to electric charges. With monopoles, the net magnetic flux through a closed surface would not vanish."
       ],
       [
        "Which of these charges will radiate electromagnetic waves?",
        [
         "A charge at rest",
         "A charge moving in a circle at constant speed",
         "A charge moving with constant velocity along a straight line",
         "A charge in a steady direct current"
        ],
        1,
        "Circular motion at constant speed still involves acceleration, because the direction of velocity changes. Only accelerated charges radiate."
       ],
       [
        "Yellow light has a frequency of about 6 × 10¹⁴ Hz. Why did Hertz’s test of Maxwell’s theory have to be done with radio waves and not light, and what is the wavelength of yellow light?",
        [
         "Circuits give only about 10¹¹ Hz, too low to produce light frequencies; λ = 50 nm",
         "Light is not an electromagnetic wave; λ = 500 nm",
         "Circuits give only about 10¹¹ Hz, too low to produce light frequencies; λ = 500 nm",
         "Oscillating charges cannot radiate at low frequency; λ = 500 µm"
        ],
        2,
        "Modern electronic circuits reach only about 10¹¹ Hz, so waves in the radio region were used. λ = c/ν = 3 × 10⁸/6 × 10¹⁴ = 5 × 10⁻⁷ m = 500 nm."
       ],
       [
        "The electric field amplitude of an electromagnetic wave in vacuum is 120 N/C and its frequency is 50.0 MHz. What are B₀ and the propagation constant k?",
        [
         "4.0 × 10⁻⁷ T and 0.17 rad m⁻¹",
         "4.0 × 10⁻⁶ T and 1.05 rad m⁻¹",
         "4.0 × 10⁻⁷ T and 6.0 rad m⁻¹",
         "4.0 × 10⁻⁷ T and 1.05 rad m⁻¹"
        ],
        3,
        "B₀ = E₀/c = 120/(3 × 10⁸) = 4 × 10⁻⁷ T. ω = 2π × 50 × 10⁶ = 3.14 × 10⁸ rad/s, so k = ω/c = 1.05 rad m⁻¹ (λ = 6 m). (NCERT Exercise 8.8)",
        "k = ω/c = 2π/λ."
       ],
       [
        "An electromagnetic wave of frequency 100 MHz enters a non-magnetic medium (µ_r = 1) of relative permittivity 2.25. What is its wavelength in the medium?",
        [
         "2 m",
         "3 m",
         "4.5 m",
         "1.33 m"
        ],
        0,
        "v = 1/√(µε) = c/√2.25 = 2 × 10⁸ m/s. The frequency stays 100 MHz, so λ = v/ν = 2 m."
       ],
       [
        "The magnetic field in a plane electromagnetic wave is By = 4 × 10⁻⁷ T sin(1.0 × 10³ x + 3.0 × 10¹¹ t). Which statement is correct?",
        [
         "It travels along +x, E₀ = 120 V/m and λ ≈ 6.3 mm",
         "It travels along −x, E₀ = 120 V/m and λ ≈ 6.3 mm",
         "It travels along −x, E₀ = 1.3 × 10⁻¹⁵ V/m and λ ≈ 6.3 mm",
         "It travels along −x, E₀ = 120 V/m and λ ≈ 0.63 mm"
        ],
        1,
        "A (kx + ωt) argument means travel along −x. E₀ = cB₀ = 3 × 10⁸ × 4 × 10⁻⁷ = 120 V/m and λ = 2π/k = 6.28 mm. (NCERT Example 8.2)"
       ],
       [
        "An electromagnetic wave travels along the −y direction with its electric field along +z. The magnetic field is along:",
        [
         "+x",
         "+z",
         "−x",
         "+y"
        ],
        2,
        "E × B must point along −y. Since ẑ × x̂ = ŷ, we need B along −x to get ẑ × (−x̂) = −ŷ.",
        "E × B gives the direction of propagation."
       ],
       [
        "Which list is in order of INCREASING frequency?",
        [
         "Infrared, microwaves, visible, X-rays",
         "Radio waves, ultraviolet, visible, gamma rays",
         "Visible, ultraviolet, X-rays, microwaves",
         "Microwaves, infrared, visible, X-rays"
        ],
        3,
        "The order of increasing frequency is radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays."
       ],
       [
        "An AM station broadcasts at 1000 kHz and an FM station at 100 MHz. What is λ(AM)/λ(FM)?",
        [
         "100",
         "10",
         "0.01",
         "1000"
        ],
        0,
        "In vacuum λ = c/ν, so the ratio is ν(FM)/ν(AM) = 100 MHz/1 MHz = 100 (300 m versus 3 m)."
       ],
       [
        "Assertion (A): A microwave oven heats food that contains water.\nReason (R): The microwave frequency is chosen to match the resonant frequency of water molecules, so energy is transferred efficiently to them.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Water molecules absorb the microwaves at resonance, and the energy becomes their kinetic energy, raising the temperature of the food."
       ],
       [
        "A student writes: “The Earth’s surface absorbs visible light and re-radiates it as visible light, which CO₂ traps.” What is the error?",
        [
         "Greenhouse gases trap only ultraviolet radiation",
         "The surface re-radiates it as infrared (longer wavelength), and this is what greenhouse gases trap",
         "Visible light cannot pass through the atmosphere",
         "Re-radiation is of shorter wavelength than the incoming light"
        ],
        1,
        "Infrared is absorbed by CO₂, water vapour and other gases. This trapping keeps the average temperature of the Earth higher."
       ],
       [
        "Blue light (λ = 450 nm) and red light (λ = 700 nm) travel in vacuum. What is the ratio (photon energy of blue)/(photon energy of red)?",
        [
         "9/14, and blue travels faster",
         "14/9, and blue travels faster",
         "14/9, and both travel at the same speed",
         "1, because both have the same speed"
        ],
        2,
        "E = hc/λ, so E_blue/E_red = 700/450 = 14/9. All electromagnetic waves travel at c in vacuum."
       ],
       [
        "Assertion (A): Welders wear special glass goggles to protect their eyes from ultraviolet rays.\nReason (R): Ordinary glass transmits ultraviolet radiation freely.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Welding arcs produce large amounts of UV, so protection is needed. But ordinary glass absorbs UV, which is why one cannot get tanned through window glass, so R is false."
       ],
       [
        "What is the photon energy of an X-ray of wavelength 1 nm? (h = 6.63 × 10⁻³⁴ J s, c = 3 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J)",
        [
         "1.24 eV",
         "12.4 eV",
         "1.24 × 10⁻³ eV",
         "1.24 × 10³ eV"
        ],
        3,
        "E = hc/λ = 6.63 × 10⁻³⁴ × 3 × 10⁸/10⁻⁹ = 1.99 × 10⁻¹⁶ J, which is 1.24 × 10³ eV. (NCERT Exercise 8.9)",
        "Divide the energy in joules by 1.6 × 10⁻¹⁹."
       ],
       [
        "A student says: “Gamma rays come from the nucleus, which is bigger than an atom, so they have longer wavelengths than X-rays.” What is the error?",
        [
         "The nucleus is far smaller than an atom, and gamma rays have shorter wavelengths than X-rays",
         "Gamma rays come from inner-shell electrons, not the nucleus",
         "Gamma rays have the same wavelength as radio waves",
         "Gamma rays travel faster than X-rays in vacuum"
        ],
        0,
        "Radiation wavelength is correlated with the size of the source: gamma rays (about 10⁻¹⁴ m) come from the tiny nucleus, X-rays from heavy atoms. Their speed in vacuum is the same."
       ]
      ]
     ]
    },
    {
     "n": 9,
     "t": "Ray Optics and Optical Instruments",
     "levels": [
      [
       [
        "A candle is placed 27 cm in front of a concave mirror of radius of curvature 36 cm. Where must a screen be placed to get a sharp image?",
        [
         "13.5 cm in front of the mirror",
         "54 cm behind the mirror",
         "18 cm in front of the mirror",
         "54 cm in front of the mirror"
        ],
        3,
        "f = R/2 = −18 cm, so 1/v = 1/f − 1/u = −1/18 + 1/27 = −1/54 and v = −54 cm. The image is real, inverted and magnified (m = −2). (NCERT Exercise 9.1)",
        "Use 1/v + 1/u = 1/f with f = −18 cm and u = −27 cm."
       ],
       [
        "A 4.5 cm needle is placed 12 cm from a convex mirror of focal length 15 cm. The image distance and magnification are:",
        [
         "+6.7 cm, m = +0.56",
         "−6.7 cm, m = −0.56",
         "+60 cm, m = +5",
         "+3.3 cm, m = +0.28"
        ],
        0,
        "For a convex mirror f = +15 cm, so 1/v = 1/15 + 1/12 = 9/60 and v = +6.7 cm. m = −v/u = +0.56: a virtual, erect, diminished image. (NCERT Exercise 9.2)"
       ],
       [
        "The real depth of a tank of water is 12.5 cm and a microscope shows the apparent depth as 9.4 cm. The refractive index of water is:",
        [
         "1.50",
         "1.33",
         "0.75",
         "1.17"
        ],
        1,
        "For near-normal viewing, n = real depth/apparent depth = 12.5/9.4 = 1.33. (NCERT Exercise 9.3)"
       ],
       [
        "Total internal reflection can occur only when light travels:",
        [
         "From a rarer to a denser medium, at any angle",
         "From a denser to a rarer medium, at an angle greater than the critical angle",
         "From a denser to a rarer medium, at normal incidence",
         "From a rarer to a denser medium, at an angle greater than the critical angle"
        ],
        1,
        "TIR needs light going from the denser to the rarer medium with the angle of incidence above the critical angle ic, where sin ic = n_rarer/n_denser."
       ],
       [
        "A double-convex lens of focal length 20 cm is made from glass of refractive index 1.55, with both faces of the same radius. The radius of curvature is:",
        [
         "11 cm",
         "20 cm",
         "44 cm",
         "22 cm"
        ],
        3,
        "With R₁ = R and R₂ = −R, 1/f = (n − 1)(2/R), so R = 2(n − 1)f = 2 × 0.55 × 20 = 22 cm. (NCERT Exercise 9.7)"
       ],
       [
        "A convex lens of focal length 30 cm is in contact with a concave lens of focal length 20 cm. The combination is:",
        [
         "Converging, f = +12 cm",
         "Diverging, f = −60 cm",
         "Converging, f = +60 cm",
         "Diverging, f = −12 cm"
        ],
        1,
        "1/f = 1/30 − 1/20 = −1/60, so f = −60 cm and the system is diverging. (NCERT Exercise 9.10)",
        "Add the powers: P = P₁ + P₂."
       ],
       [
        "An optician prescribes a lens of power −4.0 D. This is:",
        [
         "A convex lens of focal length 25 cm",
         "A concave lens of focal length −25 cm",
         "A concave lens of focal length −4 cm",
         "A convex lens of focal length 4 cm"
        ],
        1,
        "f = 1/P = 1/(−4.0 D) = −0.25 m = −25 cm. Negative power means a diverging (concave) lens."
       ],
       [
        "A prism of refracting angle 60° has an angle of minimum deviation of 40°. The refractive index of its material is:",
        [
         "1.33",
         "1.41",
         "1.53",
         "1.73"
        ],
        2,
        "n = sin[(A + D_m)/2]/sin(A/2) = sin 50°/sin 30° = 0.766/0.5 = 1.53. (NCERT Exercise 9.6)"
       ],
       [
        "A telescope has an objective of focal length 144 cm and an eyepiece of focal length 6.0 cm. In normal adjustment, its magnifying power and the distance between the lenses are:",
        [
         "864, 150 cm",
         "24, 138 cm",
         "0.04, 150 cm",
         "24, 150 cm"
        ],
        3,
        "m = f_o/f_e = 144/6 = 24 and the tube length is f_o + f_e = 150 cm. (NCERT Exercise 9.13)"
       ],
       [
        "For a compound microscope with the final image at infinity, the magnifying power is approximately (L = tube length, D = 25 cm):",
        [
         "f_o/f_e",
         "(L/f_e)(D/f_o)",
         "(L/f_o)(D/f_e)",
         "1 + D/f_e"
        ],
        2,
        "The objective gives m_o = L/f_o and the eyepiece gives m_e = D/f_e, so m ≈ (L/f_o)(D/f_e). Both focal lengths should therefore be small."
       ],
       [
        "Light is an electromagnetic wave of wavelength about 400 nm to 750 nm, yet it appears to travel in straight lines. This is because:",
        [
         "its speed is very large",
         "its wavelength is larger than the size of the objects it meets",
         "its wavelength is very small compared with the size of the ordinary objects it meets",
         "light is not a wave at all in the ray picture"
        ],
        2,
        "When the wavelength is much smaller than the objects (a few cm or larger), a light wave can be treated as travelling along a straight line, called a ray."
       ],
       [
        "For reflection at a spherical mirror, the normal at the point of incidence is along:",
        [
         "the line joining the point of incidence to the centre of curvature",
         "the line joining the point of incidence to the pole",
         "the principal axis",
         "the tangent to the surface at that point"
        ],
        0,
        "The normal to a spherical surface at any point lies along the radius, that is, the line from the centre of curvature to that point."
       ],
       [
        "In the Cartesian sign convention, a real object is placed in front of a convex mirror. The signs of the object distance u and the focal length f are:",
        [
         "u negative, f negative",
         "u positive, f negative",
         "u positive, f positive",
         "u negative, f positive"
        ],
        3,
        "Distances measured against the incident light are negative, so u is negative for a real object. A convex mirror has f positive and a concave mirror has f negative."
       ],
       [
        "A parallel beam of paraxial rays, inclined slightly to the principal axis, falls on a concave mirror of radius 40 cm. The reflected rays converge at:",
        [
         "the principal focus on the axis, 40 cm from the pole",
         "a point in the focal plane, 20 cm from the pole but off the axis",
         "the centre of curvature",
         "infinity"
        ],
        1,
        "Since f = R/2 = 20 cm, an inclined parallel beam is brought to a point in the focal plane, the plane through F normal to the axis."
       ],
       [
        "A prism is to bend light by 90° using total internal reflection, which needs a critical angle below 45°. Which material can be used?",
        [
         "n = 1.33",
         "n = 1.36",
         "n = 1.52",
         "n = 1.31"
        ],
        2,
        "sin ic = 1/n must be below sin 45° = 0.707, so n > 1.41. Only n = 1.52 (crown glass, ic = 41.14°) qualifies."
       ],
       [
        "For an optical fibre to guide light by total internal reflection, the core and the cladding must satisfy:",
        [
         "core refractive index greater than cladding refractive index",
         "core refractive index less than cladding refractive index",
         "both have the same refractive index",
         "the cladding must be opaque"
        ],
        0,
        "Light must travel from the denser core to the rarer cladding and strike the boundary beyond the critical angle each time, so the core needs the higher index."
       ],
       [
        "A point source in air is 30 cm from a convex spherical glass surface (n = 1.5) of radius of curvature 20 cm. The image is formed at:",
        [
         "+180 cm, real, beyond the surface",
         "−90 cm, virtual",
         "+60 cm, real",
         "−180 cm, virtual, on the source side"
        ],
        3,
        "n₂/v − n₁/u = (n₂ − n₁)/R gives 1.5/v + 1/30 = 0.5/20, so 1.5/v = −1/120 and v = −180 cm.",
        "Use n₁ = 1, n₂ = 1.5, u = −30 cm, R = +20 cm."
       ],
       [
        "A convex lens of focal length 5 cm is used as a simple magnifier with the final image at infinity. Its magnifying power (D = 25 cm) is:",
        [
         "6",
         "5",
         "0.2",
         "125"
        ],
        1,
        "For the image at infinity, m = D/f = 25/5 = 5. For the image at the near point it would be 1 + D/f = 6."
       ]
      ],
      [
       [
        "A small bulb is at the bottom of a tank with 80 cm of water (n = 1.33). The area of the water surface through which light can emerge is about:",
        [
         "2.0 m²",
         "2.6 m²",
         "1.3 m²",
         "5.2 m²"
        ],
        1,
        "sin ic = 1/1.33 gives ic = 48.75°, so the light escapes through a circle of radius r = h tan ic ≈ 80 × 1.14 = 91 cm. Area = πr² ≈ 2.6 m². (NCERT Exercise 9.5)",
        "Light beyond the critical angle is totally reflected."
       ],
       [
        "An object and a screen are 90 cm apart. A convex lens forms a sharp image at two positions 20 cm apart. The focal length of the lens is:",
        [
         "22.5 cm",
         "20 cm",
         "21.4 cm",
         "45 cm"
        ],
        2,
        "The two positions swap u and v, so v − u = 20 and u + v = 90 give u = 35 cm and v = 55 cm. Then f = uv/(u + v) = 35 × 55/90 = 21.4 cm. (NCERT Exercise 9.19)"
       ],
       [
        "A convex glass lens (n = 1.5) has focal length 20 cm in air. Its focal length in water (n = 1.33) is about:",
        [
         "20 cm",
         "40 cm",
         "13 cm",
         "78 cm"
        ],
        3,
        "In air, 1/20 = 0.5(1/R₁ − 1/R₂), so (1/R₁ − 1/R₂) = 0.1 cm⁻¹. In water, 1.33/f = (1.5 − 1.33)(0.1), giving f = 78 cm. (NCERT Example 9.7)"
       ],
       [
        "A beam converges to a point P. A concave lens of focal length 16 cm is placed 12 cm before P. The beam now converges at a point:",
        [
         "7.5 cm from the lens",
         "12 cm from the lens",
         "48 cm from the lens (far side)",
         "28 cm from the lens"
        ],
        2,
        "P acts as a virtual object, so u = +12 cm and 1/v = 1/f + 1/u = −1/16 + 1/12 = 1/48, giving v = +48 cm. (NCERT Exercise 9.8)",
        "A converging beam gives a virtual object, so u is positive."
       ],
       [
        "In a compound microscope the objective has f = 2.0 cm and the eyepiece has f = 6.25 cm, 15 cm apart. For the final image at 25 cm, the object distance and the magnifying power are:",
        [
         "2.5 cm; 20",
         "2.5 cm; 4",
         "2.0 cm; 20",
         "3.3 cm; 13.5"
        ],
        0,
        "The eyepiece (v = −25, f = 6.25) gives u = −5 cm, so the first image is 15 − 5 = 10 cm from the objective. Then 1/u = 1/10 − 1/2 gives u = −2.5 cm and m = (10/2.5)(1 + 25/6.25) = 20. (NCERT Exercise 9.11)"
       ],
       [
        "A refracting telescope has an objective of focal length 15 m. The Moon (diameter 3.48 × 10⁶ m, orbit radius 3.8 × 10⁸ m) is viewed. The diameter of the image formed by the objective is:",
        [
         "1.37 cm",
         "9.2 cm",
         "27.5 cm",
         "13.7 cm"
        ],
        3,
        "The Moon subtends 3.48 × 10⁶/3.8 × 10⁸ = 9.16 × 10⁻³ rad. The image in the focal plane is f_o × angle = 15 × 9.16 × 10⁻³ ≈ 0.137 m. (NCERT Exercise 9.14)"
       ],
       [
        "Assertion (A): The image formed by a convex mirror is always virtual and diminished.\nReason (R): A convex mirror has a negative focal length.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "For a convex mirror 1/v = 1/f − 1/u is always positive, so the image is virtual and diminished. But in the Cartesian convention f is positive for a convex mirror, so R is false. (NCERT Exercise 9.15)"
       ],
       [
        "A student uses f = +7.5 cm for a concave mirror (R = 15 cm) with an object 5 cm in front and gets v = +3 cm. What is wrong?",
        [
         "f must be −7.5 cm for a concave mirror. The correct result is v = +15 cm, a virtual, magnified image",
         "u should have been taken as +5 cm",
         "The mirror equation does not work for virtual images",
         "Nothing. v = +3 cm is correct"
        ],
        0,
        "With f = −7.5 and u = −5, 1/v = −1/7.5 + 1/5 = 1/15, so v = +15 cm behind the mirror. (NCERT Example 9.3)"
       ],
       [
        "A light pipe has a glass core (n = 1.68) and an outer covering (n = 1.44). Total internal reflection at the wall occurs for rays entering the end face with angles to the axis up to:",
        [
         "30°",
         "60°",
         "36°",
         "90°"
        ],
        1,
        "At the end face sin i = 1.68 sin r, and TIR at the wall needs cos r ≥ 1.44/1.68. Hence sin i ≤ √(1.68² − 1.44²) = 0.865, so i ≤ 60°. (NCERT Exercise 9.17)"
       ],
       [
        "A plane mirror on a galvanometer coil turns through 3.5°. The reflected spot on a screen 1.5 m away moves by about:",
        [
         "9.2 cm",
         "6.5 cm",
         "18.4 cm",
         "36.8 cm"
        ],
        2,
        "Turning a mirror by θ turns the reflected ray by 2θ = 7°. The spot moves 1.5 × tan 7° ≈ 0.18 m. (NCERT Exercise 9.30)"
       ],
       [
        "A coin lies on a table and is viewed from directly above. A glass slab (n = 1.5) of thickness 12 cm is placed over the coin. By what distance does the coin appear to be raised?",
        [
         "8 cm",
         "4 cm",
         "6 cm",
         "18 cm"
        ],
        1,
        "The slab’s apparent thickness is t/n = 8 cm, so the coin appears raised by t − t/n = 12 − 8 = 4 cm.",
        "Apparent depth = real depth/n for near-normal viewing."
       ],
       [
        "Assertion (A): A liquid of greater mass density than water is always optically denser than water.\nReason (R): Optical density is a measure of the ratio of the speeds of light in two media.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Optical density depends on the speed of light in the medium, not on mass density; turpentine is lighter than water but optically denser. So A is false and R is true."
       ],
       [
        "A light wave has frequency 5 × 10¹⁴ Hz in vacuum. Which statement about its wavelength and the use of the ray picture is correct?",
        [
         "λ = 1.67 µm; the ray picture works for obstacles of any size",
         "λ = 600 nm; the ray picture works best when obstacles are comparable to 600 nm",
         "λ = 600 nm; the ray picture works when obstacles are a few cm or larger",
         "λ = 60 nm; the ray picture works for obstacles of a few cm"
        ],
        2,
        "λ = c/ν = 3 × 10⁸/5 × 10¹⁴ = 6 × 10⁻⁷ m = 600 nm. Rays are a good description when the objects are much larger than this, such as a few cm."
       ],
       [
        "A concave mirror has R = 40 cm. An upright object 3 cm tall is placed 30 cm in front of it. In the Cartesian convention, the image height is:",
        [
         "+1.2 cm, erect, above the axis",
         "−1.2 cm, inverted, below the axis",
         "+6 cm, erect, above the axis",
         "−6 cm, inverted, below the axis"
        ],
        3,
        "f = −20 cm and u = −30 cm give 1/v = −1/20 + 1/30, so v = −60 cm. m = −v/u = −2 and h′ = −6 cm, a real inverted image below the axis.",
        "Heights above the axis are positive and below are negative."
       ],
       [
        "A point source in air is 60 cm from a convex spherical surface of a transparent material (n = 2.0) with radius of curvature 20 cm. The image is formed at:",
        [
         "+30 cm",
         "+120 cm",
         "+60 cm, on the far side of the surface",
         "−60 cm, virtual, on the source side"
        ],
        2,
        "2.0/v − 1/(−60) = (2.0 − 1)/20, so 2/v = 1/20 − 1/60 = 1/30 and v = +60 cm.",
        "Use n₂/v − n₁/u = (n₂ − n₁)/R with u = −60 cm and R = +20 cm."
       ],
       [
        "A converging lens has power +5 D. A ray parallel to the principal axis strikes it 2 cm from the optical centre. The tangent of the angle through which the ray is bent towards the axis is:",
        [
         "0.01",
         "0.10",
         "0.40",
         "10"
        ],
        1,
        "Power is the tangent of the bending angle for a ray at unit distance, so tan δ = P × h = 5 D × 0.02 m = 0.10.",
        "Convert the height to metres."
       ],
       [
        "Two thin lenses of powers +5 D and −2 D are in contact. An object is placed 50 cm in front of the combination. The image distance and the magnification are:",
        [
         "v = +100 cm, m = −2",
         "v = +100 cm, m = +2",
         "v = +20 cm, m = −0.4",
         "v = −100 cm, m = +2"
        ],
        0,
        "P = 5 − 2 = +3 D, so f = 33.3 cm. Then 1/v = 1/f + 1/u = 0.03 − 0.02 = 0.01 cm⁻¹, giving v = +100 cm and m = v/u = −2.",
        "Add the powers first, then use the lens formula with u = −50 cm."
       ],
       [
        "Assertion (A): Two thin lenses in contact have a net power P = P₁ + P₂.\nReason (R): The total magnification of the combination is m = m₁ m₂.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both statements are true, but the powers add because 1/f = 1/f₁ + 1/f₂ follows from adding the lens equations, not because magnifications multiply."
       ],
       [
        "An equilateral prism (A = 60°) is made of a material of refractive index √2. The angle of minimum deviation is:",
        [
         "45°",
         "15°",
         "30°",
         "60°"
        ],
        2,
        "n = sin[(A + Dm)/2]/sin(A/2) gives sin[(60° + Dm)/2] = √2 × 0.5 = 0.707, so (60° + Dm)/2 = 45° and Dm = 30°."
       ],
       [
        "A student finds the minimum deviation for A = 60°, n = 1.5. She writes: at minimum deviation r₁ = r₂ = 30°, sin i = 1.5 sin 30° = 0.75, so i = e = 48.6° and Dm = i + e = 97.2°. What is wrong?",
        [
         "Snell’s law should be sin r = 1.5 sin i, so i = 19.5°",
         "At minimum deviation r₁ = A, not A/2",
         "The deviation is d = i + e − A, so Dm ≈ 37.2°",
         "Nothing is wrong, Dm = i + e"
        ],
        2,
        "The total deviation is d = (i − r₁) + (e − r₂) = i + e − A, so Dm = 2 × 48.6° − 60° ≈ 37.2°."
       ],
       [
        "A thin prism of refracting angle 4° is made of glass of refractive index 1.5 and is placed in water of refractive index 1.33. The angle of deviation is about:",
        [
         "2.0°",
         "0.13°",
         "1.0°",
         "0.51°"
        ],
        3,
        "n₂₁ = 1.5/1.33 = 1.128, so D = (n₂₁ − 1)A = 0.128 × 4° ≈ 0.51°. In air it would be 2°."
       ],
       [
        "Assertion (A): A simple magnifier gives an angular magnification greater than 1, although the image it forms subtends the same angle at the eye as the object at that position.\nReason (R): The angular magnification compares the image with the object kept at the near point, and the lens lets the object be brought closer than the near point.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Without the lens the object cannot be clearly seen closer than D = 25 cm, so its angle is small. With the lens the object sits near f, subtending a larger angle, giving m = D/f."
       ]
      ]
     ]
    },
    {
     "n": 10,
     "t": "Wave Optics",
     "levels": [
      [
       [
        "Monochromatic light of wavelength 589 nm passes from air into water (n = 1.33). Its wavelength in water is:",
        [
         "589 nm",
         "443 nm",
         "783 nm",
         "330 nm"
        ],
        1,
        "The frequency stays the same, so λ = λ₀/n = 589/1.33 = 443 nm. (NCERT Exercise 10.1)"
       ],
       [
        "The refractive index of glass is 1.5. The speed of light in glass is:",
        [
         "2.0 × 10⁸ m s⁻¹",
         "4.5 × 10⁸ m s⁻¹",
         "3.0 × 10⁸ m s⁻¹",
         "1.5 × 10⁸ m s⁻¹"
        ],
        0,
        "v = c/n = 3.0 × 10⁸/1.5 = 2.0 × 10⁸ m/s. (NCERT Exercise 10.3)"
       ],
       [
        "The portion of a wavefront from a distant star intercepted by the Earth is:",
        [
         "Spherical",
         "Cylindrical",
         "Elliptical",
         "Plane"
        ],
        3,
        "A very small part of a huge sphere is almost flat, so the wavefront from a distant source is plane. (NCERT Exercise 10.2)"
       ],
       [
        "The wave theory predicts that if light bends towards the normal on refraction, its speed in the second medium is:",
        [
         "Greater than in the first medium",
         "Equal to that in the first medium",
         "Zero",
         "Less than in the first medium"
        ],
        3,
        "From Huygens’ construction sin i/sin r = v₁/v₂, so r < i means v₂ < v₁. Foucault’s experiment confirmed this and ruled out the corpuscular prediction."
       ],
       [
        "In Young’s experiment the slits are 0.28 mm apart and the screen is 1.4 m away. The fourth bright fringe is 1.2 cm from the centre. The wavelength is:",
        [
         "300 nm",
         "450 nm",
         "600 nm",
         "1200 nm"
        ],
        2,
        "x_n = nλD/d, so λ = x₄d/(4D) = (1.2 × 10⁻²)(0.28 × 10⁻³)/(4 × 1.4) = 6.0 × 10⁻⁷ m. (NCERT Exercise 10.4)"
       ],
       [
        "Why do two separate sodium lamps not produce interference fringes on a wall?",
        [
         "Their light travels at different speeds",
         "They are not coherent: their phase difference changes randomly",
         "Sodium light is not a wave",
         "Their intensities are too low"
        ],
        1,
        "Ordinary sources change phase abruptly in about 10⁻¹⁰ s, so two lamps have no fixed phase relation and their intensities simply add."
       ],
       [
        "Two coherent sources each produce intensity I₀ at a point. At a point of constructive interference the intensity is:",
        [
         "2I₀",
         "I₀",
         "4I₀",
         "I₀/2"
        ],
        2,
        "The amplitudes add to 2a, so I ∝ (2a)² = 4I₀. Incoherent sources would give only 2I₀."
       ],
       [
        "In single-slit diffraction (slit width a), the minima occur at angles:",
        [
         "θ = (n + ½)λ/a",
         "θ = nλ/2a",
         "θ = nλa",
         "θ = nλ/a, n = ±1, ±2, …"
        ],
        3,
        "The zero-intensity points are at θ = nλ/a. The weak secondary maxima lie roughly midway, at (n + ½)λ/a."
       ],
       [
        "Unpolarised light of intensity I₀ passes through a single polaroid. The transmitted intensity is:",
        [
         "I₀",
         "I₀/2",
         "I₀/4",
         "Zero"
        ],
        1,
        "A polaroid passes only one component of the electric vector, so half the intensity is transmitted. Rotating it makes no difference."
       ],
       [
        "Polarised light of intensity I₀ falls on a polaroid whose pass-axis makes 60° with the direction of polarisation. The transmitted intensity is:",
        [
         "I₀/4",
         "I₀/2",
         "3I₀/4",
         "I₀/8"
        ],
        0,
        "Malus’ law gives I = I₀cos²θ = I₀cos²60° = I₀/4."
       ],
       [
        "Maxwell concluded that light is an electromagnetic wave because:",
        [
         "Light can travel through vacuum",
         "Waves need no medium to propagate",
         "The speed he calculated for electromagnetic waves in free space was very close to the measured speed of light",
         "Hertz had produced radio waves in the laboratory"
        ],
        2,
        "From his equations Maxwell derived a wave equation whose free-space speed matched the measured speed of light, so he proposed that light is an electromagnetic wave."
       ],
       [
        "A wavefront is defined as:",
        [
         "A line along which energy travels",
         "A surface of constant phase",
         "A straight line drawn along the path of a ray",
         "A surface on which the intensity is zero"
        ],
        1,
        "All points on a wavefront oscillate in phase. Energy travels perpendicular to the wavefront."
       ],
       [
        "Huygens explained the absence of a backward wave by assuming that the amplitude of the secondary wavelets is:",
        [
         "The same in all directions",
         "Zero in the forward direction and maximum in the backward direction",
         "Zero in all directions",
         "Maximum in the forward direction and zero in the backward direction"
        ],
        3,
        "This was an ad hoc assumption; the absence of the backwave is really justified by more rigorous wave theory."
       ],
       [
        "Light travels from glass (n = 1.5) into air. The critical angle for total internal reflection at the glass–air boundary is about:",
        [
         "33.7°",
         "41.8°",
         "48.2°",
         "56.3°"
        ],
        1,
        "sin i_c = n₂/n₁ = 1/1.5 = 0.667, so i_c ≈ 41.8°.",
        "Use sin i_c = n₂/n₁ with n₂ the rarer medium."
       ],
       [
        "Huygens’ construction for reflection of a plane wave gives AE = BC = vt, so triangles EAC and BAC are congruent. The result is:",
        [
         "r = 2i",
         "i + r = 90°",
         "sin i/sin r = v₁/v₂",
         "i = r"
        ],
        3,
        "Congruent triangles give equal angles of incidence and reflection, which is the law of reflection."
       ],
       [
        "A plane wavefront passes through a thin glass prism. The emerging wavefront is tilted because:",
        [
         "The part passing through the thickest glass is delayed the most",
         "The part passing through the thickest glass travels faster",
         "The frequency of light changes inside glass",
         "Glass absorbs one edge of the wavefront"
        ],
        0,
        "Light is slower in glass, so the part that crosses the greatest thickness lags most and the wavefront tilts."
       ],
       [
        "Two coherent sources vibrate in phase. At a point where the path difference is 2.5λ, the phase difference and the result are:",
        [
         "2.5π, destructive",
         "5π, destructive",
         "5π, constructive",
         "2.5π, constructive"
        ],
        1,
        "A path difference of λ corresponds to 2π, so 2.5λ gives 5π, an odd multiple of π. The waves cancel."
       ],
       [
        "Two coherent sources each give intensity I₀ at a point where their phase difference is π/2. The resultant intensity is:",
        [
         "I₀",
         "0",
         "4I₀",
         "2I₀"
        ],
        3,
        "I = 4I₀cos²(φ/2) = 4I₀cos²(π/4) = 2I₀."
       ],
       [
        "In Young’s experiment the two sources S₁ and S₂ are made coherent by:",
        [
         "Using a very bright lamp behind each slit",
         "Placing the two slits far apart",
         "Illuminating both from a single pinhole S, so any phase change in S appears equally in both",
         "Using two sodium lamps of the same colour"
        ],
        2,
        "Light from S₁ and S₂ comes from the same source, so their phases are locked together."
       ],
       [
        "If the width of a single slit is reduced, the central maximum of its diffraction pattern becomes:",
        [
         "Narrower",
         "Broader",
         "Unchanged in width but dimmer",
         "Absent"
        ],
        1,
        "The first minima are at θ ≈ λ/a, so a smaller a gives a larger angle and a broader pattern."
       ],
       [
        "A bulb filament is viewed through a slit made between two razor blades, first with a red filter and then with a blue filter. The fringes are:",
        [
         "Of the same width in both",
         "Wider for blue, because it has higher frequency",
         "Narrower for red",
         "Wider for red, because its wavelength is larger"
        ],
        3,
        "Band positions depend on wavelength (θ ≈ nλ/a), and red has the longer wavelength."
       ],
       [
        "Polarisation cannot be shown by sound waves in air because they are:",
        [
         "Too slow",
         "Of low frequency",
         "Longitudinal",
         "Absorbed by air"
        ],
        2,
        "Polarisation is special to transverse waves such as light; a longitudinal wave has no direction perpendicular to its motion to restrict."
       ]
      ],
      [
       [
        "In Young’s experiment the intensity at a point where the path difference is λ is K. The intensity where the path difference is λ/3 is:",
        [
         "K/2",
         "K/3",
         "K/4",
         "3K/4"
        ],
        2,
        "At path difference λ, φ = 2π and I = 4I₀cos²(φ/2) = 4I₀ = K. At λ/3, φ = 2π/3, so I = 4I₀cos²(π/3) = I₀ = K/4. (NCERT Exercise 10.5)"
       ],
       [
        "In Young’s experiment (d = 2 mm, D = 1.2 m) light of wavelengths 650 nm and 520 nm is used together. The least distance from the central maximum where bright fringes of both coincide is:",
        [
         "1.17 mm",
         "1.56 mm",
         "0.78 mm",
         "3.12 mm"
        ],
        1,
        "We need 650n₁ = 520n₂. The smallest integers give 4 × 650 = 5 × 520 = 2600 nm, so x = 2600 × 10⁻⁹ × 1.2/(2 × 10⁻³) = 1.56 mm. (Adapted from NCERT Exercise 10.6)"
       ],
       [
        "Two polaroids are crossed. A third is placed between them with its axis at 45° to both. If I₀ is the intensity after the first polaroid, the intensity after the third is:",
        [
         "I₀/2",
         "I₀/8",
         "Zero",
         "I₀/4"
        ],
        3,
        "I = I₀cos²45° · cos²45° = I₀/4. This is the maximum the middle polaroid can allow. (NCERT Example 10.2)"
       ],
       [
        "A single slit of width 0.2 mm is lit by light of wavelength 600 nm. On a screen 2 m away, the central bright band is about:",
        [
         "6 mm wide",
         "12 mm wide",
         "3 mm wide",
         "24 mm wide"
        ],
        1,
        "The first minima are at θ ≈ λ/a, so y = λD/a = (600 × 10⁻⁹)(2)/(0.2 × 10⁻³) = 6 mm on each side. The central maximum is 12 mm wide.",
        "Count the distance between the two first minima."
       ],
       [
        "Assertion (A): When light enters glass from air, its frequency decreases.\nReason (R): The speed of light in glass is less than in air.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The frequency is fixed by the source and does not change on refraction. The speed and wavelength decrease, so R is true and A is false."
       ],
       [
        "A student says: “Two separate sodium lamps, each of intensity I₀, give 4I₀ where their waves meet in phase.” What is wrong?",
        [
         "Nothing is wrong",
         "The intensity should be 3I₀",
         "The lamps are incoherent, so the intensities add to 2I₀ and no stable fringes form",
         "The intensity should be I₀/2"
        ],
        2,
        "Independent sources have no fixed phase relation, so there is no interference term and the intensities simply add."
       ],
       [
        "A plane wavefront becomes spherical and converges after passing through a thin convex lens because:",
        [
         "The edge of the wave travels faster in air",
         "The lens absorbs the edges of the wave",
         "The wave frequency changes inside the lens",
         "The central part passes through the thickest glass and is delayed the most"
        ],
        3,
        "Light is slower in glass, so the middle of the wavefront lags most and the emerging front curves inwards towards the focus."
       ],
       [
        "Light travels from air into a medium where its speed is 2.0 × 10⁸ m/s. For an angle of incidence of 30°, the angle of refraction is about:",
        [
         "30°",
         "45°",
         "48.6°",
         "19.5°"
        ],
        3,
        "sin i/sin r = v₁/v₂ = 3.0/2.0 = 1.5, so sin r = 0.5/1.5 = 1/3 and r ≈ 19.5°. The ray bends towards the normal."
       ],
       [
        "Young’s double-slit apparatus is moved from air into water (n = 1.33) without any other change. The fringe spacing β becomes:",
        [
         "1.33β",
         "β",
         "β/1.33",
         "β/1.33²"
        ],
        2,
        "The frequency is unchanged but the wavelength falls to λ/n. Since the spacing is proportional to λ, it becomes β/1.33."
       ],
       [
        "In Young’s experiment d = 0.5 mm, D = 1 m and λ = 500 nm. The fifth dark fringe (counting the first dark fringe as n = 0) is at:",
        [
         "5.0 mm",
         "5.5 mm",
         "4.5 mm",
         "2.5 mm"
        ],
        2,
        "Dark fringes lie at x = (n + ½)λD/d. The fifth is n = 4: x = 4.5 × (500 × 10⁻⁹)(1)/(0.5 × 10⁻³) = 4.5 mm."
       ],
       [
        "Assertion (A): In everyday situations light appears to travel in straight lines.\nReason (R): Maxwell showed that light is an electromagnetic wave.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Light seems to travel in straight lines because its wavelength is tiny compared with the size of ordinary objects, not because of Maxwell’s theory. Both statements are true but R does not explain A."
       ],
       [
        "A point source in water (n = 1.33) has a spherical wavefront of radius 20 cm at t = 0. Using Huygens’ construction, the radius of the wavefront 1.0 ns later is about:",
        [
         "22.6 cm",
         "42.6 cm",
         "50.0 cm",
         "59.9 cm"
        ],
        1,
        "v = c/n = 2.26 × 10⁸ m/s, so vt = 22.6 cm and the new radius is 20 + 22.6 = 42.6 cm.",
        "Draw wavelets of radius vt, not ct."
       ],
       [
        "A student says: “Huygens’ principle gives a backward wavefront too, and Huygens removed it with a rigorous proof that the wavelets have zero amplitude backwards.” What is wrong?",
        [
         "Nothing is wrong; the proof is in Huygens’ Treatise on Light",
         "The backwave really exists in every medium",
         "Zero backward amplitude was an ad hoc assumption; only more rigorous wave theory justifies the absence of the backwave",
         "The wavelets are plane, not spherical, so there is no backwave"
        ],
        2,
        "Huygens simply assumed zero amplitude in the backward direction, which is not satisfactory by itself."
       ],
       [
        "A ray travels in glass (n = 1.5) and meets a glass–water (n = 1.33) boundary. The critical angle is about:",
        [
         "41.8°",
         "62.5°",
         "48.8°",
         "27.5°"
        ],
        1,
        "sin i_c = n₂/n₁ = 1.33/1.5 = 0.887, so i_c ≈ 62.5°. Using the glass–air value gives the wrong angle.",
        "The refracted ray grazes the surface when r = 90°."
       ],
       [
        "Assertion (A): When a plane wave goes from glass into air, it bends away from the normal.\nReason (R): The speed of light in air is greater than in glass.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "From sin i/sin r = v₁/v₂, if v₂ > v₁ then r > i. So the wave bends away from the normal because it speeds up."
       ],
       [
        "In a convex lens the central ray passes through 3 mm of glass (n = 1.5). Compared with travelling the same 3 mm in air, the extra time it takes is:",
        [
         "1 × 10⁻¹¹ s",
         "2.5 × 10⁻¹² s",
         "5 × 10⁻¹² s",
         "1.5 × 10⁻¹¹ s"
        ],
        2,
        "Extra time = (n − 1)t/c = 0.5 × 3 × 10⁻³/(3 × 10⁸) = 5 × 10⁻¹² s. This delay equals the extra travel time of edge rays in air, so all rays take equal time to the focus.",
        "Subtract the air time from the glass time."
       ],
       [
        "Two coherent sources vibrate in phase with equal amplitude a. The resultant amplitudes at points where the path differences are 3.5λ and 4λ are respectively:",
        [
         "0 and 2a",
         "2a and 0",
         "a and 2a",
         "0 and a"
        ],
        0,
        "3.5λ is (n + ½)λ with n = 3, giving destructive interference and amplitude 0. 4λ is a whole number of wavelengths, giving amplitude 2a."
       ],
       [
        "Assertion (A): Even though some points on the screen in an interference pattern get no light, energy is conserved.\nReason (R): Energy missing at the dark fringes appears at the bright fringes.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Interference redistributes light energy; the average over the pattern remains the same. R correctly explains A."
       ],
       [
        "In Young’s experiment d = 1 mm, D = 1 m and λ = 500 nm. On one side of the centre, the distance between the 5th bright fringe and the 2nd dark fringe (first dark fringe is n = 0) is:",
        [
         "1.25 mm",
         "1.50 mm",
         "2.25 mm",
         "1.75 mm"
        ],
        3,
        "β = λD/d = 0.5 mm. The 5th bright fringe is at 5β = 2.5 mm and the 2nd dark fringe at 1.5β = 0.75 mm, so the gap is 1.75 mm."
       ],
       [
        "A student says: “In Young’s experiment, halving the slit separation d halves the fringe width.” What is wrong?",
        [
         "β is independent of d",
         "Nothing is wrong",
         "β = λD/d, so halving d doubles the fringe width",
         "β ∝ 1/d², so it becomes four times larger"
        ],
        2,
        "Fringe spacing is inversely proportional to d, so the fringes move farther apart when the slits come closer."
       ],
       [
        "Light of wavelength 600 nm falls on a single slit and the first minimum is seen at 0.3° from the central axis. The slit width is about:",
        [
         "0.002 mm",
         "0.057 mm",
         "0.115 mm",
         "0.230 mm"
        ],
        2,
        "θ = 0.3° = 5.24 × 10⁻³ rad and θ ≈ λ/a, so a = 600 × 10⁻⁹/5.24 × 10⁻³ ≈ 0.115 mm.",
        "Convert degrees to radians first."
       ],
       [
        "A student says: “The pattern in Young’s double-slit experiment is purely interference between two sources, so all bright fringes are equally bright.” What is wrong?",
        [
         "Nothing is wrong",
         "Slits cannot cause diffraction",
         "Diffraction occurs only at the edges of the screen",
         "The pattern is a superposition of two-slit interference and single-slit diffraction from each slit, so brightness falls away from the centre"
        ],
        3,
        "Each slit also diffracts light, and the double-slit fringes sit inside the single-slit diffraction pattern."
       ],
       [
        "Through a slit of width 0.14 mm, a filament is viewed with a red (700 nm) filter and then a blue (400 nm) filter. The angular gap between the first minima of the two patterns on the same side is about:",
        [
         "5.0 × 10⁻³ rad",
         "2.9 × 10⁻³ rad",
         "7.9 × 10⁻³ rad",
         "2.1 × 10⁻³ rad"
        ],
        3,
        "θ = λ/a gives 5.0 × 10⁻³ rad for red and 2.86 × 10⁻³ rad for blue; the difference is 2.1 × 10⁻³ rad.",
        "Find each angle separately and subtract."
       ],
       [
        "Unpolarised light of intensity I₀ falls on polaroid P₁. Polaroid P₂ has its axis at 30° to P₁, and P₃ has its axis perpendicular to P₁. The intensity emerging from P₃ is:",
        [
         "3I₀/32",
         "3I₀/16",
         "I₀/8",
         "3I₀/8"
        ],
        0,
        "After P₁ the intensity is I₀/2. Then I = (I₀/2)cos²30° cos²60° = (I₀/2)(3/4)(1/4) = 3I₀/32.",
        "P₂ and P₃ axes differ by 60°."
       ],
       [
        "Assertion (A): Rotating a polaroid in the path of unpolarised light does not change the transmitted intensity.\nReason (R): Unpolarised light has its electric vector along one fixed direction in the transverse plane.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "The electric vector of unpolarised light takes all directions rapidly and randomly, so R is false. For this reason every orientation transmits half the intensity, and A is true."
       ],
       [
        "Light passes through polaroid P₂ and then through polaroid P₁. P₁ is rotated through one full turn (2π) about the beam. The number of positions where the transmitted intensity is (nearly) zero is:",
        [
         "1",
         "2",
         "4",
         "0"
        ],
        1,
        "I = I₀cos²θ is zero at θ = 90° and 270°, giving two minima (and two maxima) in each full turn."
       ],
       [
        "Assertion (A): The energy carried by a light wave falls when it enters a denser medium.\nReason (R): The speed of light is lower in a denser medium.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The wave energy depends on the amplitude, not on the speed of propagation, so A is false. R is a true statement. (NCERT Example 10.1)"
       ]
      ]
     ]
    },
    {
     "n": 11,
     "t": "Dual Nature of Radiation and Matter",
     "levels": [
      [
       [
        "The photoelectric cut-off voltage in an experiment is 1.5 V. The maximum kinetic energy of the photoelectrons is:",
        [
         "3.0 eV",
         "6.0 eV",
         "0.75 eV",
         "1.5 eV"
        ],
        3,
        "K_max = eV₀ = 1.5 eV = 2.4 × 10⁻¹⁹ J. (NCERT Exercise 11.3)"
       ],
       [
        "The minimum energy needed by an electron to escape from a metal surface is called its:",
        [
         "Threshold frequency",
         "Work function",
         "Stopping potential",
         "Ionisation energy"
        ],
        1,
        "This minimum energy is the work function φ₀, usually measured in eV. The threshold frequency is φ₀/h."
       ],
       [
        "The intensity of light above the threshold frequency is increased, with the frequency kept fixed. This will:",
        [
         "Increase both the saturation current and the stopping potential",
         "Increase the stopping potential only",
         "Increase the saturation current but not the stopping potential",
         "Increase neither"
        ],
        2,
        "More photons per second free more electrons, so the saturation current rises. The maximum kinetic energy depends only on frequency, so V₀ is unchanged."
       ],
       [
        "No photoelectrons are emitted below the threshold frequency, however intense the light, because:",
        [
         "Each electron absorbs one photon, and hν < φ₀ is too little to free it",
         "The metal does not absorb such light",
         "Intense light only heats the metal",
         "Photons carry no momentum"
        ],
        0,
        "Einstein’s picture is one photon to one electron. If hν < φ₀ no electron can escape, whatever the number of photons."
       ],
       [
        "Light of frequency 6 × 10¹⁴ Hz falls on caesium (work function 2.14 eV). The maximum kinetic energy of the emitted electrons is:",
        [
         "2.49 eV",
         "0.35 eV",
         "2.14 eV",
         "4.63 eV"
        ],
        1,
        "hν = (6.63 × 10⁻³⁴)(6 × 10¹⁴)/(1.6 × 10⁻¹⁹) = 2.49 eV. K_max = 2.49 − 2.14 = 0.35 eV. (NCERT Exercise 11.2)"
       ],
       [
        "The work function of a metal is 4.2 eV. Will it emit photoelectrons for light of wavelength 330 nm?",
        [
         "No, the photon energy is about 3.77 eV, below 4.2 eV",
         "Yes, the photon energy is about 3.77 eV, above 4.2 eV",
         "Yes, because 330 nm is ultraviolet",
         "No, because the intensity is not given"
        ],
        0,
        "E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(330 × 10⁻⁹ × 1.6 × 10⁻¹⁹) ≈ 3.77 eV, which is less than φ₀. (NCERT Exercise 11.7)"
       ],
       [
        "Which property of a photon depends on the frequency of the light but not on its intensity?",
        [
         "The number of photons per second",
         "Its energy",
         "The photocurrent",
         "The saturation current"
        ],
        1,
        "Each photon has E = hν. Intensity only changes how many photons arrive per second."
       ],
       [
        "The de Broglie wavelength of a bullet of mass 0.040 kg moving at 1.0 km/s is:",
        [
         "1.7 × 10⁻³² m",
         "6.6 × 10⁻³⁴ m",
         "1.7 × 10⁻³⁵ m",
         "2.6 × 10⁻³⁸ m"
        ],
        2,
        "p = mv = 0.040 × 1000 = 40 kg m/s, so λ = h/p = 6.63 × 10⁻³⁴/40 = 1.7 × 10⁻³⁵ m. This is far too small to measure. (NCERT Exercise 11.10)"
       ],
       [
        "In a photoelectric experiment the slope of the graph of cut-off voltage against frequency is 4.12 × 10⁻¹⁵ V s. The value of Planck’s constant is:",
        [
         "4.1 × 10⁻¹⁵ J s",
         "6.6 × 10⁻³⁴ J s",
         "2.6 × 10⁻⁵ J s",
         "1.6 × 10⁻¹⁹ J s"
        ],
        1,
        "V₀ = (h/e)ν − φ₀/e, so the slope is h/e. Hence h = 4.12 × 10⁻¹⁵ × 1.6 × 10⁻¹⁹ = 6.6 × 10⁻³⁴ J s. (NCERT Exercise 11.5)"
       ],
       [
        "A photon of wavelength λ has momentum:",
        [
         "hλ",
         "hc/λ",
         "h/λ",
         "λ/h"
        ],
        2,
        "p = E/c = hν/c = h/λ. This equals the de Broglie wavelength relation applied to a photon. (NCERT Exercise 11.11)"
       ],
       [
        "J. J. Thomson found that the specific charge e/m of cathode ray particles stayed the same whatever the cathode metal or the gas in the tube. This suggested that:",
        [
         "The particles are a universal constituent of all matter",
         "The particles are different for each metal",
         "The particles are positively charged ions of the gas",
         "The particles travel at the speed of light"
        ],
        0,
        "Same e/m for every material means identical particles, which Thomson named electrons. He found their speeds to be only about 0.1 to 0.2 times c."
       ],
       [
        "Millikan’s oil-drop experiment showed that the charge on an oil droplet is always an integral multiple of 1.602 × 10⁻¹⁹ C. This established that:",
        [
         "The electron has no mass",
         "Electric charge is quantised",
         "Electric charge is continuous",
         "The charge of a droplet is always zero"
        ],
        1,
        "Charge comes only in whole-number multiples of the elementary charge e. With e/m known, the mass of the electron could then be found."
       ],
       [
        "A very strong electric field of the order of 10⁸ V m⁻¹ pulls electrons out of a metal, as in a spark plug. This process is called:",
        [
         "Thermionic emission",
         "Photoelectric emission",
         "Field emission",
         "Secondary emission"
        ],
        2,
        "Strong field pulls electrons out (field emission). Heating gives thermionic emission and light gives photoelectric emission."
       ],
       [
        "A metal has a work function of 4.0 eV. In joules this is:",
        [
         "2.5 × 10¹⁹ J",
         "6.4 × 10⁻²⁰ J",
         "4.0 × 10⁻¹⁹ J",
         "6.4 × 10⁻¹⁹ J"
        ],
        3,
        "1 eV = 1.6 × 10⁻¹⁹ J, so 4.0 eV = 4.0 × 1.6 × 10⁻¹⁹ = 6.4 × 10⁻¹⁹ J."
       ],
       [
        "Hertz noticed that sparks across his detector loop became stronger when ultraviolet light from an arc lamp fell on the emitter plate. We now understand that:",
        [
         "The ultraviolet light raised the voltage of the spark source",
         "Electrons near the surface absorbed enough energy from the light to escape the metal",
         "The metal ions were pulled out of the surface",
         "The ultraviolet light only heated the air in the gap"
        ],
        1,
        "Light helped free charged particles, now known to be electrons, to escape from the surface against the pull of the positive ions."
       ],
       [
        "In Hallwachs’ experiment an uncharged zinc plate becomes positively charged when ultraviolet light falls on it. The reason is that:",
        [
         "Negatively charged electrons leave the plate",
         "Positive ions leave the plate",
         "The plate absorbs positive charge from the air",
         "The light carries positive charge"
        ],
        0,
        "Loss of negative charge leaves the plate positive. The same idea explains why a negatively charged zinc plate loses its charge under ultraviolet light."
       ],
       [
        "Which of these metals is sensitive even to visible light, whereas the others respond only to ultraviolet?",
        [
         "Zinc",
         "Cadmium",
         "Caesium",
         "Magnesium"
        ],
        2,
        "Zinc, cadmium and magnesium need short-wavelength ultraviolet light. Alkali metals such as caesium respond even to visible light."
       ],
       [
        "In the photoelectric apparatus (emitter C, collector A), the commutator is used to:",
        [
         "Change the frequency of the light",
         "Change the intensity of the light",
         "Measure the photocurrent",
         "Reverse the polarity so A can be made positive or negative with respect to C"
        ],
        3,
        "A negative (retarding) A is needed to find the stopping potential. The commutator reverses the battery connections."
       ],
       [
        "In a photocell the frequency of light (above threshold) and the positive potential of A are fixed. At intensity I the photocurrent is 4 µA. When the intensity is tripled, the photocurrent will be about:",
        [
         "4 µA",
         "12 µA",
         "36 µA",
         "1.3 µA"
        ],
        1,
        "Photocurrent is directly proportional to intensity, so it becomes 3 × 4 = 12 µA."
       ],
       [
        "For a given photosensitive material, the graph of stopping potential V₀ against the frequency ν of the incident light is:",
        [
         "A straight line that cuts the frequency axis at the threshold frequency",
         "A straight line through the origin",
         "A parabola",
         "A horizontal line"
        ],
        0,
        "V₀ varies linearly with ν and becomes zero at ν₀. Below ν₀ there is no emission."
       ],
       [
        "Very dim light of frequency above the threshold frequency falls on a metal. Photoelectric emission:",
        [
         "Starts only after a delay of several seconds",
         "Starts after hours as electrons slowly gather energy",
         "Starts instantaneously, in about 10⁻⁹ s or less",
         "Does not occur because the light is dim"
        ],
        2,
        "Low intensity means fewer photons and hence fewer electrons per second, not a time lag."
       ],
       [
        "Which of these is a prediction of the wave theory of light that disagrees with the photoelectric experiments?",
        [
         "The photocurrent should increase with intensity",
         "The maximum kinetic energy of photoelectrons should increase with the intensity",
         "Light should carry energy",
         "Light should show interference"
        ],
        1,
        "A more intense wave has stronger fields and should give each electron more energy. The experiment shows K_max is independent of intensity."
       ],
       [
        "Photons are not deflected by electric or magnetic fields because they:",
        [
         "Have no energy",
         "Have no momentum",
         "Move at less than the speed of light",
         "Are electrically neutral"
        ],
        3,
        "Photons are neutral. They carry energy hν and momentum h/λ, and always move at speed c."
       ],
       [
        "In a collision between a photon and an electron, which statement is correct?",
        [
         "Total energy and total momentum are conserved, but the number of photons may change",
         "The number of photons is always conserved",
         "Only energy is conserved",
         "Neither energy nor momentum is conserved"
        ],
        0,
        "Energy and momentum are always conserved. A photon can be absorbed or a new one created."
       ],
       [
        "The de Broglie wavelength of an electron moving at 2.0 × 10⁶ m/s is about:",
        [
         "0.036 nm",
         "3.6 nm",
         "0.36 nm",
         "0.18 nm"
        ],
        2,
        "p = mv = 9.1 × 10⁻³¹ × 2.0 × 10⁶ = 1.82 × 10⁻²⁴ kg m/s. λ = h/p = 6.63 × 10⁻³⁴/1.82 × 10⁻²⁴ = 3.6 × 10⁻¹⁰ m."
       ],
       [
        "An electron and a proton move with the same speed. Which has the longer de Broglie wavelength?",
        [
         "The proton, because it is heavier",
         "The electron, because λ = h/mv and its mass is smaller",
         "Both have the same wavelength",
         "Neither shows any wave nature"
        ],
        1,
        "At equal speed λ ∝ 1/m, so the lighter particle has the longer wavelength."
       ]
      ],
      [
       [
        "The threshold frequency of a metal is 3.3 × 10¹⁴ Hz. Light of frequency 8.2 × 10¹⁴ Hz falls on it. The cut-off voltage is:",
        [
         "3.39 V",
         "1.36 V",
         "2.03 V",
         "4.9 V"
        ],
        2,
        "eV₀ = h(ν − ν₀) = (6.63 × 10⁻³⁴)(4.9 × 10¹⁴) = 3.25 × 10⁻¹⁹ J, so V₀ = 2.03 V. (NCERT Exercise 11.6)"
       ],
       [
        "Light of wavelength 488 nm gives a stopping potential of 0.38 V. The work function of the emitter is:",
        [
         "2.55 eV",
         "2.17 eV",
         "2.93 eV",
         "0.38 eV"
        ],
        1,
        "The photon energy is hc/λ = 2.55 eV, so φ₀ = 2.55 − 0.38 = 2.17 eV. (NCERT Exercise 11.9)"
       ],
       [
        "Light of frequency 7.21 × 10¹⁴ Hz ejects electrons with a maximum speed of 6.0 × 10⁵ m/s. The threshold frequency is:",
        [
         "2.5 × 10¹⁴ Hz",
         "7.2 × 10¹⁴ Hz",
         "9.5 × 10¹⁴ Hz",
         "4.7 × 10¹⁴ Hz"
        ],
        3,
        "K_max = ½mv² = 1.64 × 10⁻¹⁹ J and hν = 4.78 × 10⁻¹⁹ J, so φ₀ = 3.14 × 10⁻¹⁹ J and ν₀ = φ₀/h = 4.7 × 10¹⁴ Hz. (NCERT Exercise 11.8)"
       ],
       [
        "A helium-neon laser emits 9.42 mW at 632.8 nm. The number of photons emitted per second is about:",
        [
         "3.0 × 10¹⁹",
         "1.5 × 10¹⁶",
         "3.0 × 10¹⁶",
         "6.0 × 10¹⁶"
        ],
        2,
        "Each photon has E = hc/λ = 3.14 × 10⁻¹⁹ J. N = P/E = 9.42 × 10⁻³/3.14 × 10⁻¹⁹ = 3.0 × 10¹⁶ per second. (NCERT Exercise 11.4)"
       ],
       [
        "Assertion (A): The wave theory of light can explain the existence of a threshold frequency.\nReason (R): In the wave picture, electrons absorb energy continuously from the radiation.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Continuous absorption means a bright enough beam would eventually free electrons at any frequency, so the wave theory predicts no threshold. A is false and R is true."
       ],
       [
        "A student says: “Light below the threshold frequency, shone for long enough, will eventually eject electrons as they slowly gain energy.” What is wrong?",
        [
         "An electron absorbs one photon at a time, so photons with hν < φ₀ can never free it however long the light shines",
         "Electrons absorb energy only from intense light",
         "The work function of a metal falls with time",
         "Nothing is wrong. Einstein’s theory predicts this too"
        ],
        0,
        "Energy cannot pile up across photons. Emission is a single-photon, instantaneous process (about 10⁻⁹ s or less)."
       ],
       [
        "An electron is accelerated from rest through 150 V. Its de Broglie wavelength is about:",
        [
         "0.012 nm",
         "1.0 nm",
         "0.0010 nm",
         "0.10 nm"
        ],
        3,
        "K = eV = 150 eV, so p = √(2mK) = 6.6 × 10⁻²⁴ kg m/s. Then λ = h/p = 0.10 nm, comparable to atomic spacing."
       ],
       [
        "An electron and a photon have the same wavelength. Which has the greater energy?",
        [
         "The photon",
         "The electron",
         "They have equal energy",
         "It cannot be determined"
        ],
        0,
        "The same λ means the same momentum p. Photon energy is pc, while electron kinetic energy is p²/2m = pv/2, which is smaller because v ≪ c."
       ],
       [
        "V₀–ν graphs of two metals A and B are drawn on the same axes. The work function of A is less than that of B. Which is true?",
        [
         "Parallel lines, and B cuts the frequency axis at a lower value",
         "Different slopes, and B is steeper",
         "Parallel lines, and A cuts the frequency axis at a lower value",
         "The two graphs are the same line"
        ],
        2,
        "The slope is h/e for every metal, so the lines are parallel. The intercept ν₀ = φ₀/h is lower for the metal with the smaller work function."
       ],
       [
        "Electrons accelerated through 30 kV strike a target and produce X-rays. The maximum frequency of the X-rays is:",
        [
         "7.2 × 10¹⁵ Hz",
         "7.2 × 10¹⁸ Hz",
         "4.1 × 10¹⁸ Hz",
         "3.0 × 10¹⁸ Hz"
        ],
        1,
        "The most energetic photon takes the whole electron energy: hν_max = eV = 30 keV. So ν_max = (1.6 × 10⁻¹⁹ × 3 × 10⁴)/(6.63 × 10⁻³⁴) = 7.2 × 10¹⁸ Hz. (NCERT Exercise 11.1)"
       ],
       [
        "In a Thomson-type experiment a beam of cathode ray particles passes undeflected through crossed fields E = 6.0 × 10⁴ V/m and B = 2.0 × 10⁻³ T. If the electric field is switched off, the beam moves in a circle of radius about (take e/m = 1.76 × 10¹¹ C/kg):",
        [
         "17 cm",
         "0.85 cm",
         "8.5 cm",
         "4.3 cm"
        ],
        2,
        "Undeflected means v = E/B = 3.0 × 10⁷ m/s (0.1c). With B alone r = mv/eB = v/[(e/m)B] = 3.0 × 10⁷/(1.76 × 10¹¹ × 2.0 × 10⁻³) = 0.085 m.",
        "Balance the electric and magnetic forces to get v first."
       ],
       [
        "Assertion (A): A droplet in Millikan’s oil-drop experiment can carry a charge of 2.4 × 10⁻¹⁹ C.\nReason (R): Electric charge is quantised, occurring in integral multiples of 1.602 × 10⁻¹⁹ C.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "2.4 × 10⁻¹⁹/1.602 × 10⁻¹⁹ ≈ 1.5 is not a whole number, so such a charge is not allowed. A is false and R is true."
       ],
       [
        "A student says: “Metals have free electrons, so electrons should leave the surface on their own without any energy supply.” What is wrong with this?",
        [
         "An escaping electron leaves a positive surface that pulls it back, so it needs at least the work function to escape",
         "Free electrons have no charge, so they cannot leave",
         "Electrons can escape only by photoelectric emission, never by heating",
         "The work function is the maximum energy an electron may gain"
        ],
        0,
        "The attraction of the ions holds the electron in. The minimum energy to pull it out is φ₀, supplied by heating, a strong field or light."
       ],
       [
        "Which statement about the origin of Hertz’s enhanced sparks under ultraviolet light is correct?",
        [
         "The ultraviolet light made the metal ions more mobile than the electrons",
         "Electrons near the metal surface absorbed energy from the light, overcame the attraction of the positive ions and escaped",
         "The ultraviolet light created extra voltage across the spark gap",
         "The metal surface emitted ultraviolet light of its own"
        ],
        1,
        "Hertz did not know of electrons then. The light freed charged particles from the surface, which enhanced the discharge."
       ],
       [
        "Three zinc plates, one negatively charged, one neutral and one positively charged, are illuminated by ultraviolet light. Their charges will respectively:",
        [
         "Stay the same, stay the same, stay the same",
         "Become more negative, become negative, become less positive",
         "Become less negative, become positive, become more positive",
         "Become less negative, stay neutral, become less positive"
        ],
        2,
        "In every case negative electrons leave. A negative plate loses charge, a neutral plate becomes positive and a positive plate gains more positive charge."
       ],
       [
        "Assertion (A): A negatively charged zinc plate loses its charge under ultraviolet light but not under visible light.\nReason (R): Emission occurs only if the frequency exceeds the threshold frequency, which for zinc lies in the ultraviolet.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Visible light has frequency below zinc’s threshold, so no electrons escape however intense it is. R correctly explains A."
       ],
       [
        "A student pairs the parts of the photocell experiment with the quantity varied. Which pairing is wrong?",
        [
         "Intensity of light is varied by changing the distance of the source",
         "Intensity of light is varied with a coloured filter",
         "Frequency of light is varied with coloured filters or glass",
         "Potential of A with respect to C is varied with the battery and commutator"
        ],
        1,
        "A filter selects the frequency. Intensity is changed by moving the source nearer to or farther from the emitter."
       ],
       [
        "A small lamp (point source, fixed frequency above threshold) at 20 cm from the emitter gives a saturation current of 8 µA. If the lamp is moved to 40 cm, the saturation current becomes about:",
        [
         "4 µA",
         "1 µA",
         "16 µA",
         "2 µA"
        ],
        3,
        "Intensity falls as 1/d², so it becomes 1/4. Saturation current is proportional to intensity, so 8/4 = 2 µA.",
        "Photon count per second on the plate falls as 1/d²."
       ],
       [
        "A laser of 2.0 mW emits light of frequency 6.0 × 10¹⁴ Hz onto a photocell. The saturation current is 4.0 µA. The percentage of incident photons that eject an electron is about:",
        [
         "0.5%",
         "5%",
         "0.05%",
         "50%"
        ],
        0,
        "Photons per second = 2.0 × 10⁻³/(6.63 × 10⁻³⁴ × 6.0 × 10¹⁴) = 5.0 × 10¹⁵. Electrons per second = 4.0 × 10⁻⁶/1.6 × 10⁻¹⁹ = 2.5 × 10¹³. Ratio = 0.5%.",
        "At saturation every emitted electron reaches the collector."
       ],
       [
        "Photoelectrons are stopped by a potential of 2.0 V. The maximum speed of the fastest photoelectrons is about:",
        [
         "5.9 × 10⁵ m/s",
         "8.4 × 10⁵ m/s",
         "1.2 × 10⁶ m/s",
         "7.0 × 10¹¹ m/s"
        ],
        1,
        "K_max = eV₀ = 2.0 eV = 3.2 × 10⁻¹⁹ J. v = √(2K/m) = √(2 × 3.2 × 10⁻¹⁹/9.1 × 10⁻³¹) = 8.4 × 10⁵ m/s."
       ],
       [
        "Assertion (A): Beyond a certain positive potential of the collector the photocurrent stops increasing.\nReason (R): At that stage every photoelectron emitted per second already reaches the collector.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "This is saturation. A larger accelerating potential cannot collect more electrons than are emitted, so R explains A."
       ],
       [
        "Stopping potentials for a metal are 0.50 V at 6.0 × 10¹⁴ Hz and 2.16 V at 10.0 × 10¹⁴ Hz. Its threshold frequency is about:",
        [
         "1.2 × 10¹⁴ Hz",
         "5.5 × 10¹⁴ Hz",
         "4.8 × 10¹⁴ Hz",
         "7.2 × 10¹⁴ Hz"
        ],
        2,
        "Slope h/e = (2.16 − 0.50)/(4.0 × 10¹⁴) = 4.15 × 10⁻¹⁵ V s. V₀ = 0 at ν₀ = 6.0 × 10¹⁴ − 0.50/4.15 × 10⁻¹⁵ = 4.8 × 10¹⁴ Hz.",
        "Find the slope first, then extend the line to V₀ = 0."
       ],
       [
        "A student says: “Dim ultraviolet light, with frequency above threshold, falls on zinc. Only a few photons arrive, so electrons will be emitted after a delay of a few minutes.” What is wrong?",
        [
         "Nothing is wrong, since dim light takes longer",
         "Dim light cannot cause any emission at all",
         "The delay would be hours, not minutes",
         "Emission is instantaneous (about 10⁻⁹ s or less); low intensity only means fewer electrons per second"
        ],
        3,
        "Each emission is a single photon absorbed by a single electron, which is instantaneous. Intensity decides only how many electrons are emitted per second."
       ],
       [
        "Which pair of observations in the photoelectric effect directly contradicts the wave theory of light?",
        [
         "K_max does not depend on intensity, and emission is instantaneous even for dim light",
         "The photocurrent is proportional to intensity, and light travels in a vacuum",
         "Light shows interference, and light shows diffraction",
         "Light carries energy, and the electric field is perpendicular to the magnetic field"
        ],
        0,
        "Wave theory expects K_max to grow with intensity and a delay of hours for dim light. Neither is seen."
       ],
       [
        "Metal A has work function 2.0 eV and metal B has 4.0 eV. Photons of energy 5.0 eV fall on both. The ratio of the maximum speeds of photoelectrons from A and B is:",
        [
         "3 : 1",
         "√3 : 1",
         "1 : √3",
         "2 : 1"
        ],
        1,
        "K_A = 5.0 − 2.0 = 3.0 eV and K_B = 5.0 − 4.0 = 1.0 eV. Since v ∝ √K, v_A : v_B = √3 : 1."
       ],
       [
        "A 5.0 mW beam of 500 nm light is completely absorbed by a surface. The force on the surface is about:",
        [
         "3.3 × 10⁻¹¹ N",
         "1.7 × 10⁻⁸ N",
         "1.7 × 10⁻¹¹ N",
         "1.7 × 10⁻¹⁴ N"
        ],
        2,
        "Photons per second N = P/E and each has p = E/c, so the momentum absorbed per second is P/c = 5.0 × 10⁻³/3 × 10⁸ = 1.7 × 10⁻¹¹ N.",
        "Force is momentum delivered per second. The wavelength is not needed."
       ],
       [
        "Assertion (A): In a photon–electron collision the number of photons need not be conserved.\nReason (R): In such a collision the total energy and total momentum are not conserved.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true, since a photon may be absorbed or a new one created. R is false because energy and momentum are always conserved."
       ],
       [
        "A proton and an alpha particle (mass 4 times the proton, charge 2 times) are accelerated from rest through the same potential difference. The ratio λ_proton : λ_alpha is:",
        [
         "2 : 1",
         "8 : 1",
         "√2 : 1",
         "2√2 : 1"
        ],
        3,
        "p = √(2mqV), so λ ∝ 1/√(mq). The alpha has mq = 4 × 2 = 8 times larger, so λ_p/λ_α = √8 = 2√2.",
        "Use K = qV and p = √(2mK)."
       ],
       [
        "A student says: “A ball’s speed is halved, so its de Broglie wavelength is also halved.” The correct statement is:",
        [
         "The wavelength is unchanged, because the mass is unchanged",
         "The wavelength doubles, since λ = h/mv is inversely proportional to speed",
         "The wavelength becomes four times larger",
         "The wavelength is halved, as the student says"
        ],
        1,
        "λ ∝ 1/v, so halving the speed doubles λ. The student has treated λ as proportional to v."
       ],
       [
        "Assertion (A): The de Broglie wavelength of a photon equals the wavelength of the electromagnetic radiation it belongs to.\nReason (R): A photon has momentum p = hν/c, so h/p = c/ν = λ.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Putting p = hν/c into λ = h/p gives c/ν, the wavelength of the radiation. R is the correct explanation."
       ]
      ]
     ]
    },
    {
     "n": 12,
     "t": "Atoms",
     "levels": [
      [
       [
        "In the Geiger–Marsden experiment most α-particles passed straight through the gold foil. This shows that:",
        [
         "The nucleus is very large",
         "The atom is a uniform sphere of positive charge",
         "Most of the atom is empty space",
         "Electrons are heavier than α-particles"
        ],
        2,
        "The nucleus is about 10⁴ to 10⁵ times smaller than the atom, so most α-particles never come near it."
       ],
       [
        "Only about 1 in 8000 α-particles is deflected by more than 90°. This indicates that:",
        [
         "Positive charge is spread uniformly through the atom",
         "Electrons repel α-particles strongly",
         "The foil was too thick",
         "The positive charge and most of the mass are in a very small nucleus"
        ],
        3,
        "A large-angle deflection needs a very close encounter with a concentrated positive charge, and few particles come that close."
       ],
       [
        "Two energy levels in an atom are 2.3 eV apart. The frequency of radiation emitted in a transition between them is:",
        [
         "3.5 × 10¹⁵ Hz",
         "5.6 × 10¹⁴ Hz",
         "5.6 × 10⁸ Hz",
         "2.3 × 10¹⁴ Hz"
        ],
        1,
        "hν = 2.3 × 1.6 × 10⁻¹⁹ = 3.68 × 10⁻¹⁹ J, so ν = 3.68 × 10⁻¹⁹/6.63 × 10⁻³⁴ = 5.6 × 10¹⁴ Hz. (NCERT Exercise 12.3)"
       ],
       [
        "The ground state energy of hydrogen is −13.6 eV. The kinetic and potential energies of the electron in this state are:",
        [
         "K = +13.6 eV, U = −27.2 eV",
         "K = −13.6 eV, U = +27.2 eV",
         "K = +13.6 eV, U = −13.6 eV",
         "K = +27.2 eV, U = −13.6 eV"
        ],
        0,
        "K = e²/8πε₀r = −E = +13.6 eV and U = −e²/4πε₀r = 2E = −27.2 eV. (NCERT Exercise 12.4)"
       ],
       [
        "The energy of the electron in the n = 3 level of hydrogen is:",
        [
         "−4.53 eV",
         "−13.6 eV",
         "−1.51 eV",
         "−0.85 eV"
        ],
        2,
        "Eₙ = −13.6/n² eV, so E₃ = −13.6/9 = −1.51 eV."
       ],
       [
        "The radius of the innermost orbit of hydrogen is 5.3 × 10⁻¹¹ m. The radius of the n = 3 orbit is:",
        [
         "1.6 × 10⁻¹⁰ m",
         "4.8 × 10⁻¹⁰ m",
         "3.2 × 10⁻¹⁰ m",
         "1.1 × 10⁻¹⁰ m"
        ],
        1,
        "rₙ ∝ n², so r₃ = 9 × 5.3 × 10⁻¹¹ = 4.8 × 10⁻¹⁰ m. (NCERT Exercise 12.7)"
       ],
       [
        "The minimum energy needed to ionise a hydrogen atom that is in the n = 2 state is:",
        [
         "13.6 eV",
         "10.2 eV",
         "3.40 eV",
         "1.51 eV"
        ],
        2,
        "E₂ = −13.6/4 = −3.40 eV, so 3.40 eV frees the electron. The more excited the atom, the less energy is needed."
       ],
       [
        "Bohr’s second postulate states that the angular momentum of the electron in a stationary orbit is:",
        [
         "L = nh",
         "L = h/2πn",
         "L = n²h/2π",
         "L = nh/2π"
        ],
        3,
        "Angular momentum is quantised in integral multiples of h/2π, where n = 1, 2, 3, … is the principal quantum number."
       ],
       [
        "A hydrogen atom in the ground state absorbs a photon and goes to the n = 4 level. The wavelength of the photon is about:",
        [
         "486 nm",
         "656 nm",
         "97 nm",
         "12.75 nm"
        ],
        2,
        "ΔE = 13.6(1 − 1/16) = 12.75 eV, so λ = hc/ΔE = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(12.75 × 1.6 × 10⁻¹⁹) = 97 nm. (NCERT Exercise 12.5)"
       ],
       [
        "According to classical electromagnetic theory, Rutherford’s atom should be unstable because:",
        [
         "The nucleus repels the electrons",
         "Electrons carry no charge",
         "Accelerating electrons radiate energy and spiral into the nucleus",
         "α-particles would knock the electrons out"
        ],
        2,
        "An orbiting electron is accelerating and so would radiate, lose energy and fall into the nucleus. It would also emit a continuous spectrum, not the observed line spectrum."
       ],
       [
        "In J. J. Thomson’s plum pudding model of the atom:",
        [
         "All the positive charge is in a tiny nucleus at the centre",
         "The positive charge is spread uniformly through the atom and the electrons are embedded in it",
         "Electrons move in circular orbits around a positive core",
         "The atom is made of positive and negative charges in separate shells"
        ],
        1,
        "Thomson (1898) pictured a uniform sphere of positive charge with electrons embedded like seeds in a watermelon. Rutherford’s scattering results ruled this out."
       ],
       [
        "In α-particle scattering, the impact parameter b is:",
        [
         "The distance of closest approach to the nucleus",
         "The distance between the nucleus and the foil surface",
         "The perpendicular distance of the initial velocity vector of the α-particle from the centre of the nucleus",
         "The angle through which the α-particle is scattered"
        ],
        2,
        "The impact parameter is the perpendicular distance between the line of the incoming α-particle and the nucleus. It decides the scattering angle."
       ],
       [
        "In a beam of α-particles scattered by a gold nucleus, the particle scattered through the largest angle is the one with:",
        [
         "The smallest impact parameter",
         "A very large impact parameter",
         "An impact parameter equal to the atomic radius",
         "The lowest charge"
        ],
        0,
        "A small impact parameter means a close encounter and a strong repulsive force. A head-on collision (minimum b) turns the α-particle back by about 180°."
       ],
       [
        "When white light passes through a cool gas and is then analysed with a spectrometer, dark lines appear in the continuous spectrum. These dark lines:",
        [
         "Are at wavelengths the gas does not interact with",
         "Are at wavelengths different from those of its emission lines",
         "Show that the gas is emitting light of those wavelengths",
         "Are at exactly the wavelengths that appear in the emission line spectrum of the same gas"
        ],
        3,
        "This is the absorption spectrum. The gas absorbs only the wavelengths it can emit, so the dark lines match its bright emission lines."
       ],
       [
        "De Broglie explained Bohr’s second postulate by assuming that:",
        [
         "The electron’s orbit is circular because of its charge",
         "The electron radiates only when it moves faster than light",
         "The circumference of the orbit holds a whole number of de Broglie wavelengths, so a standing wave forms",
         "The electron’s wavelength is equal to the radius of its orbit"
        ],
        2,
        "Only waves that fit the orbit as standing waves survive, so 2πrₙ = nλ. With λ = h/mv this gives mvrₙ = nh/2π."
       ],
       [
        "The de Broglie wavelength of the electron in the n = 1 orbit of hydrogen (r₁ = 5.3 × 10⁻¹¹ m) is about:",
        [
         "3.3 × 10⁻¹⁰ m",
         "5.3 × 10⁻¹¹ m",
         "1.7 × 10⁻¹⁰ m",
         "6.6 × 10⁻¹⁰ m"
        ],
        0,
        "For n = 1, 2πr₁ = λ, so λ = 2π × 5.3 × 10⁻¹¹ = 3.3 × 10⁻¹⁰ m, the circumference of the orbit."
       ],
       [
        "Which of the following is a limitation of Bohr’s model?",
        [
         "It cannot predict the frequencies of the lines of hydrogen",
         "It does not include the electrical forces between electrons, so it fails for atoms with more than one electron",
         "It assumes the nucleus is not positively charged",
         "It requires the electron to radiate continuously"
        ],
        1,
        "Bohr’s model works for hydrogenic atoms. It cannot be extended to even helium, and it cannot explain the relative intensities of spectral lines."
       ]
      ],
      [
       [
        "The Earth (6.0 × 10²⁴ kg) orbits the Sun at radius 1.5 × 10¹¹ m with speed 3 × 10⁴ m/s. If Bohr’s quantisation applied, the quantum number n would be about:",
        [
         "2.6 × 10⁷⁴",
         "4.1 × 10⁷³",
         "2.6 × 10⁴⁰",
         "6.6 × 10³⁴"
        ],
        0,
        "L = mvr = 6.0 × 10²⁴ × 3 × 10⁴ × 1.5 × 10¹¹ = 2.7 × 10⁴⁰ kg m²/s. n = L/(h/2π) = 2.7 × 10⁴⁰/1.06 × 10⁻³⁴ = 2.6 × 10⁷⁴. (NCERT Exercise 12.9)",
        "Divide L by h/2π, not by h."
       ],
       [
        "In Bohr’s model, the ratio of the orbital period in the n = 3 orbit to that in the n = 1 orbit is:",
        [
         "9",
         "3",
         "81",
         "27"
        ],
        3,
        "v ∝ 1/n and r ∝ n², so T = 2πr/v ∝ n³. The ratio is 3³ = 27. (NCERT Exercise 12.6)"
       ],
       [
        "Hydrogen gas at room temperature is bombarded with 12.5 eV electrons. How many different wavelengths can be emitted?",
        [
         "1",
         "2",
         "3",
         "6"
        ],
        2,
        "From n = 1 the electron can reach n = 3 (12.09 eV needed) but not n = 4 (12.75 eV). The transitions 3→2, 3→1 and 2→1 give 3 lines. (NCERT Exercise 12.8)"
       ],
       [
        "The α-particle scattering experiment is repeated with a thin sheet of solid hydrogen instead of gold foil. The result expected is:",
        [
         "More back-scattering than from gold",
         "Scattering at the same angles as from gold",
         "Almost no large-angle scattering, as the α-particle would push the lighter proton aside",
         "All the α-particles absorbed"
        ],
        2,
        "A proton is about four times lighter than an α-particle, so the α-particle is not turned back. It knocks the protons forward. (NCERT Exercise 12.2)"
       ],
       [
        "Assertion (A): In Bohr’s model, the frequency of the emitted photon equals the frequency of revolution of the electron.\nReason (R): Classical electromagnetic theory says an orbiting charge radiates at its frequency of revolution.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "In Bohr’s model the line frequency is (Eᵢ − E_f)/h, which differs from the frequency of revolution. The classical statement in R is true, so A is false."
       ],
       [
        "A student says: “The energy of the n = 2 level is −3.4 eV, so 3.4 eV excites hydrogen from n = 1 to n = 2.” What is wrong?",
        [
         "E₂ = −13.6 × 4 eV",
         "The energy needed is E₂ − E₁ = 10.2 eV, not |E₂|",
         "The electron needs 13.6 eV",
         "There is no mistake"
        ],
        1,
        "Excitation energy is the difference between the two levels: −3.4 − (−13.6) = 10.2 eV. The 3.4 eV is the energy needed to ionise from n = 2."
       ],
       [
        "A 5.5 MeV α-particle approaches a gold nucleus (Z = 79) head-on. The distance of closest approach is about:",
        [
         "3.0 × 10⁻¹⁴ m",
         "8.3 × 10⁻¹⁴ m",
         "4.1 × 10⁻¹⁴ m",
         "4.1 × 10⁻¹⁵ m"
        ],
        2,
        "At closest approach K = (1/4πε₀)(2e)(Ze)/d, so d = 2Ze²/(4πε₀K) = (2 × 79 × 9 × 10⁹ × (1.6 × 10⁻¹⁹)²)/(5.5 × 1.6 × 10⁻¹³) ≈ 4.1 × 10⁻¹⁴ m. (See NCERT Example 12.2)"
       ],
       [
        "The de Broglie wavelength of the electron in the n = 3 orbit of hydrogen, compared with that in the n = 1 orbit, is:",
        [
         "9 times",
         "1/3 as much",
         "27 times",
         "3 times"
        ],
        3,
        "2πrₙ = nλ gives λ = 2πrₙ/n. Since rₙ ∝ n², λ ∝ n, so the ratio is 3."
       ],
       [
        "The photon emitted in the transition from n = 3 to n = 2 in hydrogen has energy:",
        [
         "0.66 eV",
         "10.2 eV",
         "12.09 eV",
         "1.89 eV"
        ],
        3,
        "ΔE = E₃ − E₂ = −1.51 − (−3.40) = 1.89 eV, which is red light of wavelength about 656 nm."
       ],
       [
        "A hydrogen atom in its ground state can absorb a photon of energy:",
        [
         "11.0 eV",
         "12.5 eV",
         "10.2 eV",
         "10.0 eV"
        ],
        2,
        "A photon is absorbed only if its energy exactly matches a gap between levels. E₂ − E₁ = 10.2 eV, but 11.0, 12.5 and 10.0 eV match no gap. An electron, by contrast, can hand over part of its energy."
       ],
       [
        "In a hypothetical classical orbit of a hydrogen atom the total energy of the electron is −3.4 eV. The orbit radius is about:",
        [
         "4.2 × 10⁻¹⁰ m",
         "1.1 × 10⁻¹⁰ m",
         "5.3 × 10⁻¹¹ m",
         "2.1 × 10⁻¹⁰ m"
        ],
        3,
        "E = −e²/8πε₀r, so r = e²/(8πε₀|E|) = (9 × 10⁹ × (1.6 × 10⁻¹⁹)²)/(2 × 3.4 × 1.6 × 10⁻¹⁹) = 2.1 × 10⁻¹⁰ m. (Compare NCERT Example 12.3)",
        "Remember the factor 2 in 8πε₀."
       ],
       [
        "A student writes the total energy of the electron in a hydrogen atom as E = K + U = e²/8πε₀r + e²/4πε₀r = 3e²/8πε₀r. What is wrong?",
        [
         "K should be e²/4πε₀r",
         "The total energy must be zero",
         "The potential energy is negative, U = −e²/4πε₀r, so E = −e²/8πε₀r",
         "The electrostatic force gives no kinetic energy"
        ],
        2,
        "The electron is attracted, so U is negative. Then E = e²/8πε₀r − e²/4πε₀r = −e²/8πε₀r, negative because the electron is bound."
       ],
       [
        "Assertion (A): A solid heated to a high temperature emits a line spectrum.\nReason (R): In solids the atoms are close together, so the radiation depends on their interaction with neighbours.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Solids and dense gases emit a continuous distribution of wavelengths because of interactions between atoms. Only rarefied gases, whose atoms are far apart, give line spectra, so A is false."
       ],
       [
        "A 4.0 MeV α-particle approaches an aluminium nucleus (Z = 13) head-on. The distance of closest approach is about:",
        [
         "1.9 × 10⁻¹⁴ m",
         "9.4 × 10⁻¹⁵ m",
         "4.7 × 10⁻¹⁵ m",
         "9.4 × 10⁻¹⁴ m"
        ],
        1,
        "d = 2Ze²/(4πε₀K) = (2 × 13 × 9 × 10⁹ × (1.6 × 10⁻¹⁹)²)/(4 × 1.6 × 10⁻¹³) = 9.4 × 10⁻¹⁵ m.",
        "Convert MeV to joules: 1 MeV = 1.6 × 10⁻¹³ J."
       ],
       [
        "Assertion (A): In a head-on collision, the entire kinetic energy of the α-particle is converted into electrostatic potential energy at the distance of closest approach.\nReason (R): The total mechanical energy of the α-particle and nucleus system is conserved.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "At closest approach the α-particle is momentarily at rest, so its KE is zero. By conservation of energy the initial KE equals the potential energy there, K = 2Ze²/4πε₀d."
       ],
       [
        "In analysing the scattering of α-particles by a gold foil, Rutherford’s treatment uses a single nucleus because:",
        [
         "The foil is very thin so each α-particle is scattered at most once, and the gold nucleus, being about 50 times heavier, stays almost at rest",
         "Gold has no electrons to scatter α-particles",
         "The α-particle is heavier than the gold nucleus",
         "The electrons in the foil attract the α-particle strongly"
        ],
        0,
        "A thin foil gives single scattering, and the heavy nucleus stays stationary, so Newton’s second law and Coulomb’s law for one nucleus are enough. Atomic electrons are too light to deflect α-particles appreciably."
       ],
       [
        "Assertion (A): The dark lines in the absorption spectrum of a gas appear at the same wavelengths as the bright lines in its emission spectrum.\nReason (R): An atom can absorb a photon of any energy and go to any higher level.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "The same energy gaps between levels are involved in absorption and emission, so A is true. An atom absorbs only photons whose energy exactly matches a gap, so R is false."
       ],
       [
        "Which of the following ions can be treated, in principle, by Bohr’s model like hydrogen?",
        [
         "Neutral helium (He)",
         "Neutral lithium (Li)",
         "Li²⁺, with a nucleus of charge +3e and one electron",
         "Be with four electrons"
        ],
        2,
        "Bohr’s model works for hydrogenic atoms, that is, one electron around a nucleus of charge +Ze, such as H, He⁺ and Li²⁺. With more electrons the electron–electron forces appear."
       ],
       [
        "A student argues: “Bohr’s model works for hydrogen, so for helium I just add the attraction of the second electron to the nucleus and use the same method.” What is missing?",
        [
         "The electron–electron repulsion, which Bohr’s model does not include",
         "The magnetic force on the nucleus",
         "The quantisation of the angular momentum",
         "The nucleus has no charge in helium"
        ],
        0,
        "In a many-electron atom each electron interacts with the nucleus and with all the other electrons. Bohr’s model has only the nucleus–electron force, so this attempt did not succeed."
       ]
      ]
     ]
    },
    {
     "n": 13,
     "t": "Nuclei",
     "levels": [
      [
       [
        "The nucleus of gold is written ¹⁹⁷₇₉Au. It contains:",
        [
         "118 protons and 79 neutrons",
         "79 protons and 118 neutrons",
         "79 protons and 197 neutrons",
         "197 protons and 79 electrons"
        ],
        1,
        "Z = 79 gives 79 protons, and the neutron number is N = A − Z = 197 − 79 = 118. The 79 electrons are outside the nucleus."
       ],
       [
        "Isotopes of an element have the same:",
        [
         "Mass number but different atomic number",
         "Neutron number",
         "Both atomic number and mass number",
         "Atomic number but different mass number"
        ],
        3,
        "Isotopes have the same number of protons (same Z) but different numbers of neutrons, so their mass numbers differ."
       ],
       [
        "³₁H and ³₂He are examples of:",
        [
         "Isotopes",
         "Isotones",
         "Isobars",
         "Isomers"
        ],
        2,
        "Nuclides with the same mass number A but different Z are isobars. Isotopes share Z, and isotones share N."
       ],
       [
        "The approximate ratio of the nuclear radii of ¹⁹⁷Au and ¹⁰⁷Ag is:",
        [
         "1.84",
         "0.81",
         "1.23",
         "3.4"
        ],
        2,
        "R = R₀A^(1/3), so R_Au/R_Ag = (197/107)^(1/3) = 1.23. (NCERT Exercise 13.4)"
       ],
       [
        "The density of nuclear matter:",
        [
         "Increases with mass number A",
         "Is independent of mass number A",
         "Decreases with A",
         "Is about 10³ kg m⁻³"
        ],
        1,
        "R ∝ A^(1/3) makes the volume proportional to A. Mass is also proportional to A, so the density is constant at about 2.3 × 10¹⁷ kg m⁻³. (NCERT Exercise 13.10)"
       ],
       [
        "The energy equivalent of one atomic mass unit is:",
        [
         "9.3 MeV",
         "93.15 MeV",
         "1.6 MeV",
         "931.5 MeV"
        ],
        3,
        "E = (1.66 × 10⁻²⁷ kg)c² = 1.49 × 10⁻¹⁰ J = 931.5 MeV, so 1 u = 931.5 MeV/c². (NCERT Example 13.3)"
       ],
       [
        "Which statement about the nuclear force is true?",
        [
         "It depends on electric charge",
         "It is a long-range force",
         "It is nearly the same between n–n, p–n and p–p pairs",
         "It is weaker than gravitation"
        ],
        2,
        "The nuclear force is charge-independent, strong and short-ranged. It is much stronger than the Coulomb and gravitational forces."
       ],
       [
        "The binding energy per nucleon is greatest (about 8.75 MeV) for nuclei of mass number near:",
        [
         "4",
         "56",
         "120",
         "238"
        ],
        1,
        "The curve rises to a maximum near A = 56 (iron) and falls slowly for heavier nuclei."
       ],
       [
        "The energy released in the fission of one uranium nucleus is of the order of:",
        [
         "200 eV",
         "200 MeV",
         "2 MeV",
         "20 keV"
        ],
        1,
        "Fragments of A ≈ 120 are bound by about 0.9 MeV more per nucleon than A ≈ 240, so 240 × 0.9 ≈ 216 MeV is released per fission."
       ],
       [
        "Nuclear fusion requires very high temperatures because:",
        [
         "Neutrons are unstable",
         "Nuclear force is long-ranged",
         "Fusion absorbs energy",
         "The nuclei must overcome their Coulomb repulsion"
        ],
        3,
        "Both nuclei are positively charged, so they need enough kinetic energy to climb the Coulomb barrier (about 400 keV for two protons)."
       ],
       [
        "The radius of a nucleus is smaller than the radius of an atom by a factor of about 10⁴. The volume of the nucleus is therefore about what fraction of the atomic volume?",
        [
         "10⁻⁴",
         "10⁻⁸",
         "10⁻¹²",
         "10⁻¹⁶"
        ],
        2,
        "Volume goes as the cube of the radius, so the ratio is (10⁻⁴)³ = 10⁻¹². This is why an atom is almost empty space."
       ],
       [
        "An element has two isotopes, of mass 10 u (20% abundance) and 11 u (80% abundance). Its average atomic mass is:",
        [
         "10.8 u",
         "10.5 u",
         "10.2 u",
         "11.0 u"
        ],
        0,
        "The atomic mass is the weighted average: (20 × 10 + 80 × 11)/100 = 10.8 u, as for chlorine in NCERT Section 13.2."
       ],
       [
        "Which statement about a free neutron is correct?",
        [
         "It is stable, just like a free proton",
         "It decays into a proton, an electron and an antineutrino, with a mean life of about 1000 s",
         "It carries one unit of positive charge",
         "Its mass is much smaller than the proton mass"
        ],
        1,
        "A free neutron is unstable, but it is stable inside a nucleus. Its mass (1.00866 u) is very nearly the proton mass (1.00727 u)."
       ],
       [
        "In 1932 Chadwick found a neutral radiation from beryllium bombarded with α-particles. It was taken to be neutrons, not photons, because:",
        [
         "It was bent by a magnetic field",
         "It was absorbed by thin paper",
         "It carried a charge of −e",
         "As photons, their energy would have to be far higher than the bombardment could supply"
        ],
        3,
        "Conservation of energy and momentum showed that photons knocking out protons would need much more energy than was available. Neutral particles of mass nearly equal to the proton mass fit the data."
       ],
       [
        "The energy equivalent of 0.5 mg of matter is (c = 3 × 10⁸ m/s):",
        [
         "4.5 × 10¹⁰ J",
         "4.5 × 10⁷ J",
         "4.5 × 10¹³ J",
         "1.5 × 10² J"
        ],
        0,
        "E = mc² = (0.5 × 10⁻⁶ kg)(9 × 10¹⁶ m² s⁻²) = 4.5 × 10¹⁰ J. Compare NCERT Example 13.2."
       ],
       [
        "In α-decay, the particle emitted by the nucleus is:",
        [
         "An electron",
         "A high-energy photon",
         "A helium nucleus, ⁴₂He",
         "A positron"
        ],
        2,
        "α-rays are helium nuclei, β-rays are electrons or positrons, and γ-rays are high-energy photons."
       ],
       [
        "Which statement about radioactive emissions is correct?",
        [
         "γ-rays are helium nuclei",
         "β-decay emits electrons or positrons",
         "α-rays are high-energy photons",
         "A positron has the same charge as an electron"
        ],
        1,
        "β-decay emits electrons or positrons. A positron has the same mass as an electron but exactly opposite charge, and γ-rays are photons."
       ],
       [
        "Fission of 1 kg of uranium gives about 10¹⁴ J, while burning 1 kg of coal gives about 10⁷ J. The ratio of the two is about:",
        [
         "10³",
         "10⁵",
         "10²¹",
         "10⁷"
        ],
        3,
        "10¹⁴/10⁷ = 10⁷. Nuclear processes release energies of the order of MeV, against eV for chemical ones."
       ],
       [
        "In a controlled fusion reactor the fuel is heated to about 10⁸ K. At this temperature the fuel exists as:",
        [
         "A plasma of positive ions and electrons",
         "A neutral gas of atoms",
         "A liquid",
         "A solid"
        ],
        0,
        "At such temperatures atoms are stripped of electrons to form a plasma. The challenge is to confine it, since no container can stand that temperature."
       ]
      ],
      [
       [
        "Given m(¹⁴₇N) = 14.00307 u, m(¹H) = 1.007825 u and m_n = 1.008665 u (atomic masses), the binding energy of ¹⁴N is about:",
        [
         "7.5 MeV",
         "209 MeV",
         "0.112 MeV",
         "104.7 MeV"
        ],
        3,
        "ΔM = 7(1.007825) + 7(1.008665) − 14.00307 = 0.11236 u. Atomic masses make the electron masses cancel, so E_b = 0.11236 × 931.5 = 104.7 MeV. (NCERT Exercise 13.1)"
       ],
       [
        "For ¹²C + ¹²C → ²⁰Ne + ⁴He, the masses are 12.000000 u, 19.992439 u and 4.002603 u. The Q-value is:",
        [
         "−4.62 MeV, endothermic",
         "+4.62 MeV, exothermic",
         "+9.24 MeV, exothermic",
         "+0.0050 MeV, exothermic"
        ],
        1,
        "Q = [2(12.000000) − (19.992439 + 4.002603)] × 931.5 = 0.004958 × 931.5 = +4.62 MeV. A positive Q means the reaction releases energy. (NCERT Exercise 13.5)"
       ],
       [
        "Is the fission of ⁵⁶Fe into two ²⁸Al nuclei energetically possible? Take m(⁵⁶Fe) = 55.93494 u and m(²⁸Al) = 27.98191 u.",
        [
         "Yes, Q = +26.9 MeV",
         "No, Q = −0.029 MeV",
         "No, Q = −26.9 MeV",
         "Yes, Q = +0.029 MeV"
        ],
        2,
        "Q = [55.93494 − 2(27.98191)] × 931.5 = −0.02888 × 931.5 ≈ −26.9 MeV. Energy would have to be supplied, as iron is near the peak of the binding energy curve. (NCERT Exercise 13.6)"
       ],
       [
        "The average energy released per fission of ²³⁹Pu is 180 MeV. If all the atoms in 1 kg of pure ²³⁹Pu fission, the energy released is about:",
        [
         "1.8 × 10²⁶ MeV",
         "4.5 × 10²⁶ MeV",
         "4.5 × 10²³ MeV",
         "4.5 × 10²⁹ MeV"
        ],
        1,
        "Atoms = (1000/239) × 6.023 × 10²³ = 2.52 × 10²⁴. Energy = 2.52 × 10²⁴ × 180 MeV = 4.5 × 10²⁶ MeV. (NCERT Exercise 13.7)"
       ],
       [
        "A 100 W lamp is run on the fusion ²H + ²H → ³He + n + 3.27 MeV, using 2.0 kg of deuterium. It can glow for about:",
        [
         "5.0 × 10⁷ years",
         "1.0 × 10⁵ years",
         "5.0 × 10⁴ years",
         "1.6 × 10⁴ years"
        ],
        2,
        "2000 g of deuterium is 6.0 × 10²⁶ atoms, and each reaction uses two, giving 3.0 × 10²⁶ reactions. Energy = 3.0 × 10²⁶ × 3.27 MeV = 1.6 × 10¹⁴ J, so t = E/P = 1.6 × 10¹² s ≈ 5 × 10⁴ years. (NCERT Exercise 13.8)"
       ],
       [
        "Two deuterons, each treated as a hard sphere of radius 2.0 fm, collide head-on. The height of the Coulomb barrier is about:",
        [
         "720 keV",
         "90 keV",
         "3.6 MeV",
         "360 keV"
        ],
        3,
        "They touch when their centres are 4.0 fm apart, so U = (1/4πε₀)e²/r = 9 × 10⁹ × (1.6 × 10⁻¹⁹)²/(4 × 10⁻¹⁵) = 5.8 × 10⁻¹⁴ J ≈ 360 keV. (NCERT Exercise 13.9)"
       ],
       [
        "Assertion (A): In a nuclear reaction the numbers of protons and neutrons are separately conserved, so no mass is converted into energy.\nReason (R): The energy released comes from the difference in total binding energy between the two sides.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Total nucleon rest mass is unchanged, but the binding energies differ and binding energy contributes a mass defect. This is how mass converts to energy, so A is false and R is true. (NCERT Example 13.4)"
       ],
       [
        "A student finds the mass defect of ¹⁶O as 0.13251 u using m_p, m_n and the atomic mass 15.99493 u. What is wrong?",
        [
         "The atomic mass includes 8 electrons. The nuclear mass is 15.99053 u, giving ΔM = 0.13691 u",
         "The neutron mass should be used for all 16 nucleons",
         "The mass defect should be added to the nuclear mass, not subtracted",
         "There is no mistake"
        ],
        0,
        "Using proton masses for the nucleons means the nuclear mass must be used, so 8mₑ (0.0044 u) is subtracted from the atomic mass. The result is ΔM = 0.13691 u, as in NCERT Section 13.4."
       ],
       [
        "The mass of ⁵⁶Fe is 55.934939 u. Using m_H = 1.007825 u and m_n = 1.008665 u, its binding energy per nucleon is about:",
        [
         "492 MeV",
         "8.79 MeV",
         "9.45 MeV",
         "7.85 MeV"
        ],
        1,
        "ΔM = 26(1.007825) + 30(1.008665) − 55.934939 = 0.52846 u, so E_b = 492 MeV. Dividing by 56 nucleons gives 8.79 MeV. (NCERT Exercise 13.2)"
       ],
       [
        "A nucleus with A = 240 (7.6 MeV per nucleon) splits into two nuclei with A = 120 (8.5 MeV per nucleon). The energy released is about:",
        [
         "1824 MeV",
         "2040 MeV",
         "216 MeV",
         "0.9 MeV"
        ],
        2,
        "The gain is 0.9 MeV per nucleon over 240 nucleons: 240 × (8.5 − 7.6) = 216 MeV. This is why fission releases about 200 MeV."
       ],
       [
        "Assertion (A): An atom is almost empty space.\nReason (R): The radius of a nucleus is about 10⁴ times smaller than that of the atom, yet the nucleus holds more than 99.9% of the atom’s mass.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The nuclear volume is only about 10⁻¹² of the atomic volume, so nearly all the atom’s volume is empty. Both statements are true and R explains A."
       ],
       [
        "Boron has two isotopes, ¹⁰B (10.01 u) and ¹¹B (11.01 u), and its atomic mass is 10.81 u. The percentage abundance of ¹⁰B is about:",
        [
         "80%",
         "20%",
         "10%",
         "50%"
        ],
        1,
        "Let the fraction of ¹⁰B be x: 10.01x + 11.01(1 − x) = 10.81, so x = 0.20.",
        "Use a weighted average."
       ],
       [
        "A student reasons: “The masses of the hydrogen, deuterium and tritium nuclei are in the ratio 1 : 2 : 3, and all have one positive charge, so deuterium has one proton and one electron.” What is wrong?",
        [
         "Deuterium has two protons, since its mass is twice that of hydrogen",
         "Deuterium has one proton and two neutrons",
         "Electrons are not in the nucleus; the extra mass is a neutral particle, so deuterium has one proton and one neutron",
         "Nothing is wrong, since the electron supplies the extra mass"
        ],
        2,
        "Electrons inside the nucleus were ruled out by quantum theory. The extra neutral matter is one neutron for deuterium and two for tritium."
       ],
       [
        "The radius of a nucleus is half the radius of the ¹⁹⁷Au nucleus. Its mass number is about:",
        [
         "12",
         "49",
         "99",
         "25"
        ],
        3,
        "R ∝ A^(1/3), so A = 197 × (1/2)³ = 24.6 ≈ 25. The ratio of volumes is 8 : 1, and the density is the same."
       ],
       [
        "As the energy of α-particles scattered from gold is raised well above 5.5 MeV, the results eventually depart from Rutherford’s calculation because:",
        [
         "The closest approach becomes so small that the short-range nuclear force starts to act",
         "The gold nucleus gains electrons",
         "The Coulomb force turns attractive",
         "The α-particles become neutral"
        ],
        0,
        "Rutherford’s calculation assumes pure Coulomb repulsion. The distance at which deviations begin gives an estimate of the nuclear size."
       ],
       [
        "If 1 g of matter were completely converted to energy, a 100 W lamp could be kept glowing for about (1 year = 3.154 × 10⁷ s):",
        [
         "9 × 10¹¹ years",
         "2.9 × 10⁷ years",
         "2.9 × 10⁴ years",
         "2.9 × 10¹ years"
        ],
        2,
        "E = 10⁻³ × (3 × 10⁸)² = 9 × 10¹³ J, so t = E/P = 9 × 10¹¹ s. Dividing by 3.154 × 10⁷ s per year gives 2.9 × 10⁴ years. (NCERT Example 13.2)"
       ],
       [
        "Which statement about mass–energy interconversion is correct?",
        [
         "It occurs only in nuclear reactions, never in chemical ones",
         "It occurs in chemical reactions too, but the mass defects are about a million times smaller than in nuclear reactions",
         "It occurs in chemical reactions, with mass defects about a million times larger than in nuclear ones",
         "It occurs only when neutrons are released"
        ],
        1,
        "Chemical binding energy also contributes a mass defect, but it is a million times smaller. This is why the interconversion seems absent in chemistry. (NCERT Example 13.4)"
       ],
       [
        "Stable light nuclei have N : Z close to 1 : 1, but stable heavy nuclei have N : Z of about 3 : 2. This is because:",
        [
         "Neutrons repel protons",
         "The nuclear force acts only between neutrons",
         "Protons become unstable in heavy nuclei",
         "Extra neutrons add attractive nuclear force without adding Coulomb repulsion, offsetting the repulsion among protons"
        ],
        3,
        "The nuclear force is charge-independent, while the Coulomb repulsion acts only between protons. More neutrons are needed to bind a large number of protons."
       ],
       [
        "Assertion (A): Gravitational attraction between nucleons is what holds a nucleus together.\nReason (R): The gravitational force is much weaker than even the Coulomb force.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The binding is due to the strong nuclear force, which dominates the Coulomb repulsion. Gravity is far too weak, so A is false while R is true."
       ],
       [
        "Two nucleons are held 0.5 fm apart and then 1.5 fm apart. The nuclear force between them is:",
        [
         "Attractive in both cases",
         "Repulsive at 0.5 fm and attractive at 1.5 fm",
         "Attractive at 0.5 fm and repulsive at 1.5 fm",
         "Zero in both cases"
        ],
        1,
        "The potential energy is a minimum at about 0.8 fm. The force is strongly repulsive at smaller separations and attractive at larger ones, up to a few fm."
       ],
       [
        "A ²³⁸₉₂U nucleus emits an α-particle. The daughter nucleus has:",
        [
         "90 protons and 146 neutrons",
         "90 protons and 144 neutrons",
         "92 protons and 142 neutrons",
         "94 protons and 140 neutrons"
        ],
        1,
        "The α-particle (⁴₂He) removes 2 protons and 2 neutrons, leaving Z = 90 and A = 234. So N = 234 − 90 = 144."
       ],
       [
        "A 1000 MW power station runs for 30 days. If 1 kg of uranium gives 10¹⁴ J on fission and 1 kg of coal gives 10⁷ J on burning, the masses of uranium and coal needed are about:",
        [
         "26 kg of uranium; 2.6 × 10⁸ kg of coal",
         "0.86 kg of uranium; 8.6 × 10⁶ kg of coal",
         "2.6 × 10³ kg of uranium; 2.6 × 10⁸ kg of coal",
         "26 kg of uranium; 2.6 × 10⁷ kg of coal"
        ],
        0,
        "E = 10⁹ W × 30 × 86400 s = 2.6 × 10¹⁵ J. Uranium = 2.6 × 10¹⁵/10¹⁴ ≈ 26 kg, and coal = 2.6 × 10¹⁵/10⁷ = 2.6 × 10⁸ kg.",
        "Convert 30 days to seconds first."
       ],
       [
        "A student writes ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 2 ¹₀n and says it is balanced because 56 + 36 = 92. What is wrong?",
        [
         "The atomic numbers do not add up",
         "The mass numbers do not balance: the right side totals 141 + 92 + 2 = 235 but the left side is 236, so 3 neutrons are released",
         "Neutrons are never released in fission",
         "Nothing is wrong"
        ],
        1,
        "Protons and neutrons are both conserved in nuclear reactions. Checking only Z is not enough, and A must be 236 on both sides, so the reaction releases 3 neutrons."
       ],
       [
        "Taking 200 MeV per fission of ²³⁵U (N_A = 6.023 × 10²³ per mole, 1 MeV = 1.6 × 10⁻¹³ J), the energy from fission of all the nuclei in 1 kg is about:",
        [
         "5.1 × 10²⁶ J",
         "1.9 × 10¹⁶ J",
         "8.2 × 10¹⁰ J",
         "8.2 × 10¹³ J"
        ],
        3,
        "Nuclei = (1000/235) × 6.023 × 10²³ = 2.56 × 10²⁴. Energy = 2.56 × 10²⁴ × 200 MeV = 5.1 × 10²⁶ MeV = 8.2 × 10¹³ J, close to the 10¹⁴ J quoted by NCERT."
       ],
       [
        "Assertion (A): Fusion goes on in the Sun’s core even though its temperature (1.5 × 10⁷ K) is far below that needed for average protons to cross the Coulomb barrier.\nReason (R): Every proton in the Sun’s core has energy greater than the Coulomb barrier.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Only the protons whose energies are far above the average can fuse, so A is true. R is false, since most protons have energies near the average."
       ],
       [
        "A student says: “In the Sun, ³₂He + ³₂He → ⁴₂He + 2 ¹₁H can happen after reactions (i)–(iii) of the p–p cycle have run just once.” What is wrong?",
        [
         "Reactions (i)–(iii) must run twice, to make the two ³He nuclei that react in step (iv)",
         "Reactions (i)–(iii) must run four times",
         "Step (iv) does not need ³He nuclei",
         "Nothing is wrong"
        ],
        0,
        "Step (iv) needs two ³He nuclei, so (i)–(iii) occur twice. The net effect is 4 ¹H → ⁴He with 26.7 MeV released."
       ],
       [
        "In stars, fusion can build elements only up to those near the peak of the binding energy curve (A ≈ 56) because:",
        [
         "Stars run out of neutrons",
         "The Coulomb barrier disappears beyond iron",
         "Helium nuclei cannot fuse at all",
         "Beyond the peak, binding energy per nucleon decreases, so fusion would absorb energy rather than release it"
        ],
        3,
        "Energy is released only when nuclei move toward higher binding energy per nucleon. Beyond A ≈ 56 the curve falls, so fusion is no longer exothermic."
       ],
       [
        "A fusion reactor is designed to heat deuterium fuel to about 10⁸ K. Which statement describes the situation correctly?",
        [
         "The fuel is a neutral gas that is easy to confine in steel walls",
         "The fuel is a solid pellet that melts at this temperature",
         "The fuel is a plasma of ions and electrons; no material container can stand this temperature, so confining the plasma is the main challenge",
         "The fuel turns entirely into neutrons, so no confinement is needed"
        ],
        2,
        "At about 10⁸ K the fuel is a plasma of positive ions and electrons. Steady power needs this plasma to be confined without touching any container wall."
       ]
      ]
     ]
    },
    {
     "n": 14,
     "t": "Semiconductor Electronics",
     "levels": [
      [
       [
        "Which statement is true for n-type silicon?",
        [
         "Electrons are the majority carriers and trivalent atoms are the dopants",
         "Electrons are the minority carriers and pentavalent atoms are the dopants",
         "Holes are the minority carriers and pentavalent atoms are the dopants",
         "Holes are the majority carriers and trivalent atoms are the dopants"
        ],
        2,
        "Pentavalent dopants (donors) give n-type Si, where electrons are the majority carriers and holes are the minority carriers. Only the third statement is correct. (NCERT Exercise 14.1)"
       ],
       [
        "A p-type semiconductor is made by doping silicon with atoms that are:",
        [
         "Pentavalent (As, P)",
         "Tetravalent (C, Sn)",
         "Trivalent (B, Al, In)",
         "Divalent (Mg, Zn)"
        ],
        2,
        "A trivalent dopant has one valence electron too few, so each acceptor atom creates one hole in the lattice. (NCERT Exercise 14.2)"
       ],
       [
        "Carbon, silicon and germanium have four valence electrons each. Their band gaps are related by:",
        [
         "E_g(Si) < E_g(Ge) < E_g(C)",
         "E_g(C) > E_g(Si) > E_g(Ge)",
         "E_g(C) < E_g(Ge) > E_g(Si)",
         "E_g(C) = E_g(Si) = E_g(Ge)"
        ],
        1,
        "The gaps are about 5.4 eV for carbon (diamond), 1.1 eV for Si and 0.7 eV for Ge. (NCERT Exercise 14.3)"
       ],
       [
        "In an unbiased p–n junction, holes diffuse from the p-region to the n-region because:",
        [
         "The hole concentration is higher in the p-region than in the n-region",
         "The junction potential pushes them across",
         "Free electrons in the n-region attract them",
         "They are repelled by the ionised acceptors"
        ],
        0,
        "Diffusion is driven by the concentration gradient. The barrier potential that builds up opposes it. (NCERT Exercise 14.4)"
       ],
       [
        "When a forward bias is applied to a p–n junction, it:",
        [
         "Raises the potential barrier",
         "Widens the depletion layer",
         "Reduces the majority-carrier current to zero",
         "Lowers the potential barrier"
        ],
        3,
        "The applied voltage opposes the built-in potential, so the barrier falls and the depletion layer narrows. (NCERT Exercise 14.5)"
       ],
       [
        "The input to a full-wave rectifier has a frequency of 50 Hz. The output frequency is:",
        [
         "50 Hz",
         "25 Hz",
         "100 Hz",
         "200 Hz"
        ],
        2,
        "A half-wave rectifier gives one pulse per cycle (50 Hz). A full-wave rectifier gives two, so 100 Hz. (NCERT Exercise 14.6)"
       ],
       [
        "The cut-in (threshold) voltage of a silicon diode is about:",
        [
         "0.2 V",
         "1.1 V",
         "0.7 V",
         "5 V"
        ],
        2,
        "Below about 0.7 V a silicon diode passes almost no current. A germanium diode starts to conduct at about 0.2 V."
       ],
       [
        "In an intrinsic semiconductor at room temperature:",
        [
         "Electrons are the majority carriers",
         "Holes are the majority carriers",
         "There are no free charge carriers",
         "The number of free electrons equals the number of holes"
        ],
        3,
        "Thermal energy creates electrons and holes in pairs, so n_e = n_h = n_i."
       ],
       [
        "When a p–n junction is reverse biased, the depletion region:",
        [
         "Narrows",
         "Widens",
         "Disappears",
         "Stays the same"
        ],
        1,
        "The applied voltage adds to the barrier potential, so the barrier gets higher and the depletion layer wider."
       ],
       [
        "A material has a band gap greater than 3 eV and no electrons in its conduction band at room temperature. It is:",
        [
         "A metal",
         "A semiconductor",
         "An insulator",
         "A doped semiconductor"
        ],
        2,
        "With E_g > 3 eV, thermal energy cannot lift electrons across the gap, so there is no conduction."
       ],
       [
        "Which of the following is NOT true of semiconductor devices when compared with vacuum tubes?",
        [
         "They are small in size",
         "They operate at low voltages",
         "They need a heated cathode to supply the mobile electrons",
         "They have a long life and high reliability"
        ],
        2,
        "In a semiconductor the charge carriers are supplied within the solid itself, so no heated cathode or evacuated space is needed. The heated cathode belongs to vacuum tubes."
       ],
       [
        "A material has an electrical conductivity of about 10⁻³ S m⁻¹. It is most likely a:",
        [
         "Metal",
         "Semiconductor",
         "Insulator",
         "Superconductor"
        ],
        1,
        "Semiconductors have σ in the range of about 10⁵ to 10⁻⁶ S m⁻¹, metals have σ ≥ 10² S m⁻¹ and insulators have σ ≤ 10⁻¹¹ S m⁻¹."
       ],
       [
        "In a metal, the valence band and the conduction band:",
        [
         "Overlap, or the conduction band is partially filled, so many electrons are free to conduct",
         "Are separated by a gap of more than 3 eV",
         "Are separated by a gap of about 1 eV",
         "Are both completely empty at all temperatures"
        ],
        0,
        "With overlapping (or partly filled) bands, a large number of electrons are available for conduction, so the resistance is low."
       ],
       [
        "In an intrinsic semiconductor, a hole appears to move because:",
        [
         "A free electron in the conduction band moves into it",
         "The positive ion core moves through the lattice",
         "The atoms of the lattice drift in the electric field",
         "A bound valence electron from a neighbouring bond jumps into the vacancy"
        ],
        3,
        "When a bound electron fills the vacancy, a vacancy appears at its old site, so the hole seems to move the other way. Hole motion is just a convenient way of describing the motion of bound electrons."
       ],
       [
        "In an intrinsic semiconductor at a fixed temperature, the number of electron–hole pairs stays steady because:",
        [
         "The rate of generation equals the rate of recombination",
         "Generation stops once equilibrium is reached",
         "Recombination never occurs in a pure crystal",
         "Electrons are removed by the battery"
        ],
        0,
        "Thermal generation of pairs and recombination (an electron meeting a hole) go on together. At equilibrium the two rates are equal."
       ],
       [
        "The energy needed to free the extra (fifth) electron of a pentavalent donor in silicon is about:",
        [
         "1.1 eV",
         "0.05 eV",
         "5 eV",
         "0.7 eV"
        ],
        1,
        "The fifth electron is very weakly bound: about 0.05 eV for Si and 0.01 eV for Ge. This is far less than the 1.1 eV needed to cross the band gap of Si."
       ],
       [
        "In a doped silicon sample, n_i = 2 × 10¹⁶ m⁻³ and the electron concentration is 8 × 10²² m⁻³. The hole concentration is:",
        [
         "2.5 × 10⁻⁷ m⁻³",
         "8 × 10²² m⁻³",
         "5 × 10⁹ m⁻³",
         "2 × 10¹⁶ m⁻³"
        ],
        2,
        "In thermal equilibrium nₑn_h = n_i², so n_h = (4 × 10³²)/(8 × 10²²) = 5 × 10⁹ m⁻³."
       ],
       [
        "In the energy-band picture of extrinsic semiconductors, the donor level (E_D) of an n-type material and the acceptor level (E_A) of a p-type material lie:",
        [
         "E_D just above the valence band and E_A just below the conduction band",
         "Both in the middle of the band gap",
         "Both inside the conduction band",
         "E_D just below the conduction band and E_A just above the valence band"
        ],
        3,
        "A donor level lies slightly below the conduction band, so electrons jump into it easily. An acceptor level lies slightly above the valence band, so it accepts valence electrons and leaves holes."
       ],
       [
        "The depletion region of a p-n junction consists of:",
        [
         "Free electrons and holes in equal numbers",
         "Immobile ionised donors on the n-side and ionised acceptors on the p-side",
         "Only mobile majority carriers",
         "Neutral atoms with no charge at all"
        ],
        1,
        "Diffusing electrons and holes leave behind positive donor ions on the n-side and negative acceptor ions on the p-side. These ions are immobile and the region has no free carriers."
       ],
       [
        "In an unbiased p-n junction at equilibrium:",
        [
         "There is only diffusion current",
         "There is only drift current",
         "The diffusion current equals the drift current, so the net current is zero",
         "The diffusion current is much larger than the drift current"
        ],
        2,
        "The drift current grows as the space-charge layers extend, until it balances the diffusion current. Then no net current flows."
       ],
       [
        "In the symbol of a p-n junction diode, the arrow points:",
        [
         "From the p-side to the n-side, in the direction of conventional current under forward bias",
         "From the n-side to the p-side",
         "In the direction of electron flow under forward bias",
         "Towards the terminal connected to the positive of the battery in reverse bias"
        ],
        0,
        "The arrowhead shows the direction in which conventional current flows when the diode is forward biased."
       ],
       [
        "The voltage across a diode changes from 0.70 V to 0.90 V while the current changes from 6 mA to 10 mA. Its dynamic resistance is:",
        [
         "0.9 Ω",
         "20 Ω",
         "90 Ω",
         "50 Ω"
        ],
        3,
        "r_d = ΔV/ΔI = 0.20 V/(4 × 10⁻³ A) = 50 Ω."
       ],
       [
        "To measure the V–I characteristics of a diode, a milliammeter is used in forward bias and a microammeter in reverse bias because:",
        [
         "The forward current is in µA and the reverse current is in mA",
         "The forward current is in mA while the reverse current is only in µA",
         "Both currents are of the same order",
         "A microammeter cannot be used in forward bias"
        ],
        1,
        "Forward current is usually in mA, while the reverse (saturation) current is only a few µA."
       ],
       [
        "In a half-wave rectifier, current flows through the load:",
        [
         "For the whole ac cycle",
         "Only when the diode is reverse biased",
         "Only during the half-cycles in which the diode is forward biased",
         "Only during the negative half-cycle, always"
        ],
        2,
        "The diode conducts only when its p-side is positive with respect to its n-side. So the output is a series of pulses, one for each input cycle."
       ],
       [
        "In a centre-tap full-wave rectifier, when terminal A of the secondary is positive with respect to the centre tap:",
        [
         "D₁ conducts and D₂ does not",
         "Both D₁ and D₂ conduct",
         "D₂ conducts and D₁ does not",
         "Neither diode conducts"
        ],
        0,
        "The voltage at B is then negative. So D₁ is forward biased and conducts, while D₂ is reverse biased."
       ],
       [
        "A capacitor filter is used with a rectifier. The capacitor is connected:",
        [
         "In series with the load, with an inductor across it",
         "In series with the diode",
         "Across the secondary of the transformer",
         "In parallel with the load resistor R_L"
        ],
        3,
        "The capacitor is connected across the output terminals, in parallel with R_L. It charges to the peak voltage and discharges slowly through the load."
       ]
      ],
      [
       [
        "A pure Si crystal has 5 × 10²⁸ atoms m⁻³ and is doped with 1 ppm of arsenic. Given n_i = 1.5 × 10¹⁶ m⁻³, the hole concentration is about:",
        [
         "4.5 × 10¹⁵ m⁻³",
         "5 × 10²² m⁻³",
         "1.5 × 10¹⁶ m⁻³",
         "4.5 × 10⁹ m⁻³"
        ],
        3,
        "n_e ≈ N_D = 5 × 10²². Then n_h = n_i²/n_e = (2.25 × 10³²)/(5 × 10²²) = 4.5 × 10⁹ m⁻³. (NCERT Example 14.2)"
       ],
       [
        "Assertion (A): A p-type semiconductor is negatively charged.\nReason (R): The majority carriers in a p-type semiconductor are holes.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The crystal is electrically neutral, because the negative acceptor ions balance the holes. R is true, but A is false."
       ],
       [
        "A student says: “Under forward bias a large current flows because the depletion region widens and the drift current increases.” What is wrong?",
        [
         "Forward bias raises the barrier and widens the depletion layer",
         "Drift current is much larger than diffusion current under forward bias",
         "Forward bias narrows the depletion layer and lowers the barrier, so diffusion of carriers (minority-carrier injection) dominates",
         "The depletion layer does not change with bias"
        ],
        2,
        "Forward bias lowers the barrier and narrows the depletion layer, letting majority carriers cross and be injected as minority carriers. The drift current stays negligible."
       ],
       [
        "A diode’s characteristic shows 10 mA at 0.7 V and 20 mA at 0.8 V. Its dynamic resistance in this region is:",
        [
         "80 Ω",
         "0.1 Ω",
         "70 Ω",
         "10 Ω"
        ],
        3,
        "r_d = ΔV/ΔI = (0.8 − 0.7)/(10 × 10⁻³) = 10 Ω. The static ratio V/I at 10 mA would be 70 Ω. (NCERT Example 14.4)"
       ],
       [
        "Silicon is doped with 1 × 10²² m⁻³ acceptor atoms (n_i = 1.5 × 10¹⁶ m⁻³). The electron concentration is about:",
        [
         "1.5 × 10¹⁶ m⁻³",
         "1.0 × 10²² m⁻³",
         "6.7 × 10⁻⁷ m⁻³",
         "2.25 × 10¹⁰ m⁻³"
        ],
        3,
        "n_h ≈ N_A = 10²², so n_e = n_i²/n_h = (1.5 × 10¹⁶)²/10²² = 2.25 × 10¹⁰ m⁻³. These electrons are the minority carriers."
       ],
       [
        "The secondary of a centre-tap transformer has a peak voltage of 24 V across its whole winding. With ideal diodes, the peak output voltage across the load of a full-wave rectifier is:",
        [
         "24 V",
         "12 V",
         "48 V",
         "6 V"
        ],
        1,
        "Each diode works with only half the secondary, from one end to the centre tap, so the output peaks at 12 V."
       ],
       [
        "In a capacitor-input filter, the ripple in the rectified output is smaller when:",
        [
         "The capacitance C is small",
         "The time constant C·R_L is large",
         "The load resistance is very small",
         "The diode is replaced by a resistor"
        ],
        1,
        "The capacitor discharges more slowly when C·R_L is large, so the output stays close to the peak voltage."
       ],
       [
        "Light must have a photon energy of at least E_g to create an electron–hole pair. For silicon (E_g = 1.1 eV), the longest wavelength that can do so is about:",
        [
         "0.55 µm",
         "2.26 µm",
         "113 nm",
         "1.13 µm"
        ],
        3,
        "λ = hc/E_g = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(1.1 × 1.6 × 10⁻¹⁹) = 1.13 × 10⁻⁶ m, which is in the infrared."
       ],
       [
        "Carbon (diamond), silicon, germanium and tin all have four valence electrons. Tin behaves as a metal while diamond is an insulator because the band gap is:",
        [
         "0.7 eV in tin and 5.4 eV in diamond",
         "5.4 eV in tin and 0 eV in diamond",
         "0 eV in tin and 5.4 eV in diamond",
         "1.1 eV in both"
        ],
        2,
        "Tin has zero gap between the bands, so electrons move freely. Diamond has a gap of 5.4 eV, so thermal excitation is negligible."
       ],
       [
        "The reverse current of a diode is almost independent of the applied voltage because:",
        [
         "It is limited by the battery voltage",
         "Majority carriers carry it",
         "The depletion layer disappears",
         "It is limited by the minority-carrier concentration, which even a small voltage can sweep across"
        ],
        3,
        "Even a small reverse voltage sweeps all the available minority carriers across the junction. More voltage cannot add carriers, so the current saturates."
       ],
       [
        "A student says: “In a vacuum diode the electrons come from the heated plate (anode) and a vacuum is kept so that the electrons are not absorbed by the glass.” What is wrong?",
        [
         "Nothing is wrong with the statement",
         "The electrons come from the heated cathode, and the vacuum prevents them from losing energy in collisions with air molecules",
         "The electrons come from the grid, and the vacuum is needed to keep the cathode cool",
         "Electrons can flow in both directions, so the vacuum is not needed"
        ],
        1,
        "Electrons are supplied by the heated cathode and flow only from cathode to anode. Vacuum avoids energy loss by collision with air molecules."
       ],
       [
        "A cube of side 1 cm is made of a material of conductivity 10⁻² S m⁻¹. The resistance between two opposite faces and the type of the material are:",
        [
         "10² Ω, metal",
         "10⁻⁴ Ω, metal",
         "10⁷ Ω, insulator",
         "10⁴ Ω, semiconductor"
        ],
        3,
        "R = ρl/A = (1/σ)(l/A) = 100 × (10⁻²/10⁻⁴) = 10⁴ Ω. A conductivity of 10⁻² S m⁻¹ lies in the semiconductor range."
       ],
       [
        "Assertion (A): The resistance of an intrinsic semiconductor decreases as its temperature rises.\nReason (R): At higher temperature more electron–hole pairs are generated by thermal energy.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "More electron–hole pairs mean more charge carriers, so the conductivity rises and the resistance falls. R explains A."
       ],
       [
        "A student says: “In an intrinsic semiconductor a hole moves when the free electron in the conduction band falls into it.” What is wrong?",
        [
         "Holes cannot move at all",
         "Holes move only at 0 K",
         "Hole motion is the jump of bound valence electrons into the vacancy, and the free electron moves independently of it",
         "The hole moves in the same direction as the electron it is joined with"
        ],
        2,
        "A bound electron from a nearby covalent bond fills the vacancy, so the vacancy shifts. The free conduction electron is not involved in this process."
       ],
       [
        "Under an applied field, the electron current in an intrinsic semiconductor is 2.4 mA and the hole current is 1.6 mA. The total current is:",
        [
         "0.8 mA",
         "4.0 mA",
         "2.0 mA",
         "3.84 mA"
        ],
        1,
        "Electrons and holes move in opposite directions, but both give current in the same direction. So I = Iₑ + I_h = 4.0 mA."
       ],
       [
        "A doped Si sample has n_i = 1.5 × 10¹⁶ m⁻³ and a hole concentration of 4.5 × 10⁹ m⁻³ at room temperature. The dopant is ___ and its concentration is about ___.",
        [
         "Pentavalent, 5 × 10²² m⁻³",
         "Trivalent, 5 × 10²² m⁻³",
         "Pentavalent, 1.5 × 10¹⁶ m⁻³",
         "Trivalent, 4.5 × 10⁹ m⁻³"
        ],
        0,
        "Here n_h is far below n_i, so electrons are in the majority and the sample is n-type (pentavalent dopant). nₑ = n_i²/n_h = (2.25 × 10³²)/(4.5 × 10⁹) = 5 × 10²² m⁻³ ≈ N_D."
       ],
       [
        "Assertion (A): In an n-type semiconductor, the number of conduction electrons supplied by the donors hardly changes when the temperature rises.\nReason (R): At room temperature almost all the donor atoms are already ionised.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Once nearly every donor has given up its extra electron, a rise in temperature cannot free many more, so the donor contribution stays fixed. R explains A."
       ],
       [
        "The hole concentration in n-type silicon is much below that in the pure crystal because:",
        [
         "Donors capture holes permanently",
         "The donor atoms are neutral",
         "Holes cannot be generated in doped silicon",
         "The extra electrons increase the rate of recombination, so the thermally generated holes are destroyed"
        ],
        3,
        "With many more electrons available, holes meet electrons and recombine more often. This is why nₑn_h = n_i² holds with n_h much smaller than n_i."
       ],
       [
        "In a p-n junction the depletion region is about 0.1 µm thick and the barrier potential is 0.7 V. The average electric field across it is about:",
        [
         "7 × 10⁻⁸ V m⁻¹",
         "7 × 10⁴ V m⁻¹",
         "7 × 10⁶ V m⁻¹",
         "7 × 10⁹ V m⁻¹"
        ],
        2,
        "E = V/d = 0.7/(0.1 × 10⁻⁶) = 7 × 10⁶ V m⁻¹. The field is directed from the n-side to the p-side."
       ],
       [
        "A student says: “At equilibrium there is no current in a p-n junction because no charge carriers cross the junction.” What is wrong?",
        [
         "The current is zero because all carriers are destroyed",
         "Carriers do cross, but the diffusion current and the drift current are equal and opposite, so the net current is zero",
         "Only electrons cross, and holes never do",
         "Carriers cross only when a battery is connected"
        ],
        1,
        "Diffusion carries majority carriers across one way and drift carries minority carriers back. At equilibrium they cancel."
       ],
       [
        "A student says: “I will make a p-n junction by pressing a flat p-type slab firmly against an n-type slab.” What is wrong?",
        [
         "The surface roughness is much larger than the inter-atomic spacing, so there is no continuous atomic contact and the joint acts as a discontinuity for carriers",
         "A p-n junction can be made only from two p-type slabs",
         "Pressing makes both slabs the same type",
         "Nothing is wrong, since a firmly pressed slab gives a perfect junction"
        ],
        0,
        "Even a flat slab has roughness far above the 2 to 3 Å spacing between atoms. A junction has to be made within a single crystal by doping. (NCERT Example 14.3)"
       ],
       [
        "A silicon diode (cut-in voltage 0.7 V, assume a constant 0.7 V drop when conducting) is in series with a 100 Ω resistor and a 3.0 V battery, with the p-side joined to the positive terminal. The current is about:",
        [
         "30 mA",
         "3.7 mA",
         "23 mA",
         "0 mA"
        ],
        2,
        "The diode is forward biased, so I = (3.0 − 0.7)/100 = 23 mA. With the diode reversed, the current would be almost zero."
       ],
       [
        "A diode has a forward current of 20 mA at 0.8 V and a reverse current of 1 µA at −10 V. The ratio of its reverse resistance to its forward resistance (V/I) is about:",
        [
         "2.5 × 10³",
         "2.5 × 10⁴",
         "1.25 × 10⁵",
         "2.5 × 10⁵"
        ],
        3,
        "R_f = 0.8/(20 × 10⁻³) = 40 Ω and R_r = 10/(10⁻⁶) = 10⁷ Ω. The ratio is 10⁷/40 = 2.5 × 10⁵."
       ],
       [
        "Assertion (A): A p-n junction diode can be damaged even when it is forward biased.\nReason (R): If the forward current exceeds the rated value, the diode gets overheated.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The current must be limited by the external circuit to below the rated value. Beyond it, overheating destroys the junction, in either bias."
       ],
       [
        "A half-wave rectifier uses a silicon diode that drops 0.7 V when conducting. The peak ac input is 20 V and the load is 1 kΩ. The peak load current is:",
        [
         "20 mA",
         "19.3 mA",
         "20.7 mA",
         "14.1 mA"
        ],
        1,
        "The peak output voltage is 20 − 0.7 = 19.3 V. So I = 19.3 V/1 kΩ = 19.3 mA."
       ],
       [
        "The secondary of a transformer supplies 12 V (rms) to a half-wave rectifier. The reverse breakdown voltage of the diode must be at least about:",
        [
         "17 V",
         "12 V",
         "6 V",
         "34 V"
        ],
        0,
        "The diode must withstand the peak reverse voltage, which is 12 × √2 ≈ 17 V. A lower rating risks breakdown."
       ],
       [
        "A student says: “In a centre-tap full-wave rectifier, both diodes conduct at the same time, each giving half of the output.” What is wrong?",
        [
         "Each diode gives the full secondary voltage",
         "Both diodes conduct only in the negative half-cycle",
         "The two diodes conduct in alternate half-cycles, one at a time",
         "Only one diode is ever used"
        ],
        2,
        "When D₁ is forward biased, D₂ is reverse biased, and vice versa. Each diode rectifies one half of the cycle."
       ],
       [
        "A full-wave rectifier of 50 Hz input has a capacitor filter with C = 1000 µF and R_L = 100 Ω. The ratio of the time constant C·R_L to the time between successive output peaks is:",
        [
         "5",
         "10",
         "100",
         "0.1"
        ],
        1,
        "C·R_L = 1000 × 10⁻⁶ × 100 = 0.1 s. The output pulses are at 100 Hz, so the interval is 0.01 s, and the ratio is 10. A large ratio means little ripple."
       ],
       [
        "Assertion (A): For the same C and R_L, the capacitor filter gives a smoother output with a full-wave rectifier than with a half-wave rectifier.\nReason (R): In a full-wave rectifier the capacitor is recharged twice in every input cycle, so it has less time to discharge.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The pulses come at twice the frequency, so the capacitor voltage falls less between peaks. R explains A."
       ]
      ]
     ]
    }
   ]
  },
  {
   "id": "chemistry",
   "name": "Chemistry",
   "chapters": [
    {
     "n": 1,
     "t": "Solutions",
     "levels": [
      [
       [
        "Which of the following is an example of a solid solution in which the solute is a gas?",
        [
         "Camphor in nitrogen gas",
         "Solution of hydrogen in palladium",
         "Copper dissolved in gold",
         "Glucose dissolved in water"
        ],
        1,
        "Hydrogen (gas) dissolved in palladium (solid) is a gas-in-solid solution."
       ],
       [
        "Chloroform mixed with nitrogen gas is classified as",
        [
         "a gaseous solution with a liquid solute",
         "a liquid solution with a gaseous solute",
         "a solid solution with a liquid solute",
         "a gaseous solution with a solid solute"
        ],
        0,
        "The solvent (nitrogen) is a gas, so the solution is gaseous; chloroform is the liquid solute."
       ],
       [
        "In a binary solution, the solvent is",
        [
         "the component with the higher molar mass",
         "the component with the lower boiling point",
         "always the liquid component",
         "the component present in the largest quantity, which fixes the physical state of the solution"
        ],
        3,
        "The solvent is the component in the largest amount and decides the physical state of the solution."
       ],
       [
        "A solution described as “10% glucose in water by mass” contains",
        [
         "10 g glucose in 100 g water",
         "10 g glucose in 100 mL water",
         "10 g glucose in 90 g water",
         "10 mL glucose in 100 mL solution"
        ],
        2,
        "Mass % is mass of solute per 100 g of solution: 10 g glucose + 90 g water = 100 g."
       ],
       [
        "22 g of benzene is dissolved in 122 g of carbon tetrachloride. The mass percentage of benzene is",
        [
         "22.0%",
         "15.28%",
         "18.03%",
         "84.72%"
        ],
        1,
        "Total mass = 22 + 122 = 144 g, so mass % = 22/144 × 100 = 15.28 (NCERT Intext 1.1 style).",
        "Divide by the mass of the solution, not of the solvent."
       ],
       [
        "A 35% (v/v) aqueous solution of ethylene glycol is used as antifreeze. How much ethylene glycol is present in 200 mL of the solution?",
        [
         "70 mL",
         "35 mL",
         "130 mL",
         "7 mL"
        ],
        0,
        "35 mL per 100 mL of solution, so 200 mL contains 70 mL."
       ],
       [
        "Normal saline is 0.9% (w/V) NaCl. The mass of NaCl in 500 mL of it is",
        [
         "0.9 g",
         "9.0 g",
         "450 g",
         "4.5 g"
        ],
        3,
        "w/V % is grams of solute per 100 mL of solution: 0.9 × 5 = 4.5 g."
       ],
       [
        "A 2 kg sample of water contains 4 mg of a pollutant. Its concentration in ppm (by mass) is",
        [
         "0.002 ppm",
         "4 ppm",
         "2 ppm",
         "8 ppm"
        ],
        2,
        "ppm = 4 × 10⁻³ g / 2000 g × 10⁶ = 2."
       ],
       [
        "The mole fraction of ethanol in a solution of 46 g C₂H₅OH and 54 g water is",
        [
         "0.46",
         "0.25",
         "0.75",
         "0.5"
        ],
        1,
        "n(ethanol) = 1 mol, n(water) = 3 mol, so x = 1/(1 + 3) = 0.25."
       ],
       [
        "The molarity of a solution containing 4 g of NaOH in 500 mL of solution is",
        [
         "0.2 M",
         "0.1 M",
         "0.05 M",
         "2.0 M"
        ],
        0,
        "n = 4/40 = 0.1 mol, volume = 0.5 L, so M = 0.2 mol L⁻¹."
       ],
       [
        "The molality of a solution of 18 g of glucose (C₆H₁₂O₆) in 500 g of water is",
        [
         "0.1 m",
         "0.036 m",
         "0.4 m",
         "0.2 m"
        ],
        3,
        "n = 18/180 = 0.1 mol; mass of water = 0.5 kg; molality = 0.2 mol kg⁻¹."
       ],
       [
        "Which of the following concentration units changes with temperature?",
        [
         "Molality",
         "Mole fraction",
         "Molarity",
         "Mass percentage"
        ],
        2,
        "Molarity uses the volume of solution, which depends on temperature; the others use masses or moles."
       ],
       [
        "A solution that is in dynamic equilibrium with undissolved solute at a given temperature and pressure is called",
        [
         "an unsaturated solution",
         "a saturated solution",
         "a dilute solution",
         "an ideal solution"
        ],
        1,
        "In a saturated solution the rate of dissolution equals the rate of crystallisation; its concentration is the solubility."
       ],
       [
        "Which of the following dissolves readily in benzene?",
        [
         "Naphthalene",
         "Sodium chloride",
         "Sugar",
         "Both sodium chloride and sugar"
        ],
        0,
        "Like dissolves like: non-polar naphthalene dissolves in non-polar benzene."
       ],
       [
        "If the dissolution of a solid in a liquid is exothermic (ΔsolH < 0), heating a nearly saturated solution will",
        [
         "increase the solubility",
         "leave the solubility unchanged",
         "make the solute insoluble in any solvent",
         "decrease the solubility"
        ],
        3,
        "By Le Chatelier’s principle, heating shifts an exothermic equilibrium backwards, so less solute stays dissolved."
       ],
       [
        "Pressure has no significant effect on the solubility of a solid in a liquid because",
        [
         "dissolution of solids is always exothermic",
         "the solid is in equilibrium with its own vapour",
         "solids and liquids are highly incompressible",
         "solutes are always polar"
        ],
        2,
        "Solids and liquids are practically incompressible, so pressure does not shift the equilibrium."
       ],
       [
        "Which statement of Henry’s law is correct?",
        [
         "Solubility of a gas is inversely proportional to its partial pressure",
         "At constant temperature, the partial pressure of a gas over a solution is proportional to its mole fraction in the solution",
         "Solubility of a gas is independent of pressure",
         "Partial pressure of a gas is proportional to the square of its mole fraction in the solution"
        ],
        1,
        "Henry’s law: p = KH x at constant temperature."
       ],
       [
        "The Henry’s law constant of a gas in water is 50 kbar at 298 K. Its mole fraction in solution when its partial pressure is 0.25 bar is",
        [
         "5 × 10⁻⁶",
         "5 × 10⁻³",
         "1.25 × 10⁴",
         "2 × 10⁵"
        ],
        0,
        "x = p/KH = 0.25 bar / 50000 bar = 5 × 10⁻⁶.",
        "1 kbar = 1000 bar."
       ],
       [
        "At the same temperature and pressure, a gas with a higher KH value has",
        [
         "higher solubility",
         "the same solubility as other gases",
         "no dependence on solubility",
         "lower solubility"
        ],
        3,
        "Since p = KH x, a larger KH means a smaller mole fraction dissolved."
       ],
       [
        "Scuba divers can get “bends” on rising quickly to the surface because",
        [
         "oxygen becomes more soluble in blood at lower pressure",
         "carbon dioxide dissolves more at the surface",
         "nitrogen dissolved in blood at high pressure comes out as bubbles when the pressure falls",
         "helium accumulates in the blood"
        ],
        2,
        "Lower pressure reduces gas solubility, so dissolved nitrogen forms bubbles that block capillaries."
       ],
       [
        "The KH values of N₂ and O₂ in water increase with temperature. This shows that",
        [
         "gases are more soluble in warm water",
         "the solubility of gases in liquids decreases as temperature rises",
         "KH does not depend on the nature of the gas",
         "solubility of a gas is independent of temperature"
        ],
        1,
        "Higher KH at the same pressure means lower solubility; dissolution of a gas is exothermic."
       ],
       [
        "The pressure exerted by the vapour in equilibrium with its liquid at a given temperature is called its",
        [
         "vapour pressure",
         "osmotic pressure",
         "Henry’s pressure",
         "critical pressure"
        ],
        0,
        "This is the definition of vapour pressure."
       ],
       [
        "Raoult’s law for a solution of two volatile liquids states that",
        [
         "the total vapour pressure does not depend on composition",
         "the partial vapour pressure of a component is inversely proportional to its mole fraction",
         "the vapour pressure of the solution is the average of the pure vapour pressures",
         "the partial vapour pressure of each component is proportional to its mole fraction in the solution"
        ],
        3,
        "p₁ = x₁p₁⁰ and p₂ = x₂p₂⁰, and ptotal = p₁ + p₂."
       ],
       [
        "Pure liquids A and B have vapour pressures of 200 and 100 mm Hg. For an ideal solution with xA = 0.4, the total vapour pressure is",
        [
         "150 mm Hg",
         "80 mm Hg",
         "140 mm Hg",
         "300 mm Hg"
        ],
        2,
        "ptotal = 0.4 × 200 + 0.6 × 100 = 80 + 60 = 140 mm Hg."
       ],
       [
        "At equilibrium, the vapour above an ideal liquid mixture is richer in",
        [
         "the less volatile component",
         "the more volatile component",
         "the component with the higher molar mass",
         "the component present in smaller amount in the liquid"
        ],
        1,
        "The more volatile component has a higher partial pressure, so its mole fraction in the vapour is higher."
       ],
       [
        "Raoult’s law becomes a special case of Henry’s law when KH becomes equal to",
        [
         "the vapour pressure of the pure component, p⁰",
         "1",
         "the mole fraction of the component",
         "the total pressure"
        ],
        0,
        "Both laws state p ∝ x; for Raoult’s law the constant is p⁰ instead of KH."
       ],
       [
        "The vapour pressure of a solution of a non-volatile solute is lower than that of the pure solvent because",
        [
         "the solute makes the solvent less polar",
         "the vapour contains mostly solute molecules",
         "the solute increases the temperature of the solvent",
         "solute particles occupy part of the surface, so fewer solvent molecules escape"
        ],
        3,
        "Solute molecules cover a fraction of the surface, so the escape rate of solvent molecules falls."
       ],
       [
        "For an ideal solution formed from two liquids,",
        [
         "ΔmixH > 0 and ΔmixV = 0",
         "ΔmixH = 0 and ΔmixV > 0",
         "ΔmixH = 0 and ΔmixV = 0",
         "ΔmixH < 0 and ΔmixV < 0"
        ],
        2,
        "An ideal solution has no heat change and no volume change on mixing."
       ],
       [
        "Which pair of liquids forms a nearly ideal solution?",
        [
         "Ethanol and acetone",
         "Benzene and toluene",
         "Phenol and aniline",
         "Chloroform and acetone"
        ],
        1,
        "Benzene and toluene have similar A–A, B–B and A–B interactions."
       ],
       [
        "In a solution showing positive deviation from Raoult’s law, the A–B interactions are",
        [
         "weaker than A–A and B–B",
         "stronger than A–A and B–B",
         "equal to A–A and B–B",
         "absent"
        ],
        0,
        "Weaker A–B attraction makes molecules escape more easily, raising the vapour pressure."
       ],
       [
        "Which mixture shows negative deviation from Raoult’s law?",
        [
         "Ethanol and acetone",
         "Carbon disulphide and acetone",
         "n-Hexane and n-heptane",
         "Chloroform and acetone"
        ],
        3,
        "Chloroform forms a hydrogen bond with acetone, lowering the escaping tendency."
       ],
       [
        "Azeotropes are binary liquid mixtures that",
        [
         "can be separated by simple fractional distillation",
         "obey Raoult’s law at all compositions",
         "boil at a constant temperature with the same composition in liquid and vapour phases",
         "are always ideal solutions"
        ],
        2,
        "At the azeotrope composition liquid and vapour are identical, so distillation cannot separate them further."
       ],
       [
        "Nitric acid and water form a maximum boiling azeotrope (about 68% HNO₃ by mass, b.p. 393.5 K) because they show",
        [
         "large positive deviation from Raoult’s law",
         "large negative deviation from Raoult’s law",
         "ideal behaviour",
         "no intermolecular interactions"
        ],
        1,
        "Large negative deviation gives a maximum boiling azeotrope; large positive deviation gives a minimum boiling one."
       ],
       [
        "Colligative properties depend on",
        [
         "the number of solute particles and not on their nature",
         "the chemical nature of the solute only",
         "the molar mass of the solvent only",
         "the colour of the solution"
        ],
        0,
        "Colligative properties depend only on the relative number of solute particles."
       ],
       [
        "The relative lowering of vapour pressure of a solvent by a non-volatile solute is equal to",
        [
         "the mole fraction of the solvent",
         "the molality of the solute",
         "the molarity of the solute",
         "the mole fraction of the solute"
        ],
        3,
        "(p⁰ − p)/p⁰ = x₂, the mole fraction of the solute."
       ],
       [
        "The vapour pressure of a pure solvent is 80 mm Hg. A non-volatile solute of mole fraction 0.1 is dissolved in it. The vapour pressure of the solution is",
        [
         "8 mm Hg",
         "80 mm Hg",
         "72 mm Hg",
         "88 mm Hg"
        ],
        2,
        "p = x₁p⁰ = 0.9 × 80 = 72 mm Hg."
       ],
       [
        "The elevation of boiling point of a dilute solution is directly proportional to",
        [
         "the molarity of the solute",
         "the molality of the solute",
         "the mass of the solvent",
         "the vapour pressure of the pure solvent"
        ],
        1,
        "ΔTb = Kb m, and Kb has units K kg mol⁻¹."
       ],
       [
        "6 g of urea (molar mass 60 g mol⁻¹) is dissolved in 500 g of water (Kb = 0.52 K kg mol⁻¹). The elevation of boiling point is",
        [
         "0.104 K",
         "0.052 K",
         "0.208 K",
         "0.52 K"
        ],
        0,
        "m = 0.1/0.5 = 0.2 mol kg⁻¹; ΔTb = 0.52 × 0.2 = 0.104 K."
       ],
       [
        "The freezing point of a solution of a non-volatile solute compared with that of the pure solvent is",
        [
         "higher",
         "the same",
         "higher only for aqueous solutions",
         "lower"
        ],
        3,
        "Lower vapour pressure makes the solution meet the vapour pressure of the solid solvent at a lower temperature."
       ],
       [
        "9 g of glucose (180 g mol⁻¹) is dissolved in 500 g of water (Kf = 1.86 K kg mol⁻¹). The depression of freezing point is",
        [
         "0.093 K",
         "1.86 K",
         "0.186 K",
         "0.372 K"
        ],
        2,
        "m = 0.05/0.5 = 0.1 mol kg⁻¹; ΔTf = 1.86 × 0.1 = 0.186 K."
       ],
       [
        "In osmosis through a semipermeable membrane, the solvent flows from",
        [
         "the concentrated solution to the dilute solution",
         "the dilute solution (or pure solvent) to the concentrated solution",
         "both sides equally",
         "the side at lower pressure to the side at higher pressure only"
        ],
        1,
        "Solvent molecules move from lower to higher solute concentration."
       ],
       [
        "The osmotic pressure of a 0.1 M solution of a non-electrolyte at 300 K is (R = 0.0821 L atm K⁻¹ mol⁻¹)",
        [
         "2.46 atm",
         "24.6 atm",
         "0.246 atm",
         "0.82 atm"
        ],
        0,
        "π = CRT = 0.1 × 0.0821 × 300 = 2.46 atm."
       ],
       [
        "Red blood cells are placed in a solution containing less than 0.9% (w/V) NaCl. The cells will",
        [
         "shrink as water flows out",
         "remain unchanged",
         "dissolve completely at once",
         "swell as water flows in"
        ],
        3,
        "Such a solution is hypotonic, so water enters the cells by osmosis."
       ],
       [
        "Osmotic pressure is preferred for determining molar masses of proteins and polymers because",
        [
         "it works only at very high temperatures",
         "it needs a concentrated solution",
         "its value is large even for very dilute solutions and it is measured near room temperature",
         "it uses molality instead of molarity"
        ],
        2,
        "The pressure is measurable for very dilute solutions at room temperature, which suits unstable, poorly soluble macromolecules."
       ],
       [
        "Reverse osmosis occurs when",
        [
         "a pressure less than the osmotic pressure is applied to the solution",
         "a pressure larger than the osmotic pressure is applied to the solution side",
         "no pressure is applied",
         "the solution is cooled below its freezing point"
        ],
        1,
        "Excess pressure pushes pure solvent out of the solution; this is used to desalinate sea water."
       ],
       [
        "The van’t Hoff factor i is defined as",
        [
         "observed colligative property / calculated colligative property",
         "calculated colligative property / observed colligative property",
         "normal molar mass × abnormal molar mass",
         "moles of solute / moles of solvent"
        ],
        0,
        "i = observed/calculated colligative property = normal/abnormal molar mass."
       ],
       [
        "Ethanoic acid dimerises in benzene. The van’t Hoff factor for it is close to",
        [
         "2",
         "1",
         "3",
         "0.5"
        ],
        3,
        "Two molecules form one particle, so the number of particles is halved, i ≈ 0.5."
       ],
       [
        "When a solute dissociates in solution, the molar mass determined from a colligative property is",
        [
         "higher than the true value",
         "equal to the true value",
         "lower than the true value",
         "zero"
        ],
        2,
        "More particles raise the colligative effect, so the apparent molar mass is lower."
       ]
      ],
      [
       [
        "Which option correctly gives the solute–solvent states in (i) camphor in nitrogen, (ii) hydrogen in palladium, (iii) ethanol in water?",
        [
         "(i) gas in gas, (ii) gas in solid, (iii) liquid in liquid",
         "(i) solid in gas, (ii) gas in solid, (iii) liquid in liquid",
         "(i) solid in gas, (ii) liquid in solid, (iii) liquid in liquid",
         "(i) solid in gas, (ii) gas in solid, (iii) gas in liquid"
        ],
        1,
        "Camphor is a solid solute in a gas, hydrogen a gas in a solid, and ethanol–water is liquid in liquid."
       ],
       [
        "A 20% (mass/mass) aqueous solution of KI (molar mass 166 g mol⁻¹) has density 1.202 g mL⁻¹. Its molality is",
        [
         "1.51 m",
         "1.20 m",
         "1.45 m",
         "0.12 m"
        ],
        0,
        "In 100 g solution: 20/166 = 0.1205 mol KI in 0.080 kg water, so m = 1.506 (NCERT Intext 1.5).",
        "Solvent mass = 100 − 20 = 80 g."
       ],
       [
        "200 mL of 0.5 M NaCl is mixed with 300 mL of 1.0 M NaCl (volumes additive). The molarity of the mixture is",
        [
         "0.75 M",
         "0.4 M",
         "1.5 M",
         "0.8 M"
        ],
        3,
        "Moles = 0.100 + 0.300 = 0.400 mol in 0.5 L, so 0.8 M."
       ],
       [
        "Concentrated nitric acid is 68% HNO₃ by mass and has density 1.504 g mL⁻¹. Its molarity is about (H 1, N 14, O 16)",
        [
         "10.8 M",
         "1.08 M",
         "16.2 M",
         "24.3 M"
        ],
        2,
        "100 g contains 68/63 = 1.079 mol and has volume 100/1.504 = 66.5 mL, so M = 1.079/0.0665 = 16.2.",
        "Use 100 g of solution as the basis."
       ],
       [
        "Drinking water contains 1.5 ppm fluoride by mass. The mass of fluoride in 2 L of this water (density 1 g mL⁻¹) is",
        [
         "1.5 mg",
         "3 mg",
         "0.75 mg",
         "3 g"
        ],
        1,
        "2 L = 2000 g; 1.5 × 10⁻⁶ × 2000 g = 3 × 10⁻³ g = 3 mg."
       ],
       [
        "A student dissolves 4 g of NaOH (40 g mol⁻¹) in water to make 500 mL of solution and reports: “Molality = 0.1 mol ÷ 0.5 kg = 0.2 m.” What is wrong with this?",
        [
         "0.5 is the volume of the solution in litres, not the mass of solvent in kg, so 0.2 is actually the molarity",
         "Nothing; 0.2 m is correct",
         "The moles of NaOH should be 4 × 40 = 160",
         "Molality must use the mass of solute in the denominator"
        ],
        0,
        "Molality needs kg of solvent; dividing by litres of solution gives molarity."
       ],
       [
        "A student calculates the mole fraction of glucose in a solution of 18 g glucose (180 g mol⁻¹) in 90 g water as 18/(18 + 90) = 0.167. What is the error?",
        [
         "There is no error",
         "The correct value is 18/90 = 0.2",
         "Mole fraction of glucose must be larger than that of water",
         "Masses were used instead of moles; the correct value is 0.1/(0.1 + 5) ≈ 0.0196"
        ],
        3,
        "n(glucose) = 0.1 mol and n(water) = 5 mol, so x = 0.1/5.1 = 0.0196."
       ],
       [
        "A saturated solution is in contact with excess undissolved solid at constant temperature. Which statement is correct?",
        [
         "No solute particles enter or leave the solution",
         "Adding more solid raises the concentration of the solution",
         "The rate of dissolution equals the rate of crystallisation, and the concentration equals the solubility",
         "Crystallisation has stopped completely"
        ],
        2,
        "A saturated solution is a dynamic equilibrium, so its concentration stays fixed at the solubility."
       ],
       [
        "Dissolution of a solid X in water is endothermic. A saturated solution of X at 350 K is cooled to 300 K and the external pressure is also raised from 1 bar to 100 bar. Which outcome is expected?",
        [
         "More X dissolves; pressure increases the solubility",
         "Crystals separate; pressure has negligible effect on the solubility",
         "Crystals separate; pressure increases the solubility",
         "No change at all"
        ],
        1,
        "For endothermic dissolution solubility falls on cooling; solids and liquids are incompressible, so pressure has no significant effect."
       ],
       [
        "Henry’s law constant for CO₂ in water is 1.67 × 10⁸ Pa at 298 K. The mass of CO₂ dissolved in 500 mL of soda water (about 27.8 mol of water) packed under 2.5 atm CO₂ at 298 K is about (1 atm = 1.013 × 10⁵ Pa)",
        [
         "1.85 g",
         "0.0421 g",
         "3.7 g",
         "18.5 g"
        ],
        0,
        "x = 2.53 × 10⁵/1.67 × 10⁸ = 1.52 × 10⁻³; n = x × 27.8 = 0.0421 mol, which is 1.85 g (NCERT Intext 1.7 style).",
        "Neglect n(CO₂) in the denominator of x."
       ],
       [
        "Assertion (A): Aquatic species are more comfortable in cold water than in warm water.\nReason (R): The solubility of gases in liquids decreases with rise in temperature.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Cold water holds more dissolved oxygen because gas solubility falls as temperature rises."
       ],
       [
        "Assertion (A): Soft drink bottles are sealed under high pressure of CO₂.\nReason (R): The solubility of a gas in a liquid increases with increase in pressure.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Henry’s law: gas solubility rises with pressure, so a high CO₂ pressure keeps more CO₂ dissolved in the drink. R explains A."
       ],
       [
        "A diver who breathes compressed air at depth for a long time rises rapidly and feels severe joint pain. Later the tank is filled with 11.7% helium, 56.2% nitrogen and 32.1% oxygen. Which explanation is correct?",
        [
         "Dissolved oxygen becomes insoluble at the surface; helium dissolves more than nitrogen",
         "At depth more nitrogen dissolves in blood; on rapid ascent it forms bubbles that block capillaries; helium is much less soluble, so the mixture lowers this risk",
         "Nitrogen becomes more soluble on ascent; helium removes it chemically",
         "Pain arises from lack of carbon dioxide at depth; helium supplies it"
        ],
        1,
        "Henry’s law: higher pressure dissolves more N₂, which bubbles out on decompression; He has a very high KH, so it dissolves little."
       ],
       [
        "Which statement about the vapour pressure of binary liquid solutions is correct?",
        [
         "For a non-volatile solid solute the vapour pressure comes only from the solvent, whereas for two volatile liquids ptotal is the sum of their partial pressures",
         "In both cases the vapour pressure comes only from the solute",
         "For two volatile liquids ptotal is the product of the partial pressures",
         "A non-volatile solute raises the vapour pressure of the solvent"
        ],
        0,
        "A non-volatile solute does not enter the vapour, and Dalton’s law gives ptotal = p₁ + p₂ for two volatile components."
       ],
       [
        "Liquids A and B (pure vapour pressures 450 and 700 mm Hg at 350 K) form an ideal solution with total vapour pressure 600 mm Hg. The mole fraction of A in the vapour phase is",
        [
         "0.40",
         "0.60",
         "0.70",
         "0.30"
        ],
        3,
        "450 + 250xB = 600 gives xB = 0.6, xA = 0.4; yA = 0.4 × 450/600 = 0.30 (NCERT Intext 1.8 style)."
       ],
       [
        "An equimolar liquid mixture of A and B is in equilibrium with vapour in which the mole fraction of A is 0.25. If the solution is ideal, p⁰A : p⁰B is",
        [
         "3 : 1",
         "1 : 4",
         "1 : 3",
         "1 : 1"
        ],
        2,
        "yA/yB = xAp⁰A/(xBp⁰B) = 0.25/0.75, and xA = xB, so p⁰A/p⁰B = 1/3."
       ],
       [
        "Which statement about the p versus x plots of Henry’s law and Raoult’s law is correct?",
        [
         "KH is always equal to p⁰ for every gas",
         "A dissolved gas follows p = KH x; the line coincides with Raoult’s law line only if KH equals p⁰ of that substance",
         "Henry’s law is a special case of Raoult’s law",
         "KH is the same for all gases at one temperature"
        ],
        1,
        "Both are straight lines through the origin; they differ only in slope (KH versus p⁰)."
       ],
       [
        "Assertion (A): Raoult’s law can be regarded as a special case of Henry’s law.\nReason (R): In Raoult’s law the proportionality constant between partial pressure and mole fraction is p⁰, which replaces KH in Henry’s law.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Both say p ∝ x; Raoult’s law is Henry’s law with KH = p⁰."
       ],
       [
        "0.1 mol of non-volatile solute A and 0.2 mol of non-volatile solute B are dissolved in 4.7 mol of a solvent whose pure vapour pressure is 100 mm Hg. The vapour pressure of the solution is",
        [
         "99 mm Hg",
         "97 mm Hg",
         "6 mm Hg",
         "94 mm Hg"
        ],
        3,
        "Lowering depends on the sum of solute mole fractions: 0.3/5.0 = 0.06, so p = 100 × 0.94 = 94 mm Hg."
       ],
       [
        "Mixing 50 mL of liquid A with 50 mL of liquid B gives exactly 100 mL of solution with no heat change, and Raoult’s law holds at all compositions. This indicates that",
        [
         "A–B attractions are much stronger than A–A and B–B",
         "A–B attractions are much weaker than A–A and B–B",
         "A–A, B–B and A–B attractions are nearly equal",
         "there are no intermolecular forces in the liquids"
        ],
        2,
        "ΔmixH = 0, ΔmixV = 0 and Raoult’s law behaviour arise when all interactions are similar."
       ],
       [
        "Assertion (A): n-Hexane and n-heptane form a nearly ideal solution.\nReason (R): For an ideal solution the enthalpy of mixing is positive and the volume of mixing is zero.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true; R is false because ΔmixH = 0 for an ideal solution."
       ],
       [
        "A student says: “Chloroform and acetone form hydrogen bonds with each other, so the A–B attractions are stronger, the vapour pressure rises and the solution shows positive deviation.” What is wrong?",
        [
         "Stronger A–B attractions lower the escaping tendency and the vapour pressure, giving negative deviation",
         "Nothing is wrong",
         "Hydrogen bonding cannot occur between these liquids",
         "Hydrogen bonding between the two liquids would make the solution ideal"
        ],
        0,
        "Stronger A–B interactions lower the vapour pressure: negative deviation."
       ],
       [
        "Which row correctly matches the mixture with its deviation and azeotrope?",
        [
         "Ethanol–water: negative deviation, maximum boiling azeotrope; nitric acid–water: positive deviation, minimum boiling azeotrope",
         "Ethanol–water: positive deviation, maximum boiling azeotrope; nitric acid–water: negative deviation, minimum boiling azeotrope",
         "Both show positive deviation and minimum boiling azeotropes",
         "Ethanol–water: positive deviation, minimum boiling azeotrope; nitric acid–water: negative deviation, maximum boiling azeotrope"
        ],
        3,
        "Large positive deviation gives a minimum boiling azeotrope (ethanol–water, about 95% ethanol by volume); large negative deviation gives a maximum boiling one."
       ],
       [
        "Two liquids X and Y give a vapour pressure higher than predicted by Raoult’s law at every composition. At one composition the mixture boils at constant temperature, below the boiling points of both X and Y, with identical liquid and vapour compositions. Which conclusion is correct?",
        [
         "Negative deviation, X–Y attractions stronger; maximum boiling azeotrope",
         "Ideal solution; the components separate easily by distillation",
         "Positive deviation, X–Y attractions weaker than X–X and Y–Y; minimum boiling azeotrope, so complete separation by fractional distillation is impossible",
         "Positive deviation, X–Y attractions stronger; maximum boiling azeotrope"
        ],
        2,
        "Higher vapour pressure means weaker X–Y interactions and a minimum boiling azeotrope."
       ],
       [
        "Which pair of 0.1 m aqueous solutions should show nearly the same boiling point elevation?",
        [
         "Glucose and NaCl",
         "Glucose and urea",
         "Urea and K₂SO₄",
         "NaCl and MgSO₄ at very high concentration"
        ],
        1,
        "Both are non-electrolytes, so they give the same number of particles per kg of water."
       ],
       [
        "50 g of urea (60 g mol⁻¹) is dissolved in 850 g of water. The vapour pressure of pure water at 298 K is 23.8 mm Hg. The vapour pressure of the solution is about",
        [
         "23.39 mm Hg",
         "23.80 mm Hg",
         "22.48 mm Hg",
         "0.41 mm Hg"
        ],
        0,
        "n(urea) = 0.833 mol; n(water) = 47.2 mol; x₂ = 0.0173; p = 23.8 × (1 − 0.0173) = 23.39 mm Hg (NCERT Intext 1.9 style).",
        "Use mole fractions, not mass fractions."
       ],
       [
        "At a certain temperature the vapour pressure of a solvent (molar mass 78 g mol⁻¹) is 0.800 bar. When 1.0 g of a non-volatile non-electrolyte is added to 39 g of it, the vapour pressure becomes 0.792 bar. Using the dilute-solution form of Raoult’s law, the molar mass of the solute is",
        [
         "100 g mol⁻¹",
         "400 g mol⁻¹",
         "2.56 g mol⁻¹",
         "200 g mol⁻¹"
        ],
        3,
        "(0.800 − 0.792)/0.800 = 0.01 = (1 × 78)/(M₂ × 39), so M₂ = 200 g mol⁻¹.",
        "(p⁰ − p)/p⁰ = (w₂M₁)/(M₂w₁)."
       ],
       [
        "A student claims: “1 mol of urea and 1 mol of NaCl, each dissolved in 1 kg of water, lower the vapour pressure equally because both are 1 mol.” What is the error?",
        [
         "There is no error",
         "Urea lowers the vapour pressure more because it is a molecule",
         "NaCl dissociates into about two particles per formula unit, so it lowers the vapour pressure roughly twice as much",
         "NaCl does not affect the vapour pressure"
        ],
        2,
        "Colligative effects depend on the number of particles, not moles of formula units."
       ],
       [
        "The boiling point of water at 750 mm Hg is 99.63 °C. The mass of sucrose (342 g mol⁻¹) to be added to 500 g of water so that it boils at 100 °C is (Kb = 0.52 K kg mol⁻¹)",
        [
         "243.4 g",
         "121.7 g",
         "60.8 g",
         "0.356 g"
        ],
        1,
        "ΔTb = 0.37 K; m = 0.37/0.52 = 0.712; n = 0.356 mol; mass = 0.356 × 342 = 121.7 g (NCERT Intext 1.10 style).",
        "Remember to multiply m by 0.5 kg."
       ],
       [
        "A student says: “A non-volatile solute lowers the vapour pressure, so the solution reaches atmospheric pressure at a lower temperature and boils below the pure solvent.” What is wrong?",
        [
         "A lowered vapour pressure means a higher temperature is needed to reach atmospheric pressure, so the boiling point is elevated",
         "Nothing; the boiling point is lowered",
         "Solutes have no effect on boiling points",
         "Boiling occurs when vapour pressure is zero"
        ],
        0,
        "A liquid boils when its vapour pressure equals the atmospheric pressure; the solution needs more heating."
       ],
       [
        "How much ethylene glycol (62 g mol⁻¹) must be added to 2 kg of water to lower its freezing point by 3.72 K? (Kf = 1.86 K kg mol⁻¹)",
        [
         "124 g",
         "62 g",
         "496 g",
         "248 g"
        ],
        3,
        "m = 3.72/1.86 = 2 mol kg⁻¹; n = 4 mol; mass = 4 × 62 = 248 g."
       ],
       [
        "The mass of ascorbic acid (C₆H₈O₆, 176 g mol⁻¹) to be dissolved in 75 g of acetic acid to lower its freezing point by 1.5 K (Kf = 3.9 K kg mol⁻¹) is about",
        [
         "67.7 g",
         "2.54 g",
         "5.08 g",
         "0.0288 g"
        ],
        2,
        "m = 1.5/3.9 = 0.385; n = 0.385 × 0.075 = 0.0288 mol; mass = 5.08 g (NCERT Intext 1.11).",
        "Convert 75 g to kg first."
       ],
       [
        "Using Kf = R M₁ Tf²/(1000 ΔfusH), the molal depression constant of water (M₁ = 18 g mol⁻¹, Tf = 273.15 K, ΔfusH = 6.01 kJ mol⁻¹, R = 8.314 J K⁻¹ mol⁻¹) is about",
        [
         "0.52 K kg mol⁻¹",
         "1.86 K kg mol⁻¹",
         "3.72 K kg mol⁻¹",
         "18.6 K kg mol⁻¹"
        ],
        1,
        "Kf = 8.314 × 18 × (273.15)²/(1000 × 6010) = 1.86; convert ΔfusH to J mol⁻¹."
       ],
       [
        "The osmotic pressure in pascals of a solution of 1.0 g of a polymer (molar mass 185000 g mol⁻¹) in 450 mL of water at 37 °C is about (R = 8.314 J K⁻¹ mol⁻¹)",
        [
         "31 Pa",
         "3.1 × 10⁴ Pa",
         "0.31 Pa",
         "310 Pa"
        ],
        0,
        "C = (1/185000)/0.450 = 1.2 × 10⁻⁵ mol L⁻¹ = 1.2 × 10⁻² mol m⁻³; π = CRT = 1.2 × 10⁻² × 8.314 × 310 ≈ 31 Pa (NCERT Intext 1.12).",
        "Express concentration in mol m⁻³ for SI units."
       ],
       [
        "2.0 g of a protein is dissolved in water to make 100 mL of solution. The osmotic pressure at 300 K is 0.0246 atm. The molar mass of the protein is about (R = 0.0821 L atm K⁻¹ mol⁻¹)",
        [
         "2.0 × 10³ g mol⁻¹",
         "2.0 × 10⁵ g mol⁻¹",
         "2.0 × 10² g mol⁻¹",
         "2.0 × 10⁴ g mol⁻¹"
        ],
        3,
        "M = wRT/(πV) = 2.0 × 0.0821 × 300/(0.0246 × 0.100) ≈ 2.0 × 10⁴ g mol⁻¹."
       ],
       [
        "A glucose solution isotonic with 0.9% (w/V) NaCl (58.5 g mol⁻¹, assume complete dissociation) has a concentration of about (glucose 180 g mol⁻¹)",
        [
         "2.77 g per 100 mL",
         "0.9 g per 100 mL",
         "5.54 g per 100 mL",
         "11.1 g per 100 mL"
        ],
        2,
        "NaCl gives 2 × 0.9/58.5 = 0.0308 mol of particles per 100 mL; glucose = 0.0308 × 180 = 5.54 g."
       ],
       [
        "Assertion (A): In osmosis, the solvent flows from the more concentrated solution to the more dilute solution through a semipermeable membrane.\nReason (R): Osmotic pressure is a colligative property.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: solvent flows from dilute to concentrated; R is true."
       ],
       [
        "A student says: “Red blood cells in 0.5% (w/V) NaCl solution will shrink because water flows out.” What is wrong?",
        [
         "0.5% is less than 0.9%, so the solution is hypotonic and water flows into the cells, making them swell",
         "Nothing is wrong",
         "Cells shrink only in distilled water",
         "Water cannot cross the cell membrane"
        ],
        0,
        "A solution below 0.9% NaCl is hypotonic; water enters the cells."
       ],
       [
        "Assertion (A): In reverse osmosis the pressure applied on the solution side is less than the osmotic pressure.\nReason (R): In reverse osmosis pure solvent flows out of the solution through the semipermeable membrane.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false because the applied pressure must be larger than the osmotic pressure; R is true."
       ],
       [
        "Sea water has an osmotic pressure of about 25 bar (assumed). A plant applies 15 bar to the sea water side of a membrane that passes only water, then raises the pressure to 40 bar. Which statement is correct?",
        [
         "At 15 bar pure water is already obtained; at 40 bar flow stops",
         "No flow occurs at either pressure",
         "At 15 bar water flows from pure water into sea water; at 40 bar pure water is squeezed out of the sea water",
         "Water flows out of the sea water at 15 bar and into it at 40 bar"
        ],
        2,
        "Below the osmotic pressure osmosis continues; above it the flow reverses (reverse osmosis)."
       ],
       [
        "1.536 K is the depression in freezing point when 3.0 g of ethanoic acid (60 g mol⁻¹) is dissolved in 100 g of benzene (Kf = 5.12 K kg mol⁻¹). If the acid dimerises, its percentage association is",
        [
         "40%",
         "80%",
         "60%",
         "20%"
        ],
        1,
        "Observed M = 5.12 × 3 × 1000/(1.536 × 100) = 100; i = 60/100 = 0.6; i = 1 − x/2 gives x = 0.8.",
        "For dimerisation i = 1 − x/2."
       ],
       [
        "A 0.1 mol kg⁻¹ solution of a weak monobasic acid HA in water freezes with ΔTf = 0.2232 K (Kf = 1.86 K kg mol⁻¹). Taking molarity ≈ molality, Ka of the acid is about",
        [
         "5.0 × 10⁻³",
         "4.0 × 10⁻³",
         "2.0 × 10⁻²",
         "1.0 × 10⁻¹"
        ],
        0,
        "i = 0.2232/0.186 = 1.2, so α = 0.2; Ka = Cα²/(1 − α) = 0.1 × 0.04/0.8 = 5.0 × 10⁻³."
       ],
       [
        "0.1 mol of an ionic compound dissolved in 1 kg of water freezes at −0.558 °C (Kf = 1.86 K kg mol⁻¹; assume complete dissociation and ideal behaviour). The compound is",
        [
         "NaCl",
         "AlCl₃",
         "Glucose",
         "CaCl₂"
        ],
        3,
        "ΔTf = 0.558 K = i × 0.186 gives i = 3, which fits CaCl₂ (Ca²⁺ + 2Cl⁻)."
       ],
       [
        "Assertion (A): The van’t Hoff factor of ethanoic acid dissolved in benzene is close to 0.5.\nReason (R): Ethanoic acid is a weak acid that ionises only slightly in water.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "A is true because of dimerisation in benzene; R is true but does not explain A."
       ],
       [
        "A student says: “NaCl dissociates in water, so the molar mass found from the freezing point depression of a dilute solution will be higher than 58.5 g mol⁻¹.” What is wrong?",
        [
         "Nothing is wrong",
         "Dissociation gives more particles and a larger ΔTf, so the experimental molar mass is lower than 58.5 g mol⁻¹",
         "Dissociation does not change ΔTf",
         "The molar mass becomes exactly twice 58.5"
        ],
        1,
        "Abnormal molar mass = normal/i, and i is about 2 for NaCl."
       ],
       [
        "Assuming complete dissociation, which 0.1 m aqueous solution has the lowest freezing point?",
        [
         "Al₂(SO₄)₃",
         "Glucose",
         "NaCl",
         "K₂SO₄"
        ],
        0,
        "Al₂(SO₄)₃ gives 5 ions (i = 5), the most particles, so the largest ΔTf."
       ]
      ]
     ]
    },
    {
     "n": 2,
     "t": "Electrochemistry",
     "levels": [
      [
       [
        "In a Daniell cell (cell potential 1.1 V), an external opposing potential greater than 1.1 V is applied. What happens?",
        [
         "The reaction continues in the same direction, only more slowly",
         "The reaction reverses: zinc is deposited and copper dissolves, so the cell works as an electrolytic cell",
         "No reaction occurs because the external potential exceeds the cell potential",
         "Zinc dissolves and copper is deposited, as before, but with a larger current"
        ],
        1,
        "Beyond 1.1 V the external source drives the non-spontaneous reverse reaction, Cu → Cu²⁺ and Zn²⁺ → Zn."
       ],
       [
        "When the opposing external potential applied to a Daniell cell is exactly 1.1 V, which statement is true?",
        [
         "Zinc dissolves at the maximum possible rate",
         "Copper dissolves and zinc is deposited",
         "Current flows from the copper to the zinc electrode through the wire",
         "No current flows and no net chemical reaction takes place"
        ],
        3,
        "At Eext = 1.1 V the two potentials balance, so the cell is at a standstill."
       ],
       [
        "Which statement about a galvanic cell is correct?",
        [
         "It converts the Gibbs energy of a spontaneous redox reaction into electrical work; oxidation occurs at the anode, which is negative",
         "It uses electrical energy to drive a non-spontaneous reaction; oxidation occurs at the cathode",
         "It converts the Gibbs energy of a spontaneous redox reaction into electrical work; oxidation occurs at the cathode, which is positive",
         "It uses electrical energy to drive a non-spontaneous reaction; reduction occurs at the anode"
        ],
        0,
        "In a galvanic cell the anode (negative) is the site of oxidation and the cathode (positive) the site of reduction."
       ],
       [
        "Using E°(Ag⁺/Ag) = 0.80 V and E°(Cu²⁺/Cu) = 0.34 V, the E°cell of Cu(s)|Cu²⁺(aq)||Ag⁺(aq)|Ag(s) is",
        [
         "1.14 V",
         "−0.46 V",
         "0.46 V",
         "0.23 V"
        ],
        2,
        "E°cell = E°(right) − E°(left) = 0.80 − 0.34 = 0.46 V."
       ],
       [
        "For the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), which is the correct cell representation under the accepted convention?",
        [
         "Cu(s)|Cu²⁺(aq)||Zn²⁺(aq)|Zn(s)",
         "Zn²⁺(aq)|Zn(s)||Cu(s)|Cu²⁺(aq)",
         "Zn(s)|Zn²⁺(aq)||Cu²⁺(aq)|Cu(s)",
         "Zn(s)|Cu²⁺(aq)||Zn²⁺(aq)|Cu(s)"
        ],
        2,
        "The anode (oxidation) is written on the left and the cathode (reduction) on the right, with || for the salt bridge."
       ],
       [
        "The standard hydrogen electrode (SHE) is represented as Pt(s)|H₂(g)|H⁺(aq). It consists of",
        [
         "platinised platinum with H₂ gas at 1 bar bubbled through 1 M H⁺ solution; its potential is taken as zero",
         "a zinc rod dipping in 1 M H⁺ with H₂ at 1 atm; its potential is taken as 0.76 V",
         "platinised platinum with H₂ gas at 1 bar bubbled through 1 M H⁺; its potential is measured as 1.00 V",
         "a copper rod in 1 M H⁺ with H₂ at 10 bar; its potential is taken as zero"
        ],
        0,
        "SHE is assigned zero potential at all temperatures: H₂ at 1 bar, [H⁺] = 1 M, on platinum black."
       ],
       [
        "The standard electrode potential of Zn²⁺/Zn is −0.76 V. This indicates that",
        [
         "Zn²⁺ ions are reduced more easily than H⁺ ions",
         "hydrogen gas can reduce Zn²⁺ to zinc",
         "zinc does not react with acids",
         "H⁺ ions can oxidise zinc, that is, zinc can reduce H⁺ ions under standard conditions"
        ],
        3,
        "A negative E° means the couple is a stronger reducing agent than H⁺/H₂, so Zn dissolves in acid."
       ],
       [
        "Copper does not dissolve in hydrochloric acid because",
        [
         "E°(Cu²⁺/Cu) is negative, so H⁺ cannot oxidise copper",
         "E°(Cu²⁺/Cu) is positive, so H⁺ cannot oxidise copper",
         "copper is above hydrogen in the electrode potential table, so it reduces H⁺",
         "Cl⁻ ions form a protective layer on copper"
        ],
        1,
        "E°(Cu²⁺/Cu) = +0.34 V > 0, so Cu²⁺ is reduced more easily than H⁺ and the reverse change does not occur."
       ],
       [
        "From the table of standard electrode potentials, the strongest oxidising agent and the strongest reducing agent (aqueous) are respectively",
        [
         "F₂ and Li",
         "Li⁺ and F⁻",
         "F⁻ and Li⁺",
         "Li and F₂"
        ],
        0,
        "F₂/F⁻ has the highest E° (2.87 V), so F₂ is the strongest oxidiser; Li⁺/Li has the lowest (−3.05 V), so Li is the strongest reducer."
       ],
       [
        "The Nernst equation for the electrode reaction Mⁿ⁺(aq) + ne⁻ → M(s) at temperature T is",
        [
         "E = E° + (RT/nF) ln (1/[Mⁿ⁺])",
         "E = E° − (nF/RT) ln (1/[Mⁿ⁺])",
         "E = E° − (RT/nF) ln (1/[Mⁿ⁺])",
         "E = E° − (RT/F) ln (1/[Mⁿ⁺])"
        ],
        2,
        "With [M(s)] taken as unity, E = E° − (RT/nF) ln [M]/[Mⁿ⁺] reduces to this form."
       ],
       [
        "Zn|Zn²⁺(0.01 M)||Cu²⁺(1 M)|Cu has E°cell = 1.10 V at 298 K. Its emf is closest to",
        [
         "1.04 V",
         "1.16 V",
         "1.10 V",
         "1.22 V"
        ],
        1,
        "E = 1.10 − (0.059/2) log (0.01/1) = 1.10 + 0.059 = 1.159 V.",
        "Q = [Zn²⁺]/[Cu²⁺]."
       ],
       [
        "In the Daniell cell, the emf of the cell increases when",
        [
         "the concentration of Zn²⁺ ions is increased",
         "the concentration of both ions is increased equally",
         "the concentration of Cu²⁺ ions is decreased",
         "the concentration of Cu²⁺ ions is increased or that of Zn²⁺ ions is decreased"
        ],
        3,
        "E = E° − (0.059/2) log([Zn²⁺]/[Cu²⁺]), so a smaller Q gives a larger E."
       ],
       [
        "When a Daniell cell has run until equilibrium is reached, then",
        [
         "the voltmeter reads E°cell and Q = 1",
         "the voltmeter reads zero, E(cell) = 0 and Q = Kc",
         "E(cell) = 0 but Q = E°cell",
         "the concentrations of Zn²⁺ and Cu²⁺ become equal"
        ],
        1,
        "At equilibrium there is no driving force, so E = 0 and the Nernst equation gives E° = (0.059/n) log Kc."
       ],
       [
        "A cell reaction involves 2 electrons and has E°cell = 0.059 V at 298 K. Its equilibrium constant Kc is",
        [
         "10",
         "2",
         "0.059",
         "100"
        ],
        3,
        "E° = (0.059/n) log Kc gives log Kc = (0.059 × 2)/0.059 = 2, so Kc = 100."
       ],
       [
        "For a cell with n = 2 and E°cell = 0.50 V, the standard Gibbs energy of the reaction is (F = 96500 C mol⁻¹)",
        [
         "−96.5 kJ mol⁻¹",
         "−48.25 kJ mol⁻¹",
         "+96.5 kJ mol⁻¹",
         "−193 kJ mol⁻¹"
        ],
        0,
        "ΔrG° = −nFE° = −2 × 96500 × 0.50 = −96500 J mol⁻¹."
       ],
       [
        "Which of the following is correct?",
        [
         "Both E(cell) and ΔrG are intensive properties",
         "Both E(cell) and ΔrG are extensive properties",
         "E(cell) is an intensive property but ΔrG depends on the number of electrons n in the written equation",
         "E(cell) is extensive but ΔrG is intensive"
        ],
        2,
        "Doubling the equation doubles ΔrG = −nFE but E(cell) stays the same."
       ],
       [
        "A solution has conductivity 0.012 S cm⁻¹. In SI units this is",
        [
         "0.12 S m⁻¹",
         "1.2 × 10⁻⁴ S m⁻¹",
         "1.2 S m⁻¹",
         "12 S m⁻¹"
        ],
        2,
        "1 S cm⁻¹ = 100 S m⁻¹, so 0.012 S cm⁻¹ = 1.2 S m⁻¹."
       ],
       [
        "On increasing the temperature,",
        [
         "the conductance of a metal decreases but that of an electrolytic solution increases",
         "the conductance of both a metal and an electrolytic solution increases",
         "the conductance of a metal increases but that of an electrolytic solution decreases",
         "the conductance of both decreases"
        ],
        0,
        "Metallic (electronic) conduction falls with temperature; ionic conduction rises with temperature."
       ],
       [
        "Which classification of materials is correct?",
        [
         "Graphite is an insulator, silicon is a conductor and glass is a semiconductor",
         "Graphite is a semiconductor, silicon is an insulator and glass is a conductor",
         "Graphite, silicon and glass are all insulators",
         "Graphite conducts electronically, silicon is a semiconductor and glass is an insulator"
        ],
        3,
        "Graphite is electronically conducting, silicon has conductivity between conductors and insulators, and glass has a very low conductivity."
       ],
       [
        "Alternating current rather than direct current is used for measuring the resistance of an electrolytic solution because",
        [
         "alternating current gives a larger resistance",
         "direct current would electrolyse the solution and change its composition",
         "direct current cannot flow through any solution",
         "alternating current makes the cell constant zero"
        ],
        1,
        "Passing DC changes the composition of the solution; AC at audio frequency avoids this."
       ],
       [
        "A conductivity cell filled with 0.1 M KCl (κ = 1.29 S m⁻¹) has a resistance of 100 Ω. The cell constant is",
        [
         "129 m⁻¹",
         "1.29 m⁻¹",
         "0.0129 m⁻¹",
         "77.5 m⁻¹"
        ],
        0,
        "G* = κ × R = 1.29 S m⁻¹ × 100 Ω = 129 m⁻¹."
       ],
       [
        "A 0.1 mol L⁻¹ solution has conductivity 0.0129 S cm⁻¹. Its molar conductivity is",
        [
         "0.129 S cm² mol⁻¹",
         "12.9 S cm² mol⁻¹",
         "129 S cm² mol⁻¹",
         "1290 S cm² mol⁻¹"
        ],
        2,
        "Λm = κ × 1000 / c = 0.0129 × 1000 / 0.1 = 129 S cm² mol⁻¹."
       ],
       [
        "On diluting an electrolyte solution,",
        [
         "conductivity increases but molar conductivity decreases",
         "conductivity decreases but molar conductivity increases",
         "both increase",
         "both decrease"
        ],
        1,
        "Fewer ions per unit volume lowers κ, but the volume containing one mole increases more, so Λm = κV rises."
       ],
       [
        "For a strong electrolyte, a plot of molar conductivity Λm against c½ is",
        [
         "a straight line with intercept zero and slope A",
         "a steep curve that rises sharply near zero concentration",
         "a horizontal line at Λ°m",
         "a straight line with intercept Λ°m and slope −A"
        ],
        3,
        "Λm = Λ°m − A c½ for strong electrolytes."
       ],
       [
        "Kohlrausch law of independent migration of ions states that",
        [
         "the molar conductivity at any concentration is the sum of the conductivities of its ions at that concentration",
         "the limiting molar conductivity of an electrolyte is the sum of the individual contributions of its cation and anion",
         "the limiting molar conductivity of every electrolyte is the same",
         "conductivity of an electrolyte is independent of its concentration"
        ],
        1,
        "Λ°m = ν₊λ°₊ + ν₋λ°₋ at infinite dilution."
       ],
       [
        "Given λ°(Ca²⁺) = 119.0 and λ°(Cl⁻) = 76.3 S cm² mol⁻¹, Λ°m of CaCl₂ is",
        [
         "195.3 S cm² mol⁻¹",
         "314.4 S cm² mol⁻¹",
         "42.7 S cm² mol⁻¹",
         "271.6 S cm² mol⁻¹"
        ],
        3,
        "Λ°m = 119.0 + 2 × 76.3 = 271.6 (NCERT Example 2.7)."
       ],
       [
        "The Λ°m of a weak electrolyte such as acetic acid is obtained",
        [
         "from Kohlrausch law, because extrapolation of Λm to zero concentration is not possible",
         "by extrapolating the straight Λm versus c½ plot to c = 0",
         "by measuring Λm of a very concentrated solution",
         "from the conductivity of pure water"
        ],
        0,
        "Λm of a weak electrolyte rises steeply near zero concentration, so extrapolation fails."
       ],
       [
        "The molar conductivity of a weak acid at a given concentration is 39.05 S cm² mol⁻¹ and Λ°m = 390.5 S cm² mol⁻¹. Its degree of dissociation is",
        [
         "0.01",
         "10",
         "0.1",
         "1.0"
        ],
        2,
        "α = Λm/Λ°m = 39.05/390.5 = 0.1."
       ],
       [
        "In the electrolytic refining of copper using CuSO₄ solution,",
        [
         "pure copper is the anode and impure copper is the cathode",
         "impure copper is the cathode, which dissolves",
         "impure copper is the anode, which dissolves, and pure copper is deposited at the cathode",
         "copper is deposited at the anode and dissolves at the cathode"
        ],
        2,
        "Cu → Cu²⁺ + 2e⁻ at the anode and Cu²⁺ + 2e⁻ → Cu at the cathode."
       ],
       [
        "Which pair correctly states how a metal is produced?",
        [
         "Sodium by electrolysis of fused NaCl, and aluminium by electrolysis of Al₂O₃ in the presence of cryolite",
         "Sodium by electrolysis of aqueous NaCl, and aluminium by electrolysis of aqueous Al₂O₃",
         "Sodium by electrolysis of Al₂O₃ with cryolite, and aluminium by electrolysis of fused NaCl",
         "Both by electrolysis of aqueous solutions of their chlorides"
        ],
        0,
        "Na and Al are produced by electrolytic reduction in melts because no suitable chemical reducing agent is available."
       ],
       [
        "Faraday’s second law of electrolysis states that",
        [
         "the amount of substance liberated is inversely proportional to the quantity of electricity",
         "the same mass of every substance is liberated by the same quantity of electricity",
         "the amount of reaction is independent of the quantity of electricity",
         "the amounts of different substances liberated by the same quantity of electricity are proportional to their chemical equivalent weights"
        ],
        3,
        "Equivalent weight = atomic mass / number of electrons needed to reduce the cation."
       ],
       [
        "Using F = 96500 C mol⁻¹ and Cu = 63.5, the mass of copper deposited by 1930 C from a Cu²⁺ solution is",
        [
         "1.27 g",
         "0.635 g",
         "0.3175 g",
         "63.5 g"
        ],
        1,
        "1930/96500 = 0.02 mol e⁻, so 0.01 mol Cu = 0.635 g."
       ],
       [
        "On electrolysis of molten NaCl with inert electrodes, the products are",
        [
         "sodium metal at the cathode and chlorine gas at the anode",
         "hydrogen at the cathode and chlorine at the anode",
         "sodium at the anode and chlorine at the cathode",
         "hydrogen at the cathode and oxygen at the anode"
        ],
        0,
        "Only Na⁺ and Cl⁻ are present; Na⁺ is reduced and Cl⁻ is oxidised."
       ],
       [
        "During electrolysis of aqueous NaCl with inert electrodes, the products are",
        [
         "Na at the cathode and Cl₂ at the anode",
         "H₂ at the cathode and O₂ at the anode",
         "H₂ at the cathode, Cl₂ at the anode and NaOH left in solution",
         "Na at the cathode and O₂ at the anode"
        ],
        2,
        "H⁺ (0.00 V) is reduced in preference to Na⁺ (−2.71 V); Cl⁻ is oxidised in preference to water because of the overpotential of oxygen."
       ],
       [
        "At the anode during electrolysis of sulphuric acid with inert electrodes,",
        [
         "S₂O₈²⁻ is always formed",
         "O₂ is formed from water in dilute H₂SO₄, while S₂O₈²⁻ is formed at higher concentrations",
         "O₂ is formed at all concentrations",
         "H₂ is formed in dilute H₂SO₄ and O₂ in concentrated H₂SO₄"
        ],
        1,
        "Reaction 2H₂O → O₂ + 4H⁺ + 4e⁻ is preferred in dilute acid; 2SO₄²⁻ → S₂O₈²⁻ + 2e⁻ in concentrated acid."
       ],
       [
        "A cell that can be recharged by passing current through it in the opposite direction is called a",
        [
         "primary cell",
         "fuel cell",
         "dry cell",
         "secondary cell"
        ],
        3,
        "In a primary battery the reaction occurs only once; a secondary cell can be charged and discharged many times."
       ],
       [
        "In the Leclanché dry cell,",
        [
         "a graphite container is the anode and a zinc rod is the cathode; the potential is about 1.5 V",
         "the zinc container is the anode and a graphite rod surrounded by MnO₂ is the cathode; the potential is about 1.5 V",
         "the zinc container is the cathode and graphite is the anode; the potential is about 1.35 V",
         "the zinc container is the anode and Pb is the cathode; the potential is about 2 V"
        ],
        1,
        "At the anode Zn → Zn²⁺ + 2e⁻; MnO₂ is reduced to MnO(OH) (Mn from +4 to +3) at the cathode."
       ],
       [
        "The mercury cell gives a constant potential of about 1.35 V during its life because",
        [
         "it is a secondary cell",
         "it contains a large volume of electrolyte",
         "mercury has a very high E°",
         "its overall reaction, Zn(Hg) + HgO → ZnO + Hg, involves no ion whose concentration changes"
        ],
        3,
        "The overall reaction does not involve any ion in solution, so the electrolyte composition stays constant."
       ],
       [
        "The overall discharge reaction of the lead storage battery is",
        [
         "Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O",
         "Pb + PbO₂ + 2H₂O → 2PbSO₄ + 2H₂SO₄",
         "2PbSO₄ + 2H₂O → Pb + PbO₂ + 2H₂SO₄",
         "Pb + 2H₂SO₄ → PbSO₄ + 2H₂"
        ],
        0,
        "Pb is oxidised at the anode and PbO₂ reduced at the cathode, both forming PbSO₄ (a 38% H₂SO₄ solution is the electrolyte)."
       ],
       [
        "Compared with the lead storage cell, the nickel-cadmium cell",
        [
         "has a shorter life and is cheaper",
         "is a primary cell",
         "has a longer life but is more expensive to manufacture",
         "has a longer life and is cheaper"
        ],
        2,
        "Ni-Cd is a secondary cell: Cd + 2Ni(OH)₃ → CdO + 2Ni(OH)₂ + H₂O on discharge."
       ],
       [
        "In the H₂–O₂ fuel cell with concentrated NaOH electrolyte, the anode reaction is",
        [
         "O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)",
         "2H₂O(l) → O₂ + 4H⁺ + 4e⁻",
         "2H₂(g) + 4OH⁻(aq) → 4H₂O(l) + 4e⁻",
         "H₂(g) + 2e⁻ → 2H⁻"
        ],
        2,
        "H₂ is oxidised at the anode; O₂ is reduced at the cathode. The overall reaction is 2H₂ + O₂ → 2H₂O."
       ],
       [
        "During the rusting of iron, a spot on the surface acts as the anode where",
        [
         "Fe is oxidised to Fe²⁺, and electrons move to another spot where O₂ is reduced in the presence of H⁺",
         "Fe²⁺ is reduced to Fe, and electrons move to another spot where O₂ is oxidised",
         "Fe is oxidised to Fe³⁺ directly, and H₂ is evolved at the cathode",
         "O₂ is oxidised and Fe stays unchanged"
        ],
        0,
        "Anode: Fe → Fe²⁺ + 2e⁻; cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O; Fe²⁺ is later oxidised to hydrated Fe₂O₃."
       ],
       [
        "Which method protects iron from corrosion electrochemically?",
        [
         "Painting it with a conducting copper paint",
         "Connecting it to a piece of silver",
         "Dipping it in dilute acid",
         "Connecting it to a sacrificial electrode of Mg or Zn"
        ],
        3,
        "Mg and Zn are more easily oxidised than iron, so they corrode in its place."
       ]
      ],
      [
       [
        "A Daniell cell (E°cell = 1.1 V, standard concentrations) is connected to an external source of 1.5 V opposing it. Which statement is correct?",
        [
         "Zn dissolves at the zinc electrode and Cu is deposited, with electrons flowing from Zn to Cu",
         "Zn²⁺ is reduced at the zinc electrode, copper dissolves, electrons flow from the Cu to the Zn electrode and current flows from Zn to Cu in the wire",
         "No change happens because the cell voltage is lower than 1.5 V",
         "Zn²⁺ is reduced at the copper electrode and electrons flow from Zn to Cu"
        ],
        1,
        "When Eext > 1.1 V the reaction is reversed: zinc becomes the cathode (−ve) and copper the anode (+ve), so the cell acts as an electrolytic cell."
       ],
       [
        "A student writes: “In the Daniell cell, zinc is the anode, so current flows from zinc to copper through the external wire.” The error is that",
        [
         "zinc is actually the cathode, so current flows from Cu to Zn",
         "current flows only through the salt bridge, never through the wire",
         "electrons flow from Cu to Zn in the wire",
         "electrons flow from Zn to Cu, so the conventional current flows from Cu to Zn in the external wire"
        ],
        3,
        "Electrons move from the negative anode to the positive cathode; the direction of current is opposite to that of electron flow."
       ],
       [
        "For the cell reaction Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s), given E°(Zn²⁺/Zn) = −0.76 V and E°(Ag⁺/Ag) = 0.80 V, the correct cell notation and E°cell are",
        [
         "Zn(s)|Zn²⁺(aq)||Ag⁺(aq)|Ag(s); 1.56 V",
         "Zn(s)|Zn²⁺(aq)||Ag⁺(aq)|Ag(s); 0.04 V",
         "Ag(s)|Ag⁺(aq)||Zn²⁺(aq)|Zn(s); 1.56 V",
         "Zn(s)|Zn²⁺(aq)||Ag⁺(aq)|Ag(s); 2.36 V"
        ],
        0,
        "E°cell = 0.80 − (−0.76) = 1.56 V; E° is an intensive quantity so it is not doubled for 2Ag⁺."
       ],
       [
        "Assertion (A): Copper does not dissolve in dilute hydrochloric acid but dissolves in nitric acid.\nReason (R): E°(Cu²⁺/Cu) is positive, so H⁺ cannot oxidise Cu, whereas NO₃⁻ (with H⁺) is a stronger oxidising agent and does oxidise it.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Cu is oxidised by nitrate ion (E° = 0.97 V), not by H⁺ (0.00 V)."
       ],
       [
        "Which of the following can oxidise Fe²⁺ to Fe³⁺ under standard conditions? (E°: Fe³⁺/Fe²⁺ = 0.77 V, Cl₂/Cl⁻ = 1.36 V, I₂/I⁻ = 0.54 V, Cu²⁺/Cu = 0.34 V, Zn²⁺/Zn = −0.76 V)",
        [
         "I₂",
         "Cu²⁺",
         "Cl₂",
         "Zn²⁺"
        ],
        2,
        "The oxidiser must have a higher E° than Fe³⁺/Fe²⁺ (0.77 V); only Cl₂ qualifies."
       ],
       [
        "The metals Ag, Cu, Zn and Al are arranged in increasing order of reducing power as",
        [
         "Ag < Cu < Zn < Al",
         "Al < Zn < Cu < Ag",
         "Cu < Ag < Al < Zn",
         "Zn < Al < Ag < Cu"
        ],
        0,
        "E° values: Ag⁺/Ag 0.80, Cu²⁺/Cu 0.34, Zn²⁺/Zn −0.76, Al³⁺/Al −1.66; lower E° means stronger reducing agent."
       ],
       [
        "A 1 M CuSO₄ solution can be stored safely in a vessel made of",
        [
         "zinc",
         "iron",
         "aluminium",
         "silver"
        ],
        3,
        "Zn (−0.76 V), Fe (−0.44 V) and Al (−1.66 V) are stronger reducing agents than Cu and would displace it; Ag (0.80 V) cannot."
       ],
       [
        "A student connects a zinc half-cell alone across a voltmeter and states that it reads −0.76 V, which is therefore the measured electrode potential of zinc. The error is that",
        [
         "the voltmeter should read +0.76 V because zinc is the anode",
         "the potential of a single half-cell cannot be measured; −0.76 V is the emf relative to the standard hydrogen electrode, whose potential is assigned as zero",
         "−0.76 V is the potential relative to the copper electrode",
         "zinc half-cell has no potential without a salt bridge"
        ],
        1,
        "Only differences between two half-cells can be measured; SHE is the reference with E° = 0."
       ],
       [
        "Calculate the emf of the cell Ni(s)|Ni²⁺(0.160 M)||Ag⁺(0.002 M)|Ag(s) at 298 K, given E°cell = 1.05 V.",
        [
         "0.91 V",
         "1.19 V",
         "0.96 V",
         "1.05 V"
        ],
        0,
        "E = 1.05 − (0.059/2) log [0.160/(0.002)²] = 1.05 − 0.0295 × 4.602 = 0.914 V.",
        "Q = [Ni²⁺]/[Ag⁺]²."
       ],
       [
        "The potential of the hydrogen electrode, H⁺(aq)|H₂(1 bar)|Pt, in a solution of pH 10 at 298 K is",
        [
         "+0.59 V",
         "−0.059 V",
         "−0.59 V",
         "−1.18 V"
        ],
        2,
        "E = 0 − 0.059 log (1/[H⁺]) = −0.059 × pH = −0.59 V."
       ],
       [
        "The electrode potential of Cu²⁺(0.01 M)|Cu at 298 K, given E°(Cu²⁺/Cu) = 0.34 V, is",
        [
         "0.40 V",
         "0.28 V",
         "0.34 V",
         "0.22 V"
        ],
        1,
        "E = 0.34 − (0.059/2) log (1/0.01) = 0.34 − 0.059 = 0.281 V."
       ],
       [
        "A student calculates the emf of Zn|Zn²⁺(0.01 M)||Cu²⁺(0.1 M)|Cu (E°cell = 1.10 V) as E = 1.10 − (0.059/2) log (0.1/0.01) = 1.07 V. The correct value and the error are",
        [
         "1.07 V; the calculation is correct",
         "1.13 V; the student should have used n = 1",
         "1.13 V; the student should have used ln instead of log",
         "1.13 V; Q should be [Zn²⁺]/[Cu²⁺] = 0.1, not its inverse"
        ],
        3,
        "E = 1.10 − 0.0295 log (0.01/0.1) = 1.10 + 0.0295 = 1.13 V, since Q = [product ion]/[reactant ion]."
       ],
       [
        "Assertion (A): The emf of the cell is doubled when its balanced reaction is written with all coefficients multiplied by 2.\nReason (R): ΔrG° depends on the number of electrons n in the balanced equation.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "E°cell is an intensive property and does not change; ΔrG° = −nFE° doubles. So A is false and R is true."
       ],
       [
        "Assertion (A): The voltage of a working Daniell cell gradually decreases with time.\nReason (R): As the cell works, [Zn²⁺] increases and [Cu²⁺] decreases, so Q increases in E = E° − (0.059/2) log Q.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Q = [Zn²⁺]/[Cu²⁺] rises until Q = Kc, when E = 0."
       ],
       [
        "The emf of Zn|Zn²⁺(0.1 M)||Cu²⁺(0.001 M)|Cu at 298 K (E°cell = 1.10 V) is",
        [
         "1.04 V",
         "1.16 V",
         "1.10 V",
         "0.98 V"
        ],
        0,
        "E = 1.10 − (0.059/2) log (0.1/0.001) = 1.10 − 0.0295 × 2 = 1.041 V."
       ],
       [
        "The equilibrium constant of Ni(s) + 2Ag⁺(aq) → Ni²⁺(aq) + 2Ag(s), for which E°cell = 1.05 V at 298 K, is about (use 0.059 V; 10⁰·⁵⁹³ = 3.92)",
        [
         "3.9 × 10¹⁷",
         "1.0 × 10²",
         "3.9 × 10³⁵",
         "3.9 × 10⁻³⁶"
        ],
        2,
        "log Kc = (2 × 1.05)/0.059 = 35.59, so Kc = 3.9 × 10³⁵."
       ],
       [
        "The cell 2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(s) has E°cell = 0.236 V at 298 K. The values of ΔrG° and log Kc are respectively (F = 96500 C mol⁻¹)",
        [
         "−22.8 kJ mol⁻¹ and 8.0",
         "−45.5 kJ mol⁻¹ and 4.0",
         "−45.5 kJ mol⁻¹ and 8.0",
         "+45.5 kJ mol⁻¹ and 8.0"
        ],
        2,
        "ΔrG° = −2 × 96500 × 0.236 = −45548 J; log Kc = 2 × 0.236/0.059 = 8.0."
       ],
       [
        "For Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s), E°cell = 0.46 V. For the reaction written as 2Cu(s) + 4Ag⁺(aq) → 2Cu²⁺(aq) + 4Ag(s), ΔrG° is (F = 96500 C mol⁻¹)",
        [
         "−177.6 kJ mol⁻¹",
         "−88.8 kJ mol⁻¹",
         "−355.1 kJ mol⁻¹",
         "+177.6 kJ mol⁻¹"
        ],
        0,
        "n = 4, so ΔrG° = −4 × 96500 × 0.46 = −177560 J mol⁻¹; E° is unchanged."
       ],
       [
        "A student says: “Writing the cell reaction as 2Zn + 2Cu²⁺ → 2Zn²⁺ + 2Cu doubles both E°cell and ΔrG°.” The correct statement is that",
        [
         "both remain unchanged",
         "E°cell doubles while ΔrG° is unchanged",
         "E°cell halves and ΔrG° doubles",
         "E°cell is unchanged while ΔrG° doubles"
        ],
        3,
        "E°cell is intensive; ΔrG° = −nFE° is extensive and n becomes 4 instead of 2."
       ],
       [
        "A student heats a copper wire and a 0.1 M KCl solution and claims that the conductance of both increases. The correct statement is that",
        [
         "the conductance of copper increases, while that of KCl decreases",
         "the conductance of copper decreases, while that of the KCl solution increases",
         "the conductance of both decreases",
         "the conductance of both increases, but by different amounts"
        ],
        1,
        "Electronic conductance falls with temperature; ionic conductance rises (also by lower viscosity and less solvation)."
       ],
       [
        "In a Wheatstone bridge for a conductivity cell, balance is obtained with R₁ = 300 Ω, R₃ = 100 Ω and R₄ = 40 Ω (R₂ = R₁R₄/R₃ is the cell). If the cell constant is 1.5 cm⁻¹, the conductivity of the solution is",
        [
         "1.25 × 10⁻² S cm⁻¹",
         "1.8 × 10² S cm⁻¹",
         "8.0 × 10⁻² S cm⁻¹",
         "1.25 × 10⁻³ S cm⁻¹"
        ],
        0,
        "R₂ = 300 × 40/100 = 120 Ω; κ = G*/R = 1.5/120 = 0.0125 S cm⁻¹."
       ],
       [
        "The cell constant of a cell is found using 0.1 M KCl (κ = 1.29 S m⁻¹, R = 150 Ω). With 0.05 M NaCl in the same cell the resistance is 310 Ω. The molar conductivity of the NaCl solution is",
        [
         "62.4 S cm² mol⁻¹",
         "249.6 S cm² mol⁻¹",
         "124.8 S cm² mol⁻¹",
         "12.48 S cm² mol⁻¹"
        ],
        2,
        "G* = 1.29 × 150 = 193.5 m⁻¹; κ = 193.5/310 = 0.624 S m⁻¹; Λm = κ/c = 0.624/50 = 124.8 × 10⁻⁴ S m² mol⁻¹.",
        "c = 0.05 mol L⁻¹ = 50 mol m⁻³."
       ],
       [
        "A student measures the resistance of an electrolyte using a battery (DC) and bare platinum foil. The readings keep drifting. The most likely reason is that",
        [
         "DC makes the solution heat up, whereas AC cools it",
         "DC electrolyses the solution and changes its composition near the electrodes; AC with a conductivity cell avoids this",
         "the solution is a metallic conductor and needs a high-frequency source",
         "platinum is oxidised to Pt²⁺ and goes into the solution at each step"
        ],
        1,
        "A solution cannot be connected like a metallic wire, and DC changes its composition, so AC and a conductivity cell are used."
       ],
       [
        "A cylindrical column of electrolyte 40 cm long and 2 cm in diameter (take π = 3.14) has a resistance of 1000 Ω and contains 0.10 mol L⁻¹ solute. Its molar conductivity is about",
        [
         "12.7 S cm² mol⁻¹",
         "1.27 S cm² mol⁻¹",
         "400 S cm² mol⁻¹",
         "127 S cm² mol⁻¹"
        ],
        3,
        "A = 3.14 cm²; κ = l/(RA) = 40/(1000 × 3.14) = 0.01274 S cm⁻¹; Λm = 0.01274 × 1000/0.10 = 127 S cm² mol⁻¹."
       ],
       [
        "A 0.2 mol L⁻¹ solution has κ = 2.5 × 10⁻² S cm⁻¹. Its molar conductivity in S m² mol⁻¹ is",
        [
         "1.25 × 10⁻⁴",
         "1.25 × 10⁻²",
         "125",
         "1.25 × 10⁻⁶"
        ],
        1,
        "Λm = 0.025 × 1000/0.2 = 125 S cm² mol⁻¹ = 125 × 10⁻⁴ S m² mol⁻¹ = 1.25 × 10⁻² S m² mol⁻¹."
       ],
       [
        "For KCl, Λm = Λ°m − A c½ with Λ°m = 150.0 and A = 87.46 (S cm² mol⁻¹ and (mol L⁻¹)½ units). The Λm of a 0.0004 mol L⁻¹ solution is about",
        [
         "150.0 S cm² mol⁻¹",
         "115.0 S cm² mol⁻¹",
         "62.5 S cm² mol⁻¹",
         "148.3 S cm² mol⁻¹"
        ],
        3,
        "c½ = 0.02, so Λm = 150.0 − 87.46 × 0.02 = 148.25 S cm² mol⁻¹."
       ],
       [
        "Given λ°(Al³⁺) = 189 and λ°(SO₄²⁻) = 160 S cm² mol⁻¹, the Λ°m of Al₂(SO₄)₃ is",
        [
         "858 S cm² mol⁻¹",
         "349 S cm² mol⁻¹",
         "538 S cm² mol⁻¹",
         "669 S cm² mol⁻¹"
        ],
        0,
        "Λ°m = 2 × 189 + 3 × 160 = 858 S cm² mol⁻¹."
       ],
       [
        "A student calculates Λ°m of CaCl₂ as λ°(Ca²⁺) + λ°(Cl⁻) = 119.0 + 76.3 = 195.3 S cm² mol⁻¹. The error is that",
        [
         "Ca²⁺ gives two ions, so Λ°m = 2(119.0) + 76.3",
         "the conductivities should be multiplied, not added",
         "CaCl₂ gives two Cl⁻ ions, so Λ°m = 119.0 + 2(76.3) = 271.6 S cm² mol⁻¹",
         "the value must be divided by 3"
        ],
        2,
        "Λ°m = ν₊λ°₊ + ν₋λ°₋ includes the stoichiometric numbers of ions."
       ],
       [
        "A student claims that acetic acid has a higher Λm in 0.1 M than in 0.001 M solution because the 0.1 M solution has more ions per unit volume. The correct explanation is that",
        [
         "Λm is higher at 0.001 M because κ increases on dilution",
         "Λm is the same at both concentrations because acetic acid is a weak electrolyte",
         "Λm is higher at 0.001 M since the degree of dissociation, and the total volume containing 1 mol, both increase on dilution",
         "the student is right because Λm increases with concentration"
        ],
        2,
        "κ falls on dilution, but the fall is more than compensated by the increase in volume and in α."
       ],
       [
        "The conductivity of 0.001028 mol L⁻¹ acetic acid is 4.95 × 10⁻⁵ S cm⁻¹ and Λ°m = 390.5 S cm² mol⁻¹. Its dissociation constant is about",
        [
         "1.78 × 10⁻⁵ mol L⁻¹",
         "1.78 × 10⁻³ mol L⁻¹",
         "1.23 × 10⁻⁴ mol L⁻¹",
         "1.56 × 10⁻⁵ mol L⁻¹"
        ],
        0,
        "Λm = 48.15; α = 0.1233; Ka = cα²/(1 − α) = 0.001028 × (0.1233)²/0.8767 = 1.78 × 10⁻⁵ (NCERT Example 2.9)."
       ],
       [
        "The molar conductivity of 0.025 mol L⁻¹ methanoic acid is 46.1 S cm² mol⁻¹; λ°(H⁺) = 349.6 and λ°(HCOO⁻) = 54.6 S cm² mol⁻¹. Its dissociation constant Ka is about",
        [
         "3.67 × 10⁻⁵ mol L⁻¹",
         "2.9 × 10⁻³ mol L⁻¹",
         "9.3 × 10⁻⁴ mol L⁻¹",
         "3.67 × 10⁻⁴ mol L⁻¹"
        ],
        3,
        "Λ°m = 404.2; α = 46.1/404.2 = 0.114; Ka = cα²/(1 − α) = 0.025 × 0.013/0.886 = 3.67 × 10⁻⁴."
       ],
       [
        "A weak monobasic acid HA of concentration 0.05 mol L⁻¹ has κ = 1.95 × 10⁻⁴ S cm⁻¹ and Λ°m = 390 S cm² mol⁻¹. Its Ka is about",
        [
         "5.0 × 10⁻⁴ mol L⁻¹",
         "5.1 × 10⁻⁶ mol L⁻¹",
         "2.5 × 10⁻⁵ mol L⁻¹",
         "1.0 × 10⁻⁴ mol L⁻¹"
        ],
        1,
        "Λm = 1.95 × 10⁻⁴ × 1000/0.05 = 3.9; α = 0.01; Ka = cα²/(1 − α) = 0.05 × 10⁻⁴/0.99 = 5.05 × 10⁻⁶."
       ],
       [
        "Assertion (A): The conductivity of an electrolyte solution decreases on dilution.\nReason (R): The molar conductivity of an electrolyte increases on dilution.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "A is true because fewer ions are present per unit volume; R is also true but concerns Λm and is not the reason for A."
       ],
       [
        "Assertion (A): The Λ°m of a weak electrolyte cannot be found by extrapolating Λm to zero concentration.\nReason (R): Λm of a weak electrolyte increases very steeply on dilution near zero concentration.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Because of the steep rise, extrapolation is unreliable and Kohlrausch law is used instead."
       ],
       [
        "Given Λ°m for NH₄Cl = 150, NaOH = 248 and NaCl = 126 S cm² mol⁻¹, the Λ°m of NH₄OH is",
        [
         "524 S cm² mol⁻¹",
         "272 S cm² mol⁻¹",
         "28 S cm² mol⁻¹",
         "400 S cm² mol⁻¹"
        ],
        1,
        "Λ°m(NH₄OH) = Λ°m(NH₄Cl) + Λ°m(NaOH) − Λ°m(NaCl) = 150 + 248 − 126 = 272."
       ],
       [
        "A current of 5 A is passed for 965 s through CuSO₄ solution with inert electrodes. The mass of copper deposited at the cathode is (F = 96500 C mol⁻¹; Cu = 63.5)",
        [
         "3.18 g",
         "0.79 g",
         "6.35 g",
         "1.59 g"
        ],
        3,
        "Q = 4825 C = 0.05 F; Cu²⁺ + 2e⁻ → Cu so 0.025 mol Cu = 1.59 g."
       ],
       [
        "For how long must a current of 10 A be passed through molten Al₂O₃ in cryolite to deposit 2.7 g of aluminium? (Al = 27; F = 96500 C mol⁻¹)",
        [
         "965 s",
         "2895 s",
         "8685 s",
         "5790 s"
        ],
        1,
        "2.7 g = 0.1 mol Al needs 0.3 F = 28950 C; t = 28950/10 = 2895 s."
       ],
       [
        "The same quantity of electricity that deposits 0.635 g of copper from CuSO₄ solution is passed through molten AlCl₃. The mass of aluminium deposited is (Cu = 63.5, Al = 27)",
        [
         "0.27 g",
         "0.54 g",
         "0.09 g",
         "0.18 g"
        ],
        3,
        "0.635 g Cu = 0.01 mol, needing 0.02 mol e⁻; Al³⁺ + 3e⁻ → Al gives 0.02/3 mol = 0.18 g."
       ],
       [
        "The number of electrons that flow through a metal wire carrying 0.5 A for 2 hours is (N_A = 6.022 × 10²³ mol⁻¹, F = 96500 C mol⁻¹)",
        [
         "2.25 × 10²²",
         "2.25 × 10¹⁹",
         "6.25 × 10¹⁸",
         "1.25 × 10²²"
        ],
        0,
        "Q = 0.5 × 7200 = 3600 C = 0.0373 mol e⁻, so 0.0373 × 6.022 × 10²³ = 2.25 × 10²² electrons."
       ],
       [
        "The quantity of electricity needed to reduce 0.5 mol of Cr₂O₇²⁻ to Cr³⁺ in acid is (F = 96500 C mol⁻¹)",
        [
         "5.79 × 10⁵ C",
         "9.65 × 10⁴ C",
         "2.895 × 10⁵ C",
         "1.93 × 10⁵ C"
        ],
        2,
        "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O needs 6F per mole, so 0.5 × 6 × 96500 = 2.895 × 10⁵ C."
       ],
       [
        "A student states: “On electrolysing aqueous NaCl with inert electrodes, sodium is deposited at the cathode because Na⁺ is the only cation.” The error is that",
        [
         "Na⁺ is reduced but immediately reacts with Cl₂",
         "sodium is deposited at the anode, not the cathode",
         "water (H⁺) is reduced at the cathode in preference to Na⁺, because E°(H⁺/H₂) = 0.00 V is higher than E°(Na⁺/Na) = −2.71 V",
         "Cl⁻ is reduced at the cathode"
        ],
        2,
        "The reduction with the higher E° is preferred, so H₂ and OH⁻ form at the cathode."
       ],
       [
        "Aqueous NaCl with a few drops of phenolphthalein is electrolysed with platinum electrodes. Which observation and anode product are correct?",
        [
         "The region near the cathode turns pink, and Cl₂ is liberated at the anode",
         "The region near the anode turns pink, and O₂ is liberated at the cathode",
         "The region near the cathode turns pink, and O₂ is liberated at the anode",
         "No colour change occurs, and Na deposits at the cathode"
        ],
        0,
        "The cathode reaction H₂O + e⁻ → ½H₂ + OH⁻ makes the solution alkaline; at the anode Cl⁻ → ½Cl₂ + e⁻ is preferred owing to the overpotential of O₂."
       ],
       [
        "Assertion (A): On electrolysis of aqueous NaCl with inert electrodes, chlorine rather than oxygen is liberated at the anode.\nReason (R): Oxygen evolution from water has a high overpotential, so oxidation of Cl⁻ occurs in preference.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "On thermodynamic grounds water (1.23 V) should be oxidised first, but the overpotential of oxygen favours Cl⁻ oxidation."
       ],
       [
        "Assertion (A): Sodium metal is obtained at the cathode when aqueous NaCl is electrolysed.\nReason (R): H⁺ ions have a higher standard electrode potential than Na⁺ ions and are therefore reduced in preference.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: H₂ is evolved, not Na. R is true: E°(H⁺/H₂) = 0.00 V > E°(Na⁺/Na) = −2.71 V."
       ],
       [
        "In the electrolysis of H₂SO₄ solution with inert electrodes, which statement about the anode is correct?",
        [
         "In dilute H₂SO₄ water is oxidised to O₂, whereas in concentrated H₂SO₄ SO₄²⁻ is oxidised to S₂O₈²⁻",
         "In dilute H₂SO₄ SO₄²⁻ is oxidised to S₂O₈²⁻, and in concentrated H₂SO₄ water gives O₂",
         "H₂ gas is evolved at the anode at all concentrations",
         "SO₄²⁻ is reduced to SO₂ at the anode"
        ],
        0,
        "Reaction 2H₂O → O₂ + 4H⁺ + 4e⁻ (1.23 V) is preferred in dilute acid; 2SO₄²⁻ → S₂O₈²⁻ + 2e⁻ (1.96 V) in concentrated acid."
       ],
       [
        "Which statement about the Leclanché dry cell is correct?",
        [
         "The zinc container is reduced and manganese changes from +4 to +2",
         "Ammonia formed at the cathode escapes, and manganese changes from +3 to +4",
         "Ammonia formed at the cathode combines with Zn²⁺ to give [Zn(NH₃)₄]²⁺, and manganese changes from +4 to +3",
         "The graphite rod is the anode and is slowly oxidised"
        ],
        2,
        "Cathode: MnO₂ + NH₄⁺ + e⁻ → MnO(OH) + NH₃; the zinc container is the anode."
       ],
       [
        "Assertion (A): In a dry cell, the zinc container acts as the anode.\nReason (R): Zinc is reduced at the anode of a dry cell.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true; R is false because oxidation, Zn → Zn²⁺ + 2e⁻, occurs at the anode."
       ],
       [
        "Assertion (A): The mercury cell gives a constant potential during its life.\nReason (R): The overall cell reaction, Zn(Hg) + HgO → ZnO + Hg, involves no ion in solution whose concentration changes.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Since the electrolyte composition does not change, the cell potential stays nearly constant at 1.35 V."
       ],
       [
        "A lead storage battery is discharged by a current of 9.65 A for 1000 s. The mass of H₂SO₄ consumed is (F = 96500 C mol⁻¹; H₂SO₄ = 98)",
        [
         "4.9 g",
         "9.8 g",
         "19.6 g",
         "98 g"
        ],
        1,
        "Q = 9650 C = 0.1 F; Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O consumes 2 mol H₂SO₄ per 2 mol e⁻, so 0.1 mol = 9.8 g.",
        "2 mol H₂SO₄ are used per 2 mol of electrons."
       ],
       [
        "When a lead storage battery is charged, which change is correct?",
        [
         "Pb and PbO₂ are both converted to PbSO₄ and H₂SO₄ is consumed",
         "PbSO₄ at both plates is converted to Pb only",
         "PbO₂ is converted to Pb at the cathode and H₂ is evolved",
         "PbSO₄ on the lead plate is converted to Pb, PbSO₄ on the PbO₂ plate to PbO₂, and H₂SO₄ is regenerated"
        ],
        3,
        "Charging reverses the discharge reaction: 2PbSO₄ + 2H₂O → Pb + PbO₂ + 2H₂SO₄."
       ],
       [
        "In the discharge of a nickel-cadmium cell, Cd(s) + 2Ni(OH)₃(s) → CdO(s) + 2Ni(OH)₂(s) + H₂O(l), which statement is correct?",
        [
         "Cd is oxidised from 0 to +2 and nickel is reduced from +3 to +2",
         "Cd is reduced from +2 to 0 and nickel is oxidised from +2 to +3",
         "Cd is oxidised from 0 to +1 and nickel is reduced from +3 to +1",
         "Both Cd and nickel are reduced"
        ],
        0,
        "Cd loses 2e⁻ and each Ni gains one e⁻, so Cd is the anode material."
       ],
       [
        "In an H₂–O₂ fuel cell in alkaline medium, what mass of O₂ is consumed at the cathode to deliver 19300 C? (F = 96500 C mol⁻¹; O = 16)",
        [
         "3.2 g",
         "0.8 g",
         "1.6 g",
         "6.4 g"
        ],
        2,
        "19300 C = 0.2 F; O₂ + 2H₂O + 4e⁻ → 4OH⁻ uses 1 mol O₂ per 4 mol e⁻, so 0.05 mol = 1.6 g."
       ],
       [
        "Which statement about the H₂–O₂ fuel cell is NOT correct?",
        [
         "The cell runs continuously as long as the reactants are supplied",
         "Its efficiency, about 70%, is higher than that of thermal plants (about 40%)",
         "Hydrogen is reduced at the cathode to give H⁺ ions, which combine with oxygen",
         "Catalysts such as platinum or palladium are incorporated into the porous electrodes"
        ],
        2,
        "H₂ is oxidised at the anode (2H₂ + 4OH⁻ → 4H₂O + 4e⁻); O₂ is reduced at the cathode; the overall product is water."
       ],
       [
        "Using E°(Fe²⁺/Fe) = −0.44 V and E°(O₂, H⁺/H₂O) = 1.23 V, the E°cell for the corrosion of iron, 2Fe + O₂ + 4H⁺ → 2Fe²⁺ + 2H₂O, is",
        [
         "1.67 V",
         "0.79 V",
         "−1.67 V",
         "3.34 V"
        ],
        0,
        "E°cell = 1.23 − (−0.44) = 1.67 V; the positive value shows corrosion is spontaneous."
       ],
       [
        "An iron object is coated with zinc in one case and with tin in another, and both coatings are scratched, exposing iron in moist air. (E°: Zn²⁺/Zn = −0.76, Fe²⁺/Fe = −0.44, Sn²⁺/Sn = −0.14 V.) Which is correct?",
        [
         "Iron is protected in both cases because the coating metal covers it",
         "Iron corrodes in the zinc-coated case but is protected in the tin-coated case",
         "Iron corrodes in both cases",
         "Iron is still protected in the zinc-coated case because zinc corrodes in its place, but in the tin-coated case iron corrodes"
        ],
        3,
        "Zn is a stronger reducing agent than Fe and acts as the sacrificial anode; Sn is weaker than Fe, so iron becomes the anode and rusts."
       ],
       [
        "Which metal, joined to an underground iron pipe, would protect it from corrosion as a sacrificial electrode? (E°: Cu²⁺/Cu = 0.34, Sn²⁺/Sn = −0.14, Fe²⁺/Fe = −0.44, Mg²⁺/Mg = −2.36 V)",
        [
         "Cu",
         "Mg",
         "Sn",
         "Ag"
        ],
        1,
        "The sacrificial metal must be more easily oxidised than Fe, that is, have a lower E°; only Mg qualifies."
       ],
       [
        "A student says: “Rusting occurs when iron is reduced at one spot, and the electrons released there oxidise oxygen at another spot.” The correct description is that",
        [
         "iron is oxidised at the anodic spot, and the electrons reduce O₂ (in presence of H⁺) at another spot; Fe²⁺ is then oxidised further to hydrated Fe₂O₃",
         "iron is oxidised at the cathodic spot and H₂ is evolved at the anodic spot",
         "iron is reduced at the anodic spot and oxygen oxidised at the cathodic spot, as the student says",
         "iron is oxidised only if the metal is completely dry"
        ],
        0,
        "Anode: Fe → Fe²⁺ + 2e⁻; cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O; rust is Fe₂O₃·xH₂O."
       ],
       [
        "Which classification of batteries is correct?",
        [
         "Leclanché dry cell and lead storage battery are primary; mercury cell and nickel-cadmium cell are secondary",
         "All four are primary batteries because they use redox reactions",
         "Leclanché dry cell and mercury cell are primary; lead storage battery and nickel-cadmium cell are secondary",
         "Mercury cell and lead storage battery are primary; Leclanché cell and nickel-cadmium cell are secondary"
        ],
        2,
        "In a primary battery the reaction occurs only once; secondary batteries (lead storage, Ni-Cd) can be recharged by passing current in the opposite direction."
       ]
      ]
     ]
    },
    {
     "n": 3,
     "t": "Chemical Kinetics",
     "levels": [
      [
       [
        "The rate of a chemical reaction is best defined as",
        [
         "the total amount of product formed when the reaction is complete",
         "the time taken for the reaction to reach equilibrium",
         "the change in concentration of a reactant or a product per unit time",
         "the energy released per mole of reactant consumed"
        ],
        2,
        "Rate is the decrease in concentration of a reactant or the increase in concentration of a product in unit time."
       ],
       [
        "For R → P, the concentration of R falls from 0.03 M to 0.02 M in 25 minutes. The average rate in mol L⁻¹ s⁻¹ is",
        [
         "6.67 × 10⁻⁶",
         "4 × 10⁻⁴",
         "6.67 × 10⁻⁴",
         "2.4 × 10⁻²"
        ],
        0,
        "Average rate = 0.01 mol L⁻¹ ÷ (25 × 60 s) = 6.67 × 10⁻⁶ mol L⁻¹ s⁻¹ (4 × 10⁻⁴ per minute)."
       ],
       [
        "The instantaneous rate of a reaction at time t is obtained graphically as",
        [
         "the area under the concentration–time curve up to time t",
         "the slope of the straight line joining the first and last points of the curve",
         "the intercept of the concentration–time curve on the concentration axis",
         "the slope of the tangent drawn to the concentration–time curve at time t"
        ],
        3,
        "Instantaneous rate is the average rate as Δt → 0, i.e. the slope of the tangent at that instant."
       ],
       [
        "For 2HI(g) → H₂(g) + I₂(g), the rate of disappearance of HI is 4 × 10⁻³ mol L⁻¹ s⁻¹. The rate of formation of H₂ is",
        [
         "4 × 10⁻³ mol L⁻¹ s⁻¹",
         "2 × 10⁻³ mol L⁻¹ s⁻¹",
         "8 × 10⁻³ mol L⁻¹ s⁻¹",
         "1 × 10⁻³ mol L⁻¹ s⁻¹"
        ],
        1,
        "Rate = −½ d[HI]/dt = d[H₂]/dt, so H₂ forms at half the rate at which HI disappears."
       ],
       [
        "For a gaseous reaction in which concentrations are expressed as partial pressures, the unit of rate is",
        [
         "mol L⁻¹ s⁻¹",
         "atm⁻¹ s⁻¹",
         "atm s⁻¹",
         "mol atm s⁻¹"
        ],
        2,
        "Rate has units of (concentration) time⁻¹, so with pressure in atm it becomes atm s⁻¹."
       ],
       [
        "Which of the following is NOT listed in the unit as a factor that influences the rate of a reaction?",
        [
         "The colour of the reaction vessel",
         "Concentration of reactants",
         "Temperature",
         "Presence of a catalyst"
        ],
        0,
        "Concentration (or pressure for gases), temperature and catalyst affect rate; the colour of the vessel does not."
       ],
       [
        "The representation of the rate of a reaction in terms of the concentrations of the reactants is called",
        [
         "rate law (rate equation or rate expression)",
         "law of mass action only for equilibrium",
         "integrated activation law",
         "Arrhenius factor"
        ],
        0,
        "The expression relating rate to reactant concentrations is the rate law, also called the rate equation or rate expression."
       ],
       [
        "For 2NO + O₂ → 2NO₂, doubling [NO] at constant [O₂] raises the initial rate four times, and doubling [O₂] at constant [NO] doubles it. The rate law is",
        [
         "Rate = k [NO] [O₂]",
         "Rate = k [NO] [O₂]²",
         "Rate = k [NO]⁴ [O₂]",
         "Rate = k [NO]² [O₂]"
        ],
        3,
        "Rate ∝ [NO]² (4 = 2²) and ∝ [O₂]¹ (2 = 2¹)."
       ],
       [
        "For CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH, the experimental rate law is Rate = k [CH₃COOC₂H₅]¹ [H₂O]⁰. This shows that",
        [
         "the rate law can always be written from the stoichiometric coefficients",
         "the rate law cannot be predicted from the balanced equation and must be found by experiment",
         "water is not a reactant in this reaction",
         "the reaction is of zero order overall"
        ],
        1,
        "The exponents (1 and 0) differ from the coefficients (1 and 1), so the rate law has to be determined experimentally."
       ],
       [
        "For a reaction with Rate = k [A]³ᐟ² [B]⁻¹, the overall order is",
        [
         "½",
         "3/2",
         "5/2",
         "−1"
        ],
        0,
        "Order is the sum of the powers: 3/2 + (−1) = ½."
       ],
       [
        "A reaction has a rate constant k = 2.3 × 10⁻⁵ L mol⁻¹ s⁻¹. The order of the reaction is",
        [
         "first",
         "zero",
         "second",
         "third"
        ],
        2,
        "The unit L mol⁻¹ s⁻¹ is that of a second order rate constant. (NCERT Example 3.4)"
       ],
       [
        "Reactions that take place in a single step are called",
        [
         "complex reactions",
         "consecutive reactions",
         "side reactions",
         "elementary reactions"
        ],
        3,
        "A one-step reaction is elementary; a sequence of elementary steps (a mechanism) makes a complex reaction."
       ],
       [
        "For a second order reaction, the concentration of the reactant is made three times. The rate becomes",
        [
         "9 times",
         "3 times",
         "6 times",
         "27 times"
        ],
        0,
        "Rate ∝ [X]², so rate becomes 3² = 9 times."
       ],
       [
        "The reaction 2HI → H₂ + I₂ (as an elementary step) is an example of a",
        [
         "unimolecular reaction",
         "bimolecular reaction",
         "termolecular reaction",
         "zero molecular reaction"
        ],
        1,
        "Two reacting molecules collide simultaneously, so molecularity is 2."
       ],
       [
        "Which statement about order and molecularity is correct?",
        [
         "Molecularity can be zero or a fraction, but order cannot",
         "Both can be zero or fractional",
         "Order can be zero or a fraction, but molecularity cannot",
         "Both are always whole numbers equal to the sum of stoichiometric coefficients"
        ],
        2,
        "Order is experimental and may be 0 or fractional; molecularity is a whole number (1, 2 or 3) of colliding species."
       ],
       [
        "In a multi-step reaction the step that controls the overall rate is the",
        [
         "fastest step",
         "last step",
         "step with the highest molecularity",
         "slowest step, called the rate determining step"
        ],
        3,
        "The overall rate is governed by the slowest step, like the slowest runner in a relay race."
       ],
       [
        "Integrated rate equations are used mainly because",
        [
         "they relate directly measured concentrations at different times to k, avoiding the difficulty of finding slopes of tangents",
         "they give the instantaneous rate without any measurement",
         "they apply only to reactions with a catalyst",
         "they remove the need to know the initial concentration"
        ],
        0,
        "Concentration–time data are measured directly, so integrated equations make finding k and order easier than tangents."
       ],
       [
        "For a zero order reaction R → P, a plot of [R] against time is",
        [
         "a straight line with slope k/2.303",
         "a straight line with slope −k and intercept [R]₀",
         "an exponential decay curve",
         "a horizontal line at [R]₀"
        ],
        1,
        "From [R] = −kt + [R]₀, the plot of [R] versus t is a straight line with slope −k."
       ],
       [
        "The decomposition of gaseous NH₃ on a hot platinum surface is zero order at high pressure because",
        [
         "ammonia is present in large excess in water",
         "platinum is consumed during the reaction",
         "the metal surface gets saturated with gas molecules, so the rate no longer depends on concentration",
         "the reaction has molecularity zero"
        ],
        2,
        "A saturated catalyst surface fixes the amount of NH₃ on it, so Rate = k [NH₃]⁰ = k."
       ],
       [
        "For a first order reaction, a straight line is obtained when we plot",
        [
         "ln [R] against t, with slope −k",
         "[R] against t, with slope −k",
         "1/[R] against t, with slope k",
         "[R] against 1/t, with slope k"
        ],
        0,
        "ln [R] = −kt + ln [R]₀ is a straight line with slope −k."
       ],
       [
        "A first order reaction has k = 1.15 × 10⁻³ s⁻¹. The time for 5 g of reactant to reduce to 3 g is about (log 5 = 0.6990, log 3 = 0.4771)",
        [
         "193 s",
         "444 s",
         "603 s",
         "1000 s"
        ],
        1,
        "t = (2.303/k) log (5/3) = (2.303/1.15 × 10⁻³) × 0.2219 ≈ 444 s. (NCERT Intext 3.5)"
       ],
       [
        "For the first order gas phase reaction A(g) → B(g) + C(g), the initial pressure is 0.4 atm and the total pressure at time t is 0.6 atm. The partial pressure of A at time t is",
        [
         "0.2 atm",
         "0.6 atm",
         "0.1 atm",
         "0.5 atm"
        ],
        0,
        "pA = 2pᵢ − pₜ = 0.8 − 0.6 = 0.2 atm."
       ],
       [
        "A first order reaction has k = 0.0231 min⁻¹. Its half-life is (use t½ = 0.693/k)",
        [
         "43.3 min",
         "0.016 min",
         "30 min",
         "99.7 min"
        ],
        2,
        "t½ = 0.693/0.0231 = 30 min."
       ],
       [
        "For a zero order reaction, if the initial concentration of the reactant is doubled, the half-life",
        [
         "remains the same",
         "becomes half",
         "becomes four times",
         "becomes double"
        ],
        3,
        "For zero order, t½ = [R]₀/2k is directly proportional to [R]₀."
       ],
       [
        "The hydrolysis of ethyl acetate in a large excess of water behaves as a first order reaction because",
        [
         "the concentration of water remains almost constant during the reaction",
         "ethyl acetate is a catalyst",
         "water is not a reactant",
         "the reaction is unimolecular"
        ],
        0,
        "Water is in such large excess that its concentration barely changes, so the rate depends only on the ester: a pseudo first order reaction."
       ],
       [
        "For most chemical reactions, when the temperature is raised by 10°, the rate constant",
        [
         "becomes nearly ten times",
         "becomes nearly double",
         "decreases to nearly half",
         "remains unchanged"
        ],
        1,
        "A 10° rise nearly doubles the rate constant."
       ],
       [
        "In the Arrhenius equation k = A e^(−Ea/RT), the factor e^(−Ea/RT) represents",
        [
         "the total number of collisions per second",
         "the fraction of collisions with proper orientation",
         "the fraction of molecules with kinetic energy equal to or greater than Ea",
         "the fraction of molecules with energy less than Ea"
        ],
        2,
        "e^(−Ea/RT) gives the fraction of molecules having energy at least equal to the activation energy."
       ],
       [
        "A plot of ln k against 1/T is a straight line with",
        [
         "slope −Ea/R and intercept ln A",
         "slope Ea/R and intercept A",
         "slope −R/Ea and intercept ln A",
         "slope −Ea and intercept ln R"
        ],
        0,
        "ln k = −Ea/R × (1/T) + ln A."
       ],
       [
        "On raising the temperature, the Maxwell–Boltzmann distribution curve of molecular kinetic energies",
        [
         "shifts its peak to lower energy and becomes narrower",
         "keeps the same peak and gets a larger total area",
         "becomes a straight line",
         "shifts its peak to higher energy and broadens, keeping the total area constant"
        ],
        3,
        "The peak moves right and spreads out; the area stays equal to one, so more molecules have energy ≥ Ea."
       ],
       [
        "Activation energy is best described as",
        [
         "the energy needed to form the activated complex from the reactants",
         "the energy released when products form",
         "the enthalpy change of the overall reaction",
         "the average kinetic energy of the reactant molecules"
        ],
        0,
        "Ea is the energy difference between the activated complex and the reactants."
       ],
       [
        "A catalyst increases the rate of a reaction by",
        [
         "increasing the temperature of the reaction",
         "changing the Gibbs energy ΔG of the reaction",
         "providing an alternative path with lower activation energy",
         "increasing the equilibrium constant"
        ],
        2,
        "A catalyst lowers Ea through an intermediate complex; ΔG and K are unchanged."
       ],
       [
        "A substance that decreases the rate of a reaction is called a(n)",
        [
         "catalyst",
         "inhibitor",
         "promoter",
         "intermediate"
        ],
        1,
        "The word catalyst is not used for a substance that reduces the rate; it is called an inhibitor."
       ],
       [
        "According to collision theory, a collision is effective only if the colliding molecules have",
        [
         "equal masses and equal speeds",
         "proper orientation but any energy",
         "kinetic energy less than the activation energy",
         "at least the threshold energy and proper orientation"
        ],
        3,
        "Sufficient energy and proper orientation are both needed for bond breaking and new bond formation."
       ],
       [
        "In collision theory the rate is written as Rate = P Z_AB e^(−Ea/RT). The factor P is called the",
        [
         "steric (probability) factor",
         "frequency factor",
         "activation factor",
         "stoichiometric factor"
        ],
        0,
        "P accounts for the fraction of collisions with proper orientation."
       ]
      ],
      [
       [
        "For 2A → products, the concentration of A falls from 0.5 mol L⁻¹ to 0.4 mol L⁻¹ in 10 minutes. The rate of the reaction in mol L⁻¹ s⁻¹ is",
        [
         "1.67 × 10⁻⁴",
         "8.33 × 10⁻⁵",
         "5 × 10⁻³",
         "1.0 × 10⁻²"
        ],
        1,
        "Rate of reaction = −½ Δ[A]/Δt = ½ × 0.1/600 s = 8.33 × 10⁻⁵ mol L⁻¹ s⁻¹.",
        "Divide by the coefficient 2 and convert minutes to seconds."
       ],
       [
        "For 2N₂O₅ → 4NO₂ + O₂, the rate of the reaction (as defined using stoichiometric coefficients) is 3 × 10⁻⁴ mol L⁻¹ s⁻¹. The rate of formation of NO₂ is",
        [
         "1.2 × 10⁻³ mol L⁻¹ s⁻¹",
         "7.5 × 10⁻⁵ mol L⁻¹ s⁻¹",
         "3 × 10⁻⁴ mol L⁻¹ s⁻¹",
         "6 × 10⁻⁴ mol L⁻¹ s⁻¹"
        ],
        0,
        "Rate = ¼ d[NO₂]/dt, so d[NO₂]/dt = 4 × 3 × 10⁻⁴ = 1.2 × 10⁻³ mol L⁻¹ s⁻¹."
       ],
       [
        "Find the error. A student says: “The average rate of a reaction between t = 0 and t = 200 s tells me exactly how fast the reaction is going at t = 100 s.” What is wrong?",
        [
         "The average rate must be calculated using the product concentration only",
         "Rates cannot be measured in seconds",
         "The rate at t = 100 s is always zero",
         "The average rate is the same value for the whole interval; the rate at one instant is the slope of the tangent at that time"
        ],
        3,
        "Average rate is Δ[R]/Δt over an interval; the rate at one moment is the instantaneous rate (slope of the tangent, Δt → 0)."
       ],
       [
        "In a flask, a gaseous reaction 2NO + O₂ → 2NO₂ has rate law Rate = k [NO]² [O₂]. If the volume of the reaction vessel is halved at constant temperature, the rate becomes",
        [
         "4 times",
         "8 times",
         "2 times",
         "16 times"
        ],
        1,
        "Halving the volume doubles every concentration, so rate becomes 2² × 2 = 8 times."
       ],
       [
        "Which statement about the rate constant k of a reaction is correct?",
        [
         "It decreases steadily as the reactant is consumed",
         "It can be calculated from the balanced equation without any experiment",
         "At a given temperature it is characteristic of the reaction and does not depend on the reactant concentrations",
         "It has the same value at all temperatures"
        ],
        2,
        "k is the proportionality constant in the rate law; it changes with temperature (and catalyst) but not with concentration."
       ],
       [
        "The initial rates for A + B → products are: [A] = 0.1, [B] = 0.1 M gives 2 × 10⁻³ M s⁻¹; [A] = 0.2, [B] = 0.1 M gives 8 × 10⁻³ M s⁻¹; [A] = 0.1, [B] = 0.2 M gives 4 × 10⁻³ M s⁻¹. The rate constant k is",
        [
         "0.2 L² mol⁻² s⁻¹",
         "20 L² mol⁻² s⁻¹",
         "2 × 10⁻³ L² mol⁻² s⁻¹",
         "2 L² mol⁻² s⁻¹"
        ],
        3,
        "Rate = k [A]² [B] (4× for 2× A, 2× for 2× B); k = 2 × 10⁻³/(0.1² × 0.1) = 2 L² mol⁻² s⁻¹."
       ],
       [
        "Find the error. For CHCl₃ + Cl₂ → CCl₄ + HCl a student writes Rate = k [CHCl₃][Cl₂] from the balanced equation, but the experimental rate is Rate = k [CHCl₃][Cl₂]¹ᐟ². What is the error in the student’s method?",
        [
         "Rate laws must be found by experiment, not copied from the coefficients; the true overall order is 3/2",
         "The student should have used the products in the rate law",
         "The true overall order is 2 because ½ must be rounded up",
         "Chlorine is a catalyst, so it must not appear in the rate law"
        ],
        0,
        "Exponents need not equal coefficients; here the order is 1 + ½ = 3/2."
       ],
       [
        "A reaction has rate constant 5.2 × 10⁻³ L² mol⁻² s⁻¹. The order of the reaction, and the unit of its rate, are",
        [
         "second order; mol L⁻¹ s⁻¹",
         "third order; mol⁻² L² s⁻¹",
         "third order; mol L⁻¹ s⁻¹",
         "first order; s⁻¹"
        ],
        2,
        "Unit of k = (mol L⁻¹)¹⁻ⁿ s⁻¹; n = 3 gives L² mol⁻² s⁻¹. Rate always has units mol L⁻¹ s⁻¹; mol⁻² L² s⁻¹ is the unit of k."
       ],
       [
        "Find the error. A student says: “KClO₃ + 6FeSO₄ + 3H₂SO₄ → KCl + 3Fe₂(SO₄)₃ + 3H₂O involves 10 reactant molecules, so it is a tenth order reaction.” What is wrong?",
        [
         "The reaction is actually zero order because water is a product",
         "Order is found by experiment (this reaction is actually second order) and it occurs in several steps",
         "It is a tenth order reaction, but not bimolecular",
         "Order and molecularity are always equal to the number of molecules in the equation"
        ],
        1,
        "A reaction with so many molecules must occur in several steps; its experimental order is two."
       ],
       [
        "Hydrogen peroxide decomposes in alkaline iodide: Step 1 (slow): H₂O₂ + I⁻ → H₂O + IO⁻; Step 2 (fast): H₂O₂ + IO⁻ → H₂O + I⁻ + O₂. Which statement is correct?",
        [
         "Rate = k [H₂O₂][I⁻]; IO⁻ is an intermediate and I⁻ is a catalyst",
         "Rate = k [H₂O₂]²; IO⁻ is a catalyst and I⁻ is an intermediate",
         "Rate = k [H₂O₂][IO⁻]; IO⁻ is an intermediate and I⁻ is a catalyst",
         "Rate = k [H₂O₂]²[I⁻]; both IO⁻ and I⁻ are intermediates"
        ],
        0,
        "The slow step is rate determining and bimolecular, so Rate = k [H₂O₂][I⁻]. IO⁻ is formed and used up (intermediate); I⁻ is regenerated (catalyst)."
       ],
       [
        "A reaction is carried out and its rate is measured only through slopes of tangents. Why is an integrated rate equation preferred for finding the order?",
        [
         "It gives the molecularity directly",
         "It makes the reaction go faster",
         "It does not need any concentration data",
         "It uses directly measured concentrations at different times, so a straight-line test (such as ln [R] vs t) identifies the order"
        ],
        3,
        "Differential rates need tangents, which are hard to draw accurately; linear plots of integrated equations are easier to test."
       ],
       [
        "A zero order reaction has [R]₀ = 0.8 mol L⁻¹ and k = 2 × 10⁻² mol L⁻¹ s⁻¹. The time for 75% of the reactant to be consumed is",
        [
         "20 s",
         "30 s",
         "40 s",
         "15 s"
        ],
        1,
        "t = ([R]₀ − [R])/k = 0.6/0.02 = 30 s."
       ],
       [
        "A zero order reaction is 50% complete in 20 minutes. The time it takes to go to completion is",
        [
         "40 min",
         "20 min",
         "60 min",
         "infinite"
        ],
        0,
        "t½ = [R]₀/2k, so complete time [R]₀/k = 2 × t½ = 40 min."
       ],
       [
        "A first order reaction is 40% complete in 10 minutes. Its rate constant is (log 6 = 0.7781)",
        [
         "0.0223 min⁻¹",
         "0.0511 min⁻¹",
         "0.1177 min⁻¹",
         "0.0693 min⁻¹"
        ],
        1,
        "k = (2.303/10) log (100/60) = 0.2303 × 0.2219 = 0.0511 min⁻¹."
       ],
       [
        "For A(g) → B(g) + C(g), pᵢ = 0.5 atm and the total pressure after 100 s is 0.6 atm. The first order rate constant is (log 1.25 = 0.0970)",
        [
         "2.23 × 10⁻³ s⁻¹",
         "1.61 × 10⁻² s⁻¹",
         "9.7 × 10⁻⁴ s⁻¹",
         "4.46 × 10⁻³ s⁻¹"
        ],
        0,
        "pA = 2 × 0.5 − 0.6 = 0.4 atm; k = (2.303/100) log (0.5/0.4) = 2.23 × 10⁻³ s⁻¹."
       ],
       [
        "A first order reaction has k = 1.15 × 10⁻³ s⁻¹. Starting with 5 g of reactant, the mass left after 2000 s is about (take log⁻¹ 1 = 10)",
        [
         "1.0 g",
         "0.5 g",
         "2.5 g",
         "0.25 g"
        ],
        1,
        "log ([R]₀/[R]) = kt/2.303 = 1.15 × 10⁻³ × 2000/2.303 = 1, so [R] = 5/10 = 0.5 g."
       ],
       [
        "Find the error. A student plots [R] against t for a reaction and gets a curve, so she says: “It cannot be first order because a first order plot should be a straight line of slope −k.” What should she do?",
        [
         "Plot 1/t against [R]",
         "Conclude the reaction is zero order, since zero order plots are curved",
         "Plot ln [R] against t; for first order this gives a straight line of slope −k",
         "Plot t against t²"
        ],
        2,
        "A plot of [R] vs t is straight only for zero order; for first order the straight line is ln [R] vs t."
       ],
       [
        "Find the error. A student calculates k for a first order reaction as k = (2.303/t) log ([R]/[R]₀) and gets a negative value. The correct form is",
        [
         "k = (2.303/t) log ([R]₀/[R])",
         "k = (t/2.303) log ([R]₀/[R])",
         "k = 2.303 t log ([R]₀/[R])",
         "k = (0.693/t) log ([R]₀ − [R])"
        ],
        0,
        "The ratio must be initial over final concentration, [R]₀/[R], so that k is positive."
       ],
       [
        "For a first order reaction, the ratio of the time needed for 99% completion to the half-life is closest to (log 2 = 0.3010)",
        [
         "10",
         "3.32",
         "6.64",
         "99"
        ],
        2,
        "t₉₉ = 2.303 log 100/k = 4.606/k; t½ = 0.693/k; ratio = 6.64."
       ],
       [
        "Find the error. A first order reaction has t½ = 20 min. A student says the reaction will be over in 40 min. What is wrong?",
        [
         "After 40 min (two half-lives) 25% of the reactant still remains",
         "After 40 min 50% remains",
         "After 40 min 12.5% remains",
         "Half-life of a first order reaction doubles every 20 min"
        ],
        0,
        "Each half-life halves the remaining amount: 100% → 50% → 25%."
       ],
       [
        "Case. In a study of a reaction, doubling [A] doubled the initial rate and tripling [B] had no effect on it. The half-life was found to be 10 min. How long will it take for [A] to fall from 0.8 M to 0.2 M?",
        [
         "30 min",
         "40 min",
         "10 min",
         "20 min"
        ],
        3,
        "Rate = k [A], first order with a constant half-life; 0.8 → 0.4 → 0.2 takes two half-lives = 20 min."
       ],
       [
        "Find the error. A student says: “Hydrolysis of 0.01 mol of ethyl acetate in 10 mol of water is second order, so its rate must depend on the change in water concentration.” Which is the correct statement?",
        [
         "Water is a catalyst and so it is not consumed",
         "Only 0.01 mol of water is consumed out of 10 mol, so [H₂O] is practically constant and the reaction appears first order",
         "About half of the water is consumed, so the order falls to zero",
         "Water does not take part in the reaction"
        ],
        1,
        "Water changes from 10 mol to 9.99 mol, so the reaction behaves as pseudo first order."
       ],
       [
        "Assertion (A): The inversion of cane sugar, C₁₂H₂₂O₁₁ + H₂O → glucose + fructose, in dilute acid follows Rate = k [C₁₂H₂₂O₁₁] although two molecules appear on the reactant side.\nReason (R): Water is present in large excess and its concentration remains almost constant during the reaction.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Water is in large excess, so the reaction is pseudo first order."
       ],
       [
        "The rate of a reaction doubles when the temperature is raised from 300 K to 310 K. The activation energy is about (log 2 = 0.3010, R = 8.314 J K⁻¹ mol⁻¹)",
        [
         "53.6 kJ mol⁻¹",
         "5.36 kJ mol⁻¹",
         "107 kJ mol⁻¹",
         "26.8 kJ mol⁻¹"
        ],
        0,
        "Ea = 2.303 R log 2 × T₁T₂/(T₂−T₁) = 19.15 × 0.301 × 9300 = 53.6 kJ mol⁻¹."
       ],
       [
        "A reaction has Ea = 50 kJ mol⁻¹. The factor by which its rate constant increases on heating from 300 K to 310 K is (R = 8.314 J K⁻¹ mol⁻¹, antilog 0.2808 = 1.91)",
        [
         "3.82",
         "0.52",
         "6.5",
         "1.91"
        ],
        3,
        "log (k₂/k₁) = (50000/19.15) × (10/93000) = 0.2808, so k₂/k₁ = 1.91."
       ],
       [
        "The fraction of reactant molecules with energy equal to or greater than Ea at 300 K, for Ea = 50 kJ mol⁻¹, is about (R = 8.314 J K⁻¹ mol⁻¹)",
        [
         "2.0 × 10⁹",
         "4.0 × 10⁻¹⁸",
         "2.0 × 10⁻⁹",
         "0.05"
        ],
        2,
        "Fraction = e^(−Ea/RT) = e^(−50000/(8.314 × 300)) = e^(−20.05) ≈ 2 × 10⁻⁹."
       ],
       [
        "A plot of log k against 1/T for a reaction is a straight line of slope −2.0 × 10³ K. The activation energy is (R = 8.314 J K⁻¹ mol⁻¹)",
        [
         "16.6 kJ mol⁻¹",
         "38.3 kJ mol⁻¹",
         "76.6 kJ mol⁻¹",
         "0.0383 kJ mol⁻¹"
        ],
        1,
        "Slope = −Ea/(2.303R), so Ea = 2000 × 2.303 × 8.314 = 38.3 kJ mol⁻¹."
       ],
       [
        "Find the error. A student plots ln k against T and says the slope is −Ea/R. What is the correct statement?",
        [
         "The slope −Ea/R is obtained for ln k against 1/T, not against T",
         "The slope of ln k against T is +Ea/R",
         "The plot should be of k against 1/T",
         "The slope of ln k against 1/T is −Ea·R"
        ],
        0,
        "ln k = −(Ea/R)(1/T) + ln A is linear in 1/T."
       ],
       [
        "Assertion (A): The rate constant of a reaction increases when the temperature is raised.\nReason (R): At higher temperature the activation energy of the reaction increases.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true because more molecules have energy ≥ Ea; R is false since Ea is characteristic of the reaction path and does not increase with T."
       ],
       [
        "At 300 K, a catalyst lowers the activation energy of a reaction from 75 to 50 kJ mol⁻¹, and the Arrhenius factor A is unchanged. The rate constant increases by a factor of about (R = 8.314 J K⁻¹ mol⁻¹)",
        [
         "2.26 × 10⁴",
         "25",
         "1.0 × 10²",
         "4.5 × 10²"
        ],
        0,
        "k′/k = e^(ΔEa/RT) = e^(25000/(8.314 × 300)) = e^10.02 ≈ 2.26 × 10⁴."
       ],
       [
        "Assertion (A): A catalyst can make a non-spontaneous reaction proceed.\nReason (R): A catalyst lowers the activation energy by providing an alternative pathway.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false because a catalyst does not change ΔG; it cannot make a non-spontaneous reaction go. R is true."
       ],
       [
        "Find the error. A student says: “A catalyst speeds up the forward reaction only, so it increases the equilibrium constant and gives more product.” What is the correct statement?",
        [
         "A catalyst speeds up forward and backward reactions equally, so K is unchanged and equilibrium is reached sooner",
         "A catalyst speeds only the backward reaction",
         "A catalyst increases ΔG so that equilibrium shifts",
         "A catalyst is consumed, so K decreases"
        ],
        0,
        "The equilibrium constant and ΔG are not changed by a catalyst."
       ],
       [
        "Case. Two bimolecular elementary reactions X and Y occur at the same temperature with the same activation energy and the same collision frequency. The steric factor P is 0.1 for X and 0.001 for Y. Compare their rates.",
        [
         "X is 10 times faster than Y",
         "X is 100 times faster than Y",
         "Both have the same rate",
         "Y is 100 times faster than X"
        ],
        1,
        "Rate = P Z_AB e^(−Ea/RT); only P differs, so rate ratio = 0.1/0.001 = 100."
       ],
       [
        "Assertion (A): Not every collision between reactant molecules leads to the formation of products.\nReason (R): Every collision between molecules having energy at least equal to Ea leads to products.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true; R is false because molecules must also collide with proper orientation (steric factor P)."
       ],
       [
        "Assertion (A): The unit of the rate constant of a first order reaction is s⁻¹.\nReason (R): The half-life of a first order reaction is independent of the initial concentration.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both are true, but the unit follows from rate/concentration, not from the constant half-life."
       ]
      ]
     ]
    },
    {
     "n": 4,
     "t": "The d- and f-Block Elements",
     "levels": [
      [
       [
        "Which groups of the periodic table make up the d-block?",
        [
         "Groups 1 and 2",
         "Groups 3 to 12",
         "Groups 13 to 18",
         "Groups 3 to 10 only"
        ],
        1,
        "The d orbitals of the penultimate shell are progressively filled in groups 3–12."
       ],
       [
        "Which option lists the four rows of transition metals in the d-block?",
        [
         "3d and 4d only",
         "3d, 4d and 5d only",
         "3d, 4d, 5d, 6d and 7d",
         "3d, 4d, 5d and 6d"
        ],
        3,
        "The 3d, 4d, 5d and 6d series are the four rows of transition metals."
       ],
       [
        "The general outer electronic configuration of the d-block elements is",
        [
         "(n–1)d¹⁻¹⁰ ns¹⁻²",
         "nd¹⁻¹⁰ (n+1)s¹⁻²",
         "(n–1)d¹⁻¹⁰ ns² np¹⁻⁶",
         "(n–2)f¹⁻¹⁴ (n–1)d¹⁻¹⁰ ns²"
        ],
        0,
        "The inner (n–1)d orbitals receive one to ten electrons while ns has one or two (Pd is the exception, 4d¹⁰5s⁰)."
       ],
       [
        "Chromium has the outer configuration 3d⁵4s¹ and not 3d⁴4s² because",
        [
         "4s is always lower in energy than 3d",
         "a completely filled 4s orbital repels 3d electrons",
         "a half-filled d set is extra stable and the 3d–4s energy gap is small",
         "chromium prefers an even number of electrons"
        ],
        2,
        "Half-filled 3d⁵ is more stable and the small 3d–4s gap lets an electron shift."
       ],
       [
        "On what ground is scandium (Z = 21) a transition element but zinc (Z = 30) is not?",
        [
         "Sc has two 4s electrons while Zn has one",
         "Sc is a metal while Zn is a non-metal",
         "Sc has an incomplete 3d subshell (3d¹) while Zn has 3d¹⁰ in its atom and ions",
         "Sc forms coloured ions while Zn does not form any ions"
        ],
        2,
        "IUPAC defines a transition metal as having an incomplete d subshell in the atom or its ions (NCERT Example 4.1)."
       ],
       [
        "Silver (4d¹⁰5s¹) has completely filled d orbitals in the ground state, yet it is treated as a transition element because",
        [
         "its +2 ion, Ag²⁺, has an incomplete 4d⁹ configuration",
         "its 5s orbital is only half filled in Ag⁺",
         "it is used for coins like copper and gold",
         "it shows the oxidation states +1 and +3 only"
        ],
        0,
        "A metal with an incomplete d subshell in any of its common ions counts as a transition metal (NCERT Intext 4.1)."
       ],
       [
        "Which transition element has the unusual outer configuration 4d¹⁰5s⁰ in the ground state?",
        [
         "Pt",
         "Ag",
         "Cd",
         "Pd"
        ],
        3,
        "Palladium is the one exception to (n–1)d¹⁻¹⁰ns¹⁻² with no s electron."
       ],
       [
        "Melting points in a transition series rise to a maximum near d⁵ and then fall. This is because",
        [
         "the atomic radius is largest in the middle of the series",
         "the number of unpaired d electrons taking part in metallic bonding is greatest near the middle",
         "the ns electrons are lost completely in the middle",
         "the nuclear charge decreases after d⁵"
        ],
        1,
        "More unpaired (n–1)d electrons in addition to ns electrons give stronger interatomic bonding."
       ],
       [
        "Why does zinc have the lowest enthalpy of atomisation (126 kJ mol⁻¹) in the 3d series?",
        [
         "Its 3d¹⁰ subshell has no unpaired electrons, so metallic bonding is weak",
         "It has the largest atomic radius in the series",
         "It has one electron in the 4s orbital",
         "It loses its 3d electrons very easily"
        ],
        0,
        "Only 4s electrons take part, with no unpaired d electrons for strong interatomic interaction (NCERT Intext 4.2)."
       ],
       [
        "Which of the following is NOT a typical property of transition metals (excluding Zn, Cd and Hg)?",
        [
         "High tensile strength",
         "High melting and boiling points",
         "Low hardness and high volatility",
         "Good thermal and electrical conductivity"
        ],
        2,
        "These metals are very hard with low volatility and high melting points."
       ],
       [
        "Metals of the second and third transition series have higher enthalpies of atomisation than those of the first series. A consequence is",
        [
         "lower melting points for the heavier metals",
         "more frequent metal–metal bonding in compounds of the heavier transition metals",
         "absence of metal–metal bonds in their compounds",
         "easier atomisation of the heavier metals"
        ],
        1,
        "Stronger interatomic bonding in 4d and 5d metals favours metal–metal bonding."
       ],
       [
        "Along the 3d series the atomic radii decrease only slightly. The reason is",
        [
         "the nuclear charge stays constant across the series",
         "the added electrons enter the outermost shell",
         "the 4s electrons are removed from every atom",
         "d electrons shield the nuclear charge poorly, but the new electron goes into an inner subshell"
        ],
        3,
        "Each added d electron shields poorly, so the effective nuclear charge rises a little."
       ],
       [
        "Zr (160 pm) and Hf (159 pm) have almost identical radii because of",
        [
         "actinoid contraction",
         "lanthanoid contraction",
         "the inert pair effect",
         "poor shielding by s electrons"
        ],
        1,
        "The 4f electrons filled before the 5d series shield poorly and shrink the 5d elements."
       ],
       [
        "The density of the elements increases markedly from Ti to Cu because",
        [
         "metallic radius increases while atomic mass decreases",
         "both atomic radius and atomic mass decrease",
         "the elements change from hcp to bcc structure",
         "metallic radius decreases while atomic mass increases"
        ],
        3,
        "A smaller volume and larger mass per atom both increase density."
       ],
       [
        "Compared with a period of non-transition elements, the rise in ionisation enthalpy along the 3d series is",
        [
         "small, because 3d electrons shield the 4s electrons from the increasing nuclear charge",
         "large, because 4s electrons are not shielded at all",
         "small, because the atomic radius increases sharply",
         "large, because d electrons do not shield at all"
        ],
        0,
        "Added d electrons shield the 4s electrons somewhat, so ionisation enthalpies rise only slightly."
       ],
       [
        "The second ionisation enthalpy of manganese is lower than that of chromium because the ion formed, Mn²⁺, has the configuration",
        [
         "d⁴ (3d⁴)",
         "d⁶ (3d⁶)",
         "d⁵ (3d⁵), with extra exchange-energy stability",
         "d¹⁰ (3d¹⁰)"
        ],
        2,
        "Mn⁺ is 3d⁵4s¹, so removing the 4s electron gives the stable half-filled 3d⁵, whereas Cr⁺ is already 3d⁵ and resists further ionisation."
       ],
       [
        "The second ionisation enthalpy is unusually high for Cr and Cu because",
        [
         "their M⁺ ions have d⁴ and d⁹ configurations",
         "they have no 4s electrons to lose",
         "their M⁺ ions have the stable d⁵ and d¹⁰ configurations respectively",
         "they have the largest atomic radii in the series"
        ],
        2,
        "Removing an electron from d⁵ (Cr⁺) or d¹⁰ (Cu⁺) is difficult."
       ],
       [
        "It is difficult to obtain oxidation states higher than +2 for Cu, Ni and Zn because",
        [
         "their third ionisation enthalpies are very high",
         "their first ionisation enthalpies are very low",
         "they have no 4s electrons",
         "their second ionisation enthalpies are negative"
        ],
        0,
        "The third ionisation enthalpies of these elements are very high."
       ],
       [
        "Which first-row transition element shows all oxidation states from +2 to +7?",
        [
         "Cr",
         "Fe",
         "V",
         "Mn"
        ],
        3,
        "Manganese, near the middle of the series, shows +2 to +7."
       ],
       [
        "The oxidation states of a transition element in its compounds (for example V: +2, +3, +4, +5) differ from each other by",
        [
         "two units",
         "unity (one unit)",
         "three units",
         "four units"
        ],
        1,
        "Incomplete d filling allows steps of one, unlike the steps of two in non-transition elements."
       ],
       [
        "Name the first-row transition element that does NOT exhibit variable oxidation states.",
        [
         "Scandium",
         "Titanium",
         "Manganese",
         "Iron"
        ],
        0,
        "Sc shows only +3, giving the noble-gas core (NCERT Example 4.3)."
       ],
       [
        "In group 6, which statement about the +6 state is correct?",
        [
         "Cr(VI) is more stable than Mo(VI) and W(VI)",
         "All three are equally stable",
         "Mo(VI) and W(VI) are more stable than Cr(VI)",
         "None of them forms a +6 state"
        ],
        2,
        "Unlike the p-block, the higher oxidation states become more stable down the d-block groups."
       ],
       [
        "What is the oxidation state of nickel in Ni(CO)₄?",
        [
         "+2",
         "0",
         "+4",
         "–4"
        ],
        1,
        "CO is a π-acceptor ligand, which stabilises metals in zero oxidation state."
       ],
       [
        "Which first-row element has the largest number of oxidation states and why?",
        [
         "Zn, because it has completely filled orbitals",
         "Sc, because it has the fewest electrons",
         "Cu, because its d subshell is filled",
         "Mn, because it has the maximum number of unpaired d electrons available for bonding"
        ],
        3,
        "The middle elements, with the most unpaired electrons, show the widest range (NCERT Intext 4.3)."
       ],
       [
        "Copper cannot liberate hydrogen from dilute acids because",
        [
         "copper is more reactive than hydrogen",
         "E°(Cu²⁺/Cu) is positive (+0.34 V), owing to its high atomisation enthalpy and insufficient hydration enthalpy",
         "copper has a very negative E°",
         "copper forms an insoluble oxide layer in all acids"
        ],
        1,
        "The energy to convert Cu(s) to Cu²⁺(aq) is not balanced by hydration (NCERT Intext 4.4)."
       ],
       [
        "The E°(M²⁺/M) of nickel is more negative than expected from the trend mainly because of",
        [
         "its very high ionisation enthalpy",
         "its low enthalpy of atomisation",
         "a completely filled d subshell in Ni²⁺",
         "its highest negative enthalpy of hydration"
        ],
        3,
        "Ni²⁺ is strongly hydrated, which favours the formation of the ion."
       ],
       [
        "The comparatively high E°(Mn³⁺/Mn²⁺) value shows that",
        [
         "Mn²⁺ (d⁵) is particularly stable",
         "Mn³⁺ is particularly stable",
         "Mn²⁺ has a noble-gas configuration",
         "Mn²⁺ is a strong reducing agent"
        ],
        0,
        "Mn³⁺ readily gains an electron to reach the stable d⁵ Mn²⁺."
       ],
       [
        "Why are all copper(II) halides known except the iodide?",
        [
         "CuI₂ is too stable to form",
         "iodine is too small to bond with copper",
         "Cu²⁺ oxidises I⁻ to I₂",
         "Cu²⁺ is reduced to Cu by I⁻ forming CuI₂ gas"
        ],
        2,
        "2Cu²⁺ + 4I⁻ → Cu₂I₂ + I₂."
       ],
       [
        "The highest Mn fluoride is MnF₄ whereas the highest oxide is Mn₂O₇ because",
        [
         "oxygen is larger than fluorine",
         "fluorine is less electronegative than oxygen",
         "oxygen can form multiple bonds with the metal",
         "oxygen has a lower bond enthalpy than fluorine"
        ],
        2,
        "Multiple bonding makes oxygen better than fluorine at stabilising high oxidation states."
       ],
       [
        "Cu⁺ is unstable in aqueous solution because",
        [
         "it disproportionates (2Cu⁺ → Cu²⁺ + Cu), as the hydration enthalpy of Cu²⁺ is much more negative",
         "it is oxidised by water to Cu³⁺",
         "Cu⁺ is reduced to Cu₂O by water",
         "it has a half-filled d subshell"
        ],
        0,
        "The large hydration enthalpy of Cu²⁺ more than compensates for its second ionisation enthalpy (NCERT Intext 4.9)."
       ],
       [
        "The oxidising power increases in the order VO₂⁺ < Cr₂O₇²⁻ < MnO₄⁻ because",
        [
         "the metal radius increases from V to Mn",
         "the number of d electrons increases from V to Mn",
         "the metals become less electronegative",
         "the lower species formed becomes progressively more stable"
        ],
        3,
        "This follows the increasing stability of the species to which they are reduced (NCERT Example 4.5)."
       ],
       [
        "Which is the stronger reducing agent, Cr²⁺ or Fe²⁺, and why?",
        [
         "Fe²⁺, because it changes from d⁶ to d⁵",
         "Cr²⁺, because it changes from d⁴ to the stable d³ configuration",
         "Cr²⁺, because Cr³⁺ is a strong oxidant",
         "Fe²⁺, because Fe has a higher atomic number"
        ],
        1,
        "Cr²⁺ → Cr³⁺ gives half-filled t₂g, and E°(Cr³⁺/Cr²⁺) is far more negative than E°(Fe³⁺/Fe²⁺) (NCERT Intext 4.7)."
       ],
       [
        "Which pair of M³⁺ ions are the strongest oxidising agents in aqueous solution among the first-row metals?",
        [
         "Mn³⁺ and Co³⁺",
         "Ti³⁺ and V³⁺",
         "Cr³⁺ and Fe³⁺",
         "Sc³⁺ and Ti³⁺"
        ],
        0,
        "They have the most positive E°(M³⁺/M²⁺) values."
       ],
       [
        "Titanium and vanadium resist dilute non-oxidising acids at room temperature even though their E°(M²⁺/M) values are negative. This is because",
        [
         "their E° values are actually positive",
         "they form soluble sulphates immediately",
         "the reaction rate is extremely slow (kinetic factor)",
         "hydrogen ions cannot oxidise any metal"
        ],
        2,
        "Thermodynamic ability does not guarantee a fast reaction."
       ],
       [
        "Paramagnetism in transition metal ions arises from",
        [
         "completely filled d orbitals",
         "the presence of unpaired electrons",
         "paired electrons in the 4s orbital",
         "the nuclear spin of the metal"
        ],
        1,
        "Each unpaired electron has a spin magnetic moment and is attracted into the field."
       ],
       [
        "The spin-only magnetic moment of M²⁺(aq) with Z = 27 is closest to",
        [
         "1.73 BM",
         "2.84 BM",
         "4.90 BM",
         "3.87 BM"
        ],
        3,
        "Co²⁺ is d⁷ with 3 unpaired electrons: √(3×5) = 3.87 BM (NCERT Intext 4.8)."
       ],
       [
        "A species with a single unpaired electron has a spin-only magnetic moment of",
        [
         "0 BM",
         "1.73 BM",
         "2.84 BM",
         "3.87 BM"
        ],
        1,
        "μ = √(1×3) = 1.73 BM."
       ],
       [
        "Sc³⁺ and Zn²⁺ salts are colourless because",
        [
         "they absorb all visible light",
         "they have unpaired electrons",
         "their ligands are colourless",
         "no d–d transition is possible (d⁰ and d¹⁰ configurations)"
        ],
        3,
        "Colour arises from d–d excitation, which needs a partly filled d subshell."
       ],
       [
        "Transition metals form a large number of complexes because of",
        [
         "small ionic size, high ionic charge and availability of d orbitals for bonding",
         "large ionic size and low charge",
         "absence of d orbitals",
         "completely filled s orbitals"
        ],
        0,
        "These three factors favour binding of ligands."
       ],
       [
        "Which of the following correctly matches a catalyst with its process?",
        [
         "V₂O₅ – Haber process; Fe – Contact process; Ni – cracking",
         "V₂O₅ – hydrogenation; Fe – Contact process; Ni – Haber process",
         "V₂O₅ – Contact process; finely divided Fe – Haber process; Ni – catalytic hydrogenation",
         "Ni – Contact process; V₂O₅ – Haber process; Fe – hydrogenation"
        ],
        2,
        "These are the examples given for transition metal catalysis."
       ],
       [
        "The catalytic activity of transition metals is mainly ascribed to",
        [
         "their low melting points",
         "their completely filled d orbitals",
         "their ability to adopt multiple oxidation states and form complexes",
         "their diamagnetism"
        ],
        2,
        "Variable oxidation states let them form and release intermediates."
       ],
       [
        "Which statement about interstitial compounds is NOT correct?",
        [
         "They lose the metallic conductivity of the parent metal",
         "They have melting points higher than the pure metals",
         "They are very hard",
         "They are chemically inert"
        ],
        0,
        "Interstitial compounds retain metallic conductivity."
       ],
       [
        "Brass is an alloy of",
        [
         "copper and tin",
         "iron and carbon",
         "copper and nickel",
         "copper and zinc"
        ],
        3,
        "Brass is Cu–Zn and bronze is Cu–Sn."
       ],
       [
        "Mn₂O₇ dissolves in water to give",
        [
         "Mn(OH)₂, a base",
         "HMnO₄, an acid",
         "MnO₂ and O₂ only",
         "H₂MnO₃"
        ],
        1,
        "In higher oxides the acidic character predominates."
       ],
       [
        "V₂O₅ is described as",
        [
         "amphoteric though mainly acidic",
         "strongly basic",
         "neutral",
         "purely acidic with no basic character"
        ],
        0,
        "It reacts with alkalies and with acids."
       ],
       [
        "Sodium dichromate is obtained industrially from chromite ore by",
        [
         "roasting FeCr₂O₄ in a limited supply of air",
         "reducing FeCr₂O₄ with carbon and acidifying",
         "fusing FeCr₂O₄ with Na₂CO₃ in free access of air, then acidifying the sodium chromate",
         "electrolysing FeCr₂O₄ in alkali"
        ],
        2,
        "4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂; acidification gives Na₂Cr₂O₇."
       ],
       [
        "On acidifying a yellow chromate solution, the colour changes to",
        [
         "green, due to Cr³⁺",
         "orange, due to dichromate",
         "violet, due to Cr²⁺",
         "colourless"
        ],
        1,
        "2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O; the oxidation state of Cr stays +6."
       ],
       [
        "In acidic solution, each Cr₂O₇²⁻ ion accepts how many electrons, and to form what?",
        [
         "3 electrons, forming 2Cr⁵⁺",
         "6 electrons, forming 2Cr²⁺",
         "2 electrons, forming CrO₄²⁻",
         "6 electrons, forming 2Cr³⁺"
        ],
        3,
        "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O."
       ],
       [
        "Potassium dichromate is useful in volumetric analysis because it",
        [
         "is a reducing agent",
         "can be used as a primary standard",
         "is insoluble in water",
         "is colourless"
        ],
        1,
        "It is also a strong oxidising agent used in the leather industry."
       ],
       [
        "Potassium permanganate is prepared by fusing MnO₂ with KOH in presence of an oxidising agent like KNO₃. The dark green intermediate is",
        [
         "KMnO₄",
         "Mn₂O₇",
         "MnO",
         "K₂MnO₄"
        ],
        3,
        "2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ + 2H₂O."
       ],
       [
        "Permanganate ion (MnO₄⁻) is",
        [
         "tetrahedral and diamagnetic",
         "tetrahedral and paramagnetic",
         "square planar and diamagnetic",
         "octahedral and paramagnetic"
        ],
        0,
        "Mn is +7 (d⁰), so there is no unpaired electron."
       ],
       [
        "In acidic solution KMnO₄ is reduced to",
        [
         "MnO₂",
         "MnO₄²⁻",
         "Mn²⁺",
         "Mn³⁺"
        ],
        2,
        "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O."
       ],
       [
        "Permanganate titrations are not done in presence of hydrochloric acid because",
        [
         "HCl reduces Mn²⁺ to Mn",
         "HCl turns KMnO₄ yellow",
         "HCl is oxidised to chlorine",
         "HCl precipitates MnO₂ as MnCl₂"
        ],
        2,
        "Chlorine liberated makes the titration unsatisfactory."
       ],
       [
        "When heated at 513 K, KMnO₄ decomposes to give",
        [
         "K₂MnO₄, MnO₂ and O₂",
         "K₂O, Mn₂O₃ and O₂",
         "KMnO₂ and O₂",
         "MnO₂, K₂O and H₂"
        ],
        0,
        "2KMnO₄ → K₂MnO₄ + MnO₂ + O₂."
       ],
       [
        "In all lanthanoids, the tripositive ion (the most stable state) has the configuration",
        [
         "4fⁿ6s² with n = 1 to 14",
         "5dⁿ with n = 1 to 14",
         "4fⁿ5d¹ with n = 1 to 14",
         "4fⁿ with n = 1 to 14"
        ],
        3,
        "Ln³⁺ ions have no 6s or 5d electrons left."
       ],
       [
        "The lanthanoid contraction is due to",
        [
         "increasing shielding by 5d electrons",
         "poor shielding of one 4f electron by another as nuclear charge increases",
         "decrease in nuclear charge",
         "increase in the number of shells"
        ],
        1,
        "The imperfect shielding within the 4f sub-shell pulls the electrons closer."
       ],
       [
        "The +4 state of cerium is favoured because",
        [
         "Ce⁴⁺ has the noble-gas configuration, but it is a strong oxidant",
         "Ce⁴⁺ has a half-filled f subshell",
         "Ce⁴⁺ is a good reductant",
         "Ce³⁺ is unstable to disproportionation"
        ],
        0,
        "Ce(IV) reverts to the common +3 state (E° = +1.74 V)."
       ],
       [
        "Eu²⁺ and Yb²⁺ act as",
        [
         "oxidising agents, changing to +4",
         "catalysts without changing oxidation state",
         "reducing agents, changing to the common +3 state",
         "neither oxidising nor reducing"
        ],
        2,
        "Eu²⁺ (f⁷) and Yb²⁺ (f¹⁴) readily lose an electron to give Ln³⁺."
       ],
       [
        "Mischmetall is an alloy consisting of",
        [
         "95% iron and 5% lanthanoid",
         "about 95% lanthanoid metal and about 5% iron",
         "copper and tin",
         "aluminium and magnesium only"
        ],
        1,
        "It is used in Mg-based alloys for bullets, shells and lighter flints."
       ],
       [
        "Which pair of lanthanoid ions are colourless?",
        [
         "Ce³⁺ and Gd³⁺",
         "Pr³⁺ and Nd³⁺",
         "Eu³⁺ and Tb³⁺",
         "La³⁺ and Lu³⁺"
        ],
        3,
        "They are f⁰ and f¹⁴, so no f–f transition is possible."
       ],
       [
        "Which statement about lanthanoid chemistry is correct?",
        [
         "Early members behave like aluminium and later ones like calcium",
         "Early members are reactive like calcium, later ones behave more like aluminium",
         "All lanthanoids are as unreactive as noble metals",
         "Their hydroxides are acidic"
        ],
        1,
        "Ln(OH)₃ are basic like alkaline earth hydroxides; E° values are about –2.2 to –2.4 V."
       ],
       [
        "The 5f electrons can take part in bonding to a greater extent than 4f electrons because",
        [
         "5f orbitals are more tightly held by the nucleus",
         "5f orbitals are empty",
         "actinoids have no 7s electrons",
         "5f orbitals are less buried than 4f orbitals"
        ],
        3,
        "The 5f orbitals extend further out, so their electrons are available for bonding."
       ],
       [
        "Actinoid contraction is greater from element to element than lanthanoid contraction because",
        [
         "5f electrons shield each other even more poorly",
         "5f electrons shield better than 4f",
         "the nuclear charge does not change",
         "7s electrons are lost first"
        ],
        0,
        "Poor shielding by 5f electrons gives a larger contraction."
       ],
       [
        "The maximum oxidation state increases along Th, Pa, U, Np. The correct set is",
        [
         "+3 (Th), +4 (Pa), +5 (U), +6 (Np)",
         "+4 (Th), +6 (Pa), +5 (U), +7 (Np)",
         "+4 (Th), +5 (Pa), +6 (U), +7 (Np)",
         "+5 (Th), +5 (Pa), +6 (U), +6 (Np)"
        ],
        2,
        "The wide range arises because 5f, 6d and 7s levels have comparable energies."
       ],
       [
        "Which statement is TRUE for actinoids?",
        [
         "They are unaffected by hydrochloric acid",
         "Alkalies readily dissolve them",
         "They are highly reactive metals, especially when finely divided",
         "They are all stable and non-radioactive"
        ],
        2,
        "HCl attacks all of them; alkalies have no action; nitric acid acts only slightly because of protective oxide layers."
       ],
       [
        "Which transition metal compound is used as a catalyst in the manufacture of sulphuric acid?",
        [
         "V₂O₅",
         "TiCl₄",
         "PdCl₂",
         "AgBr"
        ],
        0,
        "V₂O₅ catalyses the oxidation of SO₂ to SO₃."
       ],
       [
        "In the Wacker process, ethyne is oxidised to ethanal using",
        [
         "V₂O₅ as catalyst",
         "TiCl₄ with Al(CH₃)₃",
         "finely divided iron",
         "PdCl₂ as catalyst"
        ],
        3,
        "PdCl₂ catalyses the Wacker oxidation; TiCl₄ with Al(CH₃)₃ is the Ziegler catalyst for polyethylene."
       ]
      ],
      [
       [
        "Assertion (A): Zn, Cd and Hg are not regarded as transition elements.\nReason (R): They have a completely filled d¹⁰ configuration in the ground state and in their common oxidation states.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Their d subshell is full in atom and in common ions, so they fail the IUPAC definition."
       ],
       [
        "A student writes the configuration of chromium as [Ar] 3d⁴4s². What is wrong?",
        [
         "Nothing; 3d⁴4s² is correct since 4s fills before 3d",
         "The correct one is [Ar] 3d⁵4s¹, because a half-filled d set is extra stable and the 3d–4s gap is small",
         "The correct one is [Ar] 3d⁶4s⁰, because 4s is always emptied first",
         "The correct one is [Ar] 3d⁴4s², but with an extra electron in 4p"
        ],
        1,
        "Cr takes one electron from 4s to make 3d⁵; Cu similarly has 3d¹⁰4s¹."
       ],
       [
        "Which statement about Cu and its ions is correct?",
        [
         "Cu is 3d⁹4s²; Cu⁺ is 3d⁸ and Cu²⁺ is 3d⁷",
         "Cu is 3d¹⁰4s¹; Cu⁺ is 3d⁹ and Cu²⁺ is 3d⁸",
         "Cu is 3d¹⁰4s¹; both Cu⁺ and Cu²⁺ have a 3d¹⁰ shell",
         "Cu is 3d¹⁰4s¹; Cu⁺ (3d¹⁰) has no unpaired electron and Cu²⁺ (3d⁹) has one"
        ],
        3,
        "4s electrons are lost before 3d, so Cu⁺ is d¹⁰ and Cu²⁺ is d⁹."
       ],
       [
        "Assertion (A): Melting points of 3d metals rise to a maximum near the middle of the series and then fall.\nReason (R): Greater participation of unpaired (n–1)d electrons along with ns electrons strengthens metallic bonding.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Maximum unpaired d electrons near d⁵ give the strongest bonding (Mn and Tc are anomalous)."
       ],
       [
        "A student says: The 4d and 5d metals have lower enthalpies of atomisation than the 3d metals because their atoms are bigger. What is the correct statement?",
        [
         "Their enthalpies of atomisation are higher, favouring frequent metal–metal bonding",
         "Correct; larger atoms form weaker bonds, so metal–metal bonding is less common",
         "Wrong; they are identical, since all use only ns electrons",
         "Wrong; they are lower for 4d but higher for 5d only"
        ],
        0,
        "Stronger interatomic bonding in the heavier series gives higher enthalpies of atomisation."
       ],
       [
        "Assertion (A): Zr and Hf are very difficult to separate.\nReason (R): Lanthanoid contraction makes their radii almost identical (160 pm and 159 pm).",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Their similar size gives very similar properties and occurrence together."
       ],
       [
        "Assertion (A): The atomic radii of the 5d series are much larger than those of the corresponding 4d series.\nReason (R): The 4f orbitals are filled before the 5d series and shield poorly.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: the 5d radii are virtually the same as 4d because lanthanoid contraction offsets the expected increase."
       ],
       [
        "A student says: Fe²⁺ → Fe³⁺ needs more energy than Mn²⁺ → Mn³⁺ because Fe has a larger nuclear charge. What is correct?",
        [
         "The student is correct, because nuclear charge alone decides ionisation enthalpy",
         "The third ionisation enthalpy of Fe is higher because Fe³⁺ is d⁴",
         "The third ionisation enthalpy of Mn is higher, because Mn²⁺ (d⁵) loses stable exchange energy while Fe²⁺ (d⁶) becomes d⁵",
         "Both are equal since both lose one electron"
        ],
        2,
        "Fe²⁺ → Fe³⁺ gives stable d⁵, so IE₃ of Fe is lower than that of Mn."
       ],
       [
        "The second ionisation enthalpy of Cu (1958 kJ mol⁻¹) is far higher than that of Zn (1734 kJ mol⁻¹). The best reason is",
        [
         "Zn has a larger atomic radius than Cu, so both lose 4s electrons",
         "Cu has more protons than Zn",
         "Cu⁺ is d¹⁰ so an electron must come from the stable d¹⁰ shell, while Zn⁺ (4s¹) loses its 4s electron to leave d¹⁰",
         "Zn²⁺ has a half-filled d subshell"
        ],
        2,
        "Removing an electron from Cu⁺ (3d¹⁰) breaks a stable d¹⁰ shell, while Zn⁺ forms d¹⁰ on ionisation."
       ],
       [
        "The sum of the oxidation numbers of the metal in VO₂⁺, CrO₄²⁻ and MnO₄⁻ is",
        [
         "+18",
         "+15",
         "+17",
         "+21"
        ],
        0,
        "V is +5, Cr is +6 and Mn is +7: 5 + 6 + 7 = 18."
       ],
       [
        "Assertion (A): Mo(VI) and W(VI) are more stable than Cr(VI).\nReason (R): In the d-block, higher oxidation states become more stable on moving down a group.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Hence acidified dichromate is a strong oxidant while MoO₃ and WO₃ are not."
       ],
       [
        "Assertion (A): Transition elements usually show oxidation states that differ by one unit.\nReason (R): This arises from the inert pair effect.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "The cause is the incomplete filling of d orbitals, not the inert pair effect, which favours lower states in the heavier p-block."
       ],
       [
        "A student claims that Sc shows a stable +2 state because it has two 4s electrons. What is correct?",
        [
         "Sc²⁺ is the most stable state of Sc",
         "Sc forms +2, +3 and +4 equally",
         "Sc³⁺ is unstable because it is d¹",
         "Sc(II) is virtually unknown; Sc forms only Sc³⁺, which has the noble-gas configuration"
        ],
        3,
        "Sc loses the 4s² and 3d¹ electrons to reach the noble-gas configuration."
       ],
       [
        "A metal dissolves in dilute nitric acid and hot concentrated sulphuric acid but not in dilute HCl. It is most likely",
        [
         "Fe, because E°(Fe²⁺/Fe) is positive",
         "Cu, because E°(Cu²⁺/Cu) = +0.34 V",
         "Zn, because it has a completely filled 3d shell",
         "Mn, because Mn²⁺ is d⁵"
        ],
        1,
        "Only oxidising acids attack Cu, which cannot liberate H₂ from acids."
       ],
       [
        "Cr²⁺ is reducing and Mn³⁺ is oxidising although both are d⁴. A student says both must be oxidising because d⁴ is unstable. What is correct?",
        [
         "Cr²⁺ → Cr³⁺ gives a half-filled t₂g (d³) and Mn³⁺ → Mn²⁺ gives d⁵, so one reduces and the other oxidises",
         "The student is right; both are oxidising agents",
         "Both are reducing agents since they have four unpaired electrons",
         "Cr²⁺ is an oxidant because Cr has a lower atomic number"
        ],
        0,
        "Each d⁴ ion moves to a more stable configuration, in opposite redox directions (NCERT Example 4.4)."
       ],
       [
        "For Fe + 2H⁺ → Fe²⁺ + H₂, E°(Fe²⁺/Fe) = –0.44 V. The ΔG° of this reaction is (F = 96500 C mol⁻¹)",
        [
         "–42.5 kJ mol⁻¹",
         "+84.9 kJ mol⁻¹",
         "–84.9 kJ mol⁻¹",
         "–169.8 kJ mol⁻¹"
        ],
        2,
        "E°cell = 0 – (–0.44) = 0.44 V and ΔG° = –2 × 96500 × 0.44 = –84.9 kJ mol⁻¹.",
        "ΔG° = –nFE°cell"
       ],
       [
        "Given E°(Mn³⁺/Mn²⁺) = +1.57 V and E°(Fe³⁺/Fe²⁺) = +0.77 V, the ΔG° for Mn³⁺ + Fe²⁺ → Mn²⁺ + Fe³⁺ is (F = 96500 C mol⁻¹)",
        [
         "–154.4 kJ mol⁻¹",
         "–77.2 kJ mol⁻¹",
         "+77.2 kJ mol⁻¹",
         "–225.8 kJ mol⁻¹"
        ],
        1,
        "E°cell = 1.57 – 0.77 = 0.80 V with n = 1, so ΔG° = –96500 × 0.80 = –77.2 kJ.",
        "Subtract the anode value from the cathode value; n = 1"
       ],
       [
        "From E°(Cr³⁺/Cr²⁺) = –0.41 V, E°(Mn³⁺/Mn²⁺) = +1.57 V and E°(Fe³⁺/Fe²⁺) = +0.77 V, which statement is correct?",
        [
         "Mn²⁺ is the strongest reducing agent of the three",
         "Cr³⁺ is the strongest oxidising agent of the three",
         "Fe³⁺ is a stronger oxidant than Mn³⁺",
         "Cr²⁺ is the strongest reducing agent of the three, and Mn³⁺ is the strongest oxidising agent"
        ],
        3,
        "The more positive the E°, the stronger the oxidant M³⁺; the very negative Cr value makes Cr²⁺ a strong reductant."
       ],
       [
        "What is formed on adding excess KI to aqueous CuSO₄?",
        [
         "CuI₂ only",
         "Cu₂I₂ and I₂",
         "Cu and I₂",
         "CuI₂ and KI₃"
        ],
        1,
        "Cu²⁺ oxidises I⁻: 2Cu²⁺ + 4I⁻ → Cu₂I₂ + I₂."
       ],
       [
        "When Cu₂SO₄ is dissolved in water, the products are",
        [
         "Cu³⁺ and Cu",
         "Cu²⁺ and H₂",
         "only Cu⁺(aq), which is stable",
         "Cu²⁺(aq) and metallic Cu"
        ],
        3,
        "2Cu⁺ → Cu²⁺ + Cu, since Cu²⁺ has a much more negative hydration enthalpy."
       ],
       [
        "Assertion (A): The highest fluoride of manganese is MnF₄ whereas its highest oxide is Mn₂O₇.\nReason (R): Oxygen can form multiple bonds with the metal and so stabilises higher oxidation states better than fluorine.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Oxygen’s ability to form multiple bonds explains its superiority."
       ],
       [
        "The disproportionation of manganate in acidic solution is 3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O. How many moles of MnO₄⁻ form from 0.6 mol of MnO₄²⁻?",
        [
         "0.4 mol",
         "0.6 mol",
         "0.2 mol",
         "0.9 mol"
        ],
        0,
        "3 mol of manganate gives 2 mol of permanganate, so 0.6 × 2/3 = 0.4 mol."
       ],
       [
        "Assertion (A): Copper liberates hydrogen from dilute hydrochloric acid.\nReason (R): E°(Cu²⁺/Cu) has a positive value of +0.34 V.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: because E° is positive, Cu cannot liberate H₂ from acids."
       ],
       [
        "Assertion (A): Cr²⁺ liberates hydrogen from dilute acid.\nReason (R): E°(Cr³⁺/Cr²⁺) is negative, so Cr²⁺ is a strong reducing agent.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "2Cr²⁺ + 2H⁺ → 2Cr³⁺ + H₂ is feasible."
       ],
       [
        "Arrange Cr³⁺, Mn³⁺ and Fe³⁺ in increasing order of spin-only magnetic moment.",
        [
         "Fe³⁺ < Mn³⁺ < Cr³⁺",
         "Mn³⁺ < Cr³⁺ < Fe³⁺",
         "Cr³⁺ < Mn³⁺ < Fe³⁺",
         "Cr³⁺ < Fe³⁺ < Mn³⁺"
        ],
        2,
        "Cr³⁺ is d³ (3.87 BM), Mn³⁺ is d⁴ (4.90 BM) and Fe³⁺ is d⁵ (5.92 BM)."
       ],
       [
        "The ratio of the spin-only magnetic moments of Fe²⁺(aq) to Cu²⁺(aq) is",
        [
         "4.00",
         "1.41",
         "2.83",
         "8.00"
        ],
        2,
        "Fe²⁺ has 4 unpaired electrons (μ = √24 = 4.90 BM) and Cu²⁺ has 1 (μ = 1.73 BM); the ratio is 2.83."
       ],
       [
        "A transition metal ion has a spin-only magnetic moment of 4.90 BM. The number of unpaired electrons is",
        [
         "4",
         "3",
         "5",
         "6"
        ],
        0,
        "√(n(n+2)) = 4.90 gives n(n+2) = 24, so n = 4."
       ],
       [
        "A student says Cu⁺ has a magnetic moment of 1.73 BM because copper has one unpaired electron. What is correct?",
        [
         "The student is right; Cu⁺ has one unpaired 4s electron",
         "Cu⁺ is d⁹, so μ = 1.73 BM",
         "Cu⁺ is d⁸, so μ = 2.83 BM",
         "Cu⁺ is d¹⁰ with no unpaired electron, so it is diamagnetic (μ = 0)"
        ],
        3,
        "Cu⁺ is 3d¹⁰ and so diamagnetic."
       ],
       [
        "Assertion (A): Zn²⁺ salts are white (colourless).\nReason (R): Zn²⁺ has unpaired d electrons that undergo d–d transitions in the visible region.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Zn²⁺ is d¹⁰ with no vacancy for d–d excitation, so R is false."
       ],
       [
        "A solution appears blue. This means it absorbs light which is",
        [
         "blue itself",
         "orange, whose complementary colour is blue",
         "violet only",
         "all wavelengths equally"
        ],
        1,
        "The colour observed is the complementary colour of the light absorbed."
       ],
       [
        "The central metals in [Fe(CN)₆]⁴⁻ and [PtCl₄]²⁻ have the same oxidation state. It is",
        [
         "+2",
         "+3",
         "+4",
         "0"
        ],
        0,
        "Fe: x + 6(–1) = –4 gives +2; Pt: x + 4(–1) = –2 gives +2."
       ],
       [
        "A student says that Fe³⁺ is consumed in the Fe³⁺-catalysed reaction 2I⁻ + S₂O₈²⁻ → I₂ + 2SO₄²⁻. What is correct?",
        [
         "Fe³⁺ is consumed, and Fe²⁺ is the final product",
         "Fe³⁺ is reduced to metallic iron",
         "Fe³⁺ is regenerated, since Fe²⁺ is re-oxidised by S₂O₈²⁻",
         "Fe³⁺ forms an insoluble complex with I⁻"
        ],
        2,
        "2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂, then 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻."
       ],
       [
        "A student says that interstitial compounds like TiC are ionic, of fixed composition and non-conducting. What is correct?",
        [
         "They are fixed-composition ionic solids",
         "They are non-stoichiometric, neither typically ionic nor covalent, and retain metallic conductivity",
         "They are covalent network solids",
         "Their melting points are lower than those of the metal"
        ],
        1,
        "Small atoms (H, C, N) are trapped in the metal lattice; they are hard and inert."
       ],
       [
        "A student writes that bronze is an alloy of copper and zinc. What is correct?",
        [
         "Bronze is Cu–Ni; brass is Cu–Sn",
         "Bronze is Fe–C; brass is Cu–Zn",
         "The student is right; both are Cu–Zn alloys",
         "Bronze is Cu–Sn; brass is Cu–Zn"
        ],
        3,
        "Brass (Cu–Zn) and bronze (Cu–Sn) are alloys of transition and non-transition metals."
       ],
       [
        "Alloys form readily among transition metals because",
        [
         "they all have identical electronic configurations",
         "their metallic radii lie within about 15 percent of each other",
         "they are all liquids at room temperature",
         "their metallic radii are very different"
        ],
        1,
        "Atoms of similar size replace each other randomly in the lattice, forming hard solid solutions."
       ],
       [
        "A student writes that V₂O₅ dissolves in alkali to give VO₂⁺ and in acid to give VO₄³⁻. What is correct?",
        [
         "The student is right",
         "It gives VO₄³⁻ in both",
         "It does not react with either",
         "In alkali it gives VO₄³⁻ and in acid it gives VO₂⁺"
        ],
        3,
        "V₂O₅ is amphoteric: with alkali it gives vanadate and with acid VO₂⁺ salts."
       ],
       [
        "Arrange CrO, Cr₂O₃ and CrO₃ in increasing order of acidic character.",
        [
         "CrO < Cr₂O₃ < CrO₃",
         "CrO₃ < Cr₂O₃ < CrO",
         "Cr₂O₃ < CrO < CrO₃",
         "CrO < CrO₃ < Cr₂O₃"
        ],
        0,
        "CrO is basic, Cr₂O₃ is amphoteric and CrO₃ is acidic."
       ],
       [
        "How many moles of Na₂CrO₄ form from 4 mol of FeCr₂O₄, and how many moles of O₂ are used per mole of FeCr₂O₄?",
        [
         "4 mol of Na₂CrO₄; 7/4 mol of O₂",
         "8 mol of Na₂CrO₄; 7 mol of O₂",
         "8 mol of Na₂CrO₄; 7/4 mol of O₂",
         "4 mol of Na₂CrO₄; 7/8 mol of O₂"
        ],
        2,
        "4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂."
       ],
       [
        "FeCr₂O₄ is fused with Na₂CO₃ in air to give A; A is acidified to give B; B is treated with KCl to give C. What is C?",
        [
         "K₂CrO₄",
         "Cr₂O₃",
         "K₂Cr₂O₇",
         "CrO₃"
        ],
        2,
        "A is Na₂CrO₄, B is Na₂Cr₂O₇, and KCl then gives the less soluble K₂Cr₂O₇."
       ],
       [
        "A student writes that on acidifying yellow chromate to orange dichromate, Cr is reduced from +6 to +3. What is correct?",
        [
         "The oxidation state of Cr stays +6 and no redox occurs",
         "Cr is oxidised from +3 to +6",
         "Cr is reduced from +6 to +4",
         "Cr changes from +6 to +7"
        ],
        0,
        "2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O is only an acid–base interconversion."
       ],
       [
        "A student says that dichromate has two octahedra sharing an edge. What is correct?",
        [
         "It has two tetrahedra sharing a face",
         "It has two octahedra sharing a corner",
         "It has one tetrahedron with a Cr=Cr bond",
         "It has two tetrahedra sharing one corner, with a Cr–O–Cr angle of 126°"
        ],
        3,
        "Dichromate is two CrO₄ tetrahedra joined through a bridging oxygen."
       ],
       [
        "20 mL of acidified FeSO₄ solution requires 15 mL of 0.02 M K₂Cr₂O₇. The molarity of Fe²⁺ is",
        [
         "0.015 M",
         "0.09 M",
         "0.045 M",
         "0.18 M"
        ],
        1,
        "Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O: 0.3 mmol × 6 = 1.8 mmol in 20 mL.",
        "6 mol of Fe²⁺ per mol of dichromate"
       ],
       [
        "How many grams of sulphur are precipitated when excess H₂S reacts with 0.05 mol of acidified K₂Cr₂O₇? (S = 32)",
        [
         "4.8 g",
         "1.6 g",
         "9.6 g",
         "14.4 g"
        ],
        0,
        "3H₂S → 3S + 6e⁻ against 6e⁻ per dichromate: 0.05 × 3 = 0.15 mol S = 4.8 g."
       ],
       [
        "Acidified potassium dichromate is added to a solution of an unknown salt and the orange colour turns green. Which species could the unknown salt contain?",
        [
         "Fe³⁺",
         "Zn²⁺",
         "Fe²⁺ (or I⁻, Sn²⁺ or sulphide)",
         "Na⁺"
        ],
        2,
        "A reducing agent converts Cr₂O₇²⁻ (orange) to Cr³⁺ (green)."
       ],
       [
        "MnO₂ is fused with KOH and KNO₃ to give A (dark green); A on acidifying gives B (purple) and a brown solid C. Identify B and C.",
        [
         "B = K₂MnO₄ and C = MnO",
         "B = KMnO₄ and C = MnO₂",
         "B = Mn₂O₇ and C = MnO₂",
         "B = MnSO₄ and C = Mn₂O₃"
        ],
        1,
        "3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O (disproportionation)."
       ],
       [
        "Assertion (A): Green K₂MnO₄ turns purple on acidifying.\nReason (R): Manganate(VI) disproportionates to manganate(VII) and manganese(IV).",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O."
       ],
       [
        "Assertion (A): Potassium manganate is paramagnetic whereas potassium permanganate is diamagnetic.\nReason (R): Manganate has one unpaired electron while permanganate has none.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Mn(VI) is d¹ in manganate and Mn(VII) is d⁰ in permanganate."
       ],
       [
        "In the lab, Mn²⁺ is oxidised to permanganate: 2Mn²⁺ + 5S₂O₈²⁻ + 8H₂O → 2MnO₄⁻ + 10SO₄²⁻ + 16H⁺. How many moles of S₂O₈²⁻ are needed for 0.4 mol of Mn²⁺?",
        [
         "0.4 mol",
         "0.8 mol",
         "2.0 mol",
         "1.0 mol"
        ],
        3,
        "5 mol of S₂O₈²⁻ per 2 mol of Mn²⁺: 0.4 × 5/2 = 1.0 mol."
       ],
       [
        "How many grams of O₂ are formed on heating 31.6 g of KMnO₄ (molar mass 158 g mol⁻¹)?",
        [
         "6.4 g",
         "3.2 g",
         "1.6 g",
         "12.8 g"
        ],
        1,
        "2KMnO₄ → K₂MnO₄ + MnO₂ + O₂: 0.2 mol KMnO₄ gives 0.1 mol O₂ = 3.2 g."
       ],
       [
        "25 mL of 0.02 M KMnO₄ oxidises all the Fe²⁺ in 50 mL of acidified solution. The molarity of Fe²⁺ is",
        [
         "0.01 M",
         "0.025 M",
         "0.10 M",
         "0.05 M"
        ],
        3,
        "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O: 0.5 mmol × 5 = 2.5 mmol in 50 mL."
       ],
       [
        "20 mL of 0.1 M oxalic acid (hot, acidified) needs what volume of 0.02 M KMnO₄?",
        [
         "40 mL",
         "100 mL",
         "250 mL",
         "10 mL"
        ],
        0,
        "2MnO₄⁻ : 5C₂O₄²⁻; 2 mmol oxalate needs 0.8 mmol KMnO₄, which is 0.8 / 0.02 = 40 mL."
       ],
       [
        "The ratio of the equivalent mass of KMnO₄ in acidic medium to that in neutral medium is",
        [
         "5 : 3",
         "1 : 1",
         "3 : 5",
         "5 : 7"
        ],
        2,
        "Mn changes +7 → +2 (5e⁻) in acid and +7 → +4 (3e⁻) in neutral, so M/5 : M/3 = 3 : 5."
       ],
       [
        "A student titrates Fe²⁺ with KMnO₄ in HCl. What is wrong with this?",
        [
         "Nothing is wrong",
         "HCl reduces Fe²⁺ further to Fe",
         "HCl is oxidised to Cl₂, so dilute H₂SO₄ must be used",
         "HCl makes KMnO₄ reduce to MnO₄²⁻ only"
        ],
        2,
        "Permanganate titrations are unsatisfactory in presence of hydrochloric acid."
       ],
       [
        "KI is oxidised by KMnO₄, and the product depends on the medium. Which pair is correct?",
        [
         "Acidic: I₂; neutral or faintly alkaline: IO₃⁻",
         "Acidic: IO₃⁻; neutral: I₂",
         "Acidic: I₂; neutral: I₂ also",
         "Acidic: IO₃⁻; neutral: IO₃⁻ also"
        ],
        0,
        "In acid, 10I⁻ + 2MnO₄⁻ + 16H⁺ → 2Mn²⁺ + 8H₂O + 5I₂; in neutral, 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻."
       ],
       [
        "The spin-only magnetic moment of Gd³⁺ (4f⁷) is",
        [
         "5.92 BM",
         "6.93 BM",
         "8.94 BM",
         "7.94 BM"
        ],
        3,
        "Seven unpaired electrons: √(7×9) = √63 = 7.94 BM."
       ],
       [
        "A student says lanthanoid contraction is larger than the d-series contraction because 4f electrons shield better than d electrons. What is correct?",
        [
         "The student is right",
         "4f electrons shield each other less effectively than d electrons do, so the contraction is larger",
         "4f electrons do not shield at all",
         "d electrons shield perfectly"
        ],
        1,
        "Poorer shielding by 4f electrons causes a regular decrease in size."
       ],
       [
        "Assertion (A): Lanthanoid ionic radii (M³⁺) decrease regularly from La³⁺ to Lu³⁺.\nReason (R): Poor shielding of 4f electrons by one another with increasing nuclear charge.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Hence the regular fall in size."
       ],
       [
        "Which pair of elements occur together in nature and are hard to separate because of the lanthanoid contraction?",
        [
         "Zr and Hf",
         "Ti and Zr",
         "Cr and Mo",
         "Fe and Co"
        ],
        0,
        "Almost identical radii (160 and 159 pm) give very similar properties."
       ],
       [
        "A student says Pr, Nd, Tb and Dy exhibit +4 in aqueous solution. What is correct?",
        [
         "They exhibit +4 widely in solution",
         "They do not show +4 at all",
         "They show +4 only in oxides MO₂",
         "They show +4 only in chlorides"
        ],
        2,
        "Ce(IV) is the lanthanoid with a well-known +4 state in solution."
       ],
       [
        "Assertion (A): Ce⁴⁺ is a good analytical reagent although E°(Ce⁴⁺/Ce³⁺) = +1.74 V can oxidise water.\nReason (R): The oxidation of water by Ce⁴⁺ is very slow.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Because the reaction is slow, Ce(IV) solutions are useful oxidising reagents."
       ],
       [
        "Which of the following lanthanoid ions is a strong oxidising agent?",
        [
         "Eu²⁺",
         "Ce⁴⁺",
         "Yb²⁺",
         "La³⁺"
        ],
        1,
        "Ce⁴⁺ reverts to +3; Eu²⁺ and Yb²⁺ are reductants."
       ],
       [
        "Assertion (A): La³⁺ and Lu³⁺ are colourless, whereas most other Ln³⁺ ions are coloured.\nReason (R): La³⁺ (f⁰) and Lu³⁺ (f¹⁴) have no f electron that can undergo f–f excitation.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Colour arises from excitation within the f level."
       ],
       [
        "Which set of lanthanoid species is diamagnetic?",
        [
         "La³⁺, Ce³⁺, Gd³⁺ and Lu³⁺",
         "Ce⁴⁺, Eu³⁺, Yb²⁺ and Lu³⁺",
         "Pr³⁺, Nd³⁺, Yb³⁺ and Lu³⁺",
         "La³⁺, Ce⁴⁺, Yb²⁺ and Lu³⁺"
        ],
        3,
        "Only f⁰ and f¹⁴ ions have no unpaired electrons."
       ],
       [
        "The third ionisation enthalpy is abnormally low for La, Gd and Lu because",
        [
         "they have no 6s electrons",
         "removal of the third electron gives f⁰, f⁷ and f¹⁴ configurations respectively",
         "they have the largest radii",
         "they are the most reactive lanthanoids"
        ],
        1,
        "Exchange enthalpy gives extra stability to empty, half-filled and filled f subshells."
       ],
       [
        "A lanthanoid metal is heated with (i) nitrogen and (ii) carbon at 2773 K. The products are",
        [
         "Ln₃N₂ and Ln₂C",
         "LnN₂ and LnCO₃",
         "Ln₂N₃ and LnC₃",
         "LnN and LnC₂"
        ],
        3,
        "Ln + N → LnN and Ln + 2C → LnC₂."
       ],
       [
        "A student says Cm is [Rn] 5f⁸7s². What is correct?",
        [
         "Cm is [Rn] 5f⁷6d¹7s², which retains the stable half-filled 5f⁷",
         "Cm is [Rn] 5f⁶7s²",
         "Cm is [Rn] 5f⁷7s²",
         "Cm is [Rn] 5f⁸7s², so the student is right"
        ],
        0,
        "Like Gd, Cm places an electron in 6d to keep f⁷."
       ],
       [
        "How many unpaired electrons does Cm³⁺ (5f⁷) have?",
        [
         "6",
         "8",
         "7",
         "3"
        ],
        2,
        "A half-filled f subshell has seven unpaired electrons."
       ],
       [
        "Assertion (A): Actinoid contraction is greater from element to element than lanthanoid contraction.\nReason (R): 5f electrons shield each other more poorly than 4f electrons do.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Poorer shielding gives a larger contraction."
       ],
       [
        "Assertion (A): Actinoids show a greater range of oxidation states than lanthanoids.\nReason (R): The 5f, 6d and 7s levels are of comparable energies.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "More electrons can take part in bonding."
       ],
       [
        "A student says that actinoids, unlike lanthanoids, have more +4 compounds than +3 compounds. What is correct?",
        [
         "Actinoids have more +4 compounds than +3",
         "Actinoids show only the +3 state",
         "Actinoids have more compounds in +3 than in +4, like lanthanoids",
         "Actinoids show no +3 compounds"
        ],
        2,
        "The text notes more +3 compounds than +4, though +3 and +4 ions tend to hydrolyse."
       ],
       [
        "Which statement compares actinoids and lanthanoids correctly?",
        [
         "Actinoids show more structural variety and more complex magnetic behaviour, while lanthanoids have higher magnetic susceptibility values",
         "Actinoids are more uniform in structure than lanthanoids",
         "Actinoids are non-radioactive",
         "Lanthanoids show a greater range of oxidation states"
        ],
        0,
        "Irregular metallic radii cause structural variety in actinoids."
       ],
       [
        "Why are the outer electrons of early actinoids more available for bonding than those of early lanthanoids?",
        [
         "4f orbitals are less buried than 5f orbitals",
         "actinoids have empty 7s orbitals",
         "actinoids are more electronegative",
         "5f orbitals penetrate less into the core, so the 5f electrons are more effectively shielded and less firmly held"
        ],
        3,
        "The outer electrons are less firmly held and so are available for bonding."
       ],
       [
        "Match: (i) V₂O₅ (ii) PdCl₂ (iii) TiCl₄ + Al(CH₃)₃ (iv) Ni with (a) polythene manufacture (b) SO₂ oxidation (c) ethyne → ethanal (d) hydrogenation of fats.",
        [
         "(i)–(a), (ii)–(b), (iii)–(c), (iv)–(d)",
         "(i)–(b), (ii)–(c), (iii)–(a), (iv)–(d)",
         "(i)–(d), (ii)–(c), (iii)–(b), (iv)–(a)",
         "(i)–(b), (ii)–(a), (iii)–(c), (iv)–(d)"
        ],
        1,
        "V₂O₅: Contact process; PdCl₂: Wacker; TiCl₄ + Al(CH₃)₃: Ziegler catalyst; Ni: hydrogenation."
       ],
       [
        "The ‘silver’ coins in the UK and the photographic industry rely respectively on",
        [
         "a Cu/Ni alloy and light-sensitive AgBr",
         "pure silver and AgCl",
         "Cu/Zn brass and AgNO₃",
         "Cu/Sn bronze and Ag₂O"
        ],
        0,
        "A Cu/Ni alloy is used for the ‘silver’ coins and AgBr for photographic films."
       ]
      ]
     ]
    },
    {
     "n": 5,
     "t": "Coordination Compounds",
     "levels": [
      [
       [
        "According to Werner’s theory, which statement about the two types of valence of a metal is correct?",
        [
         "Primary valences are ionisable and satisfied by negative ions; secondary valences are non-ionisable",
         "Primary valences are non-ionisable; secondary valences are ionisable",
         "Both primary and secondary valences are ionisable",
         "Primary valence is equal to the coordination number and is fixed for a metal"
        ],
        0,
        "Primary (ionisable) valences are satisfied by anions, while secondary (non-ionisable) valences equal the coordination number."
       ],
       [
        "1 mol of purple CoCl₃·5NH₃ gives 2 mol AgCl with excess AgNO₃ in the cold. Which formula fits this?",
        [
         "[Co(NH₃)₅]Cl₃",
         "[CoCl₂(NH₃)₄]Cl·NH₃",
         "[CoCl(NH₃)₅]Cl₂",
         "[Co(NH₃)₅Cl₂]Cl"
        ],
        2,
        "Only two chlorides are free (ionisable); one Cl⁻ and five NH₃ make up six secondary valences."
       ],
       [
        "Green and violet forms of CoCl₃·4NH₃ have the same empirical formula but different properties. Such compounds are called",
        [
         "allotropes",
         "isomers",
         "double salts",
         "isobars"
        ],
        1,
        "Same formula with different arrangement and properties means isomers."
       ],
       [
        "Which of the following dissociates completely into simple ions when dissolved in water?",
        [
         "K₄[Fe(CN)₆]",
         "[Ni(CO)₄]",
         "[Co(NH₃)₆]Cl₃, giving Co³⁺, NH₃ and Cl⁻",
         "Mohr’s salt, FeSO₄·(NH₄)₂SO₄·6H₂O"
        ],
        3,
        "Mohr’s salt is a double salt and gives Fe²⁺, NH₄⁺ and SO₄²⁻ ions; complex ions such as [Fe(CN)₆]⁴⁻ stay intact."
       ],
       [
        "Werner proposed that the groups bound by secondary linkages have characteristic spatial arrangements. In modern language these arrangements are called",
        [
         "counter ions",
         "primary valences",
         "coordination polyhedra",
         "ionisation spheres"
        ],
        2,
        "The spatial arrangement of ligands around the metal is the coordination polyhedron."
       ],
       [
        "A coordination entity consists of",
        [
         "only the counter ions of a complex salt",
         "a central metal atom or ion bonded to a fixed number of ions or molecules",
         "two or more simple salts crystallised together",
         "a metal ion dissolved in water without any bonding"
        ],
        1,
        "[Co(NH₃)₆]³⁺ and [Ni(CO)₄] are coordination entities."
       ],
       [
        "In [NiCl₂(H₂O)₄], the central metal ion and its nature are",
        [
         "Ni²⁺, a Lewis acid",
         "Ni⁰, a Lewis base",
         "Ni²⁺, a Lewis base",
         "Ni⁴⁺, a Lewis acid"
        ],
        0,
        "Neutral complex with two Cl⁻ and four H₂O gives Ni²⁺; the metal accepts electron pairs, so it is a Lewis acid."
       ],
       [
        "EDTA⁴⁻ is an important hexadentate ligand. It binds the metal through",
        [
         "six nitrogen atoms",
         "four nitrogen and two oxygen atoms",
         "two nitrogen and four oxygen atoms",
         "six oxygen atoms"
        ],
        2,
        "Two N donors and four carboxylate O donors give denticity six."
       ],
       [
        "Which pair consists of ambidentate ligands?",
        [
         "en and C₂O₄²⁻",
         "Cl⁻ and NH₃",
         "H₂O and CO",
         "NO₂⁻ and SCN⁻"
        ],
        3,
        "NO₂⁻ binds through N or O; SCN⁻ binds through S or N."
       ],
       [
        "Ethane-1,2-diamine (en), H₂NCH₂CH₂NH₂, is a",
        [
         "unidentate ligand",
         "didentate ligand that forms chelate rings",
         "hexadentate ligand",
         "ambidentate ligand"
        ],
        1,
        "It has two N donor atoms, so it is didentate; chelate complexes tend to be more stable."
       ],
       [
        "The coordination number of Fe in [Fe(C₂O₄)₃]³⁻ is",
        [
         "6",
         "3",
         "9",
         "12"
        ],
        0,
        "Oxalate is didentate, so three oxalate ions give six donor atoms."
       ],
       [
        "In K₄[Fe(CN)₆], the coordination sphere and the counter ion are respectively",
        [
         "Fe²⁺ and CN⁻",
         "K⁺ and [Fe(CN)₆]⁴⁻",
         "[Fe(CN)₆]⁴⁻ and K⁺",
         "Fe(CN)₆ and K₄"
        ],
        2,
        "The species in square brackets is the coordination sphere; the ionisable group outside is the counter ion."
       ],
       [
        "The shapes of [Ni(CO)₄], [PtCl₄]²⁻ and [Co(NH₃)₆]³⁺ are respectively",
        [
         "square planar, tetrahedral, octahedral",
         "tetrahedral, octahedral, square planar",
         "octahedral, square planar, tetrahedral",
         "tetrahedral, square planar, octahedral"
        ],
        3,
        "These are the textbook examples of the three common coordination polyhedra."
       ],
       [
        "The oxidation number of copper in [Cu(CN)₄]³⁻ is",
        [
         "+2",
         "+1",
         "+3",
         "−1"
        ],
        1,
        "x + 4(−1) = −3 gives x = +1, written Cu(I)."
       ],
       [
        "Which pair is correctly classified?",
        [
         "[Co(NH₃)₆]³⁺ is homoleptic; [Co(NH₃)₄Cl₂]⁺ is heteroleptic",
         "[Co(NH₃)₆]³⁺ is heteroleptic; [Co(NH₃)₄Cl₂]⁺ is homoleptic",
         "Both are homoleptic",
         "Both are heteroleptic"
        ],
        0,
        "A homoleptic complex has only one kind of donor group."
       ],
       [
        "Which is the correct formula of tetraamminediaquacobalt(III) chloride?",
        [
         "[Co(NH₃)₄(H₂O)₂]Cl₂",
         "[Co(NH₃)₄(H₂O)₂]Cl₃",
         "[Co(H₂O)₂(NH₃)₄]Cl",
         "Co[(NH₃)₄(H₂O)₂]Cl₃"
        ],
        1,
        "Charge on the complex ion is +3 (Co³⁺, neutral ligands), so three Cl⁻ are needed."
       ],
       [
        "Which rule is followed while writing the formula of a coordination entity?",
        [
         "Anionic ligands are always written before neutral ligands",
         "The ligands are written first and the central atom last",
         "The central atom is written first, then ligands in alphabetical order, all within square brackets",
         "The central atom is written in alphabetical order with the ligands"
        ],
        2,
        "The central atom comes first; ligand placement does not depend on charge."
       ],
       [
        "The IUPAC name of [Cr(NH₃)₃(H₂O)₃]Cl₃ is",
        [
         "triaquatriamminechromium(III) chloride",
         "triamminetriaquachromium(II) chloride",
         "triamminetriaquachromate(III) chloride",
         "triamminetriaquachromium(III) chloride"
        ],
        3,
        "Ligands are named alphabetically (ammine before aqua); the cation keeps the metal name; Cr is +3."
       ],
       [
        "The IUPAC name of K₃[Fe(CN)₆] is",
        [
         "potassium hexacyanidoferrate(III)",
         "potassium hexacyanoiron(III)",
         "tripotassium hexacyanidoferrate(III)",
         "potassium hexacyanidoferrate(II)"
        ],
        0,
        "In an anionic complex the metal name ends in -ate (ferrate for Fe); x + 6(−1) = −3 gives Fe(III)."
       ],
       [
        "Which set gives the correct names of the ligands H₂O, NH₃ and CO?",
        [
         "aquo, amine, carbonyl",
         "aqua, ammine, carbonyl",
         "hydrato, ammonia, carbon monoxide",
         "aqua, ammino, carbonato"
        ],
        1,
        "Neutral ligands keep their names except aqua, ammine, carbonyl and nitrosyl."
       ],
       [
        "[NiCl₂(PPh₃)₂] is named",
        [
         "dichloridodi(triphenylphosphine)nickel(II)",
         "bis(triphenylphosphine)dichloridonickel(II)",
         "dichloridobis(triphenylphosphine)nickel(II)",
         "dichloridobis(triphenylphosphine)nickelate(II)"
        ],
        2,
        "When the ligand name already has a numerical prefix, bis, tris, tetrakis are used with it in parentheses; alphabetical order places chlorido first."
       ],
       [
        "The IUPAC name of K₃[Cr(C₂O₄)₃] is",
        [
         "potassium trioxalatochromium(III)",
         "potassium tris(oxalato)chromium(III)",
         "potassium trioxalatochromate(VI)",
         "potassium trioxalatochromate(III)"
        ],
        3,
        "Complex anion gives chromate; 3 K⁺ means the entity is 3−, so Cr is +3 (NCERT Example 5.3)."
       ],
       [
        "Which of the following is a structural isomerism (not stereoisomerism) in coordination compounds?",
        [
         "Linkage isomerism",
         "Geometrical isomerism",
         "Optical isomerism",
         "cis-trans isomerism"
        ],
        0,
        "Stereoisomers differ only in spatial arrangement; structural isomers (linkage, coordination, ionisation, solvate) have different bonds."
       ],
       [
        "Square planar [Pt(NH₃)₂Cl₂] shows two geometrical isomers. They are called",
        [
         "fac and mer",
         "cis and trans",
         "d and l",
         "ionisation and linkage"
        ],
        1,
        "Identical ligands adjacent give the cis isomer; opposite gives trans."
       ],
       [
        "The facial (fac) and meridional (mer) isomers are possible for octahedral entities of the type",
        [
         "[Ma₆]",
         "[Ma₅b]",
         "[Ma₃b₃], such as [Co(NH₃)₃(NO₂)₃]",
         "[Ma₄b₂] only"
        ],
        2,
        "In fac, the three identical ligands occupy one octahedral face; in mer, they lie around the meridian."
       ],
       [
        "Optical isomers (enantiomers) of a complex such as [Co(en)₃]³⁺ differ in that they",
        [
         "have different molecular formulae",
         "differ only in colour and not in the direction of rotation",
         "are superimposable mirror images",
         "are non-superimposable mirror images that rotate polarised light in opposite directions"
        ],
        3,
        "d rotates plane polarised light to the right, l to the left."
       ],
       [
        "Red and yellow forms of [Co(NH₃)₅(NO₂)]Cl₂ are",
        [
         "linkage isomers",
         "ionisation isomers",
         "coordination isomers",
         "solvate isomers"
        ],
        0,
        "Ambidentate NO₂⁻ binds through O (red) in one and through N (yellow) in the other."
       ],
       [
        "A coordination isomer of [Co(NH₃)₆][Cr(CN)₆] is",
        [
         "[Co(NH₃)₅(CN)][Cr(NH₃)(CN)₅]",
         "[Cr(NH₃)₆][Co(CN)₆]",
         "[Co(CN)₆]₂[Cr(NH₃)₆]₃",
         "[Co(NH₃)₆]₂[Cr(CN)₆]₃"
        ],
        1,
        "Ligands are interchanged between the cationic and anionic entities of different metals."
       ],
       [
        "[Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅(SO₄)]Br are",
        [
         "linkage isomers",
         "geometrical isomers",
         "ionisation isomers",
         "optical isomers"
        ],
        2,
        "The counter ion and a ligand are exchanged, so different ions are produced in solution."
       ],
       [
        "[Cr(H₂O)₆]Cl₃ (violet) and [Cr(H₂O)₅Cl]Cl₂·H₂O (grey-green) are",
        [
         "ionisation isomers only",
         "linkage isomers",
         "coordination isomers",
         "solvate (hydrate) isomers"
        ],
        3,
        "They differ in whether water is bonded to the metal or is free in the crystal lattice."
       ],
       [
        "Which of the following could Werner’s theory NOT explain?",
        [
         "Why only certain elements form coordination compounds and why the bonds are directional",
         "That secondary valences are non-ionisable",
         "That primary valences are satisfied by negative ions",
         "That CoCl₃·6NH₃ gives 3 mol AgCl"
        ],
        0,
        "Werner’s theory could not explain directional bonds, selectivity of elements, or magnetic and optical properties."
       ],
       [
        "In the diamagnetic [Co(NH₃)₆]³⁺, the hybridisation and the type of complex are",
        [
         "sp³d², outer orbital (high spin)",
         "d²sp³, inner orbital (low spin)",
         "dsp², inner orbital",
         "sp³, outer orbital"
        ],
        1,
        "Co³⁺ is 3d⁶; electrons pair up, freeing two 3d orbitals for d²sp³, so there are no unpaired electrons."
       ],
       [
        "According to valence bond theory, [NiCl₄]²⁻ is",
        [
         "square planar (dsp²) and diamagnetic",
         "tetrahedral and diamagnetic",
         "tetrahedral (sp³) and paramagnetic",
         "octahedral and paramagnetic"
        ],
        2,
        "Ni²⁺ is 3d⁸; with Cl⁻ no pairing occurs, sp³ is used and two electrons remain unpaired."
       ],
       [
        "[Ni(CN)₄]²⁻ is square planar and diamagnetic. The hybridisation of Ni²⁺ in it is",
        [
         "sp³",
         "d²sp³",
         "sp³d²",
         "dsp²"
        ],
        3,
        "Strong field CN⁻ pairs the 3d⁸ electrons, leaving one 3d orbital vacant for dsp²."
       ],
       [
        "Which pair correctly gives the number of unpaired electrons in [Fe(CN)₆]³⁻ and [FeF₆]³⁻?",
        [
         "1 and 5",
         "5 and 1",
         "0 and 5",
         "1 and 3"
        ],
        0,
        "[Fe(CN)₆]³⁻ is inner orbital (d²sp³) with one unpaired electron; [FeF₆]³⁻ is outer orbital (sp³d²) with five."
       ],
       [
        "Which of the following is a limitation of valence bond theory?",
        [
         "It cannot explain why [Co(NH₃)₆]³⁺ is diamagnetic",
         "It does not explain the colour exhibited by coordination compounds",
         "It cannot account for the number of ligands bonded",
         "It cannot define coordination number"
        ],
        1,
        "VBT also lacks a quantitative magnetic interpretation and does not distinguish weak and strong ligands."
       ],
       [
        "In an octahedral crystal field, the d orbitals split into",
        [
         "a lower t₂g set (three orbitals) and a higher e_g set (two orbitals)",
         "a lower e_g set (three orbitals) and a higher t₂g set (two orbitals)",
         "a lower t₂g set (two orbitals) and a higher e_g set (three orbitals)",
         "five orbitals of equal energy"
        ],
        0,
        "d(x²−y²) and d(z²) point at the ligands and rise (+3/5 Δo); dxy, dyz and dxz fall (−2/5 Δo)."
       ],
       [
        "Which sequence correctly shows increasing ligand field strength in the spectrochemical series?",
        [
         "CO < CN⁻ < en < NH₃ < H₂O < F⁻ < Cl⁻ < Br⁻ < I⁻",
         "I⁻ < Br⁻ < Cl⁻ < H₂O < F⁻ < NH₃ < CN⁻ < en < CO",
         "I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ < CO",
         "Br⁻ < I⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ < CO"
        ],
        2,
        "Halides are weak field; CN⁻ and CO are the strongest in the series."
       ],
       [
        "A ligand forms a high spin octahedral complex when",
        [
         "Δo > P, so the electrons pair in t₂g first",
         "Δo < P, so the electrons occupy e_g orbitals before pairing",
         "Δo = 0 in all cases",
         "the ligand is a strong field ligand"
        ],
        1,
        "Weak field ligands give small Δo; pairing energy P is larger, so electrons spread over t₂g and e_g."
       ],
       [
        "For the same metal, ligand and metal-ligand distance, the tetrahedral splitting Δt is related to Δo as",
        [
         "Δt = (9/4)Δo",
         "Δt = Δo",
         "Δt = (4/9)Δo",
         "Δt = (2/5)Δo"
        ],
        2,
        "Tetrahedral splitting is smaller and inverted, so low spin tetrahedral complexes are rarely observed."
       ],
       [
        "According to crystal field theory, colour of a coordination compound arises due to",
        [
         "charge transfer from metal to nucleus",
         "ionisation of the ligand",
         "pairing of the ligand electrons",
         "d-d transition of electrons"
        ],
        3,
        "An electron is excited from t₂g to e_g by absorbing visible light; the colour seen is complementary to the one absorbed."
       ],
       [
        "Anhydrous CuSO₄ is white, but CuSO₄·5H₂O is blue because",
        [
         "water ligands cause d-orbital splitting, so d-d transitions can absorb visible light",
         "water oxidises Cu²⁺ to Cu³⁺",
         "the crystal absorbs ultraviolet only",
         "Cu²⁺ has no d electrons"
        ],
        0,
        "Without ligands there is no crystal field splitting and the substance is colourless."
       ],
       [
        "A complex that absorbs green light appears",
        [
         "green",
         "red (the complementary colour)",
         "violet",
         "black"
        ],
        1,
        "The observed colour is complementary to the colour absorbed."
       ],
       [
        "Which is a weakness of crystal field theory?",
        [
         "It cannot explain the colour of complexes",
         "It cannot explain magnetic properties",
         "It treats ligands as point charges and ignores covalent character of the metal-ligand bond",
         "It cannot explain the splitting of d orbitals"
        ],
        2,
        "Anionic ligands are expected to cause large splitting but lie at the low end of the spectrochemical series."
       ],
       [
        "The shapes of [Ni(CO)₄], [Fe(CO)₅] and [Cr(CO)₆] are respectively",
        [
         "square planar, octahedral, tetrahedral",
         "tetrahedral, octahedral, trigonal bipyramidal",
         "trigonal bipyramidal, tetrahedral, octahedral",
         "tetrahedral, trigonal bipyramidal, octahedral"
        ],
        3,
        "Homoleptic carbonyls have simple well-defined structures."
       ],
       [
        "The M-C bond in a metal carbonyl has both σ and π character. The π bond is formed by",
        [
         "donation from a filled metal d orbital into the empty π* orbital of CO",
         "donation of the lone pair of C into an empty π orbital of the metal",
         "overlap of two filled d orbitals",
         "donation from the π* orbital of CO into the metal s orbital"
        ],
        0,
        "The σ bond is ligand to metal; the π bond is metal to ligand, and together they give synergic bonding."
       ],
       [
        "In black and white photography, hypo solution fixes the film by dissolving undecomposed AgBr to form",
        [
         "[Ag(NH₃)₂]⁺",
         "[Ag(S₂O₃)₂]³⁻",
         "[Ag(CN)₂]⁻",
         "Ag₂S₂O₃"
        ],
        1,
        "Thiosulphate forms a soluble complex with silver."
       ],
       [
        "Which metal is the central atom in chlorophyll, haemoglobin and vitamin B₁₂ respectively?",
        [
         "Fe, Mg, Co",
         "Co, Fe, Mg",
         "Mg, Fe, Co",
         "Mg, Co, Fe"
        ],
        2,
        "Chlorophyll is a Mg complex, haemoglobin a Fe complex and vitamin B₁₂ a Co complex."
       ],
       [
        "The hardness of water is estimated by titration with",
        [
         "dimethylglyoxime",
         "AgNO₃",
         "hypo solution",
         "Na₂EDTA"
        ],
        3,
        "Ca²⁺ and Mg²⁺ form stable complexes with EDTA."
       ],
       [
        "Which complex is used as a catalyst for hydrogenation of alkenes?",
        [
         "[(Ph₃P)₃RhCl], Wilkinson catalyst",
         "cis-platin",
         "[Ni(CO)₄]",
         "[Ag(CN)₂]⁻"
        ],
        0,
        "Wilkinson catalyst is a rhodium complex; cis-platin is an anticancer drug."
       ]
      ],
      [
       [
        "A 0.02 mol sample of purple CoCl₃·5NH₃ is dissolved in water and excess AgNO₃ is added. What mass of AgCl precipitates? (Ag = 108, Cl = 35.5)",
        [
         "5.74 g",
         "8.61 g",
         "2.87 g",
         "11.48 g"
        ],
        0,
        "Formula is [CoCl(NH₃)₅]Cl₂, so 2 × 0.02 = 0.04 mol AgCl; 0.04 × 143.5 = 5.74 g.",
        "Count only ionisable Cl⁻."
       ],
       [
        "A student says: “PtCl₂·2NH₃ gives no AgCl with AgNO₃, so it contains no chlorine.” What is wrong with this?",
        [
         "The compound must contain Cl₂ molecules",
         "Both Cl⁻ are bound directly to Pt inside the coordination sphere ([PtCl₂(NH₃)₂]) and are not ionisable",
         "AgCl is soluble in excess AgNO₃",
         "Pt has a secondary valence of 2 so the Cl⁻ are free"
        ],
        1,
        "Cl⁻ satisfying secondary valence (four in all with 2 NH₃) is non-ionisable; Werner’s secondary valence is 4 for Pt(II)."
       ],
       [
        "Two compounds of formula CoCl₃·4NH₃, one green and one violet, each give 1 mol AgCl per mole and behave as 1:1 electrolytes. These results show that",
        [
         "both are [Co(NH₃)₄]Cl₃",
         "both are [CoCl(NH₃)₄]Cl₂",
         "both are [CoCl₂(NH₃)₄]Cl, with two Cl⁻ and four NH₃ bound to Co, and they are isomers",
         "the two compounds are identical"
        ],
        2,
        "Six secondary valences are satisfied; only one Cl⁻ ionises, but the properties differ because of a different spatial arrangement."
       ],
       [
        "Assertion (A): An aqueous solution of Mohr’s salt gives the tests for Fe²⁺, but K₄[Fe(CN)₆] solution does not give the test for Fe²⁺.\nReason (R): Mohr’s salt is a double salt that dissociates completely into simple ions, whereas the complex ion [Fe(CN)₆]⁴⁻ does not dissociate.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Double salts break into all their ions; a complex ion remains as one unit."
       ],
       [
        "In the compound [Co(NH₃)₅Br]SO₄, which of the following is NOT part of the coordination entity?",
        [
         "Br⁻",
         "NH₃",
         "Co³⁺",
         "SO₄²⁻"
        ],
        3,
        "The coordination entity is [Co(NH₃)₅Br]²⁺; sulphate is the counter ion outside the bracket."
       ],
       [
        "A student writes: “In [Co(NH₃)₆]Cl₃, Co³⁺ is a Lewis base because it holds six ligands.” The error is that",
        [
         "Co³⁺ accepts electron pairs from the ligands, so it is a Lewis acid",
         "Co³⁺ is neutral, not an ion",
         "Co³⁺ is a Lewis acid only in the absence of ligands",
         "Cl⁻ is the Lewis acid"
        ],
        0,
        "The central atom or ion is an electron pair acceptor, that is, a Lewis acid, while ligands are donors."
       ],
       [
        "Which of the following ligands cannot act as a chelating ligand?",
        [
         "en",
         "SCN⁻",
         "C₂O₄²⁻",
         "EDTA⁴⁻"
        ],
        1,
        "SCN⁻ is ambidentate but uses only one donor atom (S or N) at a time, so it is unidentate in each complex."
       ],
       [
        "A student says: “In [Fe(CN)₆]⁴⁻ the coordination number is 12 because each CN⁻ has a triple bond.” The error is that",
        [
         "the coordination number is 3, since CN⁻ is didentate",
         "the coordination number equals the oxidation number, 2",
         "only σ bonds between ligand and metal are counted, so the coordination number is 6",
         "the coordination number is 18 since CN⁻ has three bonds and six ligands"
        ],
        2,
        "Coordination number is the number of ligand donor atoms bonded by σ bonds; π bonds are not counted."
       ],
       [
        "How many ions per formula unit are produced when K₄[Fe(CN)₆] and [Co(NH₃)₅Cl]Cl₂ dissolve in water (taking the complex ion as one ion)?",
        [
         "10 and 8",
         "5 and 2",
         "4 and 3",
         "5 and 3"
        ],
        3,
        "K₄[Fe(CN)₆] gives 4 K⁺ + [Fe(CN)₆]⁴⁻ = 5; [Co(NH₃)₅Cl]Cl₂ gives [Co(NH₃)₅Cl]²⁺ + 2 Cl⁻ = 3."
       ],
       [
        "Which of the following species is wrongly matched with its shape?",
        [
         "[Ni(CN)₄]²⁻ - tetrahedral",
         "[NiCl₄]²⁻ - tetrahedral",
         "[PtCl₄]²⁻ - square planar",
         "[Cr(CO)₆] - octahedral"
        ],
        0,
        "[Ni(CN)₄]²⁻ is diamagnetic and square planar (dsp²); [NiCl₄]²⁻ is the tetrahedral one."
       ],
       [
        "In which of the following is the central metal in the +3 oxidation state?",
        [
         "[Ni(CO)₄]",
         "[Fe(C₂O₄)₃]³⁻",
         "[PtCl₄]²⁻",
         "[Cu(CN)₄]³⁻"
        ],
        1,
        "Fe: x + 3(−2) = −3 gives +3; the others are Ni(0), Pt(II) and Cu(I)."
       ],
       [
        "The coordination number and oxidation number of cobalt in [Co(en)₂(C₂O₄)]⁺ are",
        [
         "4 and +3",
         "6 and +1",
         "6 and +3",
         "3 and +3"
        ],
        2,
        "en and oxalate are didentate (2 × 2 + 2 = 6 donor atoms); x + 0 + (−2) = +1 gives x = +3.",
        "Charge of en is 0, oxalate is −2."
       ],
       [
        "Assertion (A): [Co(en)₃]³⁺ is a homoleptic complex.\nReason (R): Ethane-1,2-diamine is a didentate ligand that binds through two donor atoms.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Homoleptic means only one kind of donor group (here N only); denticity is a separate property and does not explain it."
       ],
       [
        "A student names [Co(NH₃)₄(H₂O)Cl]Cl₂ as tetraamminechloridoaquacobalt(III) chloride. What is wrong?",
        [
         "In a name the ligands are cited in alphabetical order irrespective of charge, so aqua must come before chlorido",
         "Anionic ligands are always named first, so the name is correct",
         "The chloride counter ions should not be named",
         "The oxidation state of cobalt should be written as (II)"
        ],
        0,
        "Alphabetical order (ammine, aqua, chlorido) gives tetraammineaquachloridocobalt(III) chloride."
       ],
       [
        "The correct formula of iron(III) hexacyanidoferrate(II) is",
        [
         "Fe₃[Fe(CN)₆]₄",
         "Fe₄[Fe(CN)₆]₃",
         "Fe[Fe(CN)₆]",
         "Fe₂[Fe(CN)₆]₃"
        ],
        1,
        "Anion [Fe(CN)₆]⁴⁻ and cation Fe³⁺: 4 × (+3) = 3 × (+4)."
       ],
       [
        "The formula for pentaamminecarbonatocobalt(III) chloride is",
        [
         "[Co(NH₃)₅(CO₃)]Cl₂",
         "[Co(CO₃)(NH₃)₅]Cl",
         "[Co(NH₃)₅(CO₃)]Cl",
         "[Co(NH₃)₅CO]Cl₃"
        ],
        2,
        "CO₃²⁻ is dianionic: x + 0 − 2 = +1 gives Co³⁺ with a 1+ complex ion, so one Cl⁻."
       ],
       [
        "The IUPAC name of [Pt(NH₃)₂Cl(NO₂)] is",
        [
         "diamminechloridonitro-O-platinum(IV)",
         "chloridodiamminenitrito-N-platinum(II)",
         "diamminechloridonitrito-N-platinate(II)",
         "diamminechloridonitrito-N-platinum(II)"
        ],
        3,
        "Neutral complex is named like a cation; alphabetical order ammine, chlorido, nitrito; Pt(II) since ligands total −2 and charge is 0 (NCERT Example 5.3)."
       ],
       [
        "A student names K₃[Fe(CN)₆] as “potassium hexacyanoiron(III)”. Identify the correct name.",
        [
         "potassium hexacyanidoferrate(III), because the complex is an anion and Fe takes its Latin name with -ate",
         "potassium hexacyanidoiron(III), because the metal name never changes",
         "potassium hexacyanidoferrate(II), because K is +1",
         "hexacyanidoferrate(III) potassium"
        ],
        0,
        "In a complex anion the metal name ends in -ate (ferrate); oxidation state is +3."
       ],
       [
        "The IUPAC name of [CoCl₂(en)₂]Cl is",
        [
         "dichloridodi(ethane-1,2-diamine)cobalt(III) chloride",
         "dichloridobis(ethane-1,2-diamine)cobalt(III) chloride",
         "bis(ethane-1,2-diamine)dichloridocobalt(II) chloride",
         "dichloridobis(ethane-1,2-diamine)cobaltate(III) chloride"
        ],
        1,
        "Ligand name with its own prefix takes bis; alphabetical order chlorido, ethane-1,2-diamine; Co = +3 (NCERT Example 5.3)."
       ],
       [
        "Which pair of isomers consists of stereoisomers?",
        [
         "[Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅(ONO)]Cl₂",
         "[Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅(SO₄)]Br",
         "cis- and trans-[Pt(NH₃)₂Cl₂]",
         "[Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆]"
        ],
        2,
        "Stereoisomers have the same bonds but different spatial arrangement; the other pairs have different bonds (structural)."
       ],
       [
        "How many geometrical isomers are possible for the square planar complex [Pt(NH₃)(Br)(Cl)(py)]?",
        [
         "2",
         "4",
         "6",
         "3"
        ],
        3,
        "A square planar MABXL complex has three isomers: two cis and one trans arrangement (NCERT Exercise 5.14)."
       ],
       [
        "The total number of stereoisomers (geometrical plus optical) possible for [CoCl₂(en)₂]⁺ is",
        [
         "3",
         "2",
         "4",
         "5"
        ],
        0,
        "trans is achiral (1); cis is chiral and exists as d and l (2); total 3."
       ],
       [
        "Assertion (A): Tetrahedral complexes of the type [MA₂B₂] do not show geometrical isomerism.\nReason (R): In a tetrahedral complex the relative positions of the unidentate ligands with respect to each other are the same.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "All positions in a tetrahedron are adjacent to each other, so there is no cis or trans (NCERT Example 5.4)."
       ],
       [
        "Which of the following is optically active?",
        [
         "trans-[PtCl₂(en)₂]²⁺",
         "cis-[PtCl₂(en)₂]²⁺",
         "[Co(NH₃)₆]³⁺",
         "[Ni(CO)₄]"
        ],
        1,
        "Only the cis isomer of [PtCl₂(en)₂]²⁺ lacks a plane of symmetry; trans is achiral."
       ],
       [
        "Assertion (A): trans-[CoCl₂(en)₂]⁺ shows optical isomerism.\nReason (R): The trans isomer has a plane of symmetry.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The trans isomer has a plane of symmetry, so it is achiral and does not show optical activity; only the cis isomer does."
       ],
       [
        "A student says: “The red form of [Co(NH₃)₅(NO₂)]Cl₂ has nitrite bound through nitrogen.” The correct statement is that",
        [
         "the yellow form has nitrite bound through oxygen and the red form through nitrogen",
         "both forms have nitrite bound through nitrogen",
         "the red form has nitrite bound through oxygen (-ONO) and the yellow form through nitrogen (-NO₂)",
         "the two forms differ in the number of Cl⁻ outside the bracket"
        ],
        2,
        "They are linkage isomers: M-ONO (red) and M-NO₂ (yellow)."
       ],
       [
        "A coordination isomer of [Cu(NH₃)₄][PtCl₄] is",
        [
         "[Pt(NH₃)₄][CuCl₄]",
         "[Cu(NH₃)₄Cl][PtCl₃]",
         "[Cu(NH₃)₄][PtCl₄]·H₂O",
         "[Pt(NH₃)₄][CuCl₄]Cl₂"
        ],
        0,
        "NH₃ and Cl⁻ ligands are interchanged between the two metal centres, keeping the overall composition the same."
       ],
       [
        "An aqueous solution of a salt of formula CoBr(SO₄)·5NH₃ gives a white precipitate with BaCl₂ but none with AgNO₃. Its formula is",
        [
         "[Co(NH₃)₅(SO₄)]Br",
         "[Co(NH₃)₅Br]SO₄",
         "[Co(NH₃)₅]BrSO₄",
         "[Co(NH₃)₅Br(SO₄)]"
        ],
        1,
        "Free SO₄²⁻ precipitates BaSO₄ and Br⁻ is bound inside the sphere, so no AgBr forms. This is how ionisation isomers are distinguished."
       ],
       [
        "Excess AgNO₃ is added to separate solutions of [Cr(H₂O)₆]Cl₃ and [Cr(H₂O)₅Cl]Cl₂·H₂O containing equal moles. The ratio of moles of AgCl precipitated is",
        [
         "3 : 1",
         "2 : 3",
         "3 : 2",
         "1 : 1"
        ],
        2,
        "The first has three ionisable Cl⁻; the grey-green solvate isomer has two."
       ],
       [
        "A student claims Werner’s theory fully explains why [Co(NH₃)₆]³⁺ is yellow and diamagnetic. Which questions did Werner’s theory leave unanswered?",
        [
         "Why Cl⁻ ions are precipitated by Ag⁺",
         "Why the secondary valence is six for cobalt(III)",
         "Why CoCl₃·4NH₃ gives 1 mol AgCl",
         "Why bonds are directional and why complexes have characteristic magnetic and optical properties"
        ],
        3,
        "Werner explained ionisable and non-ionisable linkages, but magnetic and optical properties came later with VBT and CFT."
       ],
       [
        "How many unpaired electrons does [CoF₆]³⁻ have, and what is the hybridisation of Co?",
        [
         "4, sp³d²",
         "0, d²sp³",
         "4, d²sp³",
         "2, sp³d²"
        ],
        0,
        "F⁻ is a weak ligand: Co³⁺ (3d⁶) does not pair up, so 4 unpaired electrons with outer 4d orbitals used (sp³d²)."
       ],
       [
        "A student reasons: “[Ni(CN)₄]²⁻ is paramagnetic because Ni²⁺ is d⁸, so it is tetrahedral (sp³).” The error is that",
        [
         "Ni²⁺ is d⁶ not d⁸",
         "the complex is actually diamagnetic with strong field CN⁻ pairing the electrons, giving square planar dsp²",
         "Ni²⁺ cannot form complexes with CN⁻",
         "sp³ gives a square planar shape"
        ],
        1,
        "Cyanide pairs the 3d⁸ electrons, leaving one d orbital for dsp²; no unpaired electrons."
       ],
       [
        "[Co(NH₃)₆]³⁺ is an inner orbital complex whereas [Ni(NH₃)₆]²⁺ is an outer orbital complex. The reason is that",
        [
         "NH₃ is a weak field ligand for Ni²⁺ but a strong one for Co³⁺ because of charge only",
         "Ni²⁺ has no 3d electrons",
         "Ni²⁺ (3d⁸) cannot free two 3d orbitals even on pairing, so it uses 4d orbitals (sp³d²)",
         "Co³⁺ uses 4s and 4p orbitals only"
        ],
        2,
        "Co³⁺ (3d⁶) frees two 3d orbitals by pairing; for 3d⁸ pairing leaves just one vacant 3d orbital."
       ],
       [
        "Assertion (A): [Fe(CN)₆]³⁻ is weakly paramagnetic whereas [FeF₆]³⁻ is strongly paramagnetic.\nReason (R): [Fe(CN)₆]³⁻ is an inner orbital d²sp³ complex with pairing of 3d electrons, while [FeF₆]³⁻ is an outer orbital sp³d² complex without pairing.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Fe³⁺ (3d⁵) has 1 unpaired electron with CN⁻ and 5 with F⁻."
       ],
       [
        "The spin only magnetic moment of [MnBr₄]²⁻ is 5.9 BM. Its geometry is",
        [
         "square planar, with one unpaired electron",
         "square planar, with five unpaired electrons",
         "tetrahedral, with one unpaired electron",
         "tetrahedral, with five unpaired electrons"
        ],
        3,
        "√[5(5+2)] = 5.92 BM means five unpaired electrons, so sp³ tetrahedral rather than dsp² (NCERT Example 5.7)."
       ],
       [
        "Among [Fe(CN)₆]³⁻, [FeF₆]³⁻, [Mn(CN)₆]³⁻ and [Co(C₂O₄)₃]³⁻, which has the highest spin only magnetic moment?",
        [
         "[FeF₆]³⁻",
         "[Fe(CN)₆]³⁻",
         "[Mn(CN)₆]³⁻",
         "[Co(C₂O₄)₃]³⁻"
        ],
        0,
        "Unpaired electrons are 5, 1, 2 and 0 respectively; μ for 5 is √35 = 5.92 BM."
       ],
       [
        "A tetracoordinate complex of Ni²⁺ has a spin only magnetic moment of 2.83 BM. It is",
        [
         "tetrahedral (sp³) with two unpaired electrons",
         "square planar (dsp²) with two unpaired electrons",
         "square planar (dsp²) and diamagnetic",
         "tetrahedral (sp³) and diamagnetic"
        ],
        0,
        "√[2(2+2)] = 2.83 BM means two unpaired electrons; square planar Ni²⁺ would have none."
       ],
       [
        "Which observation can valence bond theory NOT explain?",
        [
         "[Co(NH₃)₆]³⁺ is diamagnetic",
         "[Cu(H₂O)₄]²⁺ is blue",
         "[NiCl₄]²⁻ has two unpaired electrons",
         "[Ni(CN)₄]²⁻ is diamagnetic"
        ],
        1,
        "VBT does not explain colour; it does explain structures and the number of unpaired electrons."
       ],
       [
        "What is the net energy of the d electrons (ignoring pairing energy), in units of Δo, in the low spin octahedral complex [Fe(CN)₆]⁴⁻ (Fe²⁺, d⁶)?",
        [
         "−0.4 Δo",
         "−1.6 Δo",
         "−2.4 Δo",
         "+2.4 Δo"
        ],
        2,
        "Configuration t₂g⁶e_g⁰: 6 × (−0.4 Δo) = −2.4 Δo.",
        "Each t₂g electron lowers energy by 2/5 Δo."
       ],
       [
        "Arrange the ligands H₂O, NH₃ and CN⁻ in increasing order of crystal field splitting, given that [Co(NH₃)₅(H₂O)]³⁺, [Co(NH₃)₆]³⁺ and [Co(CN)₆]³⁻ absorb at 500 nm, 475 nm and 310 nm respectively.",
        [
         "H₂O < NH₃ < CN⁻",
         "CN⁻ < NH₃ < H₂O",
         "NH₃ < H₂O < CN⁻",
         "H₂O < CN⁻ < NH₃"
        ],
        0,
        "Shorter wavelength absorbed means larger Δo, so the order follows the spectrochemical series."
       ],
       [
        "Mn²⁺ in [Mn(H₂O)₆]²⁺ has five unpaired electrons, but in [Mn(CN)₆]⁴⁻ it has only one. The correct explanation is that",
        [
         "H₂O is a strong field ligand giving t₂g⁵ while CN⁻ is weak",
         "H₂O is a weak field ligand (Δo < P, t₂g³e_g²) while CN⁻ is strong (Δo > P, t₂g⁵)",
         "both give the same configuration but different Δo",
         "the oxidation state of Mn is different in the two complexes"
        ],
        1,
        "High spin t₂g³e_g² has 5 unpaired electrons; low spin t₂g⁵ has 1."
       ],
       [
        "An octahedral complex has Δo = 20000 cm⁻¹. If an electron is excited from t₂g to e_g by absorbing light of energy equal to Δo, the wavelength absorbed is",
        [
         "200 nm",
         "50 nm",
         "2000 nm",
         "500 nm"
        ],
        3,
        "λ = 1/(20000 cm⁻¹) = 5 × 10⁻⁵ cm = 500 nm (blue-green).",
        "1 cm = 10⁷ nm."
       ],
       [
        "For an octahedral complex Δo = 22500 cm⁻¹. For a tetrahedral complex of the same metal and ligand at the same distance, Δt is",
        [
         "10000 cm⁻¹",
         "50625 cm⁻¹",
         "9000 cm⁻¹",
         "22500 cm⁻¹"
        ],
        0,
        "Δt = (4/9) × 22500 = 10000 cm⁻¹."
       ],
       [
        "A student says: “Heating [Ti(H₂O)₆]Cl₃ removes water, so the compound turns more intensely violet.” The correct outcome is that",
        [
         "it becomes colourless, since without ligands there is no crystal field splitting and no d-d transition",
         "it becomes colourless, since Ti³⁺ is oxidised to Ti⁴⁺",
         "it turns green because chloride replaces water",
         "it stays violet because colour depends only on the metal"
        ],
        0,
        "Colour arises from d-d transitions between split levels; the ligand is essential."
       ],
       [
        "Aqueous green [Ni(H₂O)₆]²⁺ changes through pale blue and blue/purple to violet as ethane-1,2-diamine is added up to 3 mol per mole of Ni²⁺. This colour change is mainly because",
        [
         "Ni²⁺ is oxidised by en",
         "the d-d transition no longer occurs",
         "en is a stronger field ligand than H₂O, so Δo changes and a different wavelength is absorbed",
         "Ni²⁺ loses its d electrons"
        ],
        2,
        "Replacing H₂O with the stronger field en increases Δo and shifts the absorbed light, changing the colour seen."
       ],
       [
        "[Cu(H₂O)₄]²⁺ absorbs light at 600 nm (red region). Its colour is",
        [
         "red",
         "pale yellow",
         "colourless",
         "blue, the complement of the absorbed red"
        ],
        3,
        "The colour seen is complementary to the absorbed one (Table 5.3 in NCERT)."
       ],
       [
        "A student says: “Crystal field theory explains why Cl⁻ is a strong field ligand, since it is anionic.” The error is that",
        [
         "anionic ligands are found at the low end of the spectrochemical series, which CFT cannot explain because it ignores covalent bonding",
         "Cl⁻ is neutral",
         "CFT treats ligands as dipoles only",
         "Cl⁻ is the strongest ligand in the series"
        ],
        0,
        "Treating ligands as point charges predicts anions to split the most, but experiment shows otherwise."
       ],
       [
        "A student says: “[Ni(CO)₄] is diamagnetic and square planar (dsp²) because nickel is in zero oxidation state.” The error is that",
        [
         "it is paramagnetic and tetrahedral",
         "it is tetrahedral (sp³); Ni(0) has no unpaired electrons",
         "it is octahedral",
         "it is diamagnetic and trigonal bipyramidal"
        ],
        1,
        "Tetracarbonylnickel(0) is tetrahedral and diamagnetic ."
       ],
       [
        "Assertion (A): The metal-carbon bond in metal carbonyls is strengthened by synergic bonding.\nReason (R): The CO to metal σ donation and the metal to CO π back donation reinforce each other.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Donation of a lone pair into the metal and back donation into the π* orbital of CO strengthen each other."
       ],
       [
        "In the extraction of gold by cyanide process, gold forms [Au(CN)₂]⁻ in solution in the presence of O₂ and water. Gold metal is then recovered by adding",
        [
         "zinc",
         "more NaCN",
         "hypo solution",
         "dilute HCl"
        ],
        0,
        "Zinc displaces gold from the soluble cyanide complex."
       ],
       [
        "Match the biological complex with the metal: chlorophyll, haemoglobin, vitamin B₁₂, and a catalyst used for alkene hydrogenation.",
        [
         "Fe, Mg, Co, Pt",
         "Mg, Fe, Co, Rh",
         "Mg, Co, Fe, Rh",
         "Mg, Fe, Rh, Co"
        ],
        1,
        "Chlorophyll (Mg), haemoglobin (Fe), vitamin B₁₂ (Co), Wilkinson catalyst (Rh)."
       ],
       [
        "Impure nickel is converted into a volatile complex that decomposes on heating to give pure nickel. Which complex is formed, and how does EDTA relate to medicine?",
        [
         "[Ni(NH₃)₆]²⁺; EDTA treats lead poisoning",
         "[Ni(CO)₄]; EDTA is an anticancer drug like cis-platin",
         "[Ni(CO)₄]; EDTA is used in the treatment of lead poisoning",
         "[Ni(CN)₄]²⁻; EDTA removes excess copper"
        ],
        2,
        "Carbonyl route purifies Ni; chelate therapy uses EDTA for lead poisoning, cis-platin for tumours."
       ],
       [
        "In photography, undecomposed AgBr on the film is removed by hypo solution (Na₂S₂O₃). The complex ion formed is [Ag(S₂O₃)₂]ⁿ⁻. The value of n and the oxidation state of Ag are",
        [
         "2 and +1",
         "3 and +2",
         "1 and +3",
         "3 and +1"
        ],
        3,
        "Ag⁺ + 2(S₂O₃²⁻): +1 − 4 = −3; silver remains +1."
       ]
      ]
     ]
    },
    {
     "n": 6,
     "t": "Haloalkanes and Haloarenes",
     "levels": [
      [
       [
        "Dichloromethane, chloroform and carbon tetrachloride are classified, respectively, as",
        [
         "mono-, di- and trihalogen compounds",
         "di-, tetra- and trihalogen compounds",
         "di-, tri- and tetrahalogen compounds",
         "tri-, di- and tetrahalogen compounds"
        ],
        2,
        "CH₂Cl₂ has two, CHCl₃ three and CCl₄ four halogen atoms."
       ],
       [
        "(CH₃)₂CHCl is classified as a",
        [
         "secondary alkyl halide",
         "primary alkyl halide",
         "tertiary alkyl halide",
         "allylic halide"
        ],
        0,
        "Chlorine is on a carbon that is bonded to two other carbon atoms, so the halide is secondary (2°)."
       ],
       [
        "In CH₂=CH–CH₂Br the halogen is attached to an sp³ carbon next to a C=C bond. Such a halide is called",
        [
         "a vinylic halide",
         "a benzylic halide",
         "an aryl halide",
         "an allylic halide"
        ],
        3,
        "A halogen on the sp³ carbon adjacent to a carbon–carbon double bond makes an allylic halide."
       ],
       [
        "Which of the following is a benzylic halide?",
        [
         "C₆H₅Cl",
         "C₆H₅CH₂Cl",
         "C₆H₅CH₂CH₂Cl",
         "CH₂=CHCl"
        ],
        1,
        "In benzylic halides the halogen is on an sp³ carbon directly attached to the aromatic ring."
       ],
       [
        "In vinyl chloride, CH₂=CHCl, the carbon bonded to chlorine is",
        [
         "sp³ hybridised and next to a C=C bond",
         "sp² hybridised and part of a C=C bond",
         "sp hybridised",
         "sp³ hybridised and part of a benzene ring"
        ],
        1,
        "Vinylic halides have the halogen on a doubly bonded sp² carbon."
       ],
       [
        "Chlorobenzene is an aryl halide because the chlorine atom is bonded to",
        [
         "an sp³ carbon of an alkyl side chain",
         "an sp carbon",
         "a carbon next to a ring",
         "an sp² carbon of the aromatic ring"
        ],
        3,
        "In aryl halides the halogen is directly bonded to the sp² carbon of an aromatic ring."
       ],
       [
        "The IUPAC name of (CH₃)₃CBr (tert-butyl bromide) is",
        [
         "2-bromo-2-methylpropane",
         "1-bromo-2-methylpropane",
         "2-bromobutane",
         "1-bromo-1,1-dimethylethane"
        ],
        0,
        "The parent chain is propane with Br and CH₃ both on C-2 (Table 6.1)."
       ],
       [
        "CH₃CHCl₂ and ClCH₂CH₂Cl are respectively examples of",
        [
         "a vic-dihalide and a gem-dihalide",
         "two gem-dihalides",
         "a gem-dihalide and a vic-dihalide",
         "two vic-dihalides"
        ],
        2,
        "Gem-dihalides have both halogens on the same carbon, vic-dihalides on adjacent carbons."
       ],
       [
        "The IUPAC name of benzyl chloride, C₆H₅CH₂Cl, is",
        [
         "chlorotoluene",
         "1-chloro-2-methylbenzene",
         "chlorobenzene",
         "chlorophenylmethane"
        ],
        3,
        "Benzyl chloride is named as a halo-substituted methane carrying a phenyl group (Table 6.1)."
       ],
       [
        "o-Dichlorobenzene is named in the IUPAC system as",
        [
         "1,3-dichlorobenzene",
         "1,2-dichlorobenzene",
         "1,4-dichlorobenzene",
         "2,3-dichlorobenzene"
        ],
        1,
        "The prefixes o-, m-, p- are replaced by the locants 1,2; 1,3 and 1,4."
       ],
       [
        "In an alkyl halide the carbon–halogen bond is polar because",
        [
         "carbon is more electronegative than halogen",
         "the halogen has a positive charge",
         "halogens are more electronegative than carbon, so carbon is δ⁺ and halogen δ⁻",
         "the bond is ionic"
        ],
        2,
        "The electronegativity difference polarises the C–X bond with a partial positive charge on carbon."
       ],
       [
        "From C–F to C–I the carbon–halogen bond length ___ and the bond enthalpy ___.",
        [
         "increases; decreases",
         "decreases; increases",
         "increases; increases",
         "decreases; decreases"
        ],
        0,
        "Halogen size increases down the group, giving longer and weaker bonds (CH₃–F 139 pm, 452 kJ mol⁻¹; CH₃–I 214 pm, 234 kJ mol⁻¹)."
       ],
       [
        "Thionyl chloride is the preferred reagent for converting an alcohol to an alkyl chloride because",
        [
         "it gives only a tertiary alkyl chloride",
         "it forms a solid by-product that is easy to filter",
         "the by-products SO₂ and HCl are gases that escape, leaving a pure product",
         "it works only without heating"
        ],
        2,
        "R–OH + SOCl₂ → R–Cl + SO₂ + HCl; both side products leave as gases."
       ],
       [
        "Primary and secondary alcohols react with concentrated HCl only in the presence of",
        [
         "anhydrous ZnCl₂",
         "anhydrous AlCl₃",
         "dilute H₂SO₄",
         "red phosphorus"
        ],
        0,
        "ZnCl₂ is the catalyst; the order of reactivity of alcohols with haloacids is 3° > 2° > 1°."
       ],
       [
        "Good yields of alkyl iodides from alcohols are obtained by heating the alcohol with KI in",
        [
         "concentrated H₂SO₄",
         "concentrated HNO₃",
         "aqueous NaOH",
         "95% orthophosphoric acid"
        ],
        3,
        "H₃PO₄ does not oxidise HI, whereas H₂SO₄ oxidises it to I₂ (NCERT Intext 6.2)."
       ],
       [
        "Phosphorus tribromide used for converting alcohols to bromides is usually generated in situ from",
        [
         "white phosphorus and HBr",
         "red phosphorus and bromine",
         "PCl₅ and NaBr",
         "P₂O₅ and Br₂"
        ],
        1,
        "PBr₃ and PI₃ are made in the reaction mixture from red phosphorus with Br₂ or I₂ respectively."
       ],
       [
        "Free radical chlorination of an alkane is a poor method for making a pure alkyl chloride because",
        [
         "it gives only polyhalogen compounds",
         "it gives a complex mixture of isomeric mono- and polyhalogen compounds",
         "it needs very high pressure",
         "the product is always an alkene"
        ],
        1,
        "The mixture is hard to separate, so the yield of any single compound is low."
       ],
       [
        "Propene reacts with HBr (no peroxide) to give mainly",
        [
         "1-bromopropane",
         "1,2-dibromopropane",
         "allyl bromide",
         "2-bromopropane"
        ],
        3,
        "Addition follows Markovnikov’s rule; the halogen goes to the carbon carrying fewer hydrogens."
       ],
       [
        "Bromine in CCl₄ is added to an alkene. The reddish-brown colour disappears because",
        [
         "a colourless vic-dibromide is formed",
         "a gem-dibromide is formed",
         "HBr gas is released",
         "CCl₄ reacts with the alkene"
        ],
        0,
        "Addition of Br₂ across C=C gives a vic-dibromide; this is a test for a double bond."
       ],
       [
        "The Finkelstein reaction converts an alkyl chloride or bromide to an alkyl iodide using",
        [
         "KI in water",
         "AgF in water",
         "NaI in dry acetone",
         "I₂ with red phosphorus"
        ],
        2,
        "NaCl or NaBr is insoluble in dry acetone and precipitates, driving the reaction forward (Le Chatelier’s principle)."
       ],
       [
        "Alkyl fluorides are best prepared from alkyl chlorides or bromides by",
        [
         "NaI in dry acetone (Finkelstein reaction)",
         "direct reaction with F₂",
         "Sandmeyer reaction",
         "heating with a metallic fluoride such as AgF or Hg₂F₂ (Swarts reaction)"
        ],
        3,
        "Swarts reaction uses AgF, Hg₂F₂, CoF₂ or SbF₃."
       ],
       [
        "Chlorobenzene is prepared from benzene by",
        [
         "Cl₂ in sunlight",
         "Cl₂ in the presence of FeCl₃ or Fe",
         "HCl with ZnCl₂",
         "NaCl with H₂SO₄"
        ],
        1,
        "Aryl chlorides and bromides form by electrophilic substitution with a Lewis acid catalyst."
       ],
       [
        "Iodination of benzene is carried out in the presence of an oxidising agent such as HNO₃ because",
        [
         "iodine is not electrophilic enough",
         "HNO₃ acts as a Lewis acid",
         "the reaction is reversible and the oxidant removes the HI formed",
         "it prevents formation of the para isomer"
        ],
        2,
        "HNO₃ oxidises HI back to I₂, so the equilibrium shifts towards iodobenzene."
       ],
       [
        "In Sandmeyer’s reaction, benzenediazonium chloride is converted to chlorobenzene by treating it with",
        [
         "Cu₂Cl₂ (cuprous chloride)",
         "KI",
         "NaOH",
         "Zn dust"
        ],
        0,
        "The diazonium group is replaced by –Cl or –Br using CuCl or CuBr; iodine needs only KI."
       ],
       [
        "Phenol cannot be converted to chlorobenzene by the reagents used for alcohols (HCl/ZnCl₂, SOCl₂) because",
        [
         "phenol is a gas",
         "the O–H bond in phenol is very weak",
         "the C–O bond in phenol has partial double bond character and is difficult to break",
         "chlorobenzene is unstable"
        ],
        2,
        "Resonance gives the C–O bond partial double bond character, making it stronger than a single bond."
       ],
       [
        "For the same alkyl group, the boiling points of alkyl halides follow the order",
        [
         "R–I > R–Br > R–Cl > R–F",
         "R–F > R–Cl > R–Br > R–I",
         "R–Cl > R–Br > R–I > R–F",
         "R–Br > R–I > R–F > R–Cl"
        ],
        0,
        "Larger size and mass of the halogen increases van der Waals forces."
       ],
       [
        "Among the isomeric bromobutanes, the lowest boiling point belongs to",
        [
         "1-bromobutane",
         "2-bromobutane",
         "all have equal boiling points",
         "2-bromo-2-methylpropane"
        ],
        3,
        "Boiling points of isomeric haloalkanes fall with increased branching."
       ],
       [
        "Which statement about haloalkanes is correct?",
        [
         "They are highly soluble in water because they form hydrogen bonds with it",
         "They are only slightly soluble in water but dissolve in organic solvents",
         "All are lighter than water",
         "They have lower boiling points than alkanes of similar mass"
        ],
        1,
        "They cannot replace the strong hydrogen bonds of water; with organic solvents the new attractions are as strong as those broken."
       ],
       [
        "Haloalkanes react with KCN to give mainly alkyl cyanides (R–CN), whereas with AgCN they give mainly",
        [
         "amines",
         "isocyanides (R–NC)",
         "alcohols",
         "alkenes"
        ],
        1,
        "KCN is ionic and attacks through carbon; AgCN is covalent so nitrogen donates its pair (NCERT Example 6.5)."
       ],
       [
        "The nitrite ion, NO₂⁻, is an ambident nucleophile. Reaction of R–X with AgNO₂ gives mainly",
        [
         "alkyl nitrite (R–O–N=O)",
         "amine",
         "ether",
         "nitroalkane (R–NO₂)"
        ],
        3,
        "AgNO₂ reacts through nitrogen to give nitroalkanes; KNO₂ attacks through oxygen giving alkyl nitrites."
       ],
       [
        "Which reagent converts R–X into an ether R–O–R’?",
        [
         "Sodium alkoxide, R’ONa",
         "Aqueous KOH",
         "KCN",
         "LiAlH₄"
        ],
        0,
        "The alkoxide ion R’O⁻ is the nucleophile in this substitution (Table 6.4)."
       ],
       [
        "Which statement describes an SN2 reaction?",
        [
         "It has a carbocation intermediate",
         "Its rate depends only on the concentration of the alkyl halide",
         "It is a one-step process in which bond formation and bond breaking occur simultaneously",
         "It is favoured by tertiary halides"
        ],
        2,
        "SN2 is bimolecular with a single transition state and no intermediate; rate = k[R–X][Nu⁻]."
       ],
       [
        "The order of reactivity of simple alkyl halides in SN2 reactions is",
        [
         "tertiary > secondary > primary > CH₃X",
         "secondary > primary > CH₃X > tertiary",
         "all react at the same rate",
         "CH₃X > primary > secondary > tertiary"
        ],
        3,
        "Bulky groups hinder approach of the nucleophile, so methyl halides react fastest."
       ],
       [
        "Hydrolysis of tert-butyl bromide with aqueous hydroxide follows first order kinetics because",
        [
         "OH⁻ attacks in the slow step",
         "the slow step is ionisation of the C–Br bond to a carbocation",
         "the reaction occurs in one step",
         "the product is a racemic mixture"
        ],
        1,
        "The rate depends only on [t-BuBr], since the rate-determining step is the formation of the carbocation."
       ],
       [
        "SN1 reactions are favoured by",
        [
         "methyl halides in polar protic solvents",
         "tertiary halides with strong bulky nucleophiles in non-polar solvents",
         "tertiary halides in polar protic solvents",
         "primary halides in non-polar solvents"
        ],
        2,
        "Stable carbocations form easily and are solvated by polar protic solvents such as water or alcohol."
       ],
       [
        "Which of the following has a chiral (asymmetric) carbon atom?",
        [
         "Butan-2-ol",
         "Propan-2-ol",
         "Propan-1-ol",
         "2-Chloropropane"
        ],
        0,
        "Only butan-2-ol has a carbon bearing four different groups (H, OH, CH₃, C₂H₅)."
       ],
       [
        "A racemic mixture is optically inactive because",
        [
         "it contains only achiral molecules",
         "it has no asymmetric carbon",
         "it contains equal amounts of two enantiomers whose rotations cancel",
         "light does not pass through it"
        ],
        2,
        "Equal and opposite rotations from the (+) and (–) forms cancel."
       ],
       [
        "Enantiomers differ from each other in",
        [
         "the direction in which they rotate plane polarised light",
         "melting point",
         "boiling point",
         "refractive index"
        ],
        0,
        "Enantiomers have identical physical properties except for the sign of optical rotation."
       ],
       [
        "A compound that rotates the plane of plane polarised light clockwise is called",
        [
         "laevorotatory, shown as (–)",
         "racemic, shown as (±)",
         "achiral",
         "dextrorotatory, shown as (+)"
        ],
        3,
        "Clockwise rotation is d- or (+); anticlockwise is l- or (–)."
       ],
       [
        "An optically active alkyl halide reacting by the SN2 mechanism gives a product with",
        [
         "retention of configuration",
         "inversion of configuration",
         "complete racemisation",
         "no change in the sign of rotation"
        ],
        1,
        "The nucleophile attacks from the side opposite the leaving group, like an umbrella turning inside out."
       ],
       [
        "Hydrolysis of an optically active alkyl halide by the SN1 mechanism gives mainly",
        [
         "a single enantiomer with inverted configuration",
         "a racemic mixture",
         "a single enantiomer with retained configuration",
         "an alkene"
        ],
        1,
        "The planar sp² carbocation can be attacked from either face."
       ],
       [
        "A reaction in which no bond to the stereocentre is broken is said to proceed with",
        [
         "inversion of configuration",
         "racemisation",
         "elimination",
         "retention of configuration"
        ],
        3,
        "The spatial arrangement of groups around the stereocentre is preserved (the sign of rotation may still change)."
       ],
       [
        "Heating 2-bromopentane with alcoholic KOH gives mainly",
        [
         "pent-2-ene",
         "pent-1-ene",
         "pentan-2-ol",
         "pentane"
        ],
        0,
        "β-Elimination follows Saytzeff’s rule: the more substituted alkene is the major product."
       ],
       [
        "Haloalkane heated with aqueous KOH versus alcoholic KOH gives respectively",
        [
         "alkene and alcohol",
         "alcohol and ether",
         "alcohol (substitution) and alkene (elimination)",
         "alkene and alkane"
        ],
        2,
        "Aqueous KOH favours nucleophilic substitution; alcoholic KOH favours dehydrohalogenation."
       ],
       [
        "Grignard reagents are prepared by reacting an alkyl halide with magnesium in",
        [
         "water",
         "ethanol",
         "dilute HCl",
         "dry ether"
        ],
        3,
        "RMgX reacts with any proton source, so moisture must be excluded."
       ],
       [
        "Bromoethane on heating with sodium metal in dry ether gives (Wurtz reaction)",
        [
         "ethane",
         "butane",
         "propane",
         "ethene"
        ],
        1,
        "2 C₂H₅Br + 2 Na → C₄H₁₀ + 2 NaBr; the product has double the number of carbons."
       ],
       [
        "Haloarenes are much less reactive than haloalkanes towards nucleophilic substitution mainly because",
        [
         "the halogen is more electronegative in haloarenes",
         "the carbon is sp³ hybridised",
         "the C–X bond has partial double bond character and the carbon is sp² hybridised",
         "haloarenes are non-polar"
        ],
        2,
        "Resonance and sp² carbon make the C–Cl bond shorter and stronger (169 pm versus 177 pm)."
       ],
       [
        "Nucleophilic substitution in chlorobenzene (replacement by –OH) becomes easier when",
        [
         "a nitro group is present at the ortho or para position",
         "a nitro group is present at the meta position only",
         "an alkyl group is present at the para position",
         "the temperature is lowered"
        ],
        0,
        "–NO₂ at o/p stabilises the negatively charged intermediate by resonance; meta –NO₂ cannot."
       ],
       [
        "The halogen atom in chlorobenzene is",
        [
         "activating and ortho, para-directing",
         "deactivating and meta-directing",
         "slightly deactivating and ortho, para-directing",
         "activating and meta-directing"
        ],
        2,
        "–I effect deactivates the ring while resonance directs the incoming group to o- and p-positions."
       ],
       [
        "A mixture of chlorobenzene and chloromethane heated with sodium in dry ether gives toluene. This is the",
        [
         "Wurtz–Fittig reaction",
         "Fittig reaction",
         "Wurtz reaction",
         "Finkelstein reaction"
        ],
        0,
        "An alkyl halide and an aryl halide couple with sodium to give an alkylarene."
       ],
       [
        "Bromobenzene heated with sodium in dry ether gives",
        [
         "benzene",
         "toluene",
         "phenol",
         "biphenyl"
        ],
        3,
        "Fittig reaction: two aryl groups are joined together."
       ],
       [
        "Dichloromethane (methylene chloride) is commonly used as",
        [
         "an anaesthetic in surgery",
         "a paint remover and aerosol propellant",
         "an insecticide",
         "a refrigerant of the freon type only"
        ],
        1,
        "It is also a process solvent in drug manufacture, but it harms the central nervous system."
       ],
       [
        "Chloroform is stored in closed dark coloured bottles, filled to the top, to prevent its oxidation to",
        [
         "carbon tetrachloride",
         "phosgene (COCl₂)",
         "chlorine",
         "formaldehyde"
        ],
        1,
        "Air and light slowly oxidise CHCl₃ to the extremely poisonous carbonyl chloride."
       ],
       [
        "The antiseptic action of iodoform is due to",
        [
         "iodoform itself",
         "its objectionable smell",
         "carbon monoxide",
         "the liberation of free iodine"
        ],
        3,
        "Iodoform was replaced by other iodine formulations as it smells unpleasant."
       ],
       [
        "Release of carbon tetrachloride into the atmosphere is a concern because it",
        [
         "depletes the ozone layer",
         "causes acid rain",
         "forms smog with sulphur dioxide",
         "makes the air alkaline"
        ],
        0,
        "It rises into the stratosphere, and ozone depletion increases exposure to UV rays."
       ],
       [
        "Freon-12 (CCl₂F₂) is manufactured from tetrachloromethane by",
        [
         "Finkelstein reaction",
         "Sandmeyer reaction",
         "Swarts reaction",
         "Wurtz reaction"
        ],
        2,
        "CCl₄ is fluorinated with a metallic fluoride (such as SbF₃) in the Swarts reaction."
       ],
       [
        "Freons are widely used because they are",
        [
         "highly reactive and corrosive",
         "toxic and flammable",
         "solid at room temperature",
         "stable, unreactive, non-toxic and easily liquefiable"
        ],
        3,
        "They serve as aerosol propellants and refrigerants, but they reach the stratosphere and upset the ozone balance."
       ],
       [
        "DDT is not easily removed from the environment mainly because",
        [
         "it dissolves completely in water",
         "it is chemically stable and gets stored in fatty tissues of animals",
         "it is rapidly metabolised by animals",
         "it evaporates immediately"
        ],
        1,
        "DDT builds up in fat over time; it was the first chlorinated organic insecticide."
       ]
      ],
      [
       [
        "How many of the following are dihalogen compounds: CH₂Cl₂, CHCl₃, ClCH₂CH₂Cl, CH₃CHBr₂, CCl₄?",
        [
         "2",
         "4",
         "3",
         "5"
        ],
        2,
        "CH₂Cl₂, ClCH₂CH₂Cl and CH₃CHBr₂ have two halogens; CHCl₃ is tri- and CCl₄ is tetrahalo."
       ],
       [
        "Which of the following is a secondary benzylic halide?",
        [
         "C₆H₅CH(Cl)CH₃",
         "C₆H₅CH₂Cl",
         "C₆H₅CH₂CH₂Cl",
         "o-CH₃C₆H₄Cl"
        ],
        0,
        "The halogen is on a carbon bonded to the ring and to two carbons in total (ring carbon and CH₃). C₆H₅CH₂CH₂Cl is a primary alkyl halide; o-CH₃C₆H₄Cl is an aryl halide."
       ],
       [
        "A student writes: “CH₂=CH–CH₂Cl and CH₂=CHCl are both vinylic halides because each has C=C and Cl.” The error is that",
        [
         "CH₂=CHCl is allylic, while CH₂=CHCH₂Cl is vinylic",
         "both are aryl halides",
         "CH₂=CHCH₂Cl is allylic, since Cl is on an sp³ carbon next to the double bond",
         "both are benzylic halides"
        ],
        2,
        "Only in CH₂=CHCl is the halogen bonded to the sp² carbon of C=C."
       ],
       [
        "The IUPAC name of CH₃CH=C(Cl)CH₂CH(CH₃)₂ is",
        [
         "3-chloro-5-methylhex-2-ene",
         "4-chloro-2-methylhex-4-ene",
         "2-chloro-4-methylpent-2-ene",
         "3-chloro-5-methylhex-3-ene"
        ],
        0,
        "Longest chain has six carbons; numbering gives the double bond the lower locant (2), so Cl is on C-3 and CH₃ on C-5 (NCERT Exercise 6.1)."
       ],
       [
        "Of the eight structural isomers of C₅H₁₁Br, how many are primary bromides?",
        [
         "3",
         "1",
         "2",
         "4"
        ],
        3,
        "1-Bromopentane, 1-bromo-3-methylbutane, 1-bromo-2-methylbutane and 1-bromo-2,2-dimethylpropane are primary (NCERT Example 6.1)."
       ],
       [
        "Assertion (A): CH₃Cl has a slightly higher dipole moment than CH₃F (1.860 D versus 1.847 D).\nReason (R): Chlorine is more electronegative than fluorine.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true, but fluorine is more electronegative; dipole moment also depends on bond length, and the C–Cl bond is longer."
       ],
       [
        "Going from CH₃F to CH₃I, which pair of changes is correct?",
        [
         "Bond length falls and bond enthalpy rises",
         "Bond length rises from 139 to 214 pm and bond enthalpy falls from 452 to 234 kJ mol⁻¹",
         "Bond length rises and bond enthalpy also rises",
         "Both stay nearly the same because carbon is common"
        ],
        1,
        "The larger halogen forms a longer, weaker bond, which is why iodides are the best leaving-group substrates."
       ],
       [
        "Propan-1-ol is heated with SOCl₂ to give A. A is then heated with NaI in dry acetone to give B. B is",
        [
         "2-iodopropane",
         "1-iodopropane",
         "propan-1-ol",
         "1-chloropropane"
        ],
        1,
        "SOCl₂ gives CH₃CH₂CH₂Cl; Finkelstein exchange replaces Cl by I."
       ],
       [
        "The most convenient way to prepare tert-butyl chloride from 2-methylpropan-2-ol is",
        [
         "heating with dilute HCl and ZnCl₂ for several hours",
         "heating with NaCl and dilute H₂SO₄",
         "treating with NaI in dry acetone",
         "shaking the alcohol with concentrated HCl at room temperature"
        ],
        3,
        "Tertiary alcohols react most readily with haloacids (3° > 2° > 1°), so no ZnCl₂ or heating is needed."
       ],
       [
        "A student prepares iodoethane by heating ethanol with KI and concentrated H₂SO₄. The mistake is that",
        [
         "H₂SO₄ oxidises HI to I₂, so 95% H₃PO₄ should be used",
         "KI cannot supply iodide ions",
         "ethanol is a tertiary alcohol and needs ZnCl₂",
         "H₂SO₄ converts ethanol to ethyl chloride"
        ],
        0,
        "Concentrated H₂SO₄ is an oxidising acid; H₃PO₄ is not, so HI survives to react with the alcohol."
       ],
       [
        "Which isomer of C₅H₁₂ gives three isomeric monochlorides on photochemical chlorination?",
        [
         "2,2-Dimethylpropane",
         "2-Methylbutane",
         "Pentane (n-pentane)",
         "2-Methylpropane"
        ],
        2,
        "n-Pentane has three types of hydrogen (C-1, C-2, C-3); 2,2-dimethylpropane gives one and 2-methylbutane gives four (NCERT Intext 6.4)."
       ],
       [
        "Propene reacts with HBr to give A. A is converted to a Grignard reagent B in dry ether, and B is then treated with water to give C. C is",
        [
         "propene",
         "propan-2-ol",
         "2,3-dimethylbutane",
         "propane"
        ],
        3,
        "A = 2-bromopropane; B = (CH₃)₂CHMgBr; hydrolysis gives propane."
       ],
       [
        "A student claims that propene decolourises Br₂ in CCl₄ to give 1-bromopropane. The error is that",
        [
         "no reaction occurs at all",
         "addition of Br₂ gives 1,2-dibromopropane, a vic-dibromide",
         "a gem-dibromide is formed",
         "substitution gives allyl bromide"
        ],
        1,
        "Two Br atoms add across the C=C bond; the colour is discharged."
       ],
       [
        "Assertion (A): The Finkelstein reaction is carried out in dry acetone.\nReason (R): NaCl or NaBr formed is insoluble in dry acetone and separates, shifting the equilibrium forward.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Precipitation of NaX removes a product, so the equilibrium moves towards R–I (Le Chatelier)."
       ],
       [
        "Ethyl fluoride is best prepared from ethyl bromide using",
        [
         "NaF in dry acetone",
         "F₂ gas in the dark",
         "Hg₂F₂ or AgF with heating",
         "HF with ZnCl₂"
        ],
        2,
        "Heating the alkyl bromide with a metallic fluoride such as AgF or Hg₂F₂ is the Swarts reaction."
       ],
       [
        "Aniline in cold aqueous HCl is treated with NaNO₂ to give A, which on treatment with KI gives B. B is",
        [
         "iodobenzene",
         "chlorobenzene",
         "phenol",
         "nitrobenzene"
        ],
        0,
        "A is benzenediazonium chloride; replacement by iodine needs no cuprous halide, only KI."
       ],
       [
        "A student suggests preparing bromobenzene from phenol by heating with PBr₃. Why does this fail?",
        [
         "PBr₃ is not available",
         "Phenol is a tertiary alcohol",
         "The C–O bond of phenol has partial double bond character and does not break easily",
         "The product would be a gas"
        ],
        2,
        "Aryl halides are made by electrophilic substitution of arenes or via diazonium salts, not from phenols."
       ],
       [
        "Chlorination of toluene with Cl₂ and FeCl₃ in the dark gives o- and p-chlorotoluene. They are conveniently separated because",
        [
         "their melting points differ widely",
         "only the o-isomer is volatile",
         "only the p-isomer is soluble in water",
         "the isomers have very different molecular masses"
        ],
        0,
        "NCERT notes that the ortho and para isomers can be separated owing to a large difference in melting points."
       ],
       [
        "The correct order of increasing boiling points of 1-chloropropane, isopropyl chloride and 1-chlorobutane is",
        [
         "1-chlorobutane < 1-chloropropane < isopropyl chloride",
         "1-chloropropane < isopropyl chloride < 1-chlorobutane",
         "isopropyl chloride < 1-chlorobutane < 1-chloropropane",
         "isopropyl chloride < 1-chloropropane < 1-chlorobutane"
        ],
        3,
        "Branching lowers the boiling point; a higher molecular mass raises it (NCERT Intext 6.6)."
       ],
       [
        "The correct order of increasing boiling points of CH₃Cl, CH₃Br, CH₂Br₂ and CHBr₃ is",
        [
         "CHBr₃ < CH₂Br₂ < CH₃Br < CH₃Cl",
         "CH₃Cl < CH₃Br < CH₂Br₂ < CHBr₃",
         "CH₃Br < CH₃Cl < CH₂Br₂ < CHBr₃",
         "CH₃Cl < CH₂Br₂ < CH₃Br < CHBr₃"
        ],
        1,
        "Boiling point rises with the size and number of halogen atoms (NCERT Intext 6.6)."
       ],
       [
        "Assertion (A): Boiling points of isomeric bromobutanes increase with increased branching.\nReason (R): Branching reduces the surface area of the molecule and so weakens van der Waals forces.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: branched isomers boil lower, and R correctly explains why."
       ],
       [
        "p-Dichlorobenzene has a much higher melting point than o- and m-dichlorobenzene, while their boiling points are nearly equal. The best reason for the melting point difference is that",
        [
         "its dipole moment is largest",
         "the symmetrical para isomer packs better in the crystal lattice",
         "it has the highest molar mass",
         "it forms hydrogen bonds"
        ],
        1,
        "Symmetry allows better fit in the crystal lattice, raising the melting point."
       ],
       [
        "Bromoethane is treated separately with KCN and AgCN. The main products are respectively",
        [
         "CH₃CH₂NC and CH₃CH₂CN",
         "CH₃CH₂CN in both",
         "CH₃CH₂NC in both",
         "CH₃CH₂CN and CH₃CH₂NC"
        ],
        3,
        "KCN is ionic and attacks through C (stronger C–C bond); AgCN is covalent so N is free to donate its pair (NCERT Example 6.5)."
       ],
       [
        "A student says: “Ethyl bromide with AgNO₂ gives ethyl nitrite as main product, because NO₂⁻ attacks through oxygen.” The correct statement is that",
        [
         "AgNO₂ gives nitroethane; ethyl nitrite arises from KNO₂",
         "no reaction occurs with AgNO₂",
         "AgNO₂ gives ethanol",
         "KNO₂ gives nitroethane and AgNO₂ gives ethyl nitrite"
        ],
        0,
        "AgNO₂ reacts through nitrogen to give R–NO₂; ionic KNO₂ reacts through oxygen to give R–ONO."
       ],
       [
        "Which pair of reagents will convert bromoethane into diethyl ether and into ethane respectively?",
        [
         "aq. KOH; C₂H₅ONa",
         "LiAlH₄; C₂H₅ONa",
         "C₂H₅ONa; LiAlH₄",
         "KCN; aq. KOH"
        ],
        2,
        "Alkoxide ion as nucleophile gives the ether; hydride from LiAlH₄ replaces Br with H to give the alkane (Table 6.4)."
       ],
       [
        "Case: Compound X, C₂H₅Br, gives product P with aqueous KOH, product Q with KCN and product R with AgNO₂ (main product in each case). Identify P, Q and R.",
        [
         "C₂H₅OH, C₂H₅NC, C₂H₅ONO",
         "CH₂=CH₂, C₂H₅CN, C₂H₅ONO",
         "C₂H₅OH, C₂H₅NC, C₂H₅NO₂",
         "C₂H₅OH, C₂H₅CN, C₂H₅NO₂"
        ],
        3,
        "Aqueous KOH substitutes to give ethanol; KCN gives the cyanide through C; AgNO₂ gives the nitro compound through N."
       ],
       [
        "For the reaction R–Br + OH⁻ (SN2), rate = k[R–Br][OH⁻]. If [R–Br] is tripled and [OH⁻] is halved, the rate changes by a factor of",
        [
         "3",
         "1.5",
         "6",
         "0.5"
        ],
        1,
        "New rate = 3 × ½ = 1.5 times the original.",
        "Second order: multiply the changes in each concentration."
       ],
       [
        "Assertion (A): In SN2 reactions the reactivity of alkyl halides follows primary > secondary > tertiary.\nReason (R): Tertiary carbocations are more stable than secondary carbocations.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "A is true because of steric hindrance to the incoming nucleophile; R is true but relates to SN1, not the reason for the SN2 order."
       ],
       [
        "Which compound reacts faster with a nucleophile by the SN2 mechanism: CH₃CH₂CH₂CH₂Br or (CH₃)₂CHCH₂Br, and C₂H₅I or C₂H₅Cl?",
        [
         "(CH₃)₂CHCH₂Br and C₂H₅I",
         "CH₃CH₂CH₂CH₂Br and C₂H₅Cl",
         "CH₃CH₂CH₂CH₂Br and C₂H₅I",
         "(CH₃)₂CHCH₂Br and C₂H₅Cl"
        ],
        2,
        "Branching near the reaction centre slows SN2 (NCERT Example 6.7), and iodide is a better leaving group than chloride (R–I > R–Br > R–Cl)."
       ],
       [
        "For hydrolysis of tert-butyl bromide, rate = k[(CH₃)₃CBr]. If [(CH₃)₃CBr] is halved and [OH⁻] is tripled, the rate changes by a factor of",
        [
         "0.5",
         "1.5",
         "3",
         "0.25"
        ],
        0,
        "SN1 rate is independent of [OH⁻], so the rate simply halves."
       ],
       [
        "Which bromide undergoes SN1 hydrolysis faster: C₆H₅CH(C₆H₅)Br or C₆H₅CH(CH₃)Br?",
        [
         "C₆H₅CH(CH₃)Br, because CH₃ is smaller",
         "Both react at the same rate",
         "C₆H₅CH(C₆H₅)Br, because its carbocation is stabilised by two phenyl groups through resonance",
         "C₆H₅CH(CH₃)Br, because phenyl is bulkier than CH₃"
        ],
        2,
        "Greater carbocation stability means faster SN1 (NCERT Example 6.7)."
       ],
       [
        "Assertion (A): Benzyl chloride undergoes SN1 reaction much faster than ethyl chloride.\nReason (R): The benzylic carbocation is stabilised by resonance with the benzene ring.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Resonance stabilisation of the carbocation speeds up the rate-determining ionisation."
       ],
       [
        "Case: The hydrolysis of a bromide R–Br with aqueous alkali has rate = k[R–Br], and optically active R–Br gives an optically inactive alcohol. Which conclusion is correct?",
        [
         "SN1 mechanism through a planar carbocation intermediate",
         "SN2 mechanism with inversion",
         "SN2 mechanism with retention",
         "Elimination through a cyclic transition state"
        ],
        0,
        "First order kinetics and racemisation both point to SN1."
       ],
       [
        "Among 2-chlorobutane, 2-bromopropane, bromochloroiodomethane (BrClCHI) and 3-chloropentane, how many are chiral?",
        [
         "1",
         "3",
         "4",
         "2"
        ],
        3,
        "Only 2-chlorobutane and BrClCHI have a carbon with four different groups."
       ],
       [
        "A pure (+) enantiomer rotates plane polarised light by +48° under given conditions. A mixture of 70% (+) and 30% (–) enantiomers will rotate it by about",
        [
         "+33.6°",
         "+19.2°",
         "+14.4°",
         "0°"
        ],
        1,
        "Net excess of (+) is 70 – 30 = 40%, so rotation = 0.40 × 48 = 19.2°.",
        "Only the excess of one enantiomer over the other contributes."
       ],
       [
        "Which statement about enantiomers is correct?",
        [
         "The (+) isomer always has the R configuration",
         "They have identical melting points and boiling points, but rotate plane polarised light in opposite directions by equal amounts",
         "They have different boiling points",
         "They are always meso compounds"
        ],
        1,
        "The sign of optical rotation is not necessarily related to the absolute configuration."
       ],
       [
        "Assertion (A): An optically active halide reacting by the SN2 mechanism gives a product with inverted configuration.\nReason (R): SN2 reactions proceed through a planar carbocation.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true as the nucleophile attacks from the back side, but SN2 has no carbocation; planar carbocations belong to SN1."
       ],
       [
        "A student heats (–)-2-methylbutan-1-ol with concentrated HCl and obtains (+)-1-chloro-2-methylbutane. She concludes that inversion occurred because the sign of rotation changed. The error is that",
        [
         "inversion happens only in SN1",
         "the reaction is racemisation",
         "the sign of rotation always reverses on retention",
         "no bond to the stereocentre was broken, so configuration is retained; the sign of rotation need not match"
        ],
        3,
        "The C–O bond broken is not at the stereocentre; two compounds with the same configuration may have different signs of rotation."
       ],
       [
        "(–)-2-Bromooctane reacts with NaOH to give (+)-octan-2-ol by SN2 mechanism. The same bromide hydrolysed by an SN1 route would give",
        [
         "an optically inactive (racemic) octan-2-ol",
         "only (+)-octan-2-ol",
         "only (–)-octan-2-ol",
         "oct-1-ene exclusively"
        ],
        0,
        "SN2 gives inversion; SN1 passes through a planar carbocation attacked from both sides, giving a racemic mixture."
       ],
       [
        "2-Bromobutane is heated with alcoholic KOH. The major product is",
        [
         "but-1-ene",
         "butan-2-ol",
         "but-2-ene",
         "butane"
        ],
        2,
        "Saytzeff’s rule: the alkene with more alkyl groups on the double bond is preferred."
       ],
       [
        "A student writes: “2-Bromopentane with alcoholic KOH gives mainly pent-1-ene by Saytzeff’s rule.” What is wrong?",
        [
         "The reaction gives pentan-2-ol only",
         "The reaction gives pentane",
         "Saytzeff’s rule favours the least substituted alkene",
         "Saytzeff’s rule gives the more substituted alkene, pent-2-ene, as the major product"
        ],
        3,
        "Pent-2-ene has two alkyl groups on the double bond versus one in pent-1-ene."
       ],
       [
        "1-Bromopropane is heated with alcoholic KOH to give A, and A is treated with HBr to give B. B is",
        [
         "1-bromopropane",
         "2-bromopropane",
         "propan-1-ol",
         "1,2-dibromopropane"
        ],
        1,
        "A is propene; HBr adds by Markovnikov’s rule to give 2-bromopropane."
       ],
       [
        "Which of the following best explains why a bulkier base or nucleophile favours elimination over substitution?",
        [
         "It is a weaker base",
         "It cannot reach hydrogen atoms",
         "It finds it easier to abstract a peripheral β-hydrogen than to approach the crowded carbon",
         "It prefers to break the C–C bond"
        ],
        2,
        "A bulky nucleophile prefers to act as a base and remove a proton (steric reasons)."
       ],
       [
        "Case: Compound A, C₄H₉Br, is optically active. On heating with alcoholic KOH it gives B as the major product. A and B are",
        [
         "2-bromobutane and but-2-ene",
         "1-bromobutane and but-1-ene",
         "2-bromo-2-methylpropane and 2-methylpropene",
         "1-bromo-2-methylpropane and but-2-ene"
        ],
        0,
        "Only 2-bromobutane among the C₄H₉Br isomers is chiral; elimination follows Saytzeff’s rule."
       ],
       [
        "CH₃CH₂Br is converted to a Grignard reagent A in dry ether and A is treated with ethanol to give B. B is",
        [
         "butane",
         "ethene",
         "ethane",
         "diethyl ether"
        ],
        2,
        "CH₃CH₂MgBr takes a proton from the alcohol (or water) to give the hydrocarbon."
       ],
       [
        "Isopropyl chloride is heated with sodium in dry ether. The product is",
        [
         "2,3-dimethylbutane",
         "hexane",
         "propane",
         "2-methylpentane"
        ],
        0,
        "Wurtz reaction joins two isopropyl groups: (CH₃)₂CH–CH(CH₃)₂."
       ],
       [
        "From 10.9 g of bromoethane (molar mass 109 g mol⁻¹) and excess sodium in dry ether, the maximum mass of butane (58 g mol⁻¹) obtained is",
        [
         "5.8 g",
         "1.45 g",
         "5.45 g",
         "2.9 g"
        ],
        3,
        "0.1 mol of C₂H₅Br gives 0.05 mol of C₄H₁₀ (2 RX → R–R), so 0.05 × 58 = 2.9 g.",
        "Two moles of halide give one mole of alkane."
       ],
       [
        "Why must the preparation of a Grignard reagent be carried out in dry ether?",
        [
         "Ether acts as a dehydrating agent for Mg",
         "RMgX reacts with water to give a hydrocarbon",
         "Water oxidises magnesium to Mg²⁺ before reaction",
         "Ether supplies the halogen"
        ],
        1,
        "Even traces of water, alcohol or amines protonate the highly reactive C–Mg bond."
       ],
       [
        "1.85 g of C₄H₉Cl (92.5 g mol⁻¹) is fully hydrolysed with aqueous KOH, and the chloride ion is precipitated with excess AgNO₃. The mass of AgCl (143.5 g mol⁻¹) formed is",
        [
         "1.43 g",
         "2.87 g",
         "5.74 g",
         "2.65 g"
        ],
        1,
        "1.85 / 92.5 = 0.02 mol of Cl⁻, so 0.02 × 143.5 = 2.87 g of AgCl."
       ],
       [
        "Assertion (A): Chlorobenzene is much less reactive than chloroethane towards nucleophilic substitution.\nReason (R): The C–Cl bond in chlorobenzene has partial double bond character due to resonance.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Resonance shortens and strengthens the C–Cl bond; sp² hybridisation adds to this effect."
       ],
       [
        "A student explains that chlorobenzene could undergo SN1 because the phenyl cation is stabilised by resonance. The error is that",
        [
         "the phenyl cation is a free radical",
         "SN1 occurs only for tertiary halides",
         "the phenyl cation is planar and chiral",
         "the phenyl cation is not stabilised by resonance, so SN1 is ruled out"
        ],
        3,
        "The empty orbital lies in the plane of the ring and cannot overlap with the π system."
       ],
       [
        "The correct order of reactivity of chlorobenzene (I), 4-nitrochlorobenzene (II) and 2,4-dinitrochlorobenzene (III) towards hydroxide is",
        [
         "III > II > I",
         "I > II > III",
         "II > III > I",
         "I > III > II"
        ],
        0,
        "–NO₂ groups at ortho and para positions stabilise the intermediate carbanion, so more such groups increase reactivity."
       ],
       [
        "Chlorobenzene (112.5 g mol⁻¹) is converted to phenol (94 g mol⁻¹) with aqueous NaOH at 623 K and 300 atm in 80% yield. The mass of phenol from 22.5 g of chlorobenzene is",
        [
         "18.8 g",
         "18.0 g",
         "15.04 g",
         "11.3 g"
        ],
        2,
        "22.5/112.5 = 0.2 mol; 0.2 × 0.80 × 94 = 15.04 g."
       ],
       [
        "Why does a –NO₂ group at the meta position not increase the reactivity of chlorobenzene towards nucleophilic substitution?",
        [
         "The –NO₂ group is electron-donating at meta",
         "The meta isomer has no chlorine atom",
         "The intermediate is a carbocation",
         "None of the resonating structures of the intermediate places the negative charge on the carbon bearing –NO₂"
        ],
        3,
        "Only at o- and p-positions can –NO₂ stabilise the negative charge of the carbanion intermediate."
       ],
       [
        "Although chlorine withdraws electrons by the –I effect, chlorobenzene undergoes nitration mainly at o- and p-positions because",
        [
         "the –I effect directs the group to meta",
         "resonance (+R) directs the incoming group to o/p while the stronger –I effect only decides overall reactivity",
         "chlorine activates the ring strongly",
         "the ring is attacked by nucleophiles"
        ],
        1,
        "Reactivity is controlled by the stronger inductive effect and orientation by resonance (NCERT Example 6.9)."
       ],
       [
        "Chlorobenzene reacts with CH₃COCl in the presence of anhydrous AlCl₃. The products are mainly",
        [
         "meta-chloroacetophenone",
         "chlorobenzene with acetyl at the ring chlorine",
         "ortho- and para-chloroacetophenone, with para predominating",
         "phenol and ethanoic acid"
        ],
        2,
        "Friedel–Crafts acylation occurs at positions ortho and para to the halogen; the reaction is slower than in benzene."
       ],
       [
        "A mixture of bromobenzene and bromomethane is heated with sodium in dry ether. The products that can form include",
        [
         "toluene, biphenyl and ethane",
         "only toluene",
         "phenol and methanol",
         "benzene and methane"
        ],
        0,
        "Wurtz–Fittig gives toluene; side reactions give biphenyl (Fittig) and ethane (Wurtz)."
       ],
       [
        "Ethylbenzene can be prepared from chlorobenzene and chloroethane using",
        [
         "aqueous NaOH at 623 K",
         "alcoholic KOH",
         "sodium in dry ether (Wurtz–Fittig reaction)",
         "Zn dust"
        ],
        2,
        "An alkyl halide and an aryl halide couple with sodium in dry ether to give an alkylarene."
       ],
       [
        "Which statement about dichloromethane is correct?",
        [
         "It is used as a paint remover and as a solvent; exposure harms the central nervous system",
         "It is used as a general anaesthetic",
         "It is used as an antiseptic because it liberates iodine",
         "It is non-toxic and safe to inhale"
        ],
        0,
        "Higher levels in air cause dizziness, nausea and numbness; skin contact causes burning."
       ],
       [
        "Assertion (A): Chloroform is stored in dark coloured bottles filled completely.\nReason (R): In air and light it is slowly oxidised to the poisonous gas phosgene.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Excluding air and light prevents the formation of carbonyl chloride, COCl₂."
       ],
       [
        "Chloroform is used mainly today for the manufacture of",
        [
         "DDT",
         "iodoform",
         "dichloromethane",
         "freon refrigerant R-22"
        ],
        3,
        "Its major use now is in production of R-22; it has been replaced as an anaesthetic by ether."
       ],
       [
        "A student states: “Iodoform is an antiseptic because iodoform molecules themselves kill bacteria.” The error is that",
        [
         "it is not an antiseptic at all, only a solvent",
         "the antiseptic action is due to the iodine liberated from it",
         "chlorine is liberated",
         "it acts through phosgene"
        ],
        1,
        "Its objectionable smell led to its replacement by other iodine formulations."
       ],
       [
        "Which pair of statements about tetrachloromethane is correct?",
        [
         "It is a safe cleaning fluid and is non-toxic",
         "It is used to make freons and has been linked to liver cancer and ozone depletion",
         "It is used as an anaesthetic and is harmless to the ozone layer",
         "It is a refrigerant that is rapidly degraded in the troposphere"
        ],
        1,
        "CCl₄ is a feedstock for CFCs, its use as cleaning fluid was stopped, and it depletes the ozone layer."
       ],
       [
        "Case: A refrigerant gas is stable, non-toxic, non-corrosive and easily liquefied. It is made from CCl₄ by Swarts reaction, but it escapes into the stratosphere. Identify the compound and the harm.",
        [
         "Chloroform; it forms phosgene in the stratosphere",
         "DDT; it accumulates in fat",
         "Iodoform; it liberates iodine",
         "Freon-12 (CCl₂F₂); it starts radical chain reactions that deplete ozone"
        ],
        3,
        "Freons diffuse unchanged into the stratosphere and upset the natural ozone balance."
       ],
       [
        "DDT was banned in many countries mainly because it",
        [
         "persists in the environment and builds up in fatty tissues, and insects develop resistance",
         "is a strong acid",
         "is highly volatile and burns the skin immediately",
         "is quickly metabolised to harmless products"
        ],
        0,
        "It is not metabolised rapidly; steady intake leads to accumulation, and it is highly toxic to fish."
       ]
      ]
     ]
    },
    {
     "n": 7,
     "t": "Alcohols, Phenols and Ethers",
     "levels": [
      [
       [
        "Propan-2-ol, CH₃CH(OH)CH₃, is classified as a",
        [
         "primary alcohol",
         "secondary alcohol",
         "tertiary alcohol",
         "allylic alcohol"
        ],
        1,
        "The –OH carbon is bonded to two other carbon atoms, so the alcohol is secondary."
       ],
       [
        "Glycerol, HOCH₂CH(OH)CH₂OH, is a",
        [
         "trihydric alcohol",
         "monohydric alcohol",
         "dihydric alcohol",
         "trihydric phenol"
        ],
        0,
        "It has three –OH groups on sp³ carbons, so it is a trihydric alcohol."
       ],
       [
        "In which compound is the –OH group attached to an sp³ carbon next to a C=C bond, making it an allylic alcohol?",
        [
         "CH₂=CH–OH",
         "C₆H₅CH₂OH",
         "CH₂=CH–CH₂OH",
         "C₆H₅OH"
        ],
        2,
        "In CH₂=CH–CH₂OH the carbinol carbon is sp³ and adjacent to the double bond. CH₂=CH–OH is vinylic and C₆H₅CH₂OH is benzylic."
       ],
       [
        "Benzyl alcohol, C₆H₅CH₂OH, is called a benzylic alcohol because its –OH group is",
        [
         "attached directly to a carbon of the benzene ring",
         "attached to an sp² carbon of a C=C bond",
         "one of two –OH groups on the ring",
         "attached to an sp³ carbon atom next to the benzene ring"
        ],
        3,
        "A benzylic alcohol has the –OH on an sp³ carbon directly attached to an aromatic ring."
       ],
       [
        "Vinyl alcohol, CH₂=CH–OH, contains the –OH group bonded to",
        [
         "an sp² hybridised vinylic carbon",
         "an sp³ hybridised carbon",
         "an sp hybridised carbon",
         "an allylic carbon"
        ],
        0,
        "Alcohols with C(sp²)–OH, vinylic or aryl carbon, are one class; those with C(sp³)–OH form the other."
       ],
       [
        "Catechol, resorcinol and hydroquinone are all",
        [
         "dihydric phenols",
         "monohydric phenols",
         "trihydric phenols",
         "dihydric alcohols"
        ],
        0,
        "They are the 1,2-, 1,3- and 1,4-benzenediols, each with two –OH groups on the benzene ring."
       ],
       [
        "Which of the following is a symmetrical (simple) ether?",
        [
         "C₂H₅OCH₃",
         "C₂H₅OC₆H₅",
         "C₂H₅OC₂H₅",
         "CH₃OC₆H₅"
        ],
        2,
        "Both groups on oxygen are the same (ethyl) in diethyl ether; the others are mixed ethers."
       ],
       [
        "The IUPAC name of (CH₃)₃C–OH is",
        [
         "butan-2-ol",
         "2-methylpropan-1-ol",
         "butan-1-ol",
         "2-methylpropan-2-ol"
        ],
        3,
        "The longest chain is propane; –OH and CH₃ are both on C-2 (tert-butyl alcohol)."
       ],
       [
        "Benzene-1,2-diol is the IUPAC name of",
        [
         "resorcinol",
         "catechol",
         "hydroquinone",
         "o-cresol"
        ],
        1,
        "Catechol is benzene-1,2-diol; resorcinol is 1,3- and hydroquinone is 1,4-."
       ],
       [
        "The IUPAC name of anisole, C₆H₅OCH₃, is",
        [
         "methoxybenzene",
         "phenoxymethane",
         "methylphenol",
         "benzyl alcohol"
        ],
        0,
        "Ethers are named as alkoxy derivatives of the larger group, here benzene."
       ],
       [
        "The common name of CH₃CH(OH)CH₃ is",
        [
         "n-propyl alcohol",
         "sec-butyl alcohol",
         "isopropyl alcohol",
         "isobutyl alcohol"
        ],
        2,
        "The alkyl group is isopropyl, so the common name is isopropyl alcohol (IUPAC: propan-2-ol)."
       ],
       [
        "The C–O–H bond angle in alcohols is slightly less than the tetrahedral angle (109°28′) because of",
        [
         "repulsion between the two alkyl groups",
         "repulsion between the unshared electron pairs of oxygen",
         "partial double bond character of the C–O bond",
         "hydrogen bonding between molecules"
        ],
        1,
        "The two lone pairs on oxygen repel the bond pairs and squeeze the angle."
       ],
       [
        "The C–O bond in phenol (136 pm) is shorter than in methanol mainly because",
        [
         "phenol has more hydrogen bonding",
         "the carbon is sp³ hybridised in phenol",
         "the oxygen in phenol is sp² hybridised only",
         "the carbon is sp² hybridised and the oxygen lone pair conjugates with the ring"
        ],
        3,
        "Both the sp² state of carbon and the partial double bond character from conjugation shorten the bond."
       ],
       [
        "Acid-catalysed hydration of propene (dilute H₂SO₄) gives mainly",
        [
         "propan-1-ol",
         "propan-2-ol",
         "propanal",
         "propanone"
        ],
        1,
        "Water adds according to Markovnikov’s rule through the more stable secondary carbocation."
       ],
       [
        "Hydroboration–oxidation (B₂H₆, then H₂O₂/NaOH) of propene gives mainly",
        [
         "propan-1-ol",
         "propan-2-ol",
         "propanal",
         "propane-1,2-diol"
        ],
        0,
        "Boron attaches to the carbon bearing more hydrogens, so the net addition of water is anti-Markovnikov."
       ],
       [
        "Reduction of propanone with NaBH₄ gives",
        [
         "propan-1-ol",
         "propanal",
         "propan-2-ol",
         "propane"
        ],
        2,
        "Ketones are reduced to secondary alcohols, aldehydes to primary alcohols."
       ],
       [
        "Which reagent reduces a carboxylic acid RCOOH directly to a primary alcohol in excellent yield?",
        [
         "LiAlH₄ followed by H₂O",
         "H₂O/H⁺",
         "PCC",
         "Zn dust"
        ],
        0,
        "LiAlH₄ is a strong reducing agent that converts RCOOH to RCH₂OH."
       ],
       [
        "Methylmagnesium bromide reacts with methanal; hydrolysis of the adduct gives",
        [
         "methanol",
         "propan-2-ol",
         "ethanal",
         "ethanol"
        ],
        3,
        "CH₃MgBr adds to HCHO to give CH₃CH₂OMgBr, which hydrolyses to ethanol, a primary alcohol."
       ],
       [
        "Most of the world’s phenol is made by oxidising cumene with air and treating the hydroperoxide with dilute acid. The by-product is",
        [
         "ethanal",
         "propanone (acetone)",
         "benzene",
         "propan-2-ol"
        ],
        1,
        "Cumene hydroperoxide splits into phenol and acetone."
       ],
       [
        "Chlorobenzene is converted to phenol by",
        [
         "fusion with NaOH at 623 K and 320 atm, then acidification",
         "warming with water at 298 K",
         "refluxing with aqueous NaOH at 373 K only",
         "treating with dilute HCl"
        ],
        0,
        "The unreactive C–Cl bond of an aryl halide needs drastic conditions; sodium phenoxide is acidified to phenol."
       ],
       [
        "Warming benzenediazonium chloride with water gives",
        [
         "chlorobenzene and N₂",
         "aniline and HNO₂",
         "benzene and N₂",
         "phenol, N₂ and HCl"
        ],
        3,
        "The diazonium group is replaced by –OH on hydrolysis."
       ],
       [
        "Ethanol boils at a much higher temperature than methoxymethane of nearly equal molecular mass because",
        [
         "ethanol molecules form intermolecular hydrogen bonds",
         "ethanol has a higher dipole moment than any ether",
         "methoxymethane is non-polar",
         "ethanol has stronger covalent bonds"
        ],
        0,
        "Hydrogen bonding through –OH is present in alcohols but not in ethers."
       ],
       [
        "The solubility of alcohols in water decreases as the alkyl chain gets longer because",
        [
         "the –OH group becomes non-polar",
         "the hydrophobic alkyl part grows larger",
         "hydrogen bonding with water stops completely",
         "the molecular mass decreases"
        ],
        1,
        "The –OH group still hydrogen bonds with water, but a bigger hydrocarbon part reduces solubility."
       ],
       [
        "Which of the following is the most acidic?",
        [
         "CH₃CH₂OH",
         "(CH₃)₂CHOH",
         "CH₃OH",
         "(CH₃)₃COH"
        ],
        2,
        "Electron-releasing alkyl groups reduce the O–H polarity, so acid strength: CH₃OH > primary > secondary > tertiary."
       ],
       [
        "Ethanol and phenol are each shaken with aqueous NaOH. What happens?",
        [
         "phenol dissolves forming sodium phenoxide; ethanol does not react",
         "both form sodium salts",
         "ethanol dissolves; phenol does not",
         "neither reacts"
        ],
        0,
        "Phenol is a stronger acid than water, but ethanol is weaker than water."
       ],
       [
        "Phenol is more acidic than ethanol mainly because",
        [
         "phenol has fewer hydrogen atoms",
         "phenoxide has its charge localised on oxygen",
         "the benzene ring donates electrons to oxygen",
         "the phenoxide ion is stabilised by delocalisation of its negative charge"
        ],
        3,
        "In phenoxide the charge spreads over the ring, whereas it stays on oxygen in ethoxide."
       ],
       [
        "Compared with phenol, p-nitrophenol and p-cresol are respectively",
        [
         "more acidic and less acidic",
         "less acidic and more acidic",
         "both more acidic",
         "both less acidic"
        ],
        0,
        "The –NO₂ group withdraws electrons and stabilises the phenoxide; the alkyl group releases electrons."
       ],
       [
        "Acetylation of salicylic acid with acetic anhydride gives",
        [
         "salicylaldehyde",
         "phenol",
         "aspirin",
         "methyl salicylate"
        ],
        2,
        "Introducing the CH₃CO group on the phenolic –OH gives 2-acetoxybenzoic acid (aspirin)."
       ],
       [
        "A tertiary alcohol shows turbidity immediately with Lucas reagent. Lucas reagent is",
        [
         "dilute HCl and Zn dust",
         "conc. HCl and anhydrous ZnCl₂",
         "conc. H₂SO₄ and KMnO₄",
         "PCl₅ in pyridine"
        ],
        1,
        "Tertiary alcohols form the insoluble alkyl chloride fastest; primary ones give no turbidity at room temperature."
       ],
       [
        "Heating ethanol with conc. H₂SO₄ at 443 K gives mainly",
        [
         "ethene",
         "ethoxyethane",
         "ethanal",
         "ethyl hydrogensulphate only"
        ],
        0,
        "At 443 K dehydration to the alkene is the main course; at 413 K the ether forms."
       ],
       [
        "Pyridinium chlorochromate (PCC) oxidises a primary alcohol to",
        [
         "a carboxylic acid",
         "a ketone",
         "an aldehyde",
         "an alkene"
        ],
        2,
        "PCC stops at the aldehyde stage, unlike acidified KMnO₄ which gives the acid."
       ],
       [
        "Which of the following is not oxidised by chromic anhydride under mild conditions?",
        [
         "propan-2-ol",
         "propan-1-ol",
         "butan-2-ol",
         "2-methylpropan-2-ol"
        ],
        3,
        "Tertiary alcohols have no hydrogen on the carbinol carbon, so they resist oxidation."
       ],
       [
        "Phenol reacts with bromine water to give",
        [
         "o-bromophenol only",
         "a white precipitate of 2,4,6-tribromophenol",
         "p-bromophenol only",
         "bromobenzene"
        ],
        1,
        "The strongly activating –OH group makes all ortho and para positions react in water."
       ],
       [
        "Dilute HNO₃ at 298 K nitrates phenol to o- and p-nitrophenols. They are separated by steam distillation because",
        [
         "o-nitrophenol is steam volatile due to intramolecular hydrogen bonding",
         "p-nitrophenol is steam volatile",
         "both are equally volatile",
         "o-nitrophenol is ionic"
        ],
        0,
        "Intramolecular H-bonding keeps o-nitrophenol as single molecules; p-isomer is associated by intermolecular H-bonds."
       ],
       [
        "Kolbe’s reaction of sodium phenoxide with CO₂ followed by acidification gives mainly",
        [
         "salicylaldehyde",
         "benzoic acid",
         "salicylic acid (2-hydroxybenzoic acid)",
         "4-hydroxybenzoic acid"
        ],
        2,
        "The weak electrophile CO₂ attacks the very reactive phenoxide ion, mainly at the ortho position."
       ],
       [
        "Phenol treated with CHCl₃ and NaOH (Reimer–Tiemann reaction) gives mainly",
        [
         "salicylic acid",
         "benzaldehyde",
         "p-hydroxybenzaldehyde",
         "salicylaldehyde"
        ],
        3,
        "A –CHO group enters the ortho position after hydrolysis of the benzal chloride intermediate."
       ],
       [
        "Heating phenol with zinc dust gives",
        [
         "cyclohexane",
         "benzene",
         "toluene",
         "benzoquinone"
        ],
        1,
        "Zinc removes the oxygen as ZnO, leaving benzene."
       ],
       [
        "Oxidation of phenol with chromic acid gives",
        [
         "benzoquinone",
         "benzoic acid",
         "catechol",
         "benzene"
        ],
        0,
        "Phenol is oxidised to the conjugated diketone p-benzoquinone."
       ],
       [
        "Methanol is made industrially from",
        [
         "fermentation of molasses with zymase",
         "hydration of ethene",
         "CO and H₂ at high pressure and temperature over a ZnO–Cr₂O₃ catalyst",
         "reduction of ethanal with NaBH₄"
        ],
        2,
        "Catalytic hydrogenation of carbon monoxide is the modern method."
       ],
       [
        "In fermentation of sugars to ethanol, glucose and fructose are converted by the enzyme",
        [
         "zymase, present in yeast",
         "invertase, present in yeast",
         "zymase, formed from starch",
         "lipase, present in grapes"
        ],
        0,
        "Invertase converts sucrose to glucose and fructose; zymase then ferments them to ethanol and CO₂."
       ],
       [
        "Ethanol heated with excess conc. H₂SO₄ at 413 K gives mainly",
        [
         "ethene",
         "ethoxyethane",
         "ethyl acetate",
         "ethanal"
        ],
        1,
        "At 413 K one alcohol molecule attacks a protonated one (SN2) to form the ether."
       ],
       [
        "In Williamson synthesis an ether R–O–R′ is made by reacting",
        [
         "an alkyl halide R–X with sodium alkoxide R′ONa",
         "an alcohol with an alkane",
         "an aldehyde with a Grignard reagent",
         "two alkenes with H₂SO₄"
        ],
        0,
        "It is an SN2 attack of alkoxide ion on the alkyl halide; primary alkyl halides work best."
       ],
       [
        "The boiling points of ethers are comparable to those of alkanes of similar molecular mass, and much lower than alcohols, because",
        [
         "ethers have no polar bonds",
         "ethers have no lone pairs",
         "ethers have higher molecular masses",
         "ethers cannot form hydrogen bonds with each other"
        ],
        3,
        "Ethers have weakly polar C–O bonds but no O–H, so no intermolecular H-bonding."
       ],
       [
        "Ethoxyethane dissolves in water to nearly the same extent as butan-1-ol while pentane is almost insoluble because",
        [
         "ethers ionise in water",
         "the ether oxygen forms hydrogen bonds with water molecules",
         "pentane is more polar",
         "ether molecules are smaller than pentane"
        ],
        1,
        "Oxygen of the ether accepts hydrogen bonds from water, as in alcohols."
       ],
       [
        "Heating anisole with conc. HI gives",
        [
         "iodobenzene and methanol",
         "benzene and methanol",
         "phenol and iodomethane",
         "iodobenzene and iodomethane"
        ],
        2,
        "Iodide attacks the methyl carbon; the aryl C–O bond is stronger and phenol does not form an aryl halide."
       ],
       [
        "Anisole reacts with bromine in ethanoic acid even without FeBr₃. The major product is",
        [
         "m-bromoanisole",
         "2,4,6-tribromoanisole only",
         "bromobenzene",
         "p-bromoanisole"
        ],
        3,
        "The –OCH₃ group activates the ring and directs ortho/para; the para isomer is about 90%."
       ]
      ],
      [
       [
        "CH₃CH=CH–CH(OH)CH₃ is best classified as a",
        [
         "primary allylic alcohol",
         "secondary allylic alcohol",
         "secondary vinylic alcohol",
         "tertiary allylic alcohol"
        ],
        1,
        "The carbinol carbon bears two carbon groups (secondary) and is next to the C=C (allylic)."
       ],
       [
        "A student says: “C₆H₅CH₂OH has a benzene ring and an –OH group, so it is a phenol.” The error is that",
        [
         "the –OH is on an sp³ carbon, so it is a benzylic alcohol, not a phenol",
         "it is a phenol but a dihydric one",
         "it is an ether",
         "phenols must contain a carboxyl group"
        ],
        0,
        "A phenol has –OH bonded directly to a ring carbon (sp²)."
       ],
       [
        "Which pair contains only unsymmetrical (mixed) ethers?",
        [
         "CH₃OCH₃ and C₂H₅OC₂H₅",
         "C₆H₅OC₆H₅ and CH₃OCH₃",
         "C₂H₅OCH₃ and C₂H₅OC₆H₅",
         "C₂H₅OC₂H₅ and C₆H₅OC₆H₅"
        ],
        2,
        "Each member must have two different groups on oxygen."
       ],
       [
        "A student names CH₃OCH(CH₃)₂ as “1-methoxy-1-methylethane”. The correct IUPAC name is",
        [
         "isopropoxymethane",
         "1-methoxypropane",
         "methoxy-2-propane",
         "2-methoxypropane"
        ],
        3,
        "The larger alkyl group (propane) is the parent chain and the –OCH₃ sits on C-2."
       ],
       [
        "The IUPAC name of CH₃CH(OH)CH(CH₃)CH₂CH₃ is",
        [
         "3-methylpentan-2-ol",
         "2-methylpentan-3-ol",
         "3-ethylbutan-2-ol",
         "4-methylpentan-2-ol"
        ],
        0,
        "The parent chain is pentane, numbered from the end nearest –OH; –OH on C-2, CH₃ on C-3."
       ],
       [
        "Assertion (A): The C–O bond in phenol (136 pm) is shorter than the C–O bond in methanol.\nReason (R): The carbon bonded to oxygen in phenol is sp² hybridised and the oxygen lone pair is conjugated with the ring, giving partial double bond character.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Both effects shorten the bond, so R explains A."
       ],
       [
        "Which statement about bond angles is correct?",
        [
         "both are slightly less than 109°28′",
         "H–O–C in methanol is slightly less than, and C–O–C in methoxymethane slightly more than, 109°28′",
         "both are slightly more than 109°28′",
         "H–O–C is more and C–O–C is less than 109°28′"
        ],
        1,
        "Lone pair repulsion compresses the alcohol angle; repulsion between bulky R groups opens the ether angle."
       ],
       [
        "Propene is treated with B₂H₆, then H₂O₂/NaOH to give A. A is oxidised with PCC to give B. B is",
        [
         "propanone",
         "propanoic acid",
         "propanal",
         "propan-2-ol"
        ],
        2,
        "Hydroboration–oxidation gives propan-1-ol (A); PCC stops at the aldehyde."
       ],
       [
        "Hydrolysis of the adduct of which pair gives 2-methylbutan-2-ol?",
        [
         "CH₃MgBr and propanone",
         "C₂H₅MgBr and ethanal",
         "CH₃MgBr and propanal",
         "C₂H₅MgBr and propanone"
        ],
        3,
        "A tertiary alcohol needs a ketone; C₂H₅MgBr + (CH₃)₂CO gives (CH₃)₂C(OH)C₂H₅. CH₃MgBr + propanone gives 2-methylpropan-2-ol."
       ],
       [
        "A student writes: “Hydration of propene with dilute H₂SO₄ gives propan-1-ol because the –OH goes to the end carbon.” The error is that",
        [
         "protonation gives the more stable secondary carbocation, so propan-2-ol forms",
         "the product is propanone",
         "the product is propane-1,2-diol",
         "hydration of alkenes is not possible with acid"
        ],
        0,
        "Markovnikov’s rule: H adds to the carbon with more H atoms, water attacks the more substituted carbocation."
       ],
       [
        "Assertion (A): Hydroboration–oxidation of propene gives propan-2-ol.\nReason (R): In hydroboration boron attaches to the sp² carbon carrying the greater number of hydrogen atoms.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: the product is propan-1-ol, because the net addition of water is anti-Markovnikov. R is true."
       ],
       [
        "Benzene is sulphonated with oleum to give A; A is heated with molten NaOH and then acidified to give B; B is heated with zinc dust to give C. C is",
        [
         "cyclohexane",
         "benzoic acid",
         "benzene",
         "toluene"
        ],
        2,
        "A = benzenesulphonic acid, B = phenol, and zinc removes the –OH to give benzene."
       ],
       [
        "A student prepares phenol by refluxing chlorobenzene with aqueous NaOH at 373 K. The error is that",
        [
         "chlorobenzene needs fusion with NaOH at about 623 K and 320 atm, followed by acidification",
         "only dilute HCl is needed",
         "the reaction needs LiAlH₄",
         "chlorobenzene gives benzoic acid under these conditions"
        ],
        0,
        "The aryl C–Cl bond has partial double bond character and is very unreactive."
       ],
       [
        "Aniline is treated with NaNO₂ + HCl at 273–278 K to give A. Warming A with water gives B along with N₂. B is",
        [
         "chlorobenzene",
         "benzene",
         "nitrobenzene",
         "phenol"
        ],
        3,
        "A is benzenediazonium chloride, which is hydrolysed to phenol."
       ],
       [
        "The correct order of increasing boiling point is",
        [
         "ethoxyethane < n-butane < pentanal < pentan-1-ol",
         "n-butane < ethoxyethane < pentanal < pentan-1-ol",
         "n-butane < pentanal < ethoxyethane < pentan-1-ol",
         "pentan-1-ol < pentanal < ethoxyethane < n-butane"
        ],
        1,
        "Only the alcohol hydrogen bonds; polar pentanal ranks above weakly polar ether and non-polar butane. (NCERT Example 7.3)"
       ],
       [
        "A student claims that 2-methylpropan-2-ol boils higher than butan-1-ol because it is more compact. The correct statement is that",
        [
         "branching lowers the surface area and van der Waals forces, so it boils lower",
         "compact molecules form more hydrogen bonds, so it boils higher",
         "both have the same boiling point as they are isomers",
         "tertiary alcohols cannot hydrogen bond at all"
        ],
        0,
        "Among isomeric alcohols boiling point decreases with increased branching."
       ],
       [
        "Assertion (A): Boiling points of isomeric alcohols increase with branching of the chain.\nReason (R): Van der Waals forces decrease as the surface area of the molecule decreases.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false because branching reduces surface area and lowers the boiling point; R is a true statement."
       ],
       [
        "The correct order of increasing acid strength is",
        [
         "ethanol < phenol < p-cresol < p-nitrophenol",
         "p-nitrophenol < phenol < p-cresol < ethanol",
         "ethanol < p-cresol < phenol < p-nitrophenol",
         "p-cresol < ethanol < phenol < p-nitrophenol"
        ],
        2,
        "Alcohols are weakest; the electron-releasing CH₃ weakens phenol; –NO₂ at para strengthens it."
       ],
       [
        "Assertion (A): Sodium ethoxide is a stronger base than sodium hydroxide.\nReason (R): Ethanol is a weaker acid than water.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "A weaker acid has a stronger conjugate base, so ethoxide ion is a stronger base than hydroxide."
       ],
       [
        "A student says: “Phenol is less acidic than ethanol because the benzene ring releases electrons to oxygen.” The error is that",
        [
         "phenol has no O–H bond",
         "the sp² carbon is electron withdrawing and the phenoxide ion is stabilised by resonance",
         "ethanol ionises more because its anion is delocalised",
         "the benzene ring cannot conjugate with oxygen"
        ],
        1,
        "Phenol is about a million times more acidic than ethanol (pKa 10.0 and 15.9)."
       ],
       [
        "The pKa values of phenol and ethanol are 10.0 and 15.9. Ka of phenol is about how many times Ka of ethanol?",
        [
         "5.9",
         "1.6",
         "8 × 10¹⁰",
         "8 × 10⁵"
        ],
        3,
        "Ratio = 10^(15.9 − 10.0) = 10^5.9 ≈ 8 × 10⁵.",
        "Ka = 10^(−pKa)"
       ],
       [
        "In the acetylation of salicylic acid with acetic anhydride and a trace of conc. H₂SO₄, the acetyl group replaces the hydrogen of",
        [
         "the phenolic –OH, giving an ester",
         "the carboxylic –OH, giving an anhydride",
         "a ring C–H, giving a ketone",
         "both –OH groups at once, giving a diester"
        ],
        0,
        "The phenolic –OH is esterified to give aspirin, retaining –COOH."
       ],
       [
        "An alcohol C₄H₁₀O gives turbidity immediately with Lucas reagent and is not oxidised by CrO₃. It is",
        [
         "butan-1-ol",
         "butan-2-ol",
         "2-methylpropan-1-ol",
         "2-methylpropan-2-ol"
        ],
        3,
        "Immediate turbidity and resistance to oxidation indicate a tertiary alcohol."
       ],
       [
        "Assertion (A): The slowest step in the acid-catalysed dehydration of ethanol to ethene is the formation of the ethyl carbocation.\nReason (R): The protonation of ethanol in the first step is the rate-determining step.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true (step 2 is slowest), but R is false: protonation is fast and reversible."
       ],
       [
        "Butan-2-ol is oxidised with CrO₃ to give A. A is treated with CH₃MgBr and then hydrolysed to give B. B is",
        [
         "3-methylbutan-2-ol",
         "2-methylbutan-2-ol",
         "pentan-2-ol",
         "2-methylbutan-1-ol"
        ],
        1,
        "A = butanone; Grignard addition to a ketone gives the tertiary alcohol (CH₃)₂C(OH)C₂H₅."
       ],
       [
        "Vapours of propan-2-ol, 2-methylpropan-2-ol and propan-1-ol are passed over heated copper at 573 K. The products are respectively",
        [
         "propanone, 2-methylpropene, propanal",
         "propanal, 2-methylpropene, propanone",
         "propanone, 2-methylpropanone, propanoic acid",
         "propene, propanone, propanal"
        ],
        0,
        "Secondary alcohol gives ketone, tertiary alcohol dehydrates to the alkene, and primary gives aldehyde."
       ],
       [
        "A student says that a tertiary alcohol on treatment with CrO₃ gives a ketone with the same number of carbons. The error is that",
        [
         "tertiary alcohols give carboxylic acids",
         "tertiary alcohols give aldehydes",
         "tertiary alcohols have no H on the carbinol carbon and resist oxidation under mild conditions",
         "chromic anhydride only reacts with phenols"
        ],
        2,
        "Only drastic conditions (hot KMnO₄) break C–C bonds to give a mixture of acids with fewer carbons."
       ],
       [
        "Which of these alcohols is dehydrated under the mildest conditions by an acid?",
        [
         "ethanol, as it is smallest",
         "2-methylpropan-2-ol, via the most stable carbocation",
         "propan-2-ol, as it is secondary",
         "butan-1-ol, as it is a straight chain"
        ],
        1,
        "Ease of dehydration: tertiary > secondary > primary, as tertiary carbocations are most stable."
       ],
       [
        "Phenol is first heated with NaOH and treated with CO₂, then acidified to give X. X on heating with acetic anhydride and a trace of H₂SO₄ gives Y. Y is",
        [
         "salicylaldehyde",
         "methyl salicylate",
         "phenyl ethanoate",
         "aspirin"
        ],
        3,
        "X is salicylic acid; acetylation of its phenolic –OH gives aspirin."
       ],
       [
        "A student says: “p-Nitrophenol is steam volatile because of intramolecular hydrogen bonding.” The error is that",
        [
         "it is o-nitrophenol that has intramolecular hydrogen bonds and is steam volatile",
         "both nitrophenols are steam volatile",
         "neither isomer forms hydrogen bonds",
         "p-nitrophenol is the more volatile isomer"
        ],
        0,
        "p-Nitrophenol has intermolecular hydrogen bonds, so it is less volatile."
       ],
       [
        "Phenol is treated separately with Br₂ in CS₂ at low temperature and with bromine water. The products are respectively",
        [
         "2,4,6-tribromophenol and a mixture of bromophenols",
         "a mixture of o- and p-bromophenol, and 2,4,6-tribromophenol",
         "m-bromophenol and bromobenzene",
         "only p-bromophenol in both"
        ],
        1,
        "Low polarity solvent restricts ionisation giving monobromination; in water the very activated ring is tribrominated."
       ],
       [
        "Reimer–Tiemann reaction and Kolbe’s reaction of phenol give respectively",
        [
         "2-hydroxybenzoic acid and 2-hydroxybenzaldehyde",
         "4-hydroxybenzaldehyde and phenyl ethanoate",
         "2-hydroxybenzaldehyde and 2-hydroxybenzoic acid",
         "benzaldehyde and benzoic acid"
        ],
        2,
        "CHCl₃/NaOH introduces –CHO at the ortho position; CO₂ on phenoxide introduces –COOH."
       ],
       [
        "A compound C₆H₆O dissolves in aqueous NaOH, gives a white precipitate with bromine water and, on heating with zinc dust, gives benzene. It is",
        [
         "benzyl alcohol",
         "anisole",
         "cyclohexanol",
         "phenol"
        ],
        3,
        "Acidity towards NaOH, tribromination and reduction to benzene all point to phenol."
       ],
       [
        "A methanol-poisoned patient is given intravenous diluted ethanol because",
        [
         "ethanol neutralises methanoic acid chemically",
         "ethanol occupies the enzyme, so methanol is not oxidised to methanal and methanoic acid while kidneys excrete it",
         "ethanol converts methanol into ethene",
         "ethanol is a stronger oxidising agent"
        ],
        1,
        "The enzyme is swamped by ethanol, giving time for excretion of methanol."
       ],
       [
        "A student says: “Sucrose in molasses is fermented directly to ethanol by invertase.” The correct statement is that",
        [
         "invertase gives glucose and fructose, which zymase then ferments to ethanol and CO₂",
         "zymase gives glucose and fructose, invertase ferments them",
         "oxygen is needed to ferment glucose to ethanol",
         "invertase converts ethanol to ethanoic acid"
        ],
        0,
        "Fermentation occurs anaerobically; air would oxidise ethanol to ethanoic acid."
       ],
       [
        "Which pair is the better choice to prepare ethyl tert-butyl ether by Williamson synthesis?",
        [
         "sodium ethoxide and 2-bromo-2-methylpropane",
         "ethanol and tert-butyl alcohol with conc. H₂SO₄ at 413 K",
         "sodium ethoxide and tert-butyl alcohol",
         "sodium tert-butoxide and bromoethane"
        ],
        3,
        "A tertiary halide with a strong base gives 2-methylpropene by elimination; a primary halide undergoes SN2. (NCERT Example 7.6)"
       ],
       [
        "A student heats a mixture of ethanol and methanol with conc. H₂SO₄ at 413 K to prepare ethyl methyl ether. The error is that",
        [
         "the product will be a mixture of dimethyl, ethyl methyl and diethyl ethers",
         "only diethyl ether forms",
         "the reaction gives only ethene",
         "this method works only for tertiary alcohols"
        ],
        0,
        "Bimolecular dehydration of two different alcohols gives all three possible ethers."
       ],
       [
        "Assertion (A): Diisopropyl ether can be prepared in good yield by heating propan-2-ol with conc. H₂SO₄ at 413 K.\nReason (R): In the acid dehydration of secondary and tertiary alcohols, elimination competes with substitution and alkenes form.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false: the method suits only primary alcohols; R is the reason it fails for secondary alcohols."
       ],
       [
        "Which set is appropriate for preparing 1-methoxy-4-nitrobenzene?",
        [
         "methanol and 1-bromo-4-nitrobenzene under neutral conditions",
         "methanol and 4-nitrophenol with H₂SO₄ at 413 K",
         "sodium 4-nitrophenoxide and bromomethane",
         "sodium methoxide and 4-nitrophenol"
        ],
        2,
        "Primary alkyl halide undergoes SN2 with phenoxide; aryl halides do not undergo SN2 under these conditions."
       ],
       [
        "Ethoxyethane (M = 74) is compared with butan-1-ol (M = 74) and pentane. Which statement is correct?",
        [
         "Its boiling point is close to butan-1-ol and its solubility is close to pentane",
         "Its boiling point is close to pentane, while its water solubility is close to butan-1-ol",
         "It boils lower than pentane by about 100 K",
         "It is completely insoluble because it lacks an –OH group"
        ],
        1,
        "No H-bonding between ether molecules, but its oxygen H-bonds to water."
       ],
       [
        "A student writes: “Anisole + conc. HI (heat) → iodobenzene + methanol.” The correct products are",
        [
         "phenol and iodomethane, since the aryl O–C bond is stronger and sp² carbon resists SN",
         "iodobenzene and methanol, as written",
         "benzene and CH₃OH",
         "phenol and methanol"
        ],
        0,
        "Iodide attacks the methyl carbon (SN2). Phenol does not react further to give an aryl iodide."
       ],
       [
        "The major products of (CH₃)₃C–O–C₂H₅ with HI are",
        [
         "(CH₃)₃COH and C₂H₅I",
         "(CH₃)₂C=CH₂ and C₂H₅I",
         "(CH₃)₃CI and C₂H₅OH",
         "(CH₃)₃CI and C₂H₅I"
        ],
        2,
        "A tertiary group forms a stable carbocation, so the reaction follows SN1 giving the tertiary iodide."
       ],
       [
        "Methyl propyl ether, CH₃OCH₂CH₂CH₃, is heated with excess conc. HI at high temperature. The final products are",
        [
         "CH₃I and CH₃CH₂CH₂I",
         "CH₃OH and CH₃CH₂CH₂I",
         "CH₃I and CH₃CH₂CH₂OH",
         "CH₃OH and CH₃CH₂CH₂OH"
        ],
        0,
        "Cleavage gives CH₃I (lower alkyl) plus propanol, which reacts with excess HI to give propyl iodide."
       ],
       [
        "Phenol is treated with NaOH to give A; A reacts with CH₃I to give B; B reacts with Br₂ in ethanoic acid to give C. The major product C is",
        [
         "m-bromoanisole",
         "p-bromoanisole",
         "2,4,6-tribromophenol",
         "bromobenzene"
        ],
        1,
        "A = sodium phenoxide, B = anisole, and the –OCH₃ group directs para as the major product."
       ],
       [
        "Anisole reacts with CH₃COCl in the presence of anhydrous AlCl₃. The major products are",
        [
         "3-methoxyacetophenone only",
         "phenol and methyl ethanoate",
         "benzoic acid and CH₃Cl",
         "2-methoxyacetophenone and 4-methoxyacetophenone"
        ],
        3,
        "The –OCH₃ group activates the ring and directs the acyl group to ortho and para positions."
       ]
      ]
     ]
    },
    {
     "n": 8,
     "t": "Aldehydes, Ketones and Carboxylic Acids",
     "levels": [
      [
       [
        "What is the IUPAC name of CH₃CH(OCH₃)CHO, commonly called α-methoxypropionaldehyde?",
        [
         "2-Methoxypropanal",
         "3-Methoxypropanal",
         "1-Methoxypropanal",
         "2-Methoxypropan-1-ol"
        ],
        0,
        "Number the chain from the CHO carbon; the OCH₃ group sits on C-2 and the suffix is -al."
       ],
       [
        "What is the IUPAC name of diisopropyl ketone, (CH₃)₂CHCOCH(CH₃)₂?",
        [
         "3,3-Dimethylpentan-2-one",
         "2,4-Dimethylpentan-3-one",
         "2,4-Dimethylpentanal",
         "Heptan-4-one"
        ],
        1,
        "The longest chain has five carbons with C=O at C-3 and a methyl on C-2 and C-4."
       ],
       [
        "The ketone C₆H₅COCH₃ is commonly named by adding the acyl group name before ‘phenone’. Its common name is",
        [
         "benzophenone",
         "propiophenone",
         "acetophenone",
         "dimethyl phenyl ketone"
        ],
        2,
        "Acetyl group + phenone gives acetophenone; benzophenone is C₆H₅COC₆H₅."
       ],
       [
        "What is the IUPAC name of acrolein, CH₂=CHCHO?",
        [
         "Prop-1-enal",
         "Propenoic acid",
         "Prop-2-en-1-ol",
         "Prop-2-enal"
        ],
        3,
        "Number from the aldehyde carbon; the double bond starts at C-2, so prop-2-enal."
       ],
       [
        "In the common names of aldehydes and ketones, the Greek letter α marks which carbon?",
        [
         "The carbon directly attached to the carbonyl group",
         "The carbonyl carbon itself",
         "The carbon farthest from the carbonyl group",
         "The carbon two atoms away from the carbonyl group"
        ],
        0,
        "Greek letters α, β, γ, δ start with the carbon next to the carbonyl group."
       ],
       [
        "A cyclohexane ring carries an –CHO group on C-1 and a CH₃ group on C-3. Its IUPAC name is",
        [
         "3-Methylcyclohexanone",
         "3-Methylcyclohexanecarbaldehyde",
         "5-Methylcyclohexanecarbaldehyde",
         "1-Methylcyclohexan-3-al"
        ],
        1,
        "The suffix carbaldehyde is added and ring numbering starts from the carbon bearing CHO."
       ],
       [
        "The carbonyl carbon in aldehydes and ketones is ______ hybridised and the bond angles around it are about ______.",
        [
         "sp³, 109.5°",
         "sp, 180°",
         "sp², 120°",
         "sp², 109.5°"
        ],
        2,
        "The carbonyl carbon forms three σ bonds in one plane; the fourth electron forms the π bond with oxygen."
       ],
       [
        "Which statement about the carbonyl group C=O is correct?",
        [
         "The carbon is nucleophilic and the oxygen is electrophilic",
         "Both carbon and oxygen are electrophilic",
         "The bond is non-polar",
         "The carbon is an electrophilic centre and the oxygen is a nucleophilic centre"
        ],
        3,
        "Oxygen is more electronegative, so the C=O bond is polarised with δ+ on carbon and δ− on oxygen."
       ],
       [
        "Carbonyl compounds are more polar than ethers mainly because",
        [
         "a dipolar resonance structure with C⁺ and O⁻ contributes to the carbonyl group",
         "carbonyl compounds contain O–H bonds",
         "ethers have no oxygen atom",
         "carbonyl carbon is sp³ hybridised"
        ],
        0,
        "Resonance between the neutral and the dipolar (C⁺–O⁻) forms makes the carbonyl group highly polar."
       ],
       [
        "Passing the vapours of propan-2-ol over heated copper gives",
        [
         "propanal",
         "propanone",
         "propene",
         "propanoic acid"
        ],
        1,
        "Dehydrogenation of a secondary alcohol over Cu or Ag gives a ketone."
       ],
       [
        "Which alkyne gives an aldehyde on hydration with H₂SO₄ and HgSO₄?",
        [
         "Propyne",
         "But-1-yne",
         "Ethyne",
         "But-2-yne"
        ],
        2,
        "Only ethyne gives ethanal; all other alkynes give ketones."
       ],
       [
        "Ozonolysis of but-2-ene followed by treatment with Zn dust and water gives",
        [
         "two molecules of ethanoic acid",
         "one molecule of propanone",
         "butanal",
         "two molecules of ethanal"
        ],
        3,
        "CH₃CH=CHCH₃ is cleaved at the double bond into two CH₃CHO molecules."
       ],
       [
        "Hydrogenation of an acyl chloride over palladium on barium sulphate to give an aldehyde is called",
        [
         "Rosenmund reduction",
         "Stephen reaction",
         "Etard reaction",
         "Clemmensen reduction"
        ],
        0,
        "RCOCl + H₂ (Pd–BaSO₄) → RCHO + HCl is the Rosenmund reduction."
       ],
       [
        "Ethanenitrile is treated with SnCl₂ and HCl and the product is then hydrolysed. The final product is",
        [
         "ethanoic acid",
         "ethanal",
         "ethanol",
         "ethanamide"
        ],
        1,
        "Stephen reaction: the nitrile is reduced to an imine, which hydrolyses to the aldehyde."
       ],
       [
        "Which reagent reduces esters (and nitriles) selectively to aldehydes?",
        [
         "NaBH₄",
         "LiAlH₄ in excess",
         "DIBAL-H",
         "Zn–Hg/conc. HCl"
        ],
        2,
        "Diisobutylaluminium hydride stops at the aldehyde stage after hydrolysis."
       ],
       [
        "Toluene is oxidised to benzaldehyde with chromyl chloride (CrO₂Cl₂) followed by hydrolysis. This is called the",
        [
         "Gattermann–Koch reaction",
         "Rosenmund reduction",
         "Friedel–Crafts acylation",
         "Etard reaction"
        ],
        3,
        "Chromyl chloride converts the CH₃ group to a chromium complex that hydrolyses to CHO."
       ],
       [
        "Side-chain chlorination of toluene gives benzal chloride, which on hydrolysis gives benzaldehyde. The formula of benzal chloride is",
        [
         "C₆H₅CHCl₂",
         "C₆H₅CH₂Cl",
         "C₆H₅CCl₃",
         "C₆H₄Cl₂"
        ],
        0,
        "Two hydrogens of CH₃ are replaced by Cl; hydrolysis of the gem-dichloride gives CHO."
       ],
       [
        "Treating benzene with CO and HCl in the presence of anhydrous AlCl₃ (or CuCl) gives",
        [
         "benzoic acid",
         "benzaldehyde",
         "acetophenone",
         "benzyl alcohol"
        ],
        1,
        "This is the Gattermann–Koch reaction, a formylation of the ring."
       ],
       [
        "When toluene reacts with CrO₃ in acetic anhydride, the first isolable product (hydrolysed afterwards to benzaldehyde) is",
        [
         "benzoic acid",
         "benzal chloride",
         "benzylidene diacetate",
         "benzyl acetate"
        ],
        2,
        "The aldehyde stage is protected as the diacetate, which prevents oxidation to the acid."
       ],
       [
        "(CH₃CH₂)₂Cd reacts with 2 CH₃COCl. The ketone formed is",
        [
         "propanone",
         "pentan-3-one",
         "butanal",
         "butan-2-one"
        ],
        3,
        "R₂Cd + 2R′COCl → 2R–CO–R′, here C₂H₅–CO–CH₃."
       ],
       [
        "Benzonitrile is treated with CH₃MgBr and the product is hydrolysed with aqueous acid. The ketone obtained is",
        [
         "acetophenone",
         "benzophenone",
         "benzaldehyde",
         "propiophenone"
        ],
        0,
        "Grignard reagent adds to C≡N and the imine hydrolyses to C₆H₅COCH₃."
       ],
       [
        "Benzene reacts with CH₃CH₂COCl in the presence of anhydrous AlCl₃. The product is",
        [
         "1-phenylpropan-2-one",
         "1-phenylpropan-1-one",
         "propylbenzene",
         "benzoic acid"
        ],
        1,
        "Friedel–Crafts acylation attaches the acyl group directly to the ring."
       ],
       [
        "Which is the correct increasing order of boiling points?",
        [
         "CH₃CH₂OH < CH₃CHO < CH₃OCH₃ < CH₃CH₂CH₃",
         "CH₃OCH₃ < CH₃CH₂CH₃ < CH₃CH₂OH < CH₃CHO",
         "CH₃CH₂CH₃ < CH₃OCH₃ < CH₃CHO < CH₃CH₂OH",
         "CH₃CH₂CH₃ < CH₃CHO < CH₃OCH₃ < CH₃CH₂OH"
        ],
        2,
        "Hydrogen bonding in the alcohol is strongest, then dipole–dipole forces in ethanal, then weak polarity of the ether (NCERT Intext 8.3)."
       ],
       [
        "Aldehydes and ketones boil at lower temperatures than alcohols of similar molecular mass because",
        [
         "they have no dipole moment",
         "they have higher molecular mass",
         "their molecules form dimers",
         "they cannot form intermolecular hydrogen bonds with each other"
        ],
        3,
        "They have no O–H hydrogen, so only dipole–dipole attraction operates between molecules."
       ],
       [
        "Which of these is miscible with water in all proportions?",
        [
         "Propanone",
         "Octanal",
         "Decan-2-one",
         "Heptan-2-one"
        ],
        0,
        "Lower members (methanal, ethanal, propanone) hydrogen-bond with water; solubility falls as the chain lengthens."
       ],
       [
        "In nucleophilic addition to a carbonyl compound, the nucleophile attacks the carbonyl carbon, which changes from ______ to ______ and gives an alkoxide intermediate.",
        [
         "sp³ to sp²",
         "sp² to sp³",
         "sp to sp²",
         "sp² to sp"
        ],
        1,
        "The planar sp² carbon becomes tetrahedral sp³; the alkoxide then picks up H⁺."
       ],
       [
        "Aldehydes are more reactive than ketones in nucleophilic addition because of",
        [
         "more steric hindrance in aldehydes",
         "two electron-donating alkyl groups in aldehydes",
         "less steric hindrance and greater electrophilicity of the carbonyl carbon",
         "higher boiling points of aldehydes"
        ],
        2,
        "Ketones have two bulky, electron-releasing alkyl groups that hinder attack and reduce electrophilicity."
       ],
       [
        "Which compound is most reactive towards nucleophilic addition?",
        [
         "Ethanal",
         "Propanone",
         "Butanone",
         "Methanal"
        ],
        3,
        "HCHO has two hydrogens on the carbonyl carbon, so it has the least hindrance and the most electrophilic carbon."
       ],
       [
        "Ethanal reacts with HCN in the presence of a trace of base. The product is",
        [
         "2-hydroxypropanenitrile",
         "propanenitrile",
         "2-aminopropanoic acid",
         "ethanamide"
        ],
        0,
        "A cyanohydrin CH₃CH(OH)CN forms; CN⁻ is the actual nucleophile."
       ],
       [
        "The sodium hydrogensulphite addition compounds of aldehydes are useful because they",
        [
         "are insoluble and distil easily",
         "are water soluble and regenerate the aldehyde on treatment with dilute acid or alkali",
         "give a silver mirror directly",
         "are stable towards acids"
        ],
        1,
        "They allow separation and purification of aldehydes from non-reacting organic compounds."
       ],
       [
        "Ethanal reacts with excess methanol in the presence of dry HCl to give",
        [
         "methoxyethane",
         "ethyl methanoate",
         "1,1-dimethoxyethane",
         "2-methoxyethanol"
        ],
        2,
        "The hemiacetal formed first reacts with a second molecule of alcohol to give the acetal CH₃CH(OCH₃)₂."
       ],
       [
        "A ketone reacts with ethylene glycol in the presence of dry HCl. The product is called an",
        [
         "oxime",
         "ethylene glycol acetal of an aldehyde",
         "cyanohydrin",
         "ethylene glycol ketal"
        ],
        3,
        "Ketones form cyclic ketals with ethylene glycol; aqueous acid hydrolyses them back."
       ],
       [
        "Which reagent with an aldehyde or ketone gives an orange or red crystalline derivative used for characterisation?",
        [
         "2,4-Dinitrophenylhydrazine",
         "Hydroxylamine",
         "Semicarbazide",
         "Ammonia"
        ],
        0,
        "2,4-DNP derivatives are yellow, orange or red solids."
       ],
       [
        "Propanone reacts with hydroxylamine (NH₂OH) to give",
        [
         "propanone semicarbazone",
         "propanone oxime",
         "propanone hydrazone",
         "propan-2-ol"
        ],
        1,
        "Z = OH in >C=N–Z gives an oxime."
       ],
       [
        "Sodium borohydride reduces propanone to",
        [
         "propane",
         "propan-1-ol",
         "propan-2-ol",
         "propanoic acid"
        ],
        2,
        "Ketones are reduced to secondary alcohols by NaBH₄ or LiAlH₄."
       ],
       [
        "Which pair of reagents converts C=O into CH₂?",
        [
         "NaBH₄ or LiAlH₄",
         "Tollens’ reagent or Fehling’s reagent",
         "PCl₅ or SOCl₂",
         "Zn–Hg with conc. HCl, or NH₂NH₂ followed by KOH in ethylene glycol"
        ],
        3,
        "These are the Clemmensen and Wolff–Kishner reductions."
       ],
       [
        "Tollens’ reagent is",
        [
         "ammoniacal silver nitrate",
         "alkaline copper sulphate with Rochelle salt",
         "acidified potassium dichromate",
         "Zn–Hg/conc. HCl"
        ],
        0,
        "Warming an aldehyde with it deposits a silver mirror."
       ],
       [
        "A positive Fehling’s test is shown by a",
        [
         "silver mirror with ketones",
         "red-brown precipitate with aliphatic aldehydes",
         "blue colour with benzaldehyde",
         "yellow precipitate with ethanal"
        ],
        1,
        "Fehling’s reagent oxidises aliphatic aldehydes; aromatic aldehydes do not respond."
       ],
       [
        "Propanone treated with sodium hypoiodite (I₂/NaOH) gives",
        [
         "sodium propanoate and CHI₃",
         "propanoic acid only",
         "yellow precipitate of CHI₃ and sodium ethanoate",
         "no reaction"
        ],
        2,
        "Methyl ketones lose the CH₃ group as haloform and give a salt of the acid with one carbon less."
       ],
       [
        "On vigorous oxidation, ketones",
        [
         "give an acid with the same number of carbon atoms",
         "are never oxidised",
         "give aldehydes",
         "undergo C–C bond cleavage to give a mixture of acids with fewer carbon atoms"
        ],
        3,
        "Ketones are oxidised only under strong conditions and with C–C cleavage."
       ],
       [
        "Aldol condensation is shown by aldehydes and ketones that have",
        [
         "at least one α-hydrogen",
         "no α-hydrogen",
         "a benzene ring",
         "an –OH group"
        ],
        0,
        "Dilute alkali removes an acidic α-H to form the enolate that attacks another carbonyl group."
       ],
       [
        "Two molecules of ethanal react in dilute NaOH. The aldol formed is",
        [
         "2-hydroxybutanal",
         "3-hydroxybutanal",
         "butane-1,3-diol",
         "but-2-enal"
        ],
        1,
        "CH₃CHO + CH₃CHO → CH₃CH(OH)CH₂CHO; heating dehydrates it to but-2-enal."
       ],
       [
        "The α-hydrogens of aldehydes and ketones are acidic because",
        [
         "the carbonyl oxygen donates electrons",
         "α-carbon is sp-hybridised",
         "the carbonyl group withdraws electrons and the conjugate base is resonance stabilised",
         "they form hydrogen bonds"
        ],
        2,
        "The enolate anion is stabilised by delocalisation onto oxygen."
       ],
       [
        "A mixture of ethanal and propanal (both having α-hydrogens) is treated with dilute alkali. Number of aldol products formed is",
        [
         "one",
         "two",
         "three",
         "four"
        ],
        3,
        "Two self-aldol and two cross-aldol products form."
       ],
       [
        "Methanal heated with concentrated NaOH gives",
        [
         "methanol and sodium methanoate",
         "only methanol",
         "only sodium methanoate",
         "ethanol"
        ],
        0,
        "Cannizzaro reaction: one molecule is reduced to the alcohol and another oxidised to the carboxylate."
       ],
       [
        "Nitration of benzaldehyde with conc. HNO₃/H₂SO₄ gives mainly",
        [
         "2-nitrobenzaldehyde",
         "3-nitrobenzaldehyde",
         "4-nitrobenzaldehyde",
         "nitrobenzene"
        ],
        1,
        "The carbonyl group is deactivating and meta-directing."
       ],
       [
        "A 40% aqueous solution of methanal, used to preserve biological specimens, is called",
        [
         "vinegar",
         "bakelite",
         "formalin",
         "acetone"
        ],
        2,
        "Methanal is also used to make bakelite and urea–formaldehyde resins."
       ],
       [
        "Which pairing of compound and use is correct?",
        [
         "Ethanal – manufacture of nylon-6,6",
         "Acetone – food preservative",
         "Methanal – vinegar",
         "Benzaldehyde – perfumery and dyes"
        ],
        3,
        "Ethanal gives acetic acid and ethyl acetate; acetone and ethyl methyl ketone are solvents."
       ],
       [
        "Formic acid gets its name from the Latin word for",
        [
         "ant",
         "vinegar",
         "butter",
         "goat"
        ],
        0,
        "Formica means ant; acetum is vinegar and butyrum is butter."
       ],
       [
        "The IUPAC name of HOOC(CH₂)₄COOH (adipic acid) is",
        [
         "pentanedioic acid",
         "hexanedioic acid",
         "butanedioic acid",
         "hexane-1-carboxylic acid"
        ],
        1,
        "Six carbons including both carboxyl carbons give hexanedioic acid."
       ],
       [
        "The IUPAC name of C₆H₅CH₂COOH is",
        [
         "phenylmethanoic acid",
         "3-phenylpropanoic acid",
         "2-phenylethanoic acid",
         "benzenecarboxylic acid"
        ],
        2,
        "The carboxyl carbon is C-1 and the phenyl group is on C-2."
       ],
       [
        "The carboxylic carbon is less electrophilic than the carbonyl carbon of a ketone because",
        [
         "it is sp³ hybridised",
         "it has no oxygen atom",
         "it is bonded to hydrogen",
         "resonance with the lone pair of the OH oxygen delocalises the positive charge"
        ],
        3,
        "The –OH oxygen donates electron density towards the carbonyl carbon."
       ],
       [
        "Toluene is heated with alkaline KMnO₄ and then acidified. The product is",
        [
         "benzoic acid",
         "benzaldehyde",
         "benzyl alcohol",
         "phenylethanoic acid"
        ],
        0,
        "The whole side chain, whatever its length, is oxidised to –COOH."
       ],
       [
        "Grignard reagent RMgX reacts with dry ice and the product is acidified. The product is",
        [
         "ROH",
         "RCOOH, one carbon more than R–X",
         "RCHO",
         "R–R"
        ],
        1,
        "RMgX adds to CO₂ to give RCOOMgX, which gives RCOOH on acidification."
       ],
       [
        "Acid hydrolysis of an ester RCOOR′ gives directly",
        [
         "RCOO⁻ and R′OH only",
         "RCHO and R′OH",
         "RCOOH and R′OH",
         "RCOCl and R′OH"
        ],
        2,
        "Basic hydrolysis gives the carboxylate, which needs acidification to give the acid."
       ],
       [
        "Hydrolysis of ethanenitrile (CH₃CN) with dilute acid and heat finally gives",
        [
         "ethanal",
         "ethylamine",
         "ethanol",
         "ethanoic acid"
        ],
        3,
        "Nitrile → amide → carboxylic acid; mild conditions stop at the amide."
       ],
       [
        "Carboxylic acids have higher boiling points than alcohols of similar molecular mass because",
        [
         "they form stronger and more extensive hydrogen bonds, even as dimers",
         "they have no hydrogen bonding",
         "they are non-polar",
         "they have lower molecular masses"
        ],
        0,
        "Association via two hydrogen bonds persists even in the vapour phase."
       ],
       [
        "Which carboxylic acid is miscible with water in all proportions?",
        [
         "Hexanoic acid",
         "Ethanoic acid",
         "Benzoic acid",
         "Octadecanoic acid"
        ],
        1,
        "Acids with up to four carbons are miscible; benzoic acid is nearly insoluble in cold water."
       ],
       [
        "A carboxylic acid, unlike a phenol, reacts with sodium hydrogencarbonate to give",
        [
         "hydrogen",
         "ammonia",
         "carbon dioxide",
         "carbon monoxide"
        ],
        2,
        "The effervescence of CO₂ is a test for the carboxyl group."
       ],
       [
        "Which acid is the strongest?",
        [
         "C₆H₅COOH (pKa 4.19)",
         "CH₃COOH (pKa 4.76)",
         "C₂H₅OH (pKa about 16)",
         "CF₃COOH (pKa 0.23)"
        ],
        3,
        "The smaller the pKa, the stronger the acid."
       ],
       [
        "Which of these is the correct order of increasing acidity?",
        [
         "CH₃CH₂COOH < CH₃COOH < HCOOH < ClCH₂COOH",
         "ClCH₂COOH < HCOOH < CH₃COOH < CH₃CH₂COOH",
         "HCOOH < CH₃COOH < CH₃CH₂COOH < ClCH₂COOH",
         "CH₃COOH < CH₃CH₂COOH < ClCH₂COOH < HCOOH"
        ],
        0,
        "Electron-donating alkyl groups reduce acidity; the electron-withdrawing Cl increases it."
       ],
       [
        "Which acid is stronger than benzoic acid (pKa 4.19)?",
        [
         "4-Methoxybenzoic acid (pKa 4.46)",
         "4-Nitrobenzoic acid (pKa 3.41)",
         "Ethanoic acid (pKa 4.76)",
         "Propanoic acid"
        ],
        1,
        "An electron-withdrawing –NO₂ group stabilises the benzoate ion."
       ],
       [
        "Heating ethanoic acid with P₂O₅ gives",
        [
         "ethyl ethanoate",
         "ethanoyl chloride",
         "ethanoic anhydride",
         "ethanamide"
        ],
        2,
        "Two acid molecules lose one water molecule: (CH₃CO)₂O."
       ],
       [
        "Ethanoic acid and ethanol with a little conc. H₂SO₄ give",
        [
         "diethyl ether",
         "ethanoic anhydride",
         "ethanal",
         "ethyl ethanoate"
        ],
        3,
        "This acid-catalysed esterification is a nucleophilic acyl substitution."
       ],
       [
        "SOCl₂ is preferred for converting RCOOH to RCOCl because",
        [
         "the by-products SO₂ and HCl are gases that escape easily",
         "it gives a higher boiling product",
         "it also reduces the acid",
         "PCl₅ cannot react with acids"
        ],
        0,
        "The pure acid chloride is easy to isolate."
       ],
       [
        "Ethanoic acid is treated with ammonia and the salt formed is heated strongly. The product is",
        [
         "ethylamine",
         "ethanamide",
         "ethanenitrile",
         "ethanol"
        ],
        1,
        "CH₃COOH + NH₃ → CH₃COONH₄, which loses water on heating to give CH₃CONH₂."
       ],
       [
        "Which reagent reduces a carboxylic acid to a primary alcohol?",
        [
         "NaBH₄",
         "Zn–Hg/conc. HCl",
         "LiAlH₄ (or diborane)",
         "Tollens’ reagent"
        ],
        2,
        "NaBH₄ does not reduce the –COOH group."
       ],
       [
        "Heating sodium ethanoate with soda lime (NaOH and CaO) gives",
        [
         "ethane",
         "ethanol",
         "ethene",
         "methane"
        ],
        3,
        "Decarboxylation removes CO₂: CH₃COONa → CH₄."
       ],
       [
        "Electrolysis of aqueous sodium ethanoate gives mainly",
        [
         "ethane",
         "methane",
         "butane",
         "ethanol"
        ],
        0,
        "Kolbe electrolysis joins two methyl radicals from CH₃COO⁻."
       ],
       [
        "Propanoic acid reacts with Cl₂ in the presence of a little red phosphorus. The product is",
        [
         "3-chloropropanoic acid",
         "2-chloropropanoic acid",
         "propanoyl chloride",
         "chlorobenzene"
        ],
        1,
        "Hell–Volhard–Zelinsky reaction halogenates the α-position."
       ],
       [
        "Nitration of benzoic acid gives mainly",
        [
         "2-nitrobenzoic acid",
         "4-nitrobenzoic acid",
         "3-nitrobenzoic acid",
         "nitrobenzene"
        ],
        2,
        "The –COOH group is deactivating and meta-directing."
       ],
       [
        "Which pairing is correct?",
        [
         "Methanoic acid – vinegar",
         "Sodium benzoate – soaps",
         "Higher fatty acids – food preservative",
         "Hexanedioic acid – nylon-6,6"
        ],
        3,
        "Ethanoic acid is vinegar, sodium benzoate is a food preservative, and higher fatty acids make soaps and detergents."
       ]
      ],
      [
       [
        "What is the IUPAC name of mesityl oxide, (CH₃)₂C=CHCOCH₃?",
        [
         "4-Methylpent-3-en-2-one",
         "2-Methylpent-2-en-4-one",
         "4-Methylpent-2-en-2-one",
         "2-Methylpent-3-en-4-one"
        ],
        0,
        "Number from the end nearer to C=O; the C=O is at C-2, the double bond at C-3 and the methyl at C-4."
       ],
       [
        "A student names CH₃COCH₂CH₂CH₃ as pentan-4-one. What is wrong?",
        [
         "Nothing, the name is correct",
         "Numbering must start from the end nearer to C=O, so the name is pentan-2-one",
         "It should be named as an aldehyde, pentanal",
         "The suffix should be -ol, giving pentan-2-ol"
        ],
        1,
        "For ketones, the chain is numbered to give the carbonyl carbon the lowest locant."
       ],
       [
        "Assertion (A): Aldehydes and ketones have substantial dipole moments.\nReason (R): The carbonyl carbon is sp² hybridised and the carbonyl group is planar.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "The dipole arises from the polarity of C=O (and its dipolar resonance form); sp² planarity does not explain it."
       ],
       [
        "An alkene C₅H₁₀ on ozonolysis followed by Zn/H₂O gives ethanal and propanone. The alkene is",
        [
         "pent-2-ene",
         "3-methylbut-1-ene",
         "2-methylbut-2-ene",
         "2-methylbut-1-ene"
        ],
        2,
        "CH₃CH=C(CH₃)₂ splits into CH₃CHO and (CH₃)₂C=O."
       ],
       [
        "Hydration of but-1-yne with HgSO₄ and dilute H₂SO₄ gives",
        [
         "butanal",
         "butan-2-ol",
         "butanoic acid",
         "butan-2-one"
        ],
        3,
        "Only ethyne gives an aldehyde; terminal alkynes such as but-1-yne give a methyl ketone."
       ],
       [
        "Allyl alcohol (CH₂=CHCH₂OH) is converted into propenal (CH₂=CHCHO) using",
        [
         "pyridinium chlorochromate (PCC)",
         "alkaline KMnO₄",
         "acidified K₂Cr₂O₇",
         "H₂ over Pd"
        ],
        0,
        "PCC stops at the aldehyde stage and leaves the C=C intact (NCERT Example 8.1)."
       ],
       [
        "Which reagent set converts toluene into benzaldehyde without over-oxidation to benzoic acid?",
        [
         "acidified KMnO₄, heat",
         "CrO₂Cl₂, then H₃O⁺",
         "alkaline KMnO₄, then H₃O⁺",
         "K₂Cr₂O₇/H₂SO₄, heat"
        ],
        1,
        "Etard reaction forms a chromium complex that cannot be oxidised further before hydrolysis."
       ],
       [
        "Compound X (C₂H₃N) is treated with SnCl₂/HCl and then hydrolysed to give Y, which forms a silver mirror with Tollens’ reagent. Y is",
        [
         "CH₃COOH",
         "CH₃CH₂OH",
         "CH₃CHO",
         "CH₃CONH₂"
        ],
        2,
        "X is CH₃CN; Stephen reaction gives ethanal, an aldehyde."
       ],
       [
        "A student says that benzoyl chloride with H₂ over Pd on BaSO₄ gives benzyl alcohol. What is the error?",
        [
         "Pd on BaSO₄ oxidises the chloride to benzoic acid",
         "The reaction gives toluene directly",
         "Acyl chlorides cannot be hydrogenated",
         "The poisoned catalyst stops the reduction at benzaldehyde (Rosenmund reduction)"
        ],
        3,
        "BaSO₄ deactivates Pd so reduction halts at the aldehyde."
       ],
       [
        "Which transformation can be carried out with DIBAL-H followed by hydrolysis?",
        [
         "Ethyl benzoate to benzaldehyde",
         "Benzaldehyde to benzoic acid",
         "Benzoic acid to benzene",
         "Benzaldehyde to toluene"
        ],
        0,
        "DIBAL-H reduces esters and nitriles selectively to aldehydes."
       ],
       [
        "Benzene is treated with CH₃COCl/anhydrous AlCl₃ to give A, which is then warmed with I₂/NaOH. The products are",
        [
         "benzaldehyde and CHI₃",
         "sodium benzoate and CHI₃",
         "sodium ethanoate and iodobenzene",
         "benzoic acid and CH₃I"
        ],
        1,
        "A is acetophenone, a methyl ketone; haloform reaction gives C₆H₅COONa and CHI₃."
       ],
       [
        "Ethanenitrile is treated with C₂H₅MgBr, hydrolysed, and the product is reduced with NaBH₄. The final product is",
        [
         "butan-1-ol",
         "butanal",
         "butan-2-ol",
         "2-methylpropan-2-ol"
        ],
        2,
        "CH₃CN + C₂H₅MgBr then H₃O⁺ gives butan-2-one, reduced to the secondary alcohol."
       ],
       [
        "(C₆H₅CH₂)₂Cd reacts with 2 CH₃COCl. The ketone formed is",
        [
         "1-phenylethanone",
         "1,3-diphenylpropan-2-one",
         "propanone",
         "1-phenylpropan-2-one"
        ],
        3,
        "Benzyl and acetyl groups join: C₆H₅CH₂–CO–CH₃."
       ],
       [
        "A student says propanal boils higher than propan-1-ol because propanal is more polar. What is wrong?",
        [
         "Propan-1-ol forms intermolecular hydrogen bonds and so boils higher",
         "Propanal has hydrogen bonding but propan-1-ol does not",
         "Propanal has higher molecular mass",
         "Boiling points depend only on molecular mass"
        ],
        0,
        "Hydrogen bonding in the alcohol outweighs the dipole–dipole forces in the aldehyde."
       ],
       [
        "Assertion (A): Propanone is miscible with water in all proportions.\nReason (R): Propanone molecules form hydrogen bonds with each other.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Propanone is miscible because it hydrogen-bonds with water; it cannot hydrogen-bond with itself since it has no O–H."
       ],
       [
        "Assertion (A): The carbonyl carbon is sp² hybridised and the nucleophile attacks it in the plane of the three σ bonds.\nReason (R): The π electron cloud of C=O lies above and below the molecular plane.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "The nucleophile attacks perpendicular to the plane, so the assertion is false; the reason is true."
       ],
       [
        "Arrange in increasing order of reactivity towards nucleophilic addition: benzaldehyde, p-tolualdehyde, p-nitrobenzaldehyde, acetophenone.",
        [
         "Acetophenone < benzaldehyde < p-tolualdehyde < p-nitrobenzaldehyde",
         "Acetophenone < p-tolualdehyde < benzaldehyde < p-nitrobenzaldehyde",
         "p-Nitrobenzaldehyde < benzaldehyde < p-tolualdehyde < acetophenone",
         "p-Tolualdehyde < acetophenone < benzaldehyde < p-nitrobenzaldehyde"
        ],
        1,
        "Ketone is the least reactive; –CH₃ lowers and –NO₂ raises the electrophilicity of the carbonyl carbon (NCERT Intext 8.4)."
       ],
       [
        "A student says benzaldehyde is more reactive than propanal because of resonance with the ring. What is wrong?",
        [
         "Resonance increases the positive charge on the carbonyl carbon",
         "Propanal is a ketone",
         "Resonance reduces the electrophilicity of the carbonyl carbon, so benzaldehyde is less reactive",
         "Rings make aldehydes sterically less crowded"
        ],
        2,
        "Delocalisation of ring electrons to the carbonyl lowers its polarity (NCERT Example 8.3)."
       ],
       [
        "Arrange in increasing order of reactivity towards HCN: acetaldehyde, acetone, di-tert-butyl ketone, methyl tert-butyl ketone.",
        [
         "Acetaldehyde < acetone < methyl tert-butyl ketone < di-tert-butyl ketone",
         "Acetone < di-tert-butyl ketone < methyl tert-butyl ketone < acetaldehyde",
         "Methyl tert-butyl ketone < di-tert-butyl ketone < acetone < acetaldehyde",
         "Di-tert-butyl ketone < methyl tert-butyl ketone < acetone < acetaldehyde"
        ],
        3,
        "Steric hindrance increases with bulky groups and is least in the aldehyde (NCERT Exercise 8.12 (i))."
       ],
       [
        "Propanone is treated with HCN (trace of base) and the product is hydrolysed with aqueous acid with heating. The final product is",
        [
         "2-hydroxy-2-methylpropanoic acid",
         "2-hydroxypropanoic acid",
         "2-methylpropanoic acid",
         "2-amino-2-methylpropanoic acid"
        ],
        0,
        "The cyanohydrin (CH₃)₂C(OH)CN hydrolyses to (CH₃)₂C(OH)COOH."
       ],
       [
        "Assertion (A): HCN addition to a carbonyl compound is catalysed by a base.\nReason (R): The base generates the cyanide ion, a stronger nucleophile than HCN.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Pure HCN reacts very slowly; CN⁻ attacks the carbonyl carbon readily."
       ],
       [
        "A mixture of propanal and acetophenone is shaken with saturated NaHSO₃ solution. What happens?",
        [
         "Both form soluble adducts",
         "The propanal adduct dissolves in water and can be separated; acetophenone stays unreacted in the organic layer",
         "Acetophenone forms the water-soluble adduct and propanal does not",
         "Neither reacts because carbonyl groups do not react with NaHSO₃"
        ],
        1,
        "The equilibrium lies to the right for aldehydes and to the left for most ketones due to steric reasons."
       ],
       [
        "What is the role of dry HCl in acetal formation from an aldehyde and an alcohol?",
        [
         "It oxidises the alcohol",
         "It acts as a nucleophile on the carbonyl carbon",
         "It protonates the carbonyl oxygen and increases the electrophilicity of the carbonyl carbon",
         "It removes the α-hydrogen"
        ],
        2,
        "Protonation makes the carbon more attractive to the alcohol nucleophile."
       ],
       [
        "A compound C₃H₆O reacts with hydroxylamine and also reduces Tollens’ reagent. The compound is",
        [
         "propanone",
         "prop-2-en-1-ol",
         "methyl ethyl ether",
         "propanal"
        ],
        3,
        "It is a carbonyl compound that gives an oxime and a silver mirror, so it is an aldehyde, CH₃CH₂CHO."
       ],
       [
        "A student says acetone with phenylhydrazine gives an oxime. The correct product is",
        [
         "acetone phenylhydrazone",
         "acetone semicarbazone",
         "acetone imine",
         "acetone cyanohydrin"
        ],
        0,
        "An oxime comes from NH₂OH; C₆H₅NHNH₂ gives a phenylhydrazone."
       ],
       [
        "4-Oxopentanoic acid (CH₃COCH₂CH₂COOH) is treated with NaBH₄. The product is",
        [
         "pentane-1,4-diol",
         "4-hydroxypentanoic acid",
         "pentanoic acid",
         "pentanal"
        ],
        1,
        "NaBH₄ reduces the ketone but does not reduce the carboxyl group."
       ],
       [
        "Acetophenone is heated with hydrazine and then with KOH in ethylene glycol. The product is",
        [
         "1-phenylethanol",
         "benzoic acid",
         "ethylbenzene",
         "styrene"
        ],
        2,
        "Wolff–Kishner reduction converts C=O into CH₂."
       ],
       [
        "A carbonyl compound contains a group that is destroyed by strong acid. The better method to convert C=O to CH₂ is",
        [
         "Clemmensen reduction (conc. HCl)",
         "NaBH₄ reduction",
         "Rosenmund reduction",
         "Wolff–Kishner reduction (strongly basic)"
        ],
        3,
        "Clemmensen uses Zn–Hg and conc. HCl, while Wolff–Kishner uses KOH."
       ],
       [
        "Which simple test distinguishes pentan-2-one from pentan-3-one?",
        [
         "Iodoform test (I₂/NaOH)",
         "Tollens’ test",
         "Fehling’s test",
         "2,4-DNP test"
        ],
        0,
        "Only the methyl ketone, pentan-2-one, gives yellow CHI₃."
       ],
       [
        "Benzaldehyde and acetophenone can be distinguished by",
        [
         "2,4-DNP test, positive for benzaldehyde only",
         "Tollens’ test, positive for benzaldehyde only",
         "iodoform test, positive for benzaldehyde only",
         "Fehling’s test, positive for acetophenone only"
        ],
        1,
        "Aldehydes oxidise to carboxylate with Tollens’ reagent; acetophenone does not."
       ],
       [
        "Ethanal and benzaldehyde: which reagent gives a red-brown precipitate with only one of them?",
        [
         "Fehling’s reagent, positive for benzaldehyde",
         "2,4-DNP, positive for ethanal only",
         "Fehling’s reagent, positive for ethanal",
         "Tollens’ reagent, positive for ethanal only"
        ],
        2,
        "Aromatic aldehydes do not respond to Fehling’s test; both respond to Tollens’ test."
       ],
       [
        "A student says that oxidation of a ketone with hot, strong oxidant gives an acid with the same number of carbon atoms. What is wrong?",
        [
         "Ketones are not oxidised at all",
         "Aldehydes are formed",
         "Ketones give alcohols",
         "C–C bond cleavage occurs, giving acids with fewer carbon atoms"
        ],
        3,
        "Strong oxidation of ketones breaks C–C bonds next to C=O."
       ],
       [
        "(CH₃)₂C=CHCOCH₃ is treated with NaOI. The organic product (apart from CHI₃) is",
        [
         "(CH₃)₂C=CHCOONa",
         "(CH₃)₂CHCH₂COONa",
         "(CH₃)₂C=CHCOCH₂I",
         "(CH₃)₂C(OH)CH₂COONa"
        ],
        0,
        "The C=C is not affected by NaOI; the CH₃CO group becomes COONa."
       ],
       [
        "Compound A (C₈H₈O) gives an orange-red precipitate with 2,4-DNP and a yellow precipitate with I₂/NaOH, does not reduce Tollens’ reagent, and on drastic oxidation gives C₇H₆O₂. A is",
        [
         "phenylacetaldehyde",
         "acetophenone",
         "benzaldehyde",
         "4-methylbenzaldehyde"
        ],
        1,
        "A is a methyl ketone with an aromatic ring and the acid is benzoic acid (NCERT Example 8.4)."
       ],
       [
        "A compound C₅H₁₀O forms an orange precipitate with 2,4-DNP, does not reduce Tollens’ reagent, and gives iodoform. Clemmensen reduction gives n-pentane. The compound is",
        [
         "pentan-3-one",
         "3-methylbutan-2-one",
         "pentan-2-one",
         "pentanal"
        ],
        2,
        "It is a methyl ketone with a straight chain."
       ],
       [
        "Which compound does NOT undergo aldol condensation?",
        [
         "Propanal",
         "Butanone",
         "Cyclohexanone",
         "2,2-Dimethylpropanal"
        ],
        3,
        "It has no α-hydrogen."
       ],
       [
        "Propanal undergoes aldol condensation in dilute NaOH on heating. The product is",
        [
         "2-methylpent-2-enal",
         "3-methylpent-2-enal",
         "hex-2-enal",
         "2-methylpentanal"
        ],
        0,
        "Aldol is 3-hydroxy-2-methylpentanal; loss of water gives CH₃CH₂CH=C(CH₃)CHO."
       ],
       [
        "Propanone undergoes aldol reaction and then loses water. The final product is",
        [
         "4-hydroxy-4-methylpentan-2-one",
         "4-methylpent-3-en-2-one",
         "2-methylpent-2-en-4-one",
         "hexan-2-one"
        ],
        1,
        "The ketol (CH₃)₂C(OH)CH₂COCH₃ dehydrates to mesityl oxide."
       ],
       [
        "Benzaldehyde and ethanal are mixed with dilute NaOH and warmed. The main condensation product is",
        [
         "3-hydroxybutanal",
         "2-phenylpropanal",
         "3-phenylprop-2-enal",
         "benzyl alcohol"
        ],
        2,
        "Ethanal gives the enolate (benzaldehyde has no α-H), which attacks benzaldehyde and then dehydrates."
       ],
       [
        "Assertion (A): The α-hydrogens of aldehydes and ketones are acidic.\nReason (R): The enolate formed on removing an α-hydrogen is resonance stabilised and the carbonyl group withdraws electrons.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Both effects stabilise the conjugate base."
       ],
       [
        "Assertion (A): Ethanal undergoes Cannizzaro reaction on heating with concentrated NaOH.\nReason (R): Aldehydes with no α-hydrogen undergo the Cannizzaro reaction.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Ethanal has α-hydrogens, so it undergoes aldol-type reactions instead."
       ],
       [
        "A student says two moles of benzaldehyde in conc. NaOH give two moles of benzyl alcohol. What is wrong?",
        [
         "Benzaldehyde gives benzoic acid only",
         "The reaction gives toluene",
         "The reaction gives benzene",
         "One mole gives benzyl alcohol and the other gives sodium benzoate"
        ],
        3,
        "Cannizzaro is a disproportionation: one molecule reduced and one oxidised."
       ],
       [
        "Acetophenone is nitrated with conc. HNO₃/H₂SO₄. The major product is",
        [
         "3-nitroacetophenone",
         "4-nitroacetophenone",
         "2-nitroacetophenone",
         "nitrobenzene"
        ],
        0,
        "The acetyl group is deactivating and meta-directing."
       ],
       [
        "Which pairing of compound and use is INCORRECT?",
        [
         "Methanal – bakelite and urea–formaldehyde glues",
         "Acetaldehyde – the main component of formalin",
         "Ethanal – manufacture of acetic acid",
         "Benzaldehyde – perfumery and dyes"
        ],
        1,
        "Formalin is a 40% aqueous solution of methanal."
       ],
       [
        "What is the IUPAC name of (CH₃)₂C=CHCOOH?",
        [
         "2-Methylbut-2-enoic acid",
         "3-Methylbut-3-enoic acid",
         "3-Methylbut-2-enoic acid",
         "4-Methylbut-2-enoic acid"
        ],
        2,
        "C-1 is COOH, the double bond is C2=C3 and the methyl is on C-3 (NCERT Intext 8.6)."
       ],
       [
        "What is the IUPAC name of HOOC–CH₂–CH(COOH)–CH₂–COOH (tricarballylic acid)?",
        [
         "Propane-1,2,3-triol",
         "Butane-1,2,3-tricarboxylic acid",
         "Propane-1,3-dicarboxylic acid",
         "Propane-1,2,3-tricarboxylic acid"
        ],
        3,
        "The chain without the carboxyl groups is propane with three COOH groups on C-1, C-2 and C-3."
       ],
       [
        "A student names HOOC(CH₂)₃COOH as butanedioic acid. What is wrong?",
        [
         "It has five carbons in the chain including both carboxyl carbons, so it is pentanedioic acid",
         "Nothing, it is butanedioic acid",
         "It is hexanedioic acid",
         "It is propane-1,3-dicarboxylic acid only"
        ],
        0,
        "Butanedioic acid is succinic acid, HOOC(CH₂)₂COOH."
       ],
       [
        "Assertion (A): The carbon of the carboxyl group is less electrophilic than the carbonyl carbon of a ketone.\nReason (R): The carboxyl carbon is sp³ hybridised.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "The carboxyl carbon is sp² (bonds about 120° in one plane); its lower electrophilicity is due to resonance with the –OH lone pair."
       ],
       [
        "Which route converts ethyl bromide into propanoic acid?",
        [
         "C₂H₅Br with aqueous KOH, then KMnO₄",
         "C₂H₅Br with Mg/ether, then CO₂, then H₃O⁺",
         "C₂H₅Br with Mg/ether, then H₂O",
         "C₂H₅Br with NaOH followed by acidification"
        ],
        1,
        "Grignard carboxylation adds one carbon; KCN followed by hydrolysis also works."
       ],
       [
        "Benzyl alcohol is converted into phenylethanoic acid by:",
        [
         "KMnO₄ in acid",
         "PCC, then HCN",
         "SOCl₂, then KCN, then H₃O⁺/heat",
         "Mg then CO₂"
        ],
        2,
        "C₆H₅CH₂OH → C₆H₅CH₂Cl → C₆H₅CH₂CN → C₆H₅CH₂COOH adds one carbon."
       ],
       [
        "tert-Butylbenzene is heated with alkaline KMnO₄ followed by acidification. A student says benzoic acid forms. What is wrong?",
        [
         "Only the ring is oxidised",
         "Benzoic acid is converted to benzene",
         "Tertiary groups give CO₂ and no ring",
         "A tertiary alkyl group has no benzylic hydrogen and is not oxidised"
        ],
        3,
        "Primary and secondary alkyl side chains are oxidised to –COOH; tertiary ones are not."
       ],
       [
        "Benzonitrile is partially hydrolysed with H₂O/H⁺ under controlled, mild conditions. The product is",
        [
         "benzamide",
         "benzoic acid",
         "benzaldehyde",
         "benzylamine"
        ],
        0,
        "Mild conditions stop hydrolysis at the amide stage; vigorous conditions give the acid."
       ],
       [
        "Ester A (C₈H₁₆O₂) is hydrolysed by dilute H₂SO₄ to acid B and alcohol C. C is oxidised to B, and C on dehydration gives but-1-ene. A is",
        [
         "isobutyl butanoate",
         "butyl butanoate",
         "butyl 2-methylpropanoate",
         "ethyl hexanoate"
        ],
        1,
        "C is butan-1-ol and B is butanoic acid, so A is CH₃CH₂CH₂COOCH₂CH₂CH₂CH₃ (adapted from NCERT Exercise 8.11)."
       ],
       [
        "Cyclohexene is converted into hexanedioic acid by",
        [
         "H₂/Pd",
         "NaBH₄",
         "vigorous oxidation with KMnO₄/H⁺ or alkaline KMnO₄ followed by acidification",
         "O₃ followed by Zn/H₂O"
        ],
        2,
        "Cleavage of the C=C oxidises each end to –COOH (NCERT Example 8.5)."
       ],
       [
        "Ethanoic acid shows a molar mass of about 120 g mol⁻¹ in benzene. This is because",
        [
         "it ionises in benzene",
         "it forms trimers by covalent bonds",
         "benzene oxidises it",
         "its molecules form hydrogen-bonded dimers in aprotic solvents"
        ],
        3,
        "Calculated mass is 60 g mol⁻¹, so the molecules exist as dimers."
       ],
       [
        "Increasing order of boiling points of propane, propanal, propan-1-ol and propanoic acid is",
        [
         "propane < propanal < propan-1-ol < propanoic acid",
         "propane < propan-1-ol < propanal < propanoic acid",
         "propanal < propane < propanoic acid < propan-1-ol",
         "propanoic acid < propan-1-ol < propanal < propane"
        ],
        0,
        "Strength of intermolecular forces increases in this order."
       ],
       [
        "Which simple test distinguishes benzoic acid from phenol?",
        [
         "Add Tollens’ reagent",
         "Add NaHCO₃: benzoic acid gives effervescence of CO₂ while phenol does not",
         "Add Fehling’s solution",
         "Add 2,4-DNP"
        ],
        1,
        "Carboxylic acids react with weaker bases like hydrogencarbonates."
       ],
       [
        "Why is ethanoic acid a stronger acid than phenol?",
        [
         "Phenoxide has no resonance",
         "The carboxylate ion has more resonating structures than phenoxide",
         "The carboxylate ion has two equivalent resonance structures with the negative charge on the electronegative oxygen atoms",
         "Phenol has no O–H bond"
        ],
        2,
        "Phenoxide has non-equivalent structures with charge on carbon, so it is less stabilised."
       ],
       [
        "Increasing order of acidity of CH₃COOH, ClCH₂COOH, Cl₂CHCOOH and Cl₃CCOOH is",
        [
         "Cl₃CCOOH < Cl₂CHCOOH < ClCH₂COOH < CH₃COOH",
         "ClCH₂COOH < CH₃COOH < Cl₃CCOOH < Cl₂CHCOOH",
         "CH₃COOH < Cl₃CCOOH < Cl₂CHCOOH < ClCH₂COOH",
         "CH₃COOH < ClCH₂COOH < Cl₂CHCOOH < Cl₃CCOOH"
        ],
        3,
        "More electron-withdrawing Cl atoms stabilise the anion more."
       ],
       [
        "Which acid is stronger, CH₂FCH₂CH₂COOH or CH₃CHFCH₂COOH?",
        [
         "CH₃CHFCH₂COOH, because F is closer to –COOH",
         "CH₂FCH₂CH₂COOH, because F is farther from –COOH",
         "Both have the same strength",
         "CH₂FCH₂CH₂COOH, because F donates electrons"
        ],
        0,
        "The inductive effect weakens with distance (NCERT Intext 8.8)."
       ],
       [
        "The pKa of benzoic acid is 4.19 and that of 4-nitrobenzoic acid is 3.41. How many times stronger (Ka ratio) is 4-nitrobenzoic acid?",
        [
         "About 0.8 times",
         "About 6 times",
         "About 60 times",
         "About 600 times"
        ],
        1,
        "Ratio = 10^(4.19 − 3.41) = 10^0.78 ≈ 6.",
        "Ka = 10^(−pKa)"
       ],
       [
        "Which acid is weaker than benzoic acid?",
        [
         "4-Nitrobenzoic acid",
         "3,4-Dinitrobenzoic acid",
         "4-Methoxybenzoic acid",
         "Trifluoroethanoic acid"
        ],
        2,
        "The electron-donating –OCH₃ destabilises the benzoate ion (pKa 4.46)."
       ],
       [
        "Assertion (A): Benzoic acid is a stronger acid than ethanoic acid.\nReason (R): The sp² hybridised carbon attached to the carboxyl carbon is more electronegative than the sp³ carbon in CH₃.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Benzoic acid pKa is 4.19 while ethanoic acid is 4.76."
       ],
       [
        "A student claims that heating ethanoic acid with P₂O₅ gives ethanoyl chloride. What is wrong?",
        [
         "Nothing is wrong",
         "It gives ethyl ethanoate",
         "It gives ethanamide",
         "P₂O₅ removes water to give ethanoic anhydride, not the chloride"
        ],
        3,
        "Acid chlorides need PCl₅, PCl₃ or SOCl₂."
       ],
       [
        "Ethanoic acid is converted to ethanal by",
        [
         "SOCl₂, then H₂ with Pd on BaSO₄",
         "LiAlH₄",
         "NaBH₄",
         "SOCl₂, then NaBH₄"
        ],
        0,
        "The acid chloride gives the aldehyde by Rosenmund reduction."
       ],
       [
        "In acid-catalysed esterification of a carboxylic acid with an alcohol, the leaving group from the tetrahedral intermediate is",
        [
         "alkoxide ion",
         "water",
         "hydroxide ion",
         "carbon dioxide"
        ],
        1,
        "Proton transfer makes –OH₂⁺, which leaves as H₂O."
       ],
       [
        "Benzoic acid is treated with SOCl₂ and the product with ammonia. The final product is",
        [
         "aniline",
         "benzonitrile",
         "benzamide",
         "benzaldehyde"
        ],
        2,
        "C₆H₅COCl + NH₃ → C₆H₅CONH₂."
       ],
       [
        "Which reagent reduces –COOH of 4-nitrobenzoic acid to –CH₂OH without affecting –NO₂?",
        [
         "LiAlH₄",
         "NaBH₄",
         "Zn–Hg/conc. HCl",
         "Diborane"
        ],
        3,
        "Diborane does not easily reduce nitro, halo or ester groups."
       ],
       [
        "Sodium propanoate is heated with soda lime. The hydrocarbon formed is",
        [
         "ethane",
         "propane",
         "butane",
         "methane"
        ],
        0,
        "RCOONa → R–H; here R is ethyl."
       ],
       [
        "Electrolysis of aqueous sodium butanoate gives mainly",
        [
         "butane",
         "hexane",
         "propane",
         "octane"
        ],
        1,
        "Kolbe electrolysis joins two propyl radicals."
       ],
       [
        "Assertion (A): Lithium aluminium hydride reduces carboxylic acids to primary alcohols.\nReason (R): Diborane is a better reagent than LiAlH₄ when ester, nitro or halo groups are also present.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both are true, but the reason about diborane does not explain why LiAlH₄ reduces –COOH."
       ],
       [
        "Which acid does NOT undergo the Hell–Volhard–Zelinsky reaction?",
        [
         "Propanoic acid",
         "Butanoic acid",
         "2,2-Dimethylpropanoic acid",
         "3-Methylbutanoic acid"
        ],
        2,
        "It has no α-hydrogen."
       ],
       [
        "Butanoic acid is treated with Br₂ and red P. The major product is",
        [
         "4-bromobutanoic acid",
         "butanoyl bromide",
         "3-bromobutanoic acid",
         "2-bromobutanoic acid"
        ],
        3,
        "α-Halogenation occurs."
       ],
       [
        "Assertion (A): Benzoic acid undergoes Friedel–Crafts alkylation readily.\nReason (R): The –COOH group is a deactivating, meta-directing group.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Benzoic acid does not undergo Friedel–Crafts reaction because the ring is deactivated and AlCl₃ bonds to the carboxyl group."
       ],
       [
        "Benzoic acid is treated with Br₂ and FeBr₃. The major product is",
        [
         "3-bromobenzoic acid",
         "2-bromobenzoic acid",
         "4-bromobenzoic acid",
         "bromobenzene"
        ],
        0,
        "–COOH is a meta director."
       ],
       [
        "Which statement about uses of carboxylic acids is INCORRECT?",
        [
         "Hexanedioic acid is used to make nylon-6,6",
         "Higher fatty acids are used as vinegar in food",
         "Sodium benzoate is a food preservative",
         "Esters of benzoic acid are used in perfumery"
        ],
        1,
        "Vinegar is ethanoic acid; higher fatty acids make soaps and detergents."
       ]
      ]
     ]
    },
    {
     "n": 9,
     "t": "Amines",
     "levels": [
      [
       [
        "What are the hybridisation of nitrogen and the shape of an amine molecule?",
        [
         "sp² hybridised nitrogen, trigonal planar shape",
         "sp³ hybridised nitrogen, pyramidal shape",
         "sp³ hybridised nitrogen, regular tetrahedral shape with four bond pairs",
         "sp hybridised nitrogen, linear shape"
        ],
        1,
        "Nitrogen uses three sp³ orbitals for bonds and the fourth holds the lone pair, so the geometry is pyramidal."
       ],
       [
        "In trimethylamine the C–N–C bond angle is about 108°, less than 109.5°. Why?",
        [
         "The lone pair on nitrogen repels the bond pairs more strongly",
         "The methyl groups attract each other",
         "Nitrogen is sp² hybridised in trimethylamine",
         "The N–C bonds are double bonds"
        ],
        0,
        "The unshared pair on N occupies one sp³ orbital and squeezes the bond angles below 109.5°."
       ],
       [
        "Which of the following is a secondary amine?",
        [
         "(CH₃)₃CNH₂",
         "(CH₃CH₂)₃N",
         "C₆H₅NH₂",
         "C₆H₅NHCH₃"
        ],
        3,
        "N-Methylaniline has two groups (phenyl and methyl) on nitrogen, so it is secondary."
       ],
       [
        "Which of the following is a mixed tertiary amine?",
        [
         "(CH₃)₃N",
         "(CH₃CH₂)₃N",
         "(CH₃CH₂)₂NCH₃",
         "(CH₃CH₂)₂NH"
        ],
        2,
        "The three groups on N are not all the same (two ethyl and one methyl), so it is a mixed amine; (CH₃CH₂)₂NH is secondary."
       ],
       [
        "What is the IUPAC name of (CH₃CH₂)₃N?",
        [
         "Triethylamine",
         "N,N-Diethylethanamine",
         "Diethylethanamine",
         "N-Triethylamine"
        ],
        1,
        "Triethylamine is the common name; in IUPAC the ethanamine chain carries two N-ethyl substituents (N,N-diethyl)."
       ],
       [
        "What is the IUPAC name of H₂N–CH₂–CH₂–NH₂?",
        [
         "Ethane-1,2-diamine",
         "Ethan-1,2-diamine",
         "Ethane-1,2-amine",
         "Diethanamine"
        ],
        0,
        "With two amino groups the letter ‘e’ of the hydrocarbon name is retained and the suffix is diamine."
       ],
       [
        "What is the IUPAC name of o-toluidine?",
        [
         "N-Methylaniline",
         "4-Methylaniline",
         "2-Methylbenzoic acid",
         "2-Methylaniline"
        ],
        3,
        "Aniline is the parent and the methyl group sits ortho (position 2) to NH₂."
       ],
       [
        "Reduction of nitrobenzene to aniline with a metal and acid is preferably done with iron scrap and HCl because only a small amount of HCl is needed. Why?",
        [
         "Iron is not oxidised in the reaction",
         "Iron forms a complex with aniline",
         "FeCl₂ formed hydrolyses and releases HCl again",
         "Iron acts as a catalyst and is not used up"
        ],
        2,
        "FeCl₂ is hydrolysed to give back hydrochloric acid, so only a little acid is needed to start the reaction."
       ],
       [
        "In the ammonolysis of an alkyl halide, how can the primary amine be obtained as the major product?",
        [
         "By using a large excess of the alkyl halide",
         "By using a large excess of ammonia",
         "By using aqueous NaOH in place of ammonia",
         "By carrying the reaction out at 273 K in an open vessel"
        ],
        1,
        "With excess NH₃ the halide meets ammonia rather than the amine already formed, so further alkylation is reduced."
       ],
       [
        "Which alkyl halide reacts fastest with ammonia in ammonolysis?",
        [
         "CH₃CH₂I",
         "CH₃CH₂Cl",
         "CH₃CH₂Br",
         "All react at the same rate"
        ],
        0,
        "The order of reactivity of halides is RI > RBr > RCl because the C–I bond is the weakest."
       ],
       [
        "What is obtained on reducing CH₃CH₂CN with LiAlH₄?",
        [
         "CH₃CH₂NH₂",
         "(CH₃CH₂)₂NH",
         "CH₃CH₂CH₂OH",
         "CH₃CH₂CH₂NH₂"
        ],
        3,
        "The nitrile carbon becomes CH₂NH₂, giving propan-1-amine, which has one carbon more than ethanamine (ascent of amine series)."
       ],
       [
        "What is the product when CH₃CONH₂ is reduced with LiAlH₄?",
        [
         "CH₃NH₂",
         "CH₃COOH",
         "CH₃CH₂NH₂",
         "CH₃CH₂OH"
        ],
        2,
        "LiAlH₄ converts C=O of the amide into CH₂, so the amine has the same number of carbons as the amide."
       ],
       [
        "Which amine cannot be prepared by Gabriel phthalimide synthesis?",
        [
         "Methanamine",
         "Aniline",
         "Butan-1-amine",
         "Phenylmethanamine (benzylamine)"
        ],
        1,
        "Aryl halides do not undergo nucleophilic substitution with the phthalimide anion, so aromatic primary amines cannot be made this way."
       ],
       [
        "What is formed when propanamide is treated with Br₂ and aqueous NaOH (Hoffmann bromamide reaction)?",
        [
         "Ethanamine",
         "Propan-1-amine",
         "Methanamine",
         "N-Methylethanamine"
        ],
        0,
        "The amine formed has one carbon less than the amide, so propanamide gives ethanamine."
       ],
       [
        "Which of the following isomeric amines has the highest boiling point?",
        [
         "(CH₃CH₂)₂NH",
         "CH₃CH₂N(CH₃)₂",
         "They all have the same boiling point",
         "CH₃CH₂CH₂CH₂NH₂"
        ],
        3,
        "Primary amines have two N–H bonds for intermolecular hydrogen bonding, so b.p. order is primary > secondary > tertiary."
       ],
       [
        "Why are lower aliphatic amines soluble in water?",
        [
         "They ionise completely in water",
         "They are strong acids",
         "They form hydrogen bonds with water molecules",
         "They are non-polar and mix with water"
        ],
        2,
        "The N atom with its lone pair and the N–H bonds hydrogen-bond with water; solubility falls as the alkyl part becomes larger."
       ],
       [
        "Pure aniline becomes coloured (brown) on storage. This is due to",
        [
         "reduction by moisture",
         "atmospheric oxidation",
         "polymerisation by light to a white solid",
         "hydrolysis to phenol"
        ],
        1,
        "Aniline and other arylamines are colourless when pure but get coloured by atmospheric oxidation."
       ],
       [
        "A mixture of aniline and nitrobenzene is shaken with dilute HCl and ether. Where does aniline end up?",
        [
         "In the aqueous layer as anilinium chloride",
         "In the ether layer as aniline",
         "In the ether layer as anilinium chloride",
         "It is destroyed by HCl"
        ],
        0,
        "Amine salts are soluble in water but insoluble in ether, which is how amines are separated from non-basic organic compounds."
       ],
       [
        "What is the order of basicity of methyl-substituted amines in the gaseous phase?",
        [
         "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃",
         "NH₃ > CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N",
         "CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃",
         "(CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃"
        ],
        3,
        "In the gas phase only the +I effect operates, so basicity rises with the number of alkyl groups."
       ],
       [
        "Which is the strongest base in aqueous solution?",
        [
         "(CH₃)₃N",
         "CH₃NH₂",
         "(CH₃)₂NH",
         "NH₃"
        ],
        2,
        "In water the order is (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ because of the interplay of +I effect, solvation and steric hindrance."
       ],
       [
        "Why is aniline a weaker base than ammonia?",
        [
         "The phenyl group has a +I effect",
         "Its lone pair is delocalised into the benzene ring",
         "Aniline is a larger molecule and is solvated more",
         "Aniline has no lone pair on nitrogen"
        ],
        1,
        "Conjugation with the ring makes the lone pair less available; aniline has five resonating structures against two for the anilinium ion."
       ],
       [
        "Which is the correct increasing order of basic strength?",
        [
         "p-Nitroaniline < aniline < p-toluidine",
         "Aniline < p-nitroaniline < p-toluidine",
         "p-Toluidine < aniline < p-nitroaniline",
         "p-Nitroaniline < p-toluidine < aniline"
        ],
        0,
        "Electron-releasing –CH₃ increases basicity and electron-withdrawing –NO₂ decreases it."
       ],
       [
        "Aniline is treated with excess CH₃I in the presence of Na₂CO₃. The final product is",
        [
         "N,N-dimethylaniline",
         "N-methylaniline",
         "2,4,6-trimethylaniline",
         "phenyltrimethylammonium iodide, [C₆H₅N(CH₃)₃]⁺I⁻"
        ],
        3,
        "Repeated alkylation of the amine ends with the quaternary ammonium salt."
       ],
       [
        "Why is acylation of an amine with an acid chloride carried out in the presence of a base like pyridine?",
        [
         "The base protonates the amine to make it a better nucleophile",
         "The base converts the acid chloride into an anhydride",
         "The base removes HCl formed and shifts the equilibrium to the products",
         "The base reduces the amide formed"
        ],
        2,
        "Pyridine, a base stronger than the amine, takes up HCl so the reaction goes to completion."
       ],
       [
        "What is the product of the reaction between CH₃NH₂ and benzoyl chloride (C₆H₅COCl)?",
        [
         "Benzamide",
         "N-Methylbenzamide",
         "Methyl benzoate",
         "N,N-Dimethylbenzamide"
        ],
        1,
        "Benzoylation replaces one N–H hydrogen by the benzoyl group, giving CH₃NHCOC₆H₅ (N-methylbenzamide)."
       ],
       [
        "Which of the following gives a foul-smelling product on warming with CHCl₃ and alcoholic KOH?",
        [
         "CH₃CH₂NH₂",
         "(CH₃)₂NH",
         "(CH₃)₃N",
         "C₆H₅NHCH₃"
        ],
        0,
        "Only primary amines give isocyanides (carbylamine reaction); secondary and tertiary amines do not."
       ],
       [
        "What are the products when ethanamine reacts with NaNO₂ and HCl?",
        [
         "Ethyldiazonium chloride, stable",
         "Nitroethane and water",
         "Ethanamide and N₂",
         "Ethanol and N₂"
        ],
        3,
        "The aliphatic diazonium salt is unstable and gives N₂ and the alcohol (here ethanol)."
       ],
       [
        "Aniline reacts with NaNO₂ and HCl at 273–278 K to give",
        [
         "phenol and N₂",
         "nitrobenzene",
         "benzenediazonium chloride",
         "chlorobenzene"
        ],
        2,
        "Aromatic primary amines form arenediazonium salts at low temperature; the salt is later converted to other products."
       ],
       [
        "Benzenesulphonyl chloride reacts with a primary amine to give a product that dissolves in alkali. Why?",
        [
         "The sulphonamide has no hydrogen atoms",
         "The N–H hydrogen of the sulphonamide is acidic",
         "The sulphonamide is a salt of a strong acid",
         "The sulphonamide contains a free –NH₂ group"
        ],
        1,
        "The strongly electron-withdrawing sulphonyl group makes the N–H hydrogen acidic, so the product is soluble in alkali."
       ],
       [
        "In the Hinsberg test, which class of amine does not react with benzenesulphonyl chloride?",
        [
         "Tertiary amines",
         "Primary amines",
         "Secondary amines",
         "Aromatic amines"
        ],
        0,
        "Tertiary amines have no N–H hydrogen and do not form a sulphonamide."
       ],
       [
        "Aniline is treated with bromine water at room temperature. What is observed?",
        [
         "A yellow solution of 4-bromoaniline",
         "A white precipitate of 3-bromoaniline",
         "No reaction",
         "A white precipitate of 2,4,6-tribromoaniline"
        ],
        3,
        "The –NH₂ group is strongly activating and ortho and para directing, so all three positions are brominated."
       ],
       [
        "Direct nitration of aniline gives a substantial amount of m-nitroaniline because",
        [
         "–NH₂ is a meta directing group",
         "nitric acid oxidises the para position selectively",
         "in the acid medium aniline is protonated to anilinium ion, which is meta directing",
         "aniline forms a complex with the nitrating mixture that blocks ortho positions"
        ],
        2,
        "In the strongly acidic mixture –NH₃⁺ forms; it is deactivating and meta directing."
       ],
       [
        "Aniline heated with conc. H₂SO₄ at 453–473 K gives mainly",
        [
         "o-aminobenzenesulphonic acid",
         "p-aminobenzenesulphonic acid (sulphanilic acid)",
         "m-aminobenzenesulphonic acid",
         "anilinium chloride"
        ],
        1,
        "Anilinium hydrogensulphate first forms and on heating gives the para sulphonic acid as the major product."
       ],
       [
        "Why does aniline not undergo Friedel–Crafts alkylation or acylation?",
        [
         "It forms a salt with AlCl₃, putting a positive charge on nitrogen",
         "It has no π electrons",
         "The benzene ring is deactivated by the lone pair",
         "AlCl₃ reduces aniline to cyclohexylamine"
        ],
        0,
        "Nitrogen then acts as a strong deactivating group, so the ring does not react."
       ],
       [
        "What is the name of the compound C₆H₅N₂⁺Cl⁻?",
        [
         "Phenyl azide chloride",
         "Aniline hydrochloride",
         "Chlorobenzenediazene",
         "Benzenediazonium chloride"
        ],
        3,
        "The N₂⁺ group is called diazonium; the compound is named as arenediazonium followed by the anion."
       ],
       [
        "The arenediazonium ion is stable for a short time in cold solution, unlike alkyldiazonium ions. This is explained by",
        [
         "hydrogen bonding with water",
         "hyperconjugation of the alkyl group",
         "resonance",
         "sp³ hybridisation of the carbon"
        ],
        2,
        "The positive charge of the arenediazonium ion is dispersed into the ring by resonance."
       ],
       [
        "Which statement about benzenediazonium chloride is correct?",
        [
         "It is insoluble in water and stable at room temperature",
         "It is a colourless crystalline solid, soluble in water, and reacts with water on warming",
         "It is a stable liquid that can be stored",
         "It is a red solid that decomposes only above 400 K"
        ],
        1,
        "The chloride is soluble in water and stable in the cold; the fluoroborate is the water-insoluble, room-temperature-stable salt."
       ],
       [
        "Benzenediazonium chloride is treated with CuCl in HCl. The main product is",
        [
         "chlorobenzene",
         "phenol",
         "benzene",
         "aniline"
        ],
        0,
        "Cu(I) halide replaces the diazonium group by Cl (Sandmeyer reaction), with N₂ evolved."
       ],
       [
        "Which reagent converts benzenediazonium chloride into iodobenzene?",
        [
         "CuI in HCl",
         "NaI with H₃PO₂",
         "I₂ in CCl₄",
         "KI"
        ],
        3,
        "Iodide displaces N₂ directly on treatment with potassium iodide; no copper is needed."
       ],
       [
        "Benzenediazonium chloride is treated with HBF₄ and the precipitate is heated. The product is",
        [
         "chlorobenzene",
         "benzene",
         "fluorobenzene",
         "phenol"
        ],
        2,
        "Benzenediazonium fluoroborate precipitates and on heating decomposes to fluorobenzene, BF₃ and N₂."
       ],
       [
        "Benzenediazonium chloride reacts with hypophosphorous acid (H₃PO₂) and water. The product is",
        [
         "phenol",
         "benzene",
         "aniline",
         "chlorobenzene"
        ],
        1,
        "Mild reducing agents such as H₃PO₂ or ethanol replace the diazonium group by hydrogen."
       ],
       [
        "Warming a benzenediazonium chloride solution to about 283 K gives",
        [
         "phenol",
         "aniline",
         "benzene",
         "chlorobenzene"
        ],
        0,
        "The salt is hydrolysed by water, replacing the diazonium group by –OH."
       ],
       [
        "Benzenediazonium chloride couples with phenol to give",
        [
         "o-hydroxyazobenzene as the main product",
         "azobenzene only",
         "p-aminoazobenzene",
         "p-hydroxyazobenzene"
        ],
        3,
        "The diazonium ion attacks the para position of phenol; the product contains the –N=N– azo link and is coloured."
       ],
       [
        "Which of these compounds is best prepared from a diazonium salt rather than by direct substitution of benzene?",
        [
         "Nitrobenzene",
         "Bromobenzene",
         "Iodobenzene",
         "Ethylbenzene"
        ],
        2,
        "Aryl fluorides and iodides cannot be prepared by direct halogenation, and cyano groups cannot be introduced by substituting chlorobenzene."
       ]
      ],
      [
       [
        "Assertion (A): The C–N–C bond angle in trimethylamine (108°) is smaller than the tetrahedral angle.\nReason (R): The lone pair on nitrogen repels the bond pairs more than the bond pairs repel one another.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The lone pair occupies one sp³ orbital and compresses the bond angles, so R explains A."
       ],
       [
        "How many isomeric secondary amines have the molecular formula C₄H₁₁N?",
        [
         "3",
         "1",
         "2",
         "4"
        ],
        0,
        "They are N-methylpropan-1-amine, N-methylpropan-2-amine and N-ethylethanamine; there are also four primary and one tertiary isomer."
       ],
       [
        "A student writes the IUPAC name of H₂N(CH₂)₆NH₂ as 1,6-diaminohexane. What is wrong, and what is the correct name?",
        [
         "Nothing is wrong; it is the accepted IUPAC name",
         "The chain is numbered wrongly; correct name is hexane-2,5-diamine",
         "The ‘e’ of hexane must be dropped; correct name is hexan-1,6-diamine",
         "Amino groups are named with the suffix diamine; correct name is hexane-1,6-diamine"
        ],
        3,
        "In IUPAC naming the amine is the principal group and appears as a suffix, with the ‘e’ retained before diamine."
       ],
       [
        "Propan-1-amine and N-methylethanamine have the same formula C₃H₉N. What kind of isomers are they?",
        [
         "Position isomers",
         "Chain isomers",
         "Functional isomers (primary and secondary amine)",
         "Optical isomers"
        ],
        2,
        "One has an –NH₂ group and the other a >NH group, so they belong to different amine classes."
       ],
       [
        "Benzene is converted to N,N-dimethylaniline. Which sequence of reagents is correct?",
        [
         "conc. H₂SO₄; NaOH; CH₃Cl",
         "conc. HNO₃/conc. H₂SO₄; Fe/HCl; excess CH₃Cl (2 mol)",
         "Br₂/FeBr₃; NH₃ (ethanol, 373 K); CH₃Cl",
         "CH₃Cl/AlCl₃; HNO₃; Sn/HCl"
        ],
        1,
        "Nitration, reduction of the nitro group to NH₂, then double alkylation of the amine (NCERT Intext Question 9.3)."
       ],
       [
        "Nitrobenzene (12.3 g) is completely reduced to aniline with Fe/HCl in 80% yield. What mass of aniline is obtained? (C₆H₅NO₂ = 123, C₆H₅NH₂ = 93)",
        [
         "7.44 g",
         "9.30 g",
         "7.80 g",
         "12.3 g"
        ],
        0,
        "0.1 mol nitrobenzene gives 0.1 mol aniline = 9.3 g at 100%; 80% of that is 7.44 g.",
        "Moles first, then yield."
       ],
       [
        "Benzyl chloride is treated with excess ethanolic ammonia, and the amine formed is then treated with two moles of CH₃Cl. The final organic product is",
        [
         "C₆H₅CH₂NHCH₃",
         "C₆H₅CH₂N(CH₃)₃⁺Cl⁻",
         "C₆H₅NHCH₂CH₃",
         "C₆H₅CH₂N(CH₃)₂"
        ],
        3,
        "Ammonolysis gives C₆H₅CH₂NH₂; two methylations convert it to the tertiary amine (NCERT Example 9.1)."
       ],
       [
        "Assertion (A): Ammonolysis of an alkyl halide with a large excess of NH₃ gives the primary amine as the major product.\nReason (R): With a large excess of NH₃, a halide molecule is far more likely to meet NH₃ than the amine already formed.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Excess ammonia outnumbers the product amine, so over-alkylation is suppressed; R explains A."
       ],
       [
        "Which route converts C₂H₅Cl into propan-1-amine?",
        [
         "NH₃ (ethanolic, sealed tube)",
         "KCN (alcoholic), then LiAlH₄",
         "KCN, then partial hydrolysis, then Br₂/NaOH",
         "NaOH (aqueous), then NH₃"
        ],
        1,
        "KCN gives CH₃CH₂CN, and reduction gives CH₃CH₂CH₂NH₂, one carbon more (NCERT Example 9.2)."
       ],
       [
        "A student says that reduction of CH₃CONH₂ with LiAlH₄ gives CH₃NH₂ by loss of one carbon. What is the error?",
        [
         "LiAlH₄ reduction keeps all carbons and gives CH₃CH₂NH₂; loss of a carbon belongs to the Hoffmann reaction",
         "The product is CH₃CH₂OH",
         "The product is CH₃COOH because LiAlH₄ oxidises amides",
         "The product is (CH₃)₂NH"
        ],
        0,
        "Reduction of an amide converts C=O to CH₂; Br₂/NaOH is what removes the carbonyl carbon."
       ],
       [
        "Assertion (A): Gabriel phthalimide synthesis can be used to prepare aniline.\nReason (R): Aryl halides do not undergo nucleophilic substitution with the phthalimide anion.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false because aromatic primary amines cannot be made by this method; R is true and is the reason."
       ],
       [
        "CH₃CH₂I is treated with NaCN to give A, partial hydrolysis of A gives B, and B on heating with NaOH and Br₂ gives C. What is C?",
        [
         "CH₃CH₂CH₂NH₂",
         "CH₃CONH₂",
         "CH₃CH₂NH₂",
         "CH₃CH₂COOH"
        ],
        2,
        "A = CH₃CH₂CN, B = CH₃CH₂CONH₂, and Hoffmann degradation removes one carbon to give ethanamine (NCERT Exercise 9.9)."
       ],
       [
        "Butanamide (8.7 g, C₄H₉NO = 87) is converted to propan-1-amine (C₃H₉N = 59) by Hoffmann bromamide degradation in 75% yield. What mass of amine is obtained?",
        [
         "5.90 g",
         "4.43 g",
         "5.48 g",
         "7.30 g"
        ],
        1,
        "0.1 mol amide gives 0.1 mol amine = 5.9 g at 100%; 75% gives 4.43 g.",
        "The amine has one carbon less; use the amine’s molar mass."
       ],
       [
        "Which is the correct increasing order of boiling points of butan-1-ol, N,N-dimethylethanamine, butan-1-amine, 2-methylbutane and N-ethylethanamine?",
        [
         "2-Methylbutane < N,N-dimethylethanamine < N-ethylethanamine < butan-1-amine < butan-1-ol",
         "N,N-Dimethylethanamine < 2-methylbutane < N-ethylethanamine < butan-1-amine < butan-1-ol",
         "2-Methylbutane < butan-1-amine < N-ethylethanamine < N,N-dimethylethanamine < butan-1-ol",
         "Butan-1-ol < butan-1-amine < N-ethylethanamine < N,N-dimethylethanamine < 2-methylbutane"
        ],
        0,
        "Alcohol H-bonds are strongest; among amines primary > secondary > tertiary; the alkane has no H-bonding (NCERT Table 9.2)."
       ],
       [
        "Assertion (A): Tertiary amines boil at lower temperatures than isomeric primary amines.\nReason (R): Tertiary amines have a higher molar mass than their primary isomers.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true because tertiary amines lack N–H and cannot hydrogen bond; R is false as isomers have the same molar mass."
       ],
       [
        "Which is the correct increasing order of basic strength in aqueous solution?",
        [
         "C₆H₅NH₂ < C₆H₅CH₂NH₂ < CH₃NH₂ < (CH₃)₃N < (CH₃)₂NH",
         "C₆H₅CH₂NH₂ < C₆H₅NH₂ < (CH₃)₃N < CH₃NH₂ < (CH₃)₂NH",
         "C₆H₅NH₂ < C₆H₅CH₂NH₂ < (CH₃)₃N < CH₃NH₂ < (CH₃)₂NH",
         "C₆H₅NH₂ < (CH₃)₃N < C₆H₅CH₂NH₂ < CH₃NH₂ < (CH₃)₂NH"
        ],
        2,
        "The aryl amine is weakest, benzylamine is intermediate (pKb about 4.7), and in water (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N (NCERT Intext Question 9.4)."
       ],
       [
        "Arrange C₂H₅NH₂, C₆H₅NHCH₃, (C₂H₅)₂NH and C₆H₅NH₂ in decreasing order of pKb.",
        [
         "(C₂H₅)₂NH > C₂H₅NH₂ > C₆H₅NHCH₃ > C₆H₅NH₂",
         "C₆H₅NH₂ > C₆H₅NHCH₃ > C₂H₅NH₂ > (C₂H₅)₂NH",
         "C₆H₅NHCH₃ > C₆H₅NH₂ > (C₂H₅)₂NH > C₂H₅NH₂",
         "C₂H₅NH₂ > (C₂H₅)₂NH > C₆H₅NH₂ > C₆H₅NHCH₃"
        ],
        1,
        "Higher pKb means weaker base: aniline (9.38) is weakest, then N-methylaniline (9.30), then ethanamine, with diethylamine the strongest (NCERT Exercise 9.4)."
       ],
       [
        "A student says (CH₃)₃N is the strongest base among the methylamines in water because it has three +I groups. What is wrong?",
        [
         "In water, solvation of the ammonium ion and steric effects also matter, and (CH₃)₂NH is stronger",
         "Nothing is wrong; (CH₃)₃N is the strongest in water",
         "+I groups decrease basicity in water",
         "Only methylamine is a base in water"
        ],
        0,
        "The trimethylammonium ion has only one N–H for hydrogen bonding with water, so it is less stabilised than (CH₃)₂NH₂⁺."
       ],
       [
        "How many moles of CH₃I are needed to convert one mole of aniline completely into its quaternary ammonium salt?",
        [
         "1",
         "2",
         "4",
         "3"
        ],
        3,
        "The two N–H hydrogens and then the lone pair are used up: C₆H₅N(CH₃)₃⁺ contains three methyl groups."
       ],
       [
        "A student states that amines react with carboxylic acids at room temperature to give amides. What is the correct statement?",
        [
         "They form esters",
         "They form acid chlorides",
         "They form ammonium carboxylate salts at room temperature",
         "They form nitriles"
        ],
        2,
        "Amine plus carboxylic acid gives a salt; amides are formed from acid chlorides, anhydrides or esters."
       ],
       [
        "Which pair of amines will both react with benzoyl chloride?",
        [
         "(CH₃)₃N and CH₃NH₂",
         "CH₃NH₂ and (CH₃)₂NH",
         "(CH₃)₃N and (CH₃)₂NH",
         "(CH₃)₃N and C₆H₅N(CH₃)₂"
        ],
        1,
        "Acylation needs an N–H hydrogen to replace, so only primary and secondary amines react."
       ],
       [
        "A compound C₂H₇N gives a foul smell on warming with CHCl₃ and alcoholic KOH. What is it, and what happens on treating it with NaNO₂/HCl?",
        [
         "CH₃CH₂NH₂; N₂ and ethanol are formed",
         "(CH₃)₂NH; N₂ and methanol are formed",
         "CH₃CH₂NH₂; a stable diazonium salt is formed",
         "(CH₃)₂NH; a stable diazonium salt is formed"
        ],
        0,
        "The carbylamine test shows a primary amine; the primary aliphatic amine C₂H₅NH₂ gives N₂ and the alcohol."
       ],
       [
        "Assertion (A): Dimethylamine gives the carbylamine (isocyanide) test.\nReason (R): The carbylamine test is given only by primary amines.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "A is false because dimethylamine is secondary; R is true."
       ],
       [
        "Ethanamine (4.5 g, C₂H₅NH₂ = 45) is completely treated with NaNO₂ and HCl. What volume of N₂ is evolved at STP? (1 mol gas = 22.4 L)",
        [
         "4.48 L",
         "1.12 L",
         "2.24 L",
         "22.4 L"
        ],
        2,
        "One mole of primary aliphatic amine gives one mole of N₂; 0.1 mol gives 2.24 L.",
        "Moles = 4.5/45."
       ],
       [
        "Three isomers of C₃H₉N are each shaken with benzenesulphonyl chloride and aqueous KOH. X gives a clear solution, Y gives an insoluble solid, and Z does not react. Which is Z?",
        [
         "CH₃NHCH₂CH₃",
         "(CH₃)₃N",
         "CH₃CH₂CH₂NH₂",
         "(CH₃)₂CHNH₂"
        ],
        1,
        "X is primary (soluble sulphonamide), Y is secondary (insoluble), and Z has no N–H so it does not react: trimethylamine."
       ],
       [
        "Aniline is converted to p-bromoaniline. Which sequence is correct?",
        [
         "(CH₃CO)₂O; Br₂; hydrolysis",
         "Br₂ water only",
         "NaNO₂/HCl; CuBr",
         "HNO₃/H₂SO₄; Br₂"
        ],
        0,
        "Acetylation reduces the activating power so only mono-bromination occurs at para, and hydrolysis restores the amine (NCERT Exercise 9.8)."
       ],
       [
        "Assertion (A): Aniline gives a white precipitate of 2,4,6-tribromoaniline with bromine water.\nReason (R): Aniline is a weaker base than ammonia.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Both are true, but the bromination reflects the activating –NH₂ group, not basic strength, so R is not the explanation."
       ],
       [
        "A student states that aniline on direct nitration gives only o- and p-nitroaniline because –NH₂ is o,p-directing. What is wrong?",
        [
         "Nitration gives only the meta product",
         "–NH₂ is a deactivating group",
         "In strong acid aniline forms the meta-directing anilinium ion, so some m-nitroaniline and oxidation tar also form",
         "The reaction gives nitrobenzene and ammonia"
        ],
        2,
        "Protonation in the mixed acid gives –NH₃⁺, a meta director; acetylation of –NH₂ is used to avoid this."
       ],
       [
        "Aniline (9.3 g) is completely acetylated with acetic anhydride. What mass of acetanilide (C₈H₉NO = 135) is formed?",
        [
         "9.3 g",
         "13.5 g",
         "27.0 g",
         "10.2 g"
        ],
        1,
        "0.1 mol aniline gives 0.1 mol acetanilide = 13.5 g."
       ],
       [
        "Assertion (A): Aniline does not undergo Friedel–Crafts alkylation.\nReason (R): Aniline has no lone pair of electrons on the nitrogen atom.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "A is true because nitrogen forms a salt with AlCl₃; R is false since aniline does have a lone pair."
       ],
       [
        "A student says that benzenediazonium chloride prepared from aniline, NaNO₂ and HCl at 300 K is stable and can be stored. What is wrong?",
        [
         "Nothing is wrong",
         "Diazotisation needs conc. H₂SO₄ and 453 K",
         "Diazonium salts form only from aliphatic amines",
         "Diazotisation must be done at 273–278 K; at higher temperature the salt reacts with water to give phenol"
        ],
        3,
        "The salt is stable only briefly in the cold and is used immediately."
       ],
       [
        "What mass of HCl is consumed in converting 9.3 g of aniline to benzenediazonium chloride by NaNO₂ and HCl? (HCl = 36.5; aniline = 93)",
        [
         "3.65 g",
         "14.6 g",
         "7.3 g",
         "36.5 g"
        ],
        2,
        "The equation uses 2 mol HCl per mol aniline; 0.1 mol × 2 × 36.5 = 7.3 g."
       ],
       [
        "A student claims that benzenediazonium chloride is insoluble in water and can be stored in a bottle. What is correct?",
        [
         "The statement is correct",
         "It is soluble in water, unstable on warming or drying, and is used immediately; the fluoroborate is the insoluble stable salt",
         "It is a gas at room temperature",
         "It is soluble in water and explosive even in solution at 273 K"
        ],
        1,
        "The chloride decomposes easily in the dry state and reacts with water when warmed."
       ],
       [
        "Why is benzenediazonium fluoroborate used to make fluorobenzene?",
        [
         "It precipitates from solution, is stable at room temperature, and on heating gives ArF",
         "It is soluble in water and reacts with fluoride",
         "It gives phenol on heating",
         "It needs Cu powder to decompose"
        ],
        0,
        "The water-insoluble salt can be filtered and then thermally decomposed."
       ],
       [
        "Aniline is converted to 1,3,5-tribromobenzene. Which sequence is correct?",
        [
         "NaNO₂/HCl; CuBr; Br₂",
         "Br₂/FeBr₃ three times",
         "(CH₃CO)₂O; Br₂; hydrolysis",
         "Br₂/H₂O; NaNO₂/HCl at 273–278 K; H₃PO₂/H₂O"
        ],
        3,
        "Bromine water gives 2,4,6-tribromoaniline, diazotisation and H₃PO₂ then remove the amino group (NCERT Intext Question 9.9)."
       ],
       [
        "Compound A is C₆H₅NO₂. A with Fe/HCl gives B, B with NaNO₂/HCl at 273 K gives C, and C warmed with H₂O/H⁺ gives D. What is D?",
        [
         "C₆H₅NH₂",
         "C₆H₆",
         "C₆H₅OH",
         "C₆H₅Cl"
        ],
        2,
        "B is aniline, C is benzenediazonium chloride, and hydrolysis gives phenol (compare NCERT Exercise 9.9)."
       ],
       [
        "3-Methylaniline is converted to 3-nitrotoluene. Which sequence is correct?",
        [
         "HNO₃/H₂SO₄",
         "NaNO₂/HCl at 273–278 K; HBF₄; NaNO₂/Cu, heat",
         "(CH₃CO)₂O; HNO₃; hydrolysis",
         "Br₂ water; NaNO₂"
        ],
        1,
        "The diazonium group is replaced by –NO₂ via the fluoroborate and aqueous NaNO₂/Cu (NCERT Intext Question 9.9)."
       ],
       [
        "Aniline and benzylamine are tested with NaNO₂/HCl at 273–278 K, then the cold solutions are added to phenol. What is observed?",
        [
         "Aniline gives a coloured azo dye; benzylamine evolves N₂ without a dye",
         "Benzylamine gives a coloured azo dye; aniline evolves N₂",
         "Both give coloured azo dyes",
         "Neither reacts"
        ],
        0,
        "Aniline forms a stable diazonium salt that couples with phenol; benzylamine is aliphatic and decomposes with N₂ evolution."
       ],
       [
        "Benzenediazonium chloride reacts with aniline to give p-aminoazobenzene. Which statement is correct?",
        [
         "It is a nucleophilic substitution at the amino group",
         "N₂ is liberated in the reaction",
         "The product has no –N=N– link",
         "It is an electrophilic substitution in which the diazonium ion attacks the para position"
        ],
        3,
        "The diazonium ion is the electrophile and the –N=N– group is retained in the coloured product."
       ],
       [
        "A student plans to make benzonitrile by heating chlorobenzene with KCN. What is wrong and what is the correct route?",
        [
         "Nothing is wrong",
         "KCN must be replaced by HCN with AlCl₃",
         "Aryl chlorides resist nucleophilic substitution; use aniline, NaNO₂/HCl at 273–278 K, then CuCN",
         "The correct route is aniline with CHCl₃/KOH"
        ],
        2,
        "The cyano group is introduced through the diazonium salt (Sandmeyer reaction)."
       ],
       [
        "4-Nitrotoluene is converted to 2-bromobenzoic acid. Which sequence is correct?",
        [
         "HNO₃; Br₂/Fe; KMnO₄",
         "Br₂/Fe; Sn/HCl; NaNO₂/HCl (273 K); H₃PO₂; KMnO₄",
         "Sn/HCl; NaNO₂; CuBr; KMnO₄",
         "KMnO₄; Br₂/Fe; Sn/HCl"
        ],
        1,
        "Br enters ortho to CH₃; the NO₂ group is reduced to NH₂, removed via the diazonium salt with H₃PO₂, then CH₃ is oxidised (NCERT Example 9.5)."
       ],
       [
        "Azo compounds like p-hydroxyazobenzene are coloured because",
        [
         "they have an extended conjugated system joining two aromatic rings through –N=N–",
         "they contain a nitro group",
         "they contain a free diazonium group",
         "they are ionic salts"
        ],
        0,
        "The extended conjugation absorbs visible light, which makes them useful dyes."
       ]
      ]
     ]
    },
    {
     "n": 10,
     "t": "Biomolecules",
     "levels": [
      [
       [
        "Chemically, carbohydrates are best defined as",
        [
         "hydrates of carbon with the formula Cₓ(H₂O)ᵧ only",
         "polyhydroxy carboxylic acids",
         "optically active polyhydroxy aldehydes or ketones, or compounds that give such units on hydrolysis",
         "compounds that are always sweet and soluble in water"
        ],
        2,
        "This is the NCERT definition; the formula Cₓ(H₂O)ᵧ is not a reliable test."
       ],
       [
        "Which compound fits the general formula Cₓ(H₂O)ᵧ but is NOT a carbohydrate?",
        [
         "Acetic acid, CH₃COOH",
         "Glucose, C₆H₁₂O₆",
         "Sucrose, C₁₂H₂₂O₁₁",
         "Rhamnose, C₆H₁₂O₅"
        ],
        0,
        "CH₃COOH is C₂(H₂O)₂ but has no polyhydroxy carbonyl unit; rhamnose is a carbohydrate yet does not fit the formula."
       ],
       [
        "Carbohydrates that yield two to ten monosaccharide units on hydrolysis are called",
        [
         "monosaccharides",
         "polysaccharides",
         "lipids",
         "oligosaccharides"
        ],
        3,
        "Disaccharides such as sucrose and maltose are the most common oligosaccharides."
       ],
       [
        "Which statement about polysaccharides is correct?",
        [
         "They are the sweetest carbohydrates",
         "They are not sweet and are therefore called non-sugars",
         "They cannot be hydrolysed",
         "They yield only two monosaccharide units"
        ],
        1,
        "Starch, cellulose and glycogen are not sweet, so they are non-sugars."
       ],
       [
        "A monosaccharide having six carbon atoms and a keto group is called a",
        [
         "aldohexose",
         "ketohexose",
         "ketopentose",
         "aldopentose"
        ],
        1,
        "Aldose means an –CHO group; ketose means a >C=O group; hexose means six carbons."
       ],
       [
        "Commercially, glucose is obtained by hydrolysis of starch by boiling it with",
        [
         "conc. H₂SO₄ at 443 K",
         "aqueous NaOH at 373 K",
         "dilute HCl at 273 K",
         "dilute H₂SO₄ at 393 K under 2–3 atm pressure"
        ],
        3,
        "(C₆H₁₀O₅)ₙ + nH₂O → nC₆H₁₂O₆ under these conditions."
       ],
       [
        "On prolonged heating with HI, glucose forms n-hexane. This shows that",
        [
         "all six carbon atoms are in a straight chain",
         "glucose contains an aldehyde group",
         "glucose contains five –OH groups",
         "glucose has a primary alcoholic group"
        ],
        0,
        "Complete reduction to n-hexane means no branching."
       ],
       [
        "Glucose is oxidised by bromine water to gluconic acid. This indicates that the carbonyl group in glucose is",
        [
         "a ketonic group",
         "an ester group",
         "an aldehydic group",
         "an ether linkage"
        ],
        2,
        "A mild oxidant converts –CHO to –COOH without breaking the chain."
       ],
       [
        "Oxidation of glucose with nitric acid gives saccharic acid, a dicarboxylic acid. This shows the presence of",
        [
         "a secondary alcoholic group only",
         "a ketonic group",
         "a primary alcoholic (–CH₂OH) group",
         "a free amino group"
        ],
        2,
        "Both –CHO and –CH₂OH are oxidised to –COOH."
       ],
       [
        "In D-(+)-glucose, the letter D refers to",
        [
         "the configuration relative to D-(+)-glyceraldehyde, while (+) shows dextrorotation",
         "dextrorotation, while (+) shows the configuration",
         "the number of –OH groups",
         "the d-form of the molecule, same as (+)"
        ],
        0,
        "D/L have no relation to the sign of optical rotation."
       ],
       [
        "Glucose pentaacetate is formed when glucose reacts with acetic anhydride. This confirms that glucose has",
        [
         "five carbonyl groups",
         "one –OH group and five –CH₃ groups",
         "five –OH groups on the same carbon",
         "five –OH groups, each on a different carbon atom"
        ],
        3,
        "Five –OH groups are acetylated and a stable compound cannot have two –OH on one carbon."
       ],
       [
        "The two cyclic forms α- and β-glucose differ only in the configuration at",
        [
         "C-5",
         "C-1, the anomeric carbon",
         "C-6",
         "C-4"
        ],
        1,
        "They are called anomers; the C-1 –OH is formed from the aldehyde carbon."
       ],
       [
        "The six-membered ring of cyclic glucose, containing five carbon atoms and one oxygen atom, is called",
        [
         "a furanose ring",
         "a pyranose ring",
         "a pyrrole ring",
         "a benzene ring"
        ],
        1,
        "It is named after pyran; the C-5 –OH adds to the –CHO group to give a cyclic hemiacetal."
       ],
       [
        "The cyclic form of fructose has",
        [
         "a six-membered pyranose ring formed by –OH at C-6",
         "a four-membered ring",
         "no ring, it exists only as an open chain",
         "a five-membered furanose ring formed by –OH at C-5 adding to the keto group"
        ],
        3,
        "Fructose is a ketohexose (keto group at C-2) and is D-(−)-fructose."
       ],
       [
        "A linkage between two monosaccharide units through an oxygen atom, formed by loss of a water molecule, is called",
        [
         "a glycosidic linkage",
         "a peptide linkage",
         "a phosphodiester linkage",
         "a hydrogen bond"
        ],
        0,
        "It joins monosaccharides in disaccharides and polysaccharides."
       ],
       [
        "Sucrose is a non-reducing sugar because",
        [
         "it contains no sugar units",
         "it is a polysaccharide",
         "the reducing groups of glucose and fructose are both involved in the glycosidic bond",
         "its glycosidic bond is between C-1 and C-4 of two glucose units"
        ],
        2,
        "The C-1 of α-D-glucose is linked to C-2 of β-D-fructose, so no free aldehyde or keto group remains."
       ],
       [
        "Maltose is composed of",
        [
         "α-D-glucose and β-D-fructose linked C-1 to C-2",
         "β-D-galactose and β-D-glucose linked C-1 to C-4",
         "two α-D-glucose units linked from C-1 of one to C-4 of the other",
         "two β-D-glucose units linked C-1 to C-6"
        ],
        2,
        "Maltose is a reducing sugar because the second glucose unit has a free C-1 hemiacetal."
       ],
       [
        "Hydrolysis of lactose (milk sugar) gives",
        [
         "β-D-galactose and β-D-glucose",
         "two molecules of glucose",
         "glucose and fructose",
         "two molecules of galactose"
        ],
        0,
        "(NCERT Intext Question 10.2) Lactose is a reducing sugar."
       ],
       [
        "Amylopectin differs from amylose in that amylopectin is",
        [
         "water soluble and unbranched",
         "made of β-glucose units",
         "a dipeptide of glucose",
         "water insoluble and branched, with branching at C-1–C-6 linkages"
        ],
        3,
        "Amylose (15–20 % of starch) is unbranched with C-1–C-4 links; amylopectin makes up 80–85 %."
       ],
       [
        "Cellulose is a straight-chain polysaccharide made only of",
        [
         "α-D-glucose units joined by C-1–C-6 linkages",
         "β-D-glucose units joined by C-1–C-4 glycosidic linkages",
         "β-D-fructose units",
         "α-D-galactose units"
        ],
        1,
        "It is the main constituent of plant cell walls."
       ],
       [
        "Glycogen, the storage carbohydrate of animals, is also called animal starch because its structure",
        [
         "is a straight chain like cellulose",
         "is similar to amylopectin but even more highly branched",
         "is made of amino acids",
         "is the same as amylose"
        ],
        1,
        "It is present in liver, muscles and brain."
       ],
       [
        "The two aldopentoses present in nucleic acids are",
        [
         "D-glucose and D-fructose",
         "D-galactose and D-ribose",
         "sucrose and maltose",
         "D-ribose and 2-deoxy-D-ribose"
        ],
        3,
        "Carbohydrates are also needed as storage molecules (starch, glycogen) and structural material (cellulose)."
       ],
       [
        "The word protein comes from the Greek proteios, meaning primary or of prime importance. All proteins are polymers of",
        [
         "α-amino acids",
         "β-amino acids",
         "monosaccharides",
         "nucleotides"
        ],
        0,
        "Only α-amino acids are obtained on hydrolysis of proteins."
       ],
       [
        "Glycine got its name because",
        [
         "it was first obtained from cheese",
         "it was first obtained from glycogen",
         "it has a sweet taste (Greek glykos)",
         "it is a sugar"
        ],
        2,
        "Tyrosine was first obtained from cheese (Greek tyros)."
       ],
       [
        "An amino acid with one amino group and two carboxyl groups (such as aspartic acid) is",
        [
         "basic",
         "neutral",
         "acidic",
         "essential only"
        ],
        2,
        "More carboxyl than amino groups makes it acidic; more amino than carboxyl makes it basic."
       ],
       [
        "Which of the following is an essential amino acid?",
        [
         "Valine",
         "Glycine",
         "Alanine",
         "Serine"
        ],
        0,
        "Essential amino acids cannot be synthesised in the body and must come from the diet."
       ],
       [
        "In aqueous solution, an amino acid exists as a dipolar ion called a zwitter ion. This explains why amino acids",
        [
         "are volatile liquids",
         "are insoluble in water",
         "are more acidic than carboxylic acids only",
         "are water-soluble, high-melting and behave like salts"
        ],
        3,
        "The –COOH loses a proton and the –NH₂ accepts it, giving –COO⁻ and –NH₃⁺ in the same molecule."
       ],
       [
        "Which α-amino acid is optically inactive?",
        [
         "Alanine",
         "Glycine",
         "Valine",
         "Serine"
        ],
        1,
        "Glycine (R = H) has no asymmetric α-carbon. Most natural amino acids are L-configured."
       ],
       [
        "A tripeptide contains",
        [
         "three amino acid units joined by three peptide linkages",
         "three amino acid units joined by two peptide linkages",
         "two amino acid units joined by two peptide linkages",
         "three peptide linkages and four amino acid units"
        ],
        1,
        "A peptide bond is the amide –CO–NH– formed between –COOH and –NH₂ with loss of water."
       ],
       [
        "Keratin and insulin are examples of, respectively,",
        [
         "a globular protein and a fibrous protein",
         "both fibrous proteins",
         "both globular proteins",
         "a fibrous protein and a globular protein"
        ],
        3,
        "Fibrous proteins are generally water-insoluble; globular proteins are usually soluble."
       ],
       [
        "The α-helix and β-pleated sheet (secondary structure) are stabilised mainly by",
        [
         "hydrogen bonds between the C=O and N–H groups of the peptide backbone",
         "peptide bonds only",
         "ionic bonds between metal ions",
         "covalent C–C bonds"
        ],
        0,
        "The α-helix is a right-handed screw with N–H hydrogen bonded to the C=O of an adjacent turn."
       ],
       [
        "The sequence of amino acids in a polypeptide chain is called its",
        [
         "secondary structure",
         "tertiary structure",
         "primary structure",
         "quaternary structure"
        ],
        2,
        "Quaternary structure is the spatial arrangement of two or more sub-units."
       ],
       [
        "During denaturation of a protein",
        [
         "the primary structure is destroyed",
         "peptide bonds are hydrolysed to amino acids",
         "the secondary and tertiary structures are destroyed but the primary structure remains intact",
         "the protein becomes more active biologically"
        ],
        2,
        "Coagulation of egg white on boiling is a common example."
       ],
       [
        "Enzymes are",
        [
         "biocatalysts, almost all of them globular proteins",
         "carbohydrates that act as catalysts",
         "non-specific catalysts",
         "steroids"
        ],
        0,
        "They are specific for a reaction and substrate; names usually end in -ase, e.g. maltase."
       ],
       [
        "Enzymes speed up reactions because, like other catalysts, they",
        [
         "increase the activation energy",
         "change the equilibrium constant",
         "are consumed in large amounts",
         "lower the activation energy"
        ],
        3,
        "For sucrose hydrolysis, Eₐ is 6.22 kJ mol⁻¹ with acid but only 2.15 kJ mol⁻¹ with the enzyme sucrase."
       ],
       [
        "Vitamins are organic compounds that",
        [
         "are required in large amounts as an energy source",
         "are required in small amounts in the diet to perform specific biological functions",
         "are all synthesised in the human body",
         "are all proteins"
        ],
        1,
        "The term ‘vitamine’ came from vital + amine; the ‘e’ was later dropped."
       ],
       [
        "Which group lists only fat-soluble vitamins?",
        [
         "B and C",
         "A, D, E and K",
         "A, B and C",
         "C, D and K"
        ],
        1,
        "Fat-soluble vitamins are stored in liver and adipose tissue; B group and C are water-soluble."
       ],
       [
        "Scurvy (bleeding gums) is caused by deficiency of",
        [
         "vitamin D",
         "vitamin K",
         "vitamin B₁",
         "vitamin C"
        ],
        3,
        "Vitamin D deficiency causes rickets, K causes slow blood clotting, and B₁ causes beri beri."
       ],
       [
        "Nucleic acids are also called polynucleotides because they are",
        [
         "long-chain polymers of nucleotides",
         "polymers of amino acids",
         "polymers of glucose",
         "polymers of fatty acids"
        ],
        0,
        "The two main types are DNA and RNA."
       ],
       [
        "The sugar and the fourth base in RNA are, respectively,",
        [
         "β-D-2-deoxyribose and uracil",
         "β-D-ribose and thymine",
         "β-D-ribose and uracil",
         "β-D-2-deoxyribose and thymine"
        ],
        2,
        "DNA has 2-deoxyribose and thymine; the other three bases (A, G, C) are common to both."
       ],
       [
        "A unit formed by a base attached to the 1′ position of the sugar, with no phosphate, is called",
        [
         "a nucleotide",
         "a dinucleotide",
         "a nucleoside",
         "a nucleic acid"
        ],
        2,
        "A nucleoside plus phosphoric acid at the 5′ position of sugar gives a nucleotide."
       ],
       [
        "In the double helix of DNA, hydrogen bonds are formed between",
        [
         "adenine and thymine, and between cytosine and guanine",
         "adenine and guanine, and between cytosine and thymine",
         "adenine and cytosine only",
         "adenine and uracil"
        ],
        0,
        "This makes the two strands complementary."
       ],
       [
        "Which statement about the biological function of nucleic acids is correct?",
        [
         "proteins are synthesised directly by DNA without RNA",
         "RNA is the chemical basis of heredity in all cells and DNA makes proteins",
         "nucleic acids provide energy by being oxidised",
         "DNA stores genetic information and replicates, while proteins are synthesised by RNA using the message in DNA"
        ],
        3,
        "DNA is capable of self-duplication during cell division."
       ],
       [
        "Insulin, estrogens and epinephrine are respectively",
        [
         "a steroid, a polypeptide and an amino acid derivative",
         "a polypeptide, a steroid and an amino acid derivative",
         "an amino acid derivative, a steroid and a polypeptide",
         "all steroids"
        ],
        1,
        "Hormones are intercellular messengers produced by endocrine glands."
       ],
       [
        "Hypothyroidism and an enlarged thyroid gland, caused by low iodine in the diet, are controlled by",
        [
         "adding sodium chloride to water",
         "adding sodium iodide to common salt (iodised salt)",
         "taking extra vitamin C",
         "taking glucagon"
        ],
        1,
        "Thyroxine is an iodinated derivative of the amino acid tyrosine."
       ]
      ],
      [
       [
        "Which statement about carbohydrates is correct?",
        [
         "Every compound that fits Cₓ(H₂O)ᵧ is a carbohydrate",
         "All carbohydrates are sweet and are therefore called sugars",
         "Carbohydrates have no functional groups",
         "Rhamnose, C₆H₁₂O₅, is a carbohydrate although it does not fit the formula Cₓ(H₂O)ᵧ"
        ],
        3,
        "Carbohydrates are polyhydroxy aldehydes or ketones; acetic acid fits the formula but is not one."
       ],
       [
        "Which classification is correct?",
        [
         "Fructose: monosaccharide and reducing; sucrose: disaccharide and non-reducing; starch: polysaccharide and non-sugar",
         "Fructose: disaccharide; sucrose: monosaccharide; starch: oligosaccharide",
         "Sucrose: reducing disaccharide; starch: sugar; glucose: polysaccharide",
         "Glucose: oligosaccharide; maltose: non-reducing; cellulose: sugar"
        ],
        0,
        "Classification is by hydrolysis products; sucrose is non-reducing, while all monosaccharides are reducing."
       ],
       [
        "Fructose is a ketose. Which statement about its reducing behaviour is correct?",
        [
         "It does not reduce them, because only aldoses are reducing sugars",
         "It reduces them because it contains an –CHO group at C-1",
         "It reduces Tollens’ reagent and Fehling’s solution, because all monosaccharides, whether aldose or ketose, are reducing sugars",
         "It reduces them only after it is hydrolysed to an aldehyde"
        ],
        2,
        "NCERT states that all monosaccharides, aldose or ketose, are reducing sugars."
       ],
       [
        "An unknown compound X, C₆H₁₂O₆, gives n-hexane with HI, is oxidised by bromine water to a six-carbon acid and by HNO₃ to a dicarboxylic acid, but does not give Schiff’s test and its pentaacetate does not react with NH₂OH. X is",
        [
         "fructose, because it has a ketone group at C-2",
         "glucose, which has no ring and the –CHO group is protected by acetylation",
         "glucose, which exists mainly as a cyclic hemiacetal with no free –CHO",
         "sucrose, which has no free –CHO group"
        ],
        2,
        "Br₂ water giving a C₆ acid shows an aldohexose; the ring (hemiacetal) explains the missing aldehyde tests."
       ],
       [
        "Each acetylation of an –OH group in glucose replaces H by COCH₃ (net +42 g mol⁻¹). Taking the molar mass of glucose as 180 g mol⁻¹, the molar mass of glucose pentaacetate is",
        [
         "390 g mol⁻¹",
         "360 g mol⁻¹",
         "450 g mol⁻¹",
         "342 g mol⁻¹"
        ],
        0,
        "180 + 5 × 42 = 390.",
        "Five –OH groups are acetylated."
       ],
       [
        "Assertion (A): Glucose gives the hydrogensulphite (NaHSO₃) addition product like a typical aldehyde.\nReason (R): Glucose exists mainly in cyclic hemiacetal forms in which a free –CHO group is absent.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        3,
        "Glucose does not form the NaHSO₃ product because the free –CHO is absent in the cyclic structure, so A is false and R is true."
       ],
       [
        "Which statement about the D and L notation is correct?",
        [
         "D means dextrorotatory and L means laevorotatory",
         "D-glucose is D because its –CHO group is on the right",
         "D and L are the same as d and l",
         "D and L denote configuration relative to glyceraldehyde and are unrelated to the sign of rotation; (+)-glucose is D because the –OH on its lowest asymmetric carbon is on the right"
        ],
        3,
        "(+)-Glyceraldehyde has the –OH on the right and is D."
       ],
       [
        "Sucrose boiled with dilute HCl in alcoholic solution gives",
        [
         "only glucose",
         "glucose and fructose in equal amounts",
         "glucose and galactose",
         "two molecules of glucose"
        ],
        1,
        "C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆ (glucose + fructose)."
       ],
       [
        "Which match of reaction and structural conclusion for glucose is correct?",
        [
         "HI → n-hexane: –CHO present; Br₂ water → gluconic acid: unbranched chain; HNO₃ → saccharic acid: five –OH groups",
         "HI → n-hexane: unbranched chain; Br₂ water → gluconic acid: –CHO present; HNO₃ → saccharic acid: primary –OH present",
         "HI → n-hexane: primary –OH present; Br₂ water → gluconic acid: ketone present; HNO₃ → saccharic acid: unbranched chain",
         "Acetic anhydride → pentaacetate: –CHO present; NH₂OH → oxime: five –OH groups; HI → n-hexane: ketone present"
        ],
        1,
        "Each reagent tests one feature: chain, aldehyde, primary alcohol."
       ],
       [
        "A student writes: ‘Fructose is an aldohexose whose C-5 –OH adds to the carbonyl group to give a six-membered pyranose ring.’ The error is that",
        [
         "fructose is an aldopentose with a five-membered ring",
         "fructose has no cyclic form",
         "fructose has a six-membered ring but is dextrorotatory",
         "fructose is a ketohexose and its ring is a five-membered furanose ring"
        ],
        3,
        "In fructose C-5 –OH adds to the keto group at C-2, forming a furanose ring."
       ],
       [
        "When 171 g of sucrose (molar mass 342 g mol⁻¹) is completely hydrolysed, the mass of glucose obtained is (molar mass of glucose 180 g mol⁻¹)",
        [
         "90 g",
         "180 g",
         "171 g",
         "45 g"
        ],
        0,
        "171 g = 0.5 mol sucrose, giving 0.5 mol glucose = 90 g (and 90 g of fructose).",
        "Sucrose gives equimolar glucose and fructose."
       ],
       [
        "Specific rotations of D-glucose and D-fructose are +52.5° and −92.4°. The specific rotation of an equimolar mixture of the two (invert sugar) is about",
        [
         "+19.95°",
         "−39.9°",
         "−19.95°",
         "+72.45°"
        ],
        2,
        "(52.5 − 92.4)/2 = −19.95°, so the sign changes from (+) for sucrose to (−).",
        "Take the average for equimolar mixture."
       ],
       [
        "Assertion (A): Sucrose is a non-reducing sugar.\nReason (R): The reducing groups of glucose and fructose are both involved in the glycosidic bond in sucrose.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "The C-1 of glucose and C-2 of fructose are joined, leaving no free aldehyde or keto group."
       ],
       [
        "A student says: ‘Maltose is non-reducing because its two α-D-glucose units are joined through C-1 and C-4.’ The error is that",
        [
         "maltose has a C-1 to C-2 linkage like sucrose",
         "maltose is formed from glucose and galactose",
         "the second glucose unit retains a free hemiacetal C-1 that can give –CHO, so maltose is reducing",
         "maltose has no glycosidic linkage"
        ],
        2,
        "Only the C-1 of the first glucose is tied up in the glycosidic bond."
       ],
       [
        "Which pairing of disaccharide, hydrolysis products and behaviour is correct?",
        [
         "Lactose: β-D-galactose and D-glucose; reducing",
         "Sucrose: two glucose molecules; non-reducing",
         "Maltose: glucose and galactose; reducing",
         "Lactose: glucose and fructose; non-reducing"
        ],
        0,
        "Sucrose gives glucose + fructose; maltose gives only glucose."
       ],
       [
        "A 200 g sample of starch contains 18 % amylose by mass. The mass of amylopectin in it is",
        [
         "36 g",
         "160 g",
         "182 g",
         "164 g"
        ],
        3,
        "Amylose = 0.18 × 200 = 36 g, so amylopectin = 200 − 36 = 164 g (82 %, within the 80–85 % range)."
       ],
       [
        "Which statement about polysaccharide structure is correct?",
        [
         "Amylopectin is unbranched; cellulose has C-1–C-6 branches; glycogen is unbranched",
         "Amylopectin has C-1–C-4 chains with C-1–C-6 branches; cellulose is unbranched β-glucose; glycogen is like amylopectin but more branched",
         "Cellulose is made of α-glucose and is branched; amylose is branched",
         "Glycogen is less branched than amylopectin and is found in plants"
        ],
        1,
        "Amylose is the unbranched, water-soluble component of starch."
       ],
       [
        "Which statement about the sugar components of nucleic acids is correct?",
        [
         "Glucose and fructose are the sugar units of nucleic acids",
         "D-Ribose and 2-deoxy-D-ribose, both aldopentoses, are components of nucleic acids",
         "Cellulose is the storage carbohydrate of animals",
         "Starch makes up the cell wall of bacteria and plants"
        ],
        1,
        "Starch (plants) and glycogen (animals) are storage forms; cellulose is structural."
       ],
       [
        "Insulin has only 51 amino acid residues, yet it is called a protein rather than a polypeptide because",
        [
         "it has fewer than ten amino acids",
         "it contains no peptide bonds",
         "it is a carbohydrate derivative",
         "it has a well-defined conformation like a protein, although a polypeptide with more than 100 residues is normally called a protein"
        ],
        3,
        "NCERT notes the distinction between polypeptides and proteins is not very sharp."
       ],
       [
        "Which pairing of amino acid, three-letter and one-letter symbol is correct?",
        [
         "Tryptophan, Trp, W",
         "Phenylalanine, Phe, P",
         "Glutamic acid, Glu, Q",
         "Lysine, Lys, L"
        ],
        0,
        "P is proline, Q is glutamine and L is leucine; lysine is K."
       ],
       [
        "Assertion (A): Glycine is optically inactive.\nReason (R): Glycine exists as a zwitter ion in aqueous solution.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        1,
        "Glycine’s α-carbon is not asymmetric (R = H), so it is inactive; the zwitter ion is true but does not explain this."
       ],
       [
        "Which statement about amino acids is correct?",
        [
         "Glutamic acid is basic, lysine is acidic and valine is non-essential",
         "Lysine is acidic and glycine is essential",
         "Glutamic acid is acidic, lysine is basic and valine is an essential amino acid",
         "Glutamic acid is neutral and valine is non-essential"
        ],
        2,
        "Glutamic acid has two –COOH and one –NH₂; lysine has two –NH₂ and one –COOH."
       ],
       [
        "Glycine in water exists as ⁺H₃N–CH₂–COO⁻. With dilute HCl and with NaOH it gives, respectively,",
        [
         "H₂N–CH₂–COO⁻ and ⁺H₃N–CH₂–COOH",
         "⁺H₃N–CH₂–COOH only; it does not react with NaOH",
         "⁺H₃N–CH₂–COOH and H₂N–CH₂–COO⁻",
         "H₂N–CH₂–COOH and ⁺H₃N–CH₂–COO⁻"
        ],
        2,
        "The –COO⁻ accepts H⁺ from acid and the –NH₃⁺ gives up H⁺ to base, so the amino acid is amphoteric."
       ],
       [
        "Taking the molar masses of glycine, alanine and serine as 75, 89 and 105 g mol⁻¹, the molar mass of the tripeptide formed from one molecule of each is",
        [
         "233 g mol⁻¹",
         "269 g mol⁻¹",
         "251 g mol⁻¹",
         "215 g mol⁻¹"
        ],
        0,
        "75 + 89 + 105 = 269; two water molecules are lost: 269 − 36 = 233.",
        "A tripeptide has two peptide bonds."
       ],
       [
        "The number of water molecules needed for complete hydrolysis of a hexapeptide to free amino acids is",
        [
         "6",
         "4",
         "1",
         "5"
        ],
        3,
        "A hexapeptide has five peptide bonds; each needs one water for hydrolysis."
       ],
       [
        "A student writes: ‘The secondary structure of a protein is the sequence of its amino acids, and the α-helix is held together by disulphide bonds.’ The error is that",
        [
         "the sequence is the quaternary structure, and the α-helix is held by peptide bonds",
         "the sequence is the primary structure, and the α-helix is held by hydrogen bonds between N–H and C=O groups of the backbone",
         "the α-helix is a left-handed screw held by ionic bonds",
         "the sequence is the tertiary structure, and the helix is held by van der Waals forces only"
        ],
        1,
        "Disulphide linkages help stabilise secondary and tertiary structures but are not what defines the α-helix."
       ],
       [
        "Assertion (A): Boiling an egg destroys the biological activity of the egg-white protein.\nReason (R): Denaturation breaks the peptide bonds and destroys the primary structure of the protein.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        2,
        "Denaturation disturbs hydrogen bonds and destroys secondary and tertiary structures only; the primary structure stays, so R is false."
       ],
       [
        "Milk curdles because bacteria form lactic acid, and egg white coagulates on boiling. Both processes",
        [
         "break peptide bonds into free amino acids",
         "are denaturation: secondary and tertiary structures are lost but the amino acid sequence is unchanged",
         "increase the biological activity of the protein",
         "convert the protein into carbohydrate"
        ],
        1,
        "A change in pH or temperature disturbs hydrogen bonds so globules unfold."
       ],
       [
        "Maltase hydrolyses maltose to glucose but does not act on sucrose. This shows that enzymes",
        [
         "act on all disaccharides alike",
         "are consumed in the reaction",
         "are non-protein catalysts",
         "are highly specific for a particular substrate and reaction"
        ],
        3,
        "Enzymes are generally named after the substrate or reaction, with the ending -ase."
       ],
       [
        "For hydrolysis of sucrose, the activation energy is 6.22 kJ mol⁻¹ with acid and 2.15 kJ mol⁻¹ with the enzyme sucrase. The enzyme lowers it by",
        [
         "4.07 kJ mol⁻¹",
         "8.37 kJ mol⁻¹",
         "3.07 kJ mol⁻¹",
         "0.35 kJ mol⁻¹"
        ],
        0,
        "6.22 − 2.15 = 4.07 kJ mol⁻¹."
       ],
       [
        "Which statement about vitamins is correct?",
        [
         "They are needed in large amounts and are all made in the body",
         "Taking vitamin pills in excess is always harmless",
         "They are needed in small amounts, most cannot be made in the body, and gut bacteria can make some",
         "They are all amines, as the name suggests"
        ],
        2,
        "Most vitamins did not turn out to contain amino groups, so the ‘e’ was dropped from vitamine."
       ],
       [
        "Assertion (A): Vitamin C must be supplied regularly in the diet.\nReason (R): Water-soluble vitamins are readily excreted in urine and cannot be stored in the body.",
        [
         "Both A and R are true, and R is the correct explanation of A",
         "Both A and R are true, but R is not the correct explanation of A",
         "A is true but R is false",
         "A is false but R is true"
        ],
        0,
        "Being water-soluble, vitamin C is excreted and not stored (NCERT Intext Question 10.6)."
       ],
       [
        "A student writes: ‘Vitamins B12 and C are water-soluble, so both are excreted in urine and neither can be stored.’ The error is that",
        [
         "vitamin C is fat-soluble",
         "vitamin B12 is fat-soluble and needs no diet",
         "vitamin B12 is the exception among water-soluble vitamins and can be stored in the body",
         "all water-soluble vitamins are stored in the liver"
        ],
        2,
        "NCERT lists B12 as the exception to non-storage of water-soluble vitamins."
       ],
       [
        "A person has bleeding gums, and another has a longer blood clotting time. The vitamins lacking are respectively",
        [
         "vitamin C and vitamin K",
         "vitamin K and vitamin C",
         "vitamin A and vitamin D",
         "vitamin B₁ and vitamin E"
        ],
        0,
        "Scurvy is due to lack of vitamin C; slow clotting is due to lack of vitamin K."
       ],
       [
        "Which statement about chromosomes and nucleic acids is correct?",
        [
         "Chromosomes are made of carbohydrates and lipids only",
         "Nucleic acids are polymers of amino acids",
         "Only DNA is a nucleic acid",
         "Chromosomes in the nucleus are made of proteins and nucleic acids, and nucleic acids are polynucleotides"
        ],
        3,
        "The two types are DNA and RNA."
       ],
       [
        "A student says that complete hydrolysis of DNA containing thymine gives ribose, phosphoric acid, adenine, guanine, cytosine and uracil. The correct set of products is",
        [
         "ribose, phosphoric acid, adenine, guanine, cytosine and thymine",
         "2-deoxyribose, phosphoric acid, adenine, guanine, cytosine and thymine",
         "2-deoxyribose, phosphoric acid, adenine, guanine, cytosine and uracil",
         "2-deoxyribose, adenine, guanine, cytosine and thymine only"
        ],
        1,
        "DNA has 2-deoxyribose and thymine; RNA has ribose and uracil (NCERT Intext Question 10.7)."
       ],
       [
        "In a double-stranded DNA sample, 22 % of the bases are adenine. The percentage of guanine is",
        [
         "22 %",
         "28 %",
         "56 %",
         "78 %"
        ],
        1,
        "A pairs with T, so T = 22 %; then G + C = 56 % and G = C = 28 %.",
        "Use A–T and G–C pairing."
       ],
       [
        "A double-stranded DNA segment is 20 base pairs long. The total number of phosphodiester linkages in both strands is",
        [
         "40",
         "19",
         "39",
         "38"
        ],
        3,
        "A strand of 20 nucleotides has 19 phosphodiester linkages, so two strands have 38."
       ],
       [
        "Which statement about nucleotides and nucleosides is correct?",
        [
         "A nucleotide has the base at C-1′ of the sugar and phosphate at C-5′, and nucleotides are joined by 5′–3′ phosphodiester linkages",
         "A nucleoside contains the sugar, the base and phosphate",
         "Nucleotides are joined by peptide linkages",
         "The base attaches at C-5′ and phosphate at C-1′"
        ],
        0,
        "A nucleoside is just sugar + base."
       ],
       [
        "Which statement about the roles of DNA and RNA is correct?",
        [
         "RNA makes DNA copies during cell division",
         "DNA carries amino acids to the ribosome",
         "DNA is the reserve of genetic information, and the message for a protein is in DNA while RNA molecules synthesise the protein",
         "Proteins are synthesised by DNA alone, without RNA"
        ],
        2,
        "DNA is responsible for maintaining the identity of species over millions of years."
       ],
       [
        "In an inland region with low iodine in the diet, a person shows lethargy, obesity and an enlarged thyroid. The hormone that is low and the preventive measure are",
        [
         "insulin, a polypeptide; use sugar-free food",
         "testosterone, a steroid; use vitamin D",
         "thyroxine, an iodinated derivative of tyrosine; use iodised salt (NaI)",
         "epinephrine, a steroid; use iodised oil only"
        ],
        2,
        "Low thyroxine causes hypothyroidism."
       ],
       [
        "Which statement about hormones is correct?",
        [
         "Insulin lowers and glucagon raises blood glucose; insulin is a polypeptide, and estradiol and testosterone are steroids",
         "Insulin and glucagon both raise blood glucose; estradiol is a polypeptide",
         "Epinephrine is a steroid and thyroxine is a carbohydrate",
         "Glucagon is a steroid released by the adrenal cortex"
        ],
        0,
        "The two hormones together regulate blood glucose."
       ]
      ]
     ]
    }
   ]
  },
  {
   "id": "maths",
   "name": "Maths",
   "chapters": []
  }
 ]
};

/* Study material shown in the Study tab.
   kind: "notes" or "formulas". file: PDF path inside the repo.
   chapters: [title, first page] pairs for the chapter menu in the viewer (page numbers start at 1). */
window.MATERIALS = [
  { subject: "physics", kind: "notes", title: "Revision notes, Ch 1–8", file: "materials/Class12_Physics_Ch1-8_Revision_Notes.pdf",
    chapters: [["Ch 1 Electric Charges and Fields", 4], ["Ch 2 Electrostatic Potential and Capacitance", 9], ["Ch 3 Current Electricity", 13], ["Ch 4 Moving Charges and Magnetism", 17], ["Ch 5 Magnetism and Matter", 22], ["Ch 6 Electromagnetic Induction", 25], ["Ch 7 Alternating Current", 29], ["Ch 8 Electromagnetic Waves", 33]] },
  { subject: "physics", kind: "notes", title: "Revision notes, Ch 9–14", file: "materials/Class12_Physics_Ch9-14_Revision_Notes.pdf",
    chapters: [["Ch 9 Ray Optics and Optical Instruments", 3], ["Ch 10 Wave Optics", 8], ["Ch 11 Dual Nature of Radiation and Matter", 12], ["Ch 12 Atoms", 16], ["Ch 13 Nuclei", 20], ["Ch 14 Semiconductor Electronics", 24]] },
  { subject: "maths", kind: "notes", title: "Revision notes, Ch 1–6", file: "materials/Class12_Maths_Ch1-6_Revision_Notes.pdf",
    chapters: [["Ch 1 Relations and Functions", 3], ["Ch 2 Inverse Trigonometric Functions", 6], ["Ch 3 Matrices", 9], ["Ch 4 Determinants", 13], ["Ch 5 Continuity and Differentiability", 18], ["Ch 6 Application of Derivatives", 22]] },
  { subject: "maths", kind: "notes", title: "Revision notes, Ch 7–13", file: "materials/Class12_Maths_Ch7-13_Revision_Notes.pdf",
    chapters: [["Ch 7 Integrals", 3], ["Ch 8 Application of Integrals", 16], ["Ch 9 Differential Equations", 19], ["Ch 10 Vector Algebra", 26], ["Ch 11 Three Dimensional Geometry", 32], ["Ch 12 Linear Programming", 36], ["Ch 13 Probability", 39]] },
  { subject: "chemistry", kind: "notes", title: "Revision notes, Ch 1–5", file: "materials/Class12_Chemistry_Ch1-5_Revision_Notes.pdf",
    chapters: [["Ch 1 Solutions", 3], ["Ch 2 Electrochemistry", 7], ["Ch 3 Chemical Kinetics", 11], ["Ch 4 The d- and f-Block Elements", 15], ["Ch 5 Coordination Compounds", 21]] },
  { subject: "chemistry", kind: "notes", title: "Revision notes, Ch 6–10", file: "materials/Class12_Chemistry_Ch6-10_Revision_Notes.pdf",
    chapters: [["Ch 6 Haloalkanes and Haloarenes", 3], ["Ch 7 Alcohols, Phenols and Ethers", 6], ["Ch 8 Aldehydes, Ketones and Carboxylic Acids", 9], ["Ch 9 Amines", 12], ["Ch 10 Biomolecules", 15]] },
  { subject: "physics", kind: "formulas", title: "Formula sheet, Ch 1–8", file: "materials/Class12_Physics_Ch1-8_Formula_Sheet.pdf",
    chapters: [["Ch 1 Electric Charges and Fields", 1], ["Ch 2 Electrostatic Potential and Capacitance", 2], ["Ch 3 Current Electricity", 3], ["Ch 4 Moving Charges and Magnetism", 3], ["Ch 5 Magnetism and Matter", 4], ["Ch 6 Electromagnetic Induction", 5], ["Ch 7 Alternating Current", 5], ["Ch 8 Electromagnetic Waves", 6]] },
  { subject: "physics", kind: "formulas", title: "Formula sheet, Ch 9–14", file: "materials/Class12_Physics_Ch9-14_Formula_Sheet.pdf",
    chapters: [["Ch 9 Ray Optics and Optical Instruments", 1], ["Ch 10 Wave Optics", 2], ["Ch 11 Dual Nature of Radiation and Matter", 3], ["Ch 12 Atoms", 3], ["Ch 13 Nuclei", 4], ["Ch 14 Semiconductor Electronics", 4]] },
  { subject: "maths", kind: "formulas", title: "Formula sheet, Ch 1–6", file: "materials/Class12_Maths_Ch1-6_Formula_Sheet.pdf",
    chapters: [["Ch 1 Relations and Functions", 1], ["Ch 2 Inverse Trigonometric Functions", 2], ["Ch 3 Matrices", 2], ["Ch 4 Determinants", 3], ["Ch 5 Continuity and Differentiability", 4], ["Ch 6 Application of Derivatives", 5]] },
  { subject: "maths", kind: "formulas", title: "Formula sheet, Ch 7–13", file: "materials/Class12_Maths_Ch7-13_Formula_Sheet.pdf",
    chapters: [["Ch 7 Integrals", 2], ["Ch 8 Application of Integrals", 5], ["Ch 9 Differential Equations", 6], ["Ch 10 Vector Algebra", 7], ["Ch 11 Three Dimensional Geometry", 8], ["Ch 12 Linear Programming", 10], ["Ch 13 Probability", 11]] },
  { subject: "chemistry", kind: "formulas", title: "Formula sheet, Ch 1–5", file: "materials/Class12_Chemistry_Ch1-5_Formula_Sheet.pdf",
    chapters: [["Ch 1 Solutions", 1], ["Ch 2 Electrochemistry", 2], ["Ch 3 Chemical Kinetics", 3], ["Ch 4 The d- and f-Block Elements", 3], ["Ch 5 Coordination Compounds", 7]] },
  { subject: "chemistry", kind: "formulas", title: "Reaction sheet, Ch 6–10", file: "materials/Class12_Chemistry_Ch6-10_Reaction_Sheet.pdf",
    chapters: [["Ch 6 Haloalkanes and Haloarenes", 1], ["Ch 7 Alcohols, Phenols and Ethers", 2], ["Ch 8 Aldehydes, Ketones and Carboxylic Acids", 3], ["Ch 9 Amines", 4], ["Ch 10 Biomolecules", 5]] }
];
