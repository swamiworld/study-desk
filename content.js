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
       ]
      ]
     ]
    }
   ]
  },
  {
   "id": "chemistry",
   "name": "Chemistry",
   "chapters": []
  },
  {
   "id": "maths",
   "name": "Maths",
   "chapters": []
  }
 ]
};
